#!/usr/bin/env node
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { discoverSources } from './discover-sources.js';
import { extractAngularApi } from './extract-angular-api.js';
import { extractSkillGuidance } from './extract-skill-guidance.js';
import { extractTemplateComposition } from './extract-template-composition.js';
import {
  angularSelectorForTree,
  checkDeterministicJson,
  compareStrings,
  isMain,
  parseArguments,
  relativePath,
  repositoryRoot,
  schemaVersion,
  writeDeterministicJson,
} from './lib.js';

export const defaultOutputRoot = path.join(
  repositoryRoot,
  'skills/best-practice/canopy-ui-orchestration/references',
);

// Each skill declares its product category in SKILL.md frontmatter
// (`metadata.category`); the removed/deprecated lifecycle still overrides it so
// a status change in the documentation is reflected without editing frontmatter.
const categories = [
  'actions',
  'feedback',
  'data-display',
  'navigation',
  'forms',
  'layout',
  'foundations',
  'utilities',
  'principles',
  'styles',
  'guidance',
  'deprecated',
  'removed',
];

const categoryFor = (source, lifecycle) => {
  if (lifecycle.removed) return 'removed';
  if (lifecycle.deprecated) return 'deprecated';
  const declared = source.category;
  if (!declared) {
    throw new Error(
      `Skill ${source.id} is missing metadata.category in its SKILL.md frontmatter`,
    );
  }
  if (!categories.includes(declared)) {
    throw new Error(
      `Skill ${source.id} declares unknown metadata.category "${declared}"`,
    );
  }
  return declared;
};

const kindFor = (api, lifecycle, category) => {
  if (lifecycle.removed) return 'removed';
  if (api.some((item) => item.kind === 'component')) return 'component';
  if (api.some((item) => item.kind === 'directive')) return 'directive';
  if (api.some((item) => item.kind === 'pipe')) return 'pipe';
  return (
    {
      foundations: 'foundation',
      utilities: 'utility',
      principles: 'principle',
      styles: 'style',
      removed: 'removed',
    }[category] || 'guidance'
  );
};

const selectorParts = (selector) =>
  selector
    ? selector
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean)
    : [];

const treeSelectors = (tree) =>
  tree
    .flatMap((node) => [node.selector, ...treeSelectors(node.children || [])])
    .filter(Boolean);

const semanticItem = (item) => ({
  statement: item.statement,
  confidence: item.confidence,
  evidence: item.evidence,
});

export const buildMetadata = async ({ skill = null } = {}) => {
  const sources = await discoverSources({ skill });
  if (skill && sources.length === 0) throw new Error(`Unknown skill: ${skill}`);
  // Composition examples are published only when every referenced Canopy
  // selector is reachable from the package's public API.
  const globallyPublicSelectors = new Set(
    (await extractAngularApi()).flatMap((item) => selectorParts(item.selector)),
  );
  const capabilities = [];
  const compositions = [];
  for (const source of sources) {
    if (!source.source) throw new Error(`Skill ${source.id} has no metadata.source`);
    const symbolFacts = await extractAngularApi(source.source);
    const guidance = await extractSkillGuidance(source);
    const composition = await extractTemplateComposition(source, symbolFacts);
    const category = categoryFor(source, guidance.lifecycle);
    const publicSymbols = symbolFacts.map((item) => item.symbol).sort();
    const selectors = [
      ...new Set(symbolFacts.flatMap((item) => selectorParts(item.selector))),
    ].sort();
    const inputs = symbolFacts
      .flatMap((item) => item.inputs.map((input) => ({ symbol: item.symbol, ...input })))
      .sort(
        (a, b) => compareStrings(a.symbol, b.symbol) || compareStrings(a.name, b.name),
      );
    const outputs = symbolFacts
      .flatMap((item) =>
        item.outputs.map((output) => ({ symbol: item.symbol, ...output })),
      )
      .sort(
        (a, b) => compareStrings(a.symbol, b.symbol) || compareStrings(a.name, b.name),
      );
    const publishableCompositions = composition.compositions.filter((item) =>
      treeSelectors(item.tree).every(
        (selector) =>
          (!selector.startsWith('lg-') && !selector.includes('[lg')) ||
          globallyPublicSelectors.has(angularSelectorForTree(selector)),
      ),
    );
    const patterns = publishableCompositions.map((item) => ({
      id: item.id,
      intent: item.intent,
      confidence: item.confidence,
      evidence: item.evidence,
    }));
    const skillEvidence = relativePath(source.skillFile);
    capabilities.push({
      schemaVersion,
      id: source.name,
      kind: kindFor(symbolFacts, guidance.lifecycle, category),
      title: guidance.title,
      category,
      description: source.description,
      introduced: guidance.lifecycle.introduced,
      deprecated: guidance.lifecycle.deprecated,
      removed: guidance.lifecycle.removed,
      publicSymbols,
      selectors,
      intents: guidance.guidance
        .filter((item) => ['recommend', 'usage', 'guidance'].includes(item.type))
        .map(semanticItem),
      avoidWhen: guidance.guidance
        .filter((item) => item.type === 'avoid')
        .map(semanticItem),
      relatedSkills: guidance.relatedSkills,
      api: {
        inputs,
        outputs,
        projection: composition.slots
          .map(({ owner, selector, selectors, catchAll, conditional, evidence }) => ({
            owner,
            selector,
            selectors,
            catchAll,
            conditional,
            evidence,
          }))
          .sort(
            (a, b) =>
              compareStrings(a.owner, b.owner) ||
              compareStrings(a.selector, b.selector) ||
              compareStrings(a.evidence, b.evidence),
          ),
        symbols: symbolFacts,
      },
      patterns,
      accessibility: guidance.guidance
        .filter((item) => item.type === 'accessibility')
        .map(semanticItem),
      tokens: composition.tokens.map((name) => ({
        name,
        confidence: 'high',
        evidence: skillEvidence,
      })),
      evidence: [
        skillEvidence,
        ...(source.sourceExists ? [relativePath(source.source)] : []),
        ...symbolFacts.map((item) => item.source),
      ]
        .filter((value, index, values) => values.indexOf(value) === index)
        .sort(),
      generation: {
        deterministicFields: [
          'api',
          'category',
          'deprecated',
          'description',
          'evidence',
          'id',
          'introduced',
          'kind',
          'publicSymbols',
          'relatedSkills',
          'removed',
          'schemaVersion',
          'selectors',
          'title',
          'tokens',
        ],
        semanticFields: ['accessibility', 'avoidWhen', 'intents', 'patterns'],
      },
    });
    compositions.push(...publishableCompositions);
  }
  const index = { schemaVersion, capabilities };
  return { capabilities, compositions, index };
};

