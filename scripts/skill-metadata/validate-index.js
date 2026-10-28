#!/usr/bin/env node
import path from 'node:path';
import { discoverSources } from './discover-sources.js';
import { discoverPublicExports, extractAngularApi } from './extract-angular-api.js';
import {
  angularSelectorForTree,
  isMain,
  parseArguments,
  pathExists,
  readJson,
  repositoryRoot,
  scriptRoot,
  serialise,
} from './lib.js';
import { defaultOutputRoot } from './generate-index.js';

// This focused validator implements the JSON Schema features used by the
// metadata files, avoiding another runtime dependency in repository tooling.
const typeMatches = (value, type) =>
  type === 'array'
    ? Array.isArray(value)
    : type === 'object'
      ? value !== null && typeof value === 'object' && !Array.isArray(value)
      : typeof value === type;

export const validateSchema = (value, schema, location = '$') => {
  const diagnostics = [];
  if (schema.type && !typeMatches(value, schema.type)) {
    return [`ERROR [SCHEMA_TYPE] ${location} must be ${schema.type}.`];
  }
  if (schema.const !== undefined && value !== schema.const) {
    diagnostics.push(`ERROR [SCHEMA_CONST] ${location} must equal ${schema.const}.`);
  }
  if (schema.enum && !schema.enum.includes(value)) {
    diagnostics.push(`ERROR [SCHEMA_ENUM] ${location} has unsupported value ${value}.`);
  }
  if (schema.minLength && value.length < schema.minLength) {
    diagnostics.push(`ERROR [SCHEMA_LENGTH] ${location} must not be empty.`);
  }
  if (schema.type === 'object') {
    for (const required of schema.required || []) {
      if (!(required in value)) {
        diagnostics.push(`ERROR [SCHEMA_REQUIRED] ${location}.${required} is required.`);
      }
    }
    if (schema.additionalProperties === false) {
      for (const key of Object.keys(value)) {
        if (!(key in (schema.properties || {}))) {
          diagnostics.push(`ERROR [SCHEMA_PROPERTY] ${location}.${key} is not allowed.`);
        }
      }
    }
    for (const [key, childSchema] of Object.entries(schema.properties || {})) {
      if (key in value) {
        diagnostics.push(
          ...validateSchema(value[key], childSchema, `${location}.${key}`),
        );
      }
    }
  }
  if (schema.type === 'array' && schema.items) {
    if (schema.minItems && value.length < schema.minItems) {
      diagnostics.push(
        `ERROR [SCHEMA_LENGTH] ${location} must contain at least ${schema.minItems} item(s).`,
      );
    }
    value.forEach((item, index) => {
      diagnostics.push(...validateSchema(item, schema.items, `${location}[${index}]`));
    });
  }
  return diagnostics;
};

const evidenceValues = (evidence) =>
  Array.isArray(evidence) ? evidence : evidence ? [evidence] : [];

const evidenceExists = (evidence) =>
  pathExists(path.resolve(repositoryRoot, evidence.replace(/:\d+$/, '')));

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

// Content projection only applies to a component's direct children. A parent
// with named slots and no catch-all silently drops any Canopy child its slots do
// not select, so those hierarchies can be checked. Parents with a catch-all slot
// accept anything and attribute-based slots cannot be matched from an element
// tree, so neither is enforced.
const slotContracts = (capabilities) => {
  const contracts = new Map();
  for (const capability of capabilities) {
    for (const symbol of capability.api.symbols) {
      const slots = capability.api.projection.filter(
        (slot) => slot.owner === symbol.symbol,
      );
      if (!symbol.selector || slots.length === 0) continue;
      const names = slots.flatMap((slot) => slot.selectors);
      const enforceable =
        !slots.some((slot) => slot.catchAll) &&
        names.every((name) => /^[a-z][\w-]*$/.test(name));
      for (const selector of selectorParts(symbol.selector)) {
        contracts.set(selector, { enforceable, names: [...new Set(names)].sort() });
      }
    }
  }
  return contracts;
};

const validateProjection = (nodes, id, contracts, diagnostics) => {
  for (const node of nodes) {
    const contract = contracts.get(node.selector);
    for (const child of node.children || []) {
      if (
        contract?.enforceable &&
        child.selector.startsWith('lg-') &&
        !contract.names.includes(child.selector)
      ) {
        diagnostics.push(
          `ERROR [SLOT_MISMATCH] ${id}: ${child.selector} is not accepted by ${node.selector} (accepts: ${contract.names.join(', ')}).`,
        );
      }
    }
    validateProjection(node.children || [], id, contracts, diagnostics);
  }
};

