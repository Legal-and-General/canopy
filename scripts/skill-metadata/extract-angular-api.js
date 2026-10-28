#!/usr/bin/env node
import { execFile } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import ts from 'typescript';
import { discoverSources } from './discover-sources.js';
import {
  compareStrings,
  isMain,
  parseArguments,
  pathExists,
  relativePath,
  repositoryRoot,
} from './lib.js';

const execFileAsync = promisify(execFile);
const libraryRoot = path.join(repositoryRoot, 'projects', 'canopy', 'src', 'lib');

// The public API is defined by committed source only. Generated-but-untracked
// files (e.g. the icon/pictogram name interfaces produced by `generate:icons`)
// may be present locally but absent in CI, so excluding them keeps generated
// metadata reproducible in every environment.
let trackedFilesPromise = null;
const trackedFiles = async () => {
  if (!trackedFilesPromise) {
    trackedFilesPromise = execFileAsync('git', ['ls-files', '-z'], {
      cwd: repositoryRoot,
      maxBuffer: 256 * 1024 * 1024,
    }).then(
      ({ stdout }) =>
        new Set(
          stdout
            .split('\0')
            .filter(Boolean)
            .map((file) => path.resolve(repositoryRoot, file)),
        ),
    );
  }
  return trackedFilesPromise;
};

// Follows the public barrel-export graph so metadata never treats an internal
// implementation file as part of Canopy's supported API.
const resolveModule = async (origin, specifier) => {
  if (!specifier.startsWith('.')) return null;
  const base = path.resolve(path.dirname(origin), specifier);
  const tracked = await trackedFiles();
  for (const candidate of [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    path.join(base, 'index.ts'),
  ]) {
    if (tracked.has(candidate) && (await pathExists(candidate))) return candidate;
  }
  return null;
};

export const discoverPublicExports = async (
  entry = path.join(repositoryRoot, 'projects/canopy/src/public-api.ts'),
) => {
  const seen = new Set();
  const records = [];
  const visit = async (file) => {
    if (seen.has(file)) return;
    seen.add(file);
    const text = await readFile(file, 'utf8');
    const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
    for (const statement of ast.statements) {
      if (!ts.isExportDeclaration(statement) || !statement.moduleSpecifier) continue;
      const target = await resolveModule(file, statement.moduleSpecifier.text);
      if (!target) continue;
      if (statement.exportClause && ts.isNamedExports(statement.exportClause)) {
        for (const item of statement.exportClause.elements) {
          records.push({ name: item.name.text, file: target });
        }
      } else {
        await visit(target);
      }
    }
    for (const statement of ast.statements) {
      const modifiers = ts.getModifiers(statement) || [];
      if (!modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword))
        continue;
      if (statement.name?.text) records.push({ name: statement.name.text, file });
      if (ts.isVariableStatement(statement)) {
        for (const declaration of statement.declarationList.declarations) {
          if (ts.isIdentifier(declaration.name))
            records.push({ name: declaration.name.text, file });
        }
      }
    }
  };
  await visit(entry);
  return records.sort(
    (a, b) => compareStrings(a.name, b.name) || compareStrings(a.file, b.file),
  );
};

const decoratorCall = (node, name) => {
  const decorators = ts.getDecorators(node) || [];
  for (const decorator of decorators) {
    const expression = decorator.expression;
    if (ts.isCallExpression(expression) && expression.expression.getText() === name)
      return expression;
  }
  return null;
};

