import assert from 'node:assert/strict';
import test from 'node:test';
import { buildMetadata } from '../generate-index.js';
import {
  evaluate,
  loadCorpus,
  metricThresholds,
  passesThresholds,
  rankCapabilities,
  recommend,
} from '../evaluation/evaluate.js';
import { silenceConsole } from './console-mock.js';

silenceConsole();

// Keep the committed corpus aligned with the scenarios and thresholds agreed in
// the orchestration plan.
const expectedScenarioIds = [
  'one-primary-action-in-card-footer',
  'two-related-actions-in-card-footer',
  'radio-choices-with-validation',
  'checkboxes-with-validation',
  'finish-action-with-documented-icon',
  'primary-message-with-illustrative-asset',
  'inline-alert-versus-primary-message',
  'responsive-content-area',
  'journey-progress',
  'loading-state',
  'icon-only-button-with-accessible-label',
  'deprecated-component-with-replacement',
  'capability-in-later-canopy-version',
  'non-canopy-terminology',
  'unsupported-capability',
];

test('contains exactly the fifteen planned evaluation scenarios', async () => {
  const corpus = await loadCorpus();
  assert.deepEqual(
    corpus.scenarios.map((scenario) => scenario.id),
    expectedScenarioIds,
  );
  for (const scenario of corpus.scenarios) {
    assert.ok(Array.isArray(scenario.expectedSkills));
    assert.ok(scenario.expectedSkills.every((skill) => skill.startsWith('canopy-')));
    assert.ok(Array.isArray(scenario.requiredSelectors));
    assert.ok(Array.isArray(scenario.forbiddenRules));
  }
  assert.deepEqual(corpus.scenarios[12].expectedVersion, {
    current: 27,
    availableFrom: 28,
    gap: true,
  });
  assert.equal(corpus.scenarios[14].expectedUnsupported, true);
  assert.ok(corpus.scenarios[0].requiredSelectors.includes('button[lg-button]'));
  assert.equal(corpus.scenarios[0].requiredSelectors.includes('[lg-button]'), false);
});

test('recommendations and ranking are deterministic', async () => {
  const metadata = await buildMetadata();
  const query = 'Place one primary action in a card footer.';
  assert.deepEqual(
    rankCapabilities(query, metadata.capabilities),
    rankCapabilities(query, metadata.capabilities),
  );
  assert.deepEqual(recommend(query, metadata), recommend(query, metadata));
});

test('meets every planned metric threshold without inventions or regressions', async () => {
  const corpus = await loadCorpus();
  const report = evaluate(corpus, await buildMetadata());
  assert.equal(report.scenarios, 15);
  assert.equal(report.metrics.primarySkillAccuracy >= 0.9, true);
  assert.equal(report.metrics.allRequiredSkillsTopThree >= 0.9, true);
  assert.equal(report.metrics.patternAccuracy >= 0.9, true);
  assert.equal(report.metrics.unsupportedVersionGapDetection, 1);
  assert.equal(report.metrics.inventedSelectorsApis, 0);
  assert.equal(report.metrics.conditionalRuleRegressions, 0);
  assert.equal(report.metrics.requiredSelectorCoverage, 1);
  assert.equal(passesThresholds(report.metrics), true);
  assert.deepEqual(metricThresholds, {
    primarySkillAccuracy: 0.9,
    allRequiredSkillsTopThree: 0.9,
    patternAccuracy: 0.9,
    unsupportedVersionGapDetection: 1,
    inventedSelectorsApis: 0,
    conditionalRuleRegressions: 0,
  });
});

// The evaluation must score the rules that were generated, not a fixed summary,
// otherwise a wrong published rule can never be detected.
test('scores generated composition rules, including a single navigation link', async () => {
  const metadata = await buildMetadata();
  const single = recommend('Place one primary action in a card footer.', metadata);
  assert.deepEqual(
    single.rules,
    metadata.compositions.find(({ id }) => id === 'card-single-primary-action').rules,
  );
  const link = recommend(
    'Place one action in a card footer that links to a route.',
    metadata,
  );
  assert.equal(link.pattern, 'card-single-navigation-action');
  assert.ok(link.rules.some((rule) => /link styled as a button/.test(rule)));
});
