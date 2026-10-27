import assert from 'node:assert/strict';
import test from 'node:test';
import { discoverSources, resolveSourcePath } from '../discover-sources.js';
import { repositoryRoot } from '../lib.js';
import { silenceConsole } from './console-mock.js';

silenceConsole();

// Source discovery is the shared boundary between skills, extraction, and
// per-skill output paths.
test('discovers and filters best-practice skills deterministically', async () => {
  const first = await discoverSources({ skill: 'button' });
  const second = await discoverSources({ skill: 'canopy-button' });
  assert.equal(first.length, 1);
  assert.equal(first[0].id, 'button');
  assert.equal(first[0].category, 'actions');
  assert.equal(first[0].sourceExists, true);
  assert.deepEqual(first, second);
});

// Guards against a new skill being added without a routing category, which the
// generator previously inferred from a hardcoded list that silently fell back
// to data-display.
test('every skill declares a known metadata.category', async () => {
  const categories = new Set([
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
  ]);
  const missing = [];
  for (const skill of await discoverSources()) {
    if (!skill.category || !categories.has(skill.category)) {
      missing.push(`${skill.id}: ${skill.category ?? '(none)'}`);
    }
  }
  assert.deepEqual(missing, []);
});

test('resolves repository GitHub source URLs', () => {
  assert.equal(
    resolveSourcePath(
      'https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/card/docs/guide.mdx',
    ),
    `${repositoryRoot}/projects/canopy/src/lib/card/docs/guide.mdx`,
  );
});
