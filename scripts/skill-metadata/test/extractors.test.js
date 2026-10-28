import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { promisify } from 'node:util';
import { discoverSources } from '../discover-sources.js';
import { extractAngularApi } from '../extract-angular-api.js';
import { extractSkillGuidance } from '../extract-skill-guidance.js';
import {
  extractProjectionSlots,
  extractTemplateComposition,
  splitSelectorList,
} from '../extract-template-composition.js';
import { repositoryRoot } from '../lib.js';
import { silenceConsole } from './console-mock.js';

silenceConsole();

// Representative component families cover both public TypeScript facts and
// consumer-owned projected composition.
test('extracts public Angular selectors, inputs and defaults', async () => {
  const [skill] = await discoverSources({ skill: 'button' });
  const api = await extractAngularApi(skill.source);
  const button = api.find((item) => item.symbol === 'LgButtonComponent');
  assert.equal(button.selector, '[lg-button]');
  assert.equal(button.inputs.find((input) => input.name === 'loading').default, false);
  assert.ok(api.some((item) => item.symbol === 'LgButtonToggleDirective'));
});

test('extracts template slots, examples and semantic guidance', async () => {
  const [skill] = await discoverSources({ skill: 'card' });
  const api = await extractAngularApi(skill.source);
  const composition = await extractTemplateComposition(skill, api);
  const guidance = await extractSkillGuidance(skill);
  assert.ok(composition.slots.some((slot) => slot.selector === 'lg-card-header'));
  assert.ok(composition.compositions.some((example) => example.tree.length > 0));
  assert.ok(guidance.guidance.some((item) => item.type === 'recommend'));
  assert.ok(guidance.guidance.every((item) => /SKILL\.md:\d+$/.test(item.evidence)));
});

test('extracts ng-content projection slots with quoted, multi-line and conditional selectors', async () => {
  const template = await readFile(
    new URL('../fixtures/sample.component.html', import.meta.url),
    'utf8',
  );
  const slots = extractProjectionSlots(template);
  assert.deepEqual(
    slots.map((slot) => slot.selector),
    [
      'lg-sample-header',
      '*',
      "lg-sample-title, a, button[lg-button][priority='link']",
      '[lgSuffix]',
    ],
  );
  assert.equal(slots[1].catchAll, true);
  assert.deepEqual(slots[2].selectors, [
    'lg-sample-title',
    'a',
    "button[lg-button][priority='link']",
  ]);
  assert.equal(slots[2].conditional, true);
  assert.equal(slots[3].conditional, false);
});

test('splits selector lists only on top-level commas', () => {
  assert.deepEqual(splitSelectorList('a, b:not(c, d), [x="1,2"]'), [
    'a',
    'b:not(c, d)',
    '[x="1,2"]',
  ]);
});

test('publishes every real ng-content selector in the library as projection metadata', async () => {
  const { stdout } = await promisify(execFile)(
    'grep',
    [
      '-rhoE',
      '<ng-content[^>]*select=[^>]*>',
      'projects/canopy/src/lib',
      '--include=*.html',
    ],
    { cwd: repositoryRoot },
  );
  const expected = new Set(
    [...stdout.matchAll(/select=(["'])(.*?)\1\s*\/?>/g)].map((match) => match[2]),
  );
  const published = new Set();
  for (const skill of await discoverSources()) {
    const composition = await extractTemplateComposition(skill);
    composition.slots.forEach((slot) => published.add(slot.selector));
  }
  const missing = [...expected].filter((selector) => !published.has(selector));
  assert.deepEqual(missing, []);
});

test('library-wide guidance docs do not inherit every public symbol', async () => {
  const [skill] = await discoverSources({ skill: 'writing' });
  assert.deepEqual(await extractAngularApi(skill.source), []);
});

// The basic titled card puts lg-card-title in lg-card-header, as the guide and
// stories do. A title directly in lg-card-content is only seen in a skeleton
// story with a row and column layout, so published examples must not use it.
test('published card examples place lg-card-title in lg-card-header', async () => {
  const [skill] = await discoverSources({ skill: 'card' });
  const composition = await extractTemplateComposition(skill);
  const misplaced = [];
  const visit = (nodes, parent, id) => {
    for (const node of nodes) {
      if (node.selector === 'lg-card-title' && parent !== 'lg-card-header') {
        misplaced.push(`${id}: lg-card-title inside ${parent}`);
      }
      visit(node.children || [], node.selector, id);
    }
  };
  for (const example of composition.compositions) visit(example.tree, null, example.id);
  assert.deepEqual(misplaced, []);
});