export const generateMetadata = async ({
  skill = null,
  check = false,
  outputRoot = defaultOutputRoot,
  capabilityOutputRoot = null,
} = {}) => {
  const metadata = await buildMetadata();
  const discoveredSkills = await discoverSources();
  // Use the discovered SKILL.md directory as the output authority. Deriving a
  // folder from the canopy-prefixed ID can create duplicate skill directories.
  const skillDirectories = new Map(
    discoveredSkills.map((source) => [source.name, path.dirname(source.skillFile)]),
  );
  const selectedCapabilities = skill
    ? metadata.capabilities.filter(
        (capability) => capability.id === skill || capability.id === `canopy-${skill}`,
      )
    : metadata.capabilities;
  if (skill && selectedCapabilities.length === 0)
    throw new Error(`Unknown skill: ${skill}`);
  if (!check) await mkdir(outputRoot, { recursive: true });
  const staleFiles = [];
  const emit = async (file, value) => {
    if (check) {
      const result = await checkDeterministicJson(file, value);
      if (!result.current) staleFiles.push(result);
      return;
    }
    await writeDeterministicJson(file, value);
  };
  for (const capability of selectedCapabilities) {
    const skillDirectory = skillDirectories.get(capability.id);
    if (!skillDirectory) {
      throw new Error(`No discovered skill directory for ${capability.id}`);
    }
    const directory = capabilityOutputRoot
      ? path.join(capabilityOutputRoot, path.basename(skillDirectory), 'references')
      : path.join(skillDirectory, 'references');
    if (!check) await mkdir(directory, { recursive: true });
    await emit(path.join(directory, 'capability.json'), capability);
  }
  await emit(path.join(outputRoot, 'capabilities.json'), metadata.index);
  await emit(path.join(outputRoot, 'compositions.json'), {
    schemaVersion,
    compositions: metadata.compositions,
  });
  await emit(path.join(outputRoot, 'schema-version.json'), { schemaVersion });
  return {
    ...metadata,
    selectedCapabilities,
    staleFiles,
    current: staleFiles.length === 0,
  };
};

if (isMain(import.meta.url)) {
  try {
    const arguments_ = parseArguments(process.argv.slice(2));
    const result = await generateMetadata(arguments_);
    if (arguments_.check && !result.current) {
      console.error('ERROR [STALE_METADATA] Generated metadata is not current.');
      console.error(`${result.staleFiles.length} file(s) differ from generation:`);
      for (const stale of result.staleFiles) {
        const location = stale.missing
          ? 'file is missing'
          : `first difference at line ${stale.line}`;
        console.error(`  - ${relativePath(stale.file)} (${location})`);
        if (!stale.missing) {
          console.error(`      expected: ${stale.expected}`);
          console.error(`      actual:   ${stale.actual}`);
        }
      }
      console.error('Run: npm run generate:skill-metadata');
      process.exitCode = 1;
    } else {
      console.info(
        `${arguments_.check ? 'Metadata is current for' : 'Generated metadata for'} ${result.selectedCapabilities.length} skill(s).`,
      );
    }
  } catch (error) {
    console.error(`ERROR [GENERATION_FAILED] ${error.message}`);
    process.exitCode = 1;
  }
}