const propertyValue = (object, name) => {
  if (!object || !ts.isObjectLiteralExpression(object)) return null;
  return object.properties.find(
    (property) => property.name?.getText().replaceAll(/['"]/g, '') === name,
  );
};

const literalText = (node) => {
  if (!node) return null;
  if (ts.isStringLiteralLike(node) || ts.isNumericLiteral(node)) return node.text;
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  return node.getText();
};

const memberMetadata = (member, sourceFile) => {
  const inputDecorator = decoratorCall(member, 'Input');
  const outputDecorator = decoratorCall(member, 'Output');
  const initialiser = member.initializer;
  const callName =
    initialiser && ts.isCallExpression(initialiser)
      ? initialiser.expression.getText()
      : '';
  const isInput = Boolean(inputDecorator) || /^input(?:\.required)?$/.test(callName);
  const isOutput = Boolean(outputDecorator) || callName === 'output';
  if (!isInput && !isOutput) return null;
  const decorator = inputDecorator || outputDecorator;
  const decoratorOption = decorator?.arguments[0];
  const aliasProperty = propertyValue(decoratorOption, 'alias');
  const alias =
    (decoratorOption &&
      ts.isStringLiteralLike(decoratorOption) &&
      decoratorOption.text) ||
    (aliasProperty && literalText(aliasProperty.initializer));
  const signalDefault =
    initialiser && ts.isCallExpression(initialiser) && initialiser.arguments.length
      ? literalText(initialiser.arguments[0])
      : undefined;
  const defaultValue = isInput
    ? (signalDefault ??
      (initialiser && !/^input/.test(callName) ? literalText(initialiser) : undefined))
    : undefined;
  const jsdoc = ts
    .getJSDocCommentsAndTags(member)
    .map((item) => item.getText(sourceFile))
    .join(' ');
  return {
    name: alias || member.name?.getText(sourceFile),
    property: member.name?.getText(sourceFile),
    type: member.type?.getText(sourceFile) || null,
    ...(defaultValue !== undefined ? { default: defaultValue } : {}),
    required:
      callName === 'input.required' ||
      propertyValue(decoratorOption, 'required')?.initializer.kind ===
        ts.SyntaxKind.TrueKeyword,
    deprecated: /@deprecated\b/.test(jsdoc),
  };
};

// Reads Angular decorator and signal declarations from a publicly exported
// symbol without executing application code.
const extractDeclaration = async (record) => {
  const text = await readFile(record.file, 'utf8');
  const ast = ts.createSourceFile(record.file, text, ts.ScriptTarget.Latest, true);
  const declaration = ast.statements.find(
    (statement) => statement.name?.text === record.name,
  );
  if (!declaration) {
    return {
      symbol: record.name,
      source: relativePath(record.file),
      kind: 'symbol',
      inputs: [],
      outputs: [],
      deprecated: false,
    };
  }
  const kinds = ['Component', 'Directive', 'Pipe'];
  const decorator = kinds
    .map((kind) => [kind, decoratorCall(declaration, kind)])
    .find(([, call]) => call);
  const metadata = decorator?.[1]?.arguments[0];
  const selectorProperty = propertyValue(
    metadata,
    decorator?.[0] === 'Pipe' ? 'name' : 'selector',
  );
  const inputs = [];
  const outputs = [];
  for (const member of declaration.members || []) {
    const value = memberMetadata(member, ast);
    if (!value) continue;
    if (
      decoratorCall(member, 'Output') ||
      member.initializer?.expression?.getText() === 'output'
    ) {
      outputs.push(value);
    } else {
      inputs.push(value);
    }
  }
  const jsdoc = ts
    .getJSDocCommentsAndTags(declaration)
    .map((item) => item.getText(ast))
    .join(' ');
  return {
    symbol: record.name,
    source: relativePath(record.file),
    kind: decorator?.[0]?.toLowerCase() || 'symbol',
    ...(selectorProperty ? { selector: literalText(selectorProperty.initializer) } : {}),
    inputs: inputs.sort((a, b) => compareStrings(a.name, b.name)),
    outputs: outputs.sort((a, b) => compareStrings(a.name, b.name)),
    deprecated: /@deprecated\b/.test(jsdoc),
  };
};

export const extractAngularApi = async (source) => {
  const records = await discoverPublicExports();
  const docsSegment = source ? `${path.sep}docs${path.sep}` : null;
  const sourceDirectory = source
    ? source.includes(docsSegment)
      ? source.slice(0, source.indexOf(docsSegment))
      : path.extname(source)
        ? path.dirname(source)
        : source
    : null;
  // Guidance outside a component folder (foundations, principles, repository
  // docs) is not owned by any component, so it must not inherit every symbol.
  if (
    sourceDirectory &&
    (sourceDirectory === libraryRoot ||
      !sourceDirectory.startsWith(`${libraryRoot}${path.sep}`))
  ) {
    return [];
  }
  const selected = sourceDirectory
    ? records.filter((record) => record.file.startsWith(`${sourceDirectory}${path.sep}`))
    : records;
  return Promise.all(selected.map(extractDeclaration));
};

if (isMain(import.meta.url)) {
  const arguments_ = parseArguments(process.argv.slice(2));
  const skills = await discoverSources(arguments_);
  console.info(
    JSON.stringify(
      Object.fromEntries(
        await Promise.all(
          skills.map(async (skill) => [skill.id, await extractAngularApi(skill.source)]),
        ),
      ),
      null,
      2,
    ),
  );
}