export const validateMetadata = async ({ capabilities, compositions, index }) => {
  const schemas = {
    capability: await readJson(path.join(scriptRoot, 'schemas/capability.schema.json')),
    composition: await readJson(path.join(scriptRoot, 'schemas/composition.schema.json')),
    index: await readJson(path.join(scriptRoot, 'schemas/index.schema.json')),
  };
  const diagnostics = validateSchema(index, schemas.index, 'capabilities.json');
  // The aggregate index must contain the complete reviewed records, not a
  // flattened search projection that could drift from per-skill metadata.
  if (serialise(index.capabilities) !== serialise(capabilities)) {
    diagnostics.push(
      'ERROR [AGGREGATE_MISMATCH] capabilities.json must contain the full capability records.',
    );
  }
  const skills = new Set((await discoverSources()).map((skill) => skill.name));
  const publicSymbols = new Set((await discoverPublicExports()).map((item) => item.name));
  const publicSelectors = new Set(
    (await extractAngularApi()).flatMap((item) => selectorParts(item.selector)),
  );
  const validateEvidence = async (id, evidence) => {
    const values = evidenceValues(evidence);
    if (!values.length) {
      diagnostics.push(`ERROR [MISSING_EVIDENCE] ${id}: evidence is required.`);
    }
    for (const value of values) {
      if (!(await evidenceExists(value))) {
        diagnostics.push(`ERROR [MISSING_EVIDENCE] ${id}: ${value} does not exist.`);
      }
    }
  };
  for (const capability of capabilities) {
    diagnostics.push(
      ...validateSchema(
        capability,
        schemas.capability,
        `${capability.id}/capability.json`,
      ),
    );
    if (!skills.has(capability.id)) {
      diagnostics.push(`ERROR [UNKNOWN_SKILL] ${capability.id} has no SKILL.md.`);
    }
    for (const symbol of capability.publicSymbols) {
      if (!publicSymbols.has(symbol)) {
        diagnostics.push(
          `ERROR [NON_PUBLIC_SYMBOL] ${capability.id}: ${symbol} is not publicly exported.`,
        );
      }
    }
    for (const selector of capability.selectors) {
      if (!publicSelectors.has(selector)) {
        diagnostics.push(
          `ERROR [UNKNOWN_SELECTOR] ${capability.id}: ${selector} is not public.`,
        );
      }
    }
    for (const related of capability.relatedSkills) {
      if (!skills.has(related)) {
        diagnostics.push(
          `ERROR [UNKNOWN_RELATED_SKILL] ${capability.id}: ${related} does not exist.`,
        );
      }
    }
    for (const field of ['intents', 'avoidWhen', 'patterns', 'accessibility', 'tokens']) {
      for (const item of capability[field]) {
        if (!item.confidence || item.confidence === 'low') {
          diagnostics.push(
            `ERROR [LOW_CONFIDENCE] ${capability.id}.${field}: low confidence cannot be published.`,
          );
        }
        await validateEvidence(`${capability.id}.${field}`, item.evidence);
      }
    }
    for (const status of ['introduced', 'deprecated', 'removed']) {
      if (capability[status]) {
        if (capability[status].confidence === 'low') {
          diagnostics.push(
            `ERROR [LOW_CONFIDENCE] ${capability.id}.${status}: low confidence cannot be published.`,
          );
        }
        await validateEvidence(`${capability.id}.${status}`, capability[status].evidence);
      }
    }
    await validateEvidence(capability.id, capability.evidence);
    for (const input of capability.api.inputs) {
      if (!capability.publicSymbols.includes(input.symbol)) {
        diagnostics.push(
          `ERROR [NON_PUBLIC_SYMBOL] ${capability.id}: input owner ${input.symbol} is not public.`,
        );
      }
    }
    for (const output of capability.api.outputs) {
      if (!capability.publicSymbols.includes(output.symbol)) {
        diagnostics.push(
          `ERROR [NON_PUBLIC_SYMBOL] ${capability.id}: output owner ${output.symbol} is not public.`,
        );
      }
    }
  }
  const contracts = slotContracts(capabilities);
  for (const composition of compositions) {
    diagnostics.push(
      ...validateSchema(
        composition,
        schemas.composition,
        `${composition.id}/composition`,
      ),
    );
    if (composition.confidence === 'low') {
      diagnostics.push(
        `ERROR [LOW_CONFIDENCE] ${composition.id}: low confidence cannot be published.`,
      );
    }
    if (!Array.isArray(composition.evidence) || composition.evidence.length === 0) {
      diagnostics.push(
        `ERROR [COMPOSITION_EVIDENCE] ${composition.id}: evidence must be a non-empty array.`,
      );
    }
    await validateEvidence(composition.id, composition.evidence);
    validateProjection(composition.tree, composition.id, contracts, diagnostics);
    for (const selector of treeSelectors(composition.tree)) {
      if (
        (selector.startsWith('lg-') || selector.includes('[lg')) &&
        !publicSelectors.has(angularSelectorForTree(selector))
      ) {
        diagnostics.push(
          `ERROR [UNKNOWN_SELECTOR] ${composition.id}: ${selector} is not public.`,
        );
      }
    }
  }
  return diagnostics.sort();
};

export const loadGeneratedMetadata = async (outputRoot = defaultOutputRoot) => {
  const index = await readJson(path.join(outputRoot, 'capabilities.json'));
  const compositionIndex = await readJson(path.join(outputRoot, 'compositions.json'));
  return {
    index,
    capabilities: index.capabilities,
    compositions: compositionIndex.compositions,
  };
};

if (isMain(import.meta.url)) {
  try {
    const arguments_ = parseArguments(process.argv.slice(2));
    const metadata = await loadGeneratedMetadata();
    const selected = arguments_.skill
      ? metadata.capabilities.filter(
          (item) =>
            item.id === arguments_.skill || item.id === `canopy-${arguments_.skill}`,
        )
      : metadata.capabilities;
    const diagnostics = await validateMetadata({
      index: { ...metadata.index, capabilities: selected },
      capabilities: selected,
      compositions: metadata.compositions,
    });
    diagnostics.forEach((diagnostic) => console.error(diagnostic));
    if (diagnostics.length) process.exitCode = 1;
    else console.info('Validation passed with 0 diagnostics.');
  } catch (error) {
    console.error(`ERROR [VALIDATION_FAILED] ${error.message}`);
    process.exitCode = 1;
  }
}
