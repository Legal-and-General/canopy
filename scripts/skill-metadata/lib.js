import { access, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const schemaVersion = 1;
export const scriptRoot = path.dirname(fileURLToPath(import.meta.url));
export const repositoryRoot = path.resolve(scriptRoot, '../..');

export const toPosix = (value) => value.split(path.sep).join('/');
export const relativePath = (value) => toPosix(path.relative(repositoryRoot, value));

// Template examples qualify the [lg-button] attribute directive with the element
// it is applied to, but the public selector is the bare attribute.
export const angularSelectorForTree = (selector) =>
  /^(?:button|a)\[lg-button\]$/.test(selector) ? '[lg-button]' : selector;

export const compareStrings = (left, right) => (left < right ? -1 : left > right ? 1 : 0);

// Sorting object keys recursively makes generated JSON byte-stable across
// repeated local and CI runs while preserving semantically ordered arrays.
export const sortValue = (value) => {
  if (Array.isArray(value)) {
    return value.map(sortValue);
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, sortValue(value[key])]),
    );
  }
  return value;
};

export const serialise = (value) => `${JSON.stringify(sortValue(value), null, 2)}\n`;

export const readJson = async (file) => JSON.parse(await readFile(file, 'utf8'));

export const pathExists = async (file) => {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
};

export const walk = async (directory, predicate = () => true) => {
  if (!(await pathExists(directory))) {
    return [];
  }
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => compareStrings(a.name, b.name))) {
    const resolved = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(resolved, predicate)));
    } else if (predicate(resolved)) {
      files.push(resolved);
    }
  }
  return files;
};

export const writeDeterministicJson = async (file, value, check = false) => {
  const expected = serialise(value);
  if (check) {
    // Check mode compares bytes and never rewrites the working tree.
    const actual = (await pathExists(file)) ? await readFile(file, 'utf8') : null;
    return actual === expected;
  }
  await writeFile(file, expected);
  return true;
};

// Reports whether a file matches its deterministic serialisation and, when it
// does not, the first differing line so CI can pinpoint drift instead of
// reporting a generic stale-metadata failure.
export const checkDeterministicJson = async (file, value) => {
  const expected = serialise(value);
  const actual = (await pathExists(file)) ? await readFile(file, 'utf8') : null;
  if (actual === expected) {
    return { file, current: true };
  }
  const expectedLines = expected.split('\n');
  const actualLines = (actual ?? '').split('\n');
  let index = 0;
  while (
    index < Math.max(expectedLines.length, actualLines.length) &&
    expectedLines[index] === actualLines[index]
  ) {
    index += 1;
  }
  return {
    file,
    current: false,
    missing: actual === null,
    line: index + 1,
    expected: expectedLines[index] ?? '(end of file)',
    actual: actualLines[index] ?? '(end of file)',
  };
};

export const parseArguments = (argv, extra = []) => {
  const result = { check: false, skill: null };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--check') result.check = true;
    else if (argument === '--skill') result.skill = argv[++index];
    else if (!extra.includes(argument)) throw new Error(`Unknown argument: ${argument}`);
  }
  if (result.skill === undefined) throw new Error('--skill requires a value');
  return result;
};

export const isMain = (moduleUrl) =>
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(moduleUrl);
