import assert from 'node:assert/strict';
import { readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { discoverSources } from '../discover-sources.js';
import { buildMetadata, generateMetadata } from '../generate-index.js';
import {
  compareStrings,
  pathExists,
  readJson,
  repositoryRoot,
  scriptRoot,
  serialise,
  walk,
} from '../lib.js';
import { validateMetadata, validateSchema } from '../validate-index.js';
import { silenceConsole } from './console-mock.js';

silenceConsole();

test('compares strings in a locale-independent UTF-16 order', () => {
  const values = ['z', 'A', 'ä', 'a', 'Z'];
  assert.deepEqual(values.sort(compareStrings), ['A', 'Z', 'a', 'z', 'ä']);
});

// Generator tests focus on reproducibility and cross-file integrity rather than
// snapshotting large generated indexes.
test('builds byte-stable metadata without timestamps', async () => {
  const first = await buildMetadata({ skill: 'button' });
  const second = await buildMetadata({ skill: 'button' });
  assert.equal(serialise(first), serialise(second));
  assert.doesNotMatch(serialise(first), /generatedAt|timestamp/);
});

test('reports structural schema errors with actionable prefixes', () => {
  const diagnostics = validateSchema(
    {},
    { type: 'object', required: ['skill'], properties: {} },
  );
  assert.match(diagnostics[0], /^ERROR \[SCHEMA_REQUIRED\]/);
});

test('validates generated public API and evidence', async () => {
  const metadata = await buildMetadata({ skill: 'button' });
  const diagnostics = await validateMetadata(metadata);
  assert.deepEqual(
    diagnostics.filter((diagnostic) => diagnostic.startsWith('ERROR')),
    [],
  );
});

test('emits complete capability records and conditional card compositions', async () => {
  const metadata = await buildMetadata({ skill: 'card' });
  const capability = metadata.capabilities[0];
  assert.equal(capability.schemaVersion, 1);
  assert.equal(capability.id, 'canopy-card');
  assert.equal(capability.kind, 'component');
  assert.equal(capability.title, 'Canopy Card');
  assert.equal(capability.category, 'data-display');
  assert.ok(capability.description);
  assert.ok(capability.publicSymbols.includes('LgCardComponent'));
  assert.ok(capability.selectors.includes('lg-card-footer'));
  assert.ok(capability.api.inputs.every((input) => input.symbol));
  assert.ok(capability.api.outputs.every((output) => output.symbol));
  assert.deepEqual(metadata.index.capabilities, metadata.capabilities);
  assert.ok(
    [...capability.intents, ...capability.avoidWhen, ...capability.patterns].every(
      (item) => ['high', 'medium'].includes(item.confidence) && item.evidence,
    ),
  );

  const single = metadata.compositions.find(
    (composition) => composition.id === 'card-single-primary-action',
  );
  const related = metadata.compositions.find(
    (composition) => composition.id === 'card-related-actions',
  );
  assert.equal(single.conditions.actionCount.equals, 1);
  assert.equal(single.tree[0].children[0].selector, 'button[lg-button]');
  assert.equal(related.conditions.actionCount.minimum, 2);
  assert.equal(related.tree[0].children[0].selector, 'lg-button-group');
  assert.equal(related.tree[0].children[0].children[0].selector, 'button[lg-button]');
  assert.equal(related.tree[0].children[0].children[0].repeat.minimum, 2);
  assert.ok(
    metadata.compositions.every((composition) => Array.isArray(composition.evidence)),
  );
  const compositionSchema = await readJson(
    path.join(scriptRoot, 'schemas/composition.schema.json'),
  );
  assert.match(
    validateSchema(
      { ...single, evidence: 'skills/best-practice/card/SKILL.md:1' },
      compositionSchema,
    )[0],
    /^ERROR \[SCHEMA_TYPE\]/,
  );
});

test('writes and checks deterministic output only in the fixture area', async () => {
  const root = path.join(scriptRoot, 'fixtures/generated-metadata');
  const outputRoot = path.join(root, 'orchestration');
  const capabilityOutputRoot = path.join(root, 'skills');
  await rm(root, { recursive: true, force: true });
  try {
    const written = await generateMetadata({
      outputRoot,
      capabilityOutputRoot,
    });
    assert.equal(written.current, true);
    const checked = await generateMetadata({
      check: true,
      outputRoot,
      capabilityOutputRoot,
    });
    assert.equal(checked.current, true);
    const aggregate = await readJson(path.join(outputRoot, 'capabilities.json'));
    assert.equal(aggregate.schemaVersion, 1);
    assert.deepEqual(aggregate.capabilities, written.capabilities);
    assert.equal(
      written.capabilities.find((capability) => capability.id === 'canopy-button')
        .category,
      'actions',
    );
    assert.equal(
      written.capabilities.find((capability) => capability.id === 'canopy-card').category,
      'data-display',
    );
    assert.ok(
      written.capabilities.every((capability) => capability.category !== 'component'),
    );
    assert.ok(
      written.capabilities
        .find((capability) => capability.id === 'canopy-button')
        .selectors.includes('[lg-button]'),
    );
    assert.equal(
      (await readJson(path.join(capabilityOutputRoot, 'card/references/capability.json')))
        .id,
      'canopy-card',
    );
    const discovered = await discoverSources();
    const capabilityFiles = await walk(
      capabilityOutputRoot,
      (file) => path.basename(file) === 'capability.json',
    );
    assert.equal(capabilityFiles.length, discovered.length);
    assert.equal(
      await pathExists(
        path.join(
          capabilityOutputRoot,
          'canopy-ui-orchestration/references/capability.json',
        ),
      ),
      true,
    );
    assert.equal(
      await pathExists(
        path.join(capabilityOutputRoot, 'ui-orchestration/references/capability.json'),
      ),
      false,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// A fixed single action, including a link to a route, belongs directly in the
// card footer. lg-button-group is for two or more related actions and is also
// acceptable when a second action may be shown conditionally.
test('card footer rules cover single actions, grouped actions and an optional second action', async () => {
  const { compositions } = await buildMetadata({ skill: 'card' });
  const byId = (id) => compositions.find((composition) => composition.id === id);
  const button = byId('card-single-primary-action');
  const link = byId('card-single-navigation-action');
  const optional = byId('card-optional-second-action');
  assert.equal(link.conditions.actionCount.equals, 1);
  assert.equal(link.tree[0].children[0].selector, 'a[lg-button]');
  for (const composition of [button, link]) {
    assert.equal(composition.conditions.secondActionPossible, false);
    assert.ok(
      composition.tree[0].children.every((node) => node.selector !== 'lg-button-group'),
    );
    assert.ok(
      composition.rules.some((rule) => /acceptable when a second action/.test(rule)),
    );
  }
  assert.equal(optional.conditions.secondActionPossible, true);
  assert.equal(optional.tree[0].children[0].selector, 'lg-button-group');
  assert.equal(optional.tree[0].children[0].children[0].repeat.maximum, 2);
});

// Evidence is located by text, so every cited line must contain real content.
test('composition evidence points at non-empty lines', async () => {
  const { compositions } = await buildMetadata({ skill: 'card' });
  for (const composition of compositions) {
    for (const evidence of composition.evidence) {
      const [file, line] = evidence.split(/:(\d+)$/);
      const lines = (await readFile(path.join(repositoryRoot, file), 'utf8')).split('\n');
      assert.ok(
        lines[Number(line) - 1]?.trim(),
        `${composition.id}: ${evidence} is empty`,
      );
    }
  }
});

// Named-slot parents drop Canopy children they do not select, so published
// examples must only use children the parent accepts.
test('rejects a Canopy child the parent slots do not accept', async () => {
  const metadata = await buildMetadata({ skill: 'card' });
  const invalid = {
    ...metadata.compositions[0],
    id: 'card-invalid-title',
    tree: [{ selector: 'lg-card', children: [{ selector: 'lg-card-title' }] }],
  };
  const valid = {
    ...metadata.compositions[0],
    id: 'card-valid-title',
    tree: [
      {
        selector: 'lg-card',
        children: [
          { selector: 'lg-card-header', children: [{ selector: 'lg-card-title' }] },
        ],
      },
    ],
  };
  const diagnostics = await validateMetadata({
    ...metadata,
    compositions: [invalid, valid],
  });
  const mismatches = diagnostics.filter((item) => item.includes('SLOT_MISMATCH'));
  assert.equal(mismatches.length, 1);
  assert.match(
    mismatches[0],
    /card-invalid-title: lg-card-title is not accepted by lg-card/,
  );
});
