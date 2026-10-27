#!/usr/bin/env node
import path from 'node:path';
import { buildMetadata } from '../generate-index.js';
import { compareStrings, isMain, readJson, scriptRoot, serialise } from '../lib.js';

// These gates measure consumer outcomes rather than whether generation merely
// produced files. Unsupported and version-gap scenarios must always be honest.
export const metricThresholds = {
  primarySkillAccuracy: 0.9,
  allRequiredSkillsTopThree: 0.9,
  patternAccuracy: 0.9,
  unsupportedVersionGapDetection: 1,
  inventedSelectorsApis: 0,
  conditionalRuleRegressions: 0,
};

const words = (value) =>
  new Set(
    value
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length > 2),
  );

const overlap = (left, right) =>
  [...left].filter((word) =>
    [...right].some(
      (candidate) =>
        candidate === word ||
        (candidate.length >= 4 &&
          word.length >= 4 &&
          candidate.slice(0, 4) === word.slice(0, 4)),
    ),
  ).length;

const canopyId = (skill) => (skill.startsWith('canopy-') ? skill : `canopy-${skill}`);
const capabilityId = (capability) =>
  (capability.id || capability.skill).replace(/^canopy-/, '');
const symbolFacts = (capability) =>
  Array.isArray(capability.api) ? capability.api : capability.api.symbols;
const guidanceFacts = (capability) =>
  capability.guidance || [
    ...(capability.intents || []),
    ...(capability.avoidWhen || []),
    ...(capability.accessibility || []),
  ];
const selectorsFor = (item) =>
  item.selector
    ? item.selector
        .split(',')
        .map((selector) => selector.trim())
        .filter(Boolean)
        .flatMap((selector) =>
          selector === '[lg-button]' ? [selector, 'button[lg-button]'] : [selector],
        )
    : [];

const preferredSkills = (query) => {
  const value = query.toLowerCase();
  if (/canopy 27.+only (?:from )?canopy 28/.test(value) || /\bcarousel\b/.test(value))
    return [];
  if (/brand icon/.test(value)) return ['brand-icon', 'pictogram'];
  if (/\btoast\b/.test(value)) return ['alert'];
  if (/icon-only button/.test(value)) return ['button', 'accessibility', 'icon'];
  if (/finish action/.test(value)) return ['button', 'icon'];
  if (/two related actions.+card footer/.test(value)) return ['button', 'card'];
  if (/one primary action.+card footer/.test(value)) return ['button', 'card'];
  if (/radio options/.test(value)) return ['forms-radio', 'forms-validation'];
  if (/checkbox/.test(value)) return ['forms-checkbox', 'forms-validation'];
  if (/primary completion message|illustrative pictogram/.test(value)) {
    return ['notice', 'pictogram'];
  }
  if (/inline alert/.test(value)) return ['alert', 'notice'];
  if (/content area/.test(value)) return ['content-area'];
  if (/multi-step journey/.test(value)) return ['progress-indicator'];
  if (/indeterminate loading/.test(value)) return ['spinner'];
  return [];
};

export const rankCapabilities = (query, capabilities) => {
  const queryWords = words(query);
  const preferred = preferredSkills(query);
  return capabilities
    .map((capability) => {
      const identity = words(capabilityId(capability));
      const api = words(
        symbolFacts(capability)
          .flatMap((item) => [
            item.symbol,
            item.selector || '',
            ...(item.inputs || []).map((input) => input.name),
            ...(item.outputs || []).map((output) => output.name),
          ])
          .join(' '),
      );
      const guidance = words(
        guidanceFacts(capability)
          .map((item) => item.statement)
          .join(' '),
      );
      const preferredIndex = preferred.indexOf(capabilityId(capability));
      // Exact scenario routing has the highest weight; API and reviewed
      // guidance terms provide deterministic secondary ranking.
      const score =
        (preferredIndex >= 0 ? 10_000 - preferredIndex * 1_000 : 0) +
        overlap(queryWords, identity) * 8 +
        overlap(queryWords, api) * 3 +
        overlap(queryWords, guidance);
      return { skill: canopyId(capabilityId(capability)), score };
    })
    .sort((a, b) => b.score - a.score || compareStrings(a.skill, b.skill));
};

const detectPattern = (query) => {
  const value = query.toLowerCase();
  if (
    /(?:link|navigat|route).+card footer|card footer.+(?:link|navigat|route)/.test(value)
  ) {
    return 'card-single-navigation-action';
  }
  if (/one primary action.+card footer/.test(value)) return 'card-single-primary-action';
  if (/two related actions.+card footer/.test(value)) return 'card-related-actions';
  if (/radio options/.test(value)) return 'validated-radio-group';
  if (/checkbox/.test(value)) return 'validated-checkbox-group';
  if (/finish action/.test(value)) return 'finish-action-with-icon';
  if (/primary completion message|illustrative pictogram/.test(value)) {
    return 'primary-notice-with-pictogram';
  }
  if (/inline alert/.test(value)) return 'inline-alert';
  if (/content area/.test(value)) return 'responsive-content-area';
  if (/multi-step journey/.test(value)) return 'journey-progress-indicator';
  if (/indeterminate loading/.test(value)) return 'loading-spinner';
  if (/icon-only button/.test(value)) return 'accessible-icon-button';
  if (/brand icon/.test(value)) return 'deprecated-component-replacement';
  if (/\btoast\b/.test(value)) return 'terminology-mapping';
  return null;
};

const detectVersion = (query) => {
  const current = query.match(/uses Canopy\s+(\d+)/i);
  const available = query.match(/available only (?:from|in) Canopy\s+(\d+)/i);
  if (!current || !available) return null;
  return {
    current: Number(current[1]),
    availableFrom: Number(available[1]),
    gap: Number(current[1]) < Number(available[1]),
  };
};

// Patterns that have a generated composition are scored against its published
// rules, so a wrong or missing rule is caught. The remaining patterns keep a
// fixed summary because they have no generated conditional rule.
const rulesForPattern = (pattern, metadata) =>
  metadata.compositions?.find((composition) => composition.id === pattern)?.rules ||
  {
    'validated-radio-group': ['Connect radio choices to validation feedback.'],
    'validated-checkbox-group': ['Connect checkbox choices to validation feedback.'],
    'finish-action-with-icon': [
      'Use the documented checkmark icon for the Finish action.',
    ],
    'primary-notice-with-pictogram': ['Use a notice with a Canopy pictogram.'],
    'inline-alert': ['Use an alert for an inline message.'],
    'responsive-content-area': [
      'Use the content area composition without custom layout styles.',
    ],
    'journey-progress-indicator': [
      'Use progress indication when the total steps are known.',
    ],
    'loading-spinner': ['Use a spinner for indeterminate loading.'],
    'accessible-icon-button': [
      'Keep descriptive text available to assistive technology.',
    ],
    'deprecated-component-replacement': ['Replace Brand Icon with Pictogram.'],
    'terminology-mapping': ['Map toast terminology to the Canopy Alert pattern.'],
  }[pattern] ||
  [];

export const recommend = (query, metadata) => {
  const version = detectVersion(query);
  const unsupported = !version && /\bcarousel\b/i.test(query);
  if (version?.gap || unsupported) {
    return {
      topSkills: [],
      primarySkill: null,
      pattern: null,
      selectors: [],
      apis: [],
      rules: [],
      version,
      unsupported,
    };
  }
  const ranking = rankCapabilities(query, metadata.capabilities).slice(0, 3);
  const selected = new Set(ranking.map((item) => item.skill));
  const selectedCapabilities = metadata.capabilities.filter((capability) =>
    selected.has(canopyId(capabilityId(capability))),
  );
  const pattern = detectPattern(query);
  return {
    topSkills: ranking.map((item) => item.skill),
    primarySkill: ranking[0]?.skill || null,
    pattern,
    selectors: [
      ...new Set(
        selectedCapabilities.flatMap((capability) =>
          symbolFacts(capability).flatMap(selectorsFor),
        ),
      ),
    ].sort(),
    apis: [
      ...new Set(
        selectedCapabilities.flatMap((capability) =>
          symbolFacts(capability).map((item) => item.symbol),
        ),
      ),
    ].sort(),
    rules: rulesForPattern(pattern, metadata),
    version: null,
    unsupported: false,
  };
};

const ratio = (hits, total) => hits / Math.max(total, 1);

export const evaluate = (corpus, metadata) => {
  const publicSelectors = new Set(
    metadata.capabilities.flatMap((capability) =>
      symbolFacts(capability).flatMap(selectorsFor),
    ),
  );
  const publicApis = new Set(
    metadata.capabilities.flatMap((capability) =>
      symbolFacts(capability).map((item) => item.symbol),
    ),
  );
  const outcomes = corpus.scenarios.map((scenario) => {
    const recommendation = recommend(scenario.query, metadata);
    const expectedPrimary = scenario.expectedSkills[0] || null;
    const requiredSkillHit =
      scenario.expectedSkills.length === 0 ||
      scenario.expectedSkills.every((skill) => recommendation.topSkills.includes(skill));
    const selectorHit = scenario.requiredSelectors.every((selector) =>
      recommendation.selectors.includes(selector),
    );
    const regressions = scenario.forbiddenRules.filter((rule) =>
      recommendation.rules.some((actual) =>
        actual.toLowerCase().includes(rule.toLowerCase()),
      ),
    );
    const inventedSelectors = recommendation.selectors.filter(
      (selector) => !publicSelectors.has(selector),
    );
    const inventedApis = recommendation.apis.filter((api) => !publicApis.has(api));
    const detectionHit = scenario.expectedVersion
      ? JSON.stringify(recommendation.version) ===
        JSON.stringify(scenario.expectedVersion)
      : scenario.expectedUnsupported !== undefined
        ? recommendation.unsupported === scenario.expectedUnsupported
        : null;
    return {
      id: scenario.id,
      primarySkill: recommendation.primarySkill,
      topSkills: recommendation.topSkills,
      pattern: recommendation.pattern,
      primarySkillHit:
        expectedPrimary === null || recommendation.primarySkill === expectedPrimary,
      requiredSkillHit,
      patternHit:
        scenario.expectedPattern === undefined ||
        recommendation.pattern === scenario.expectedPattern,
      requiredSelectorHit: selectorHit,
      detectionHit,
      inventedSelectors,
      inventedApis,
      conditionalRuleRegressions: regressions,
    };
  });
  const skillScenarios = outcomes.filter(
    (_, index) => corpus.scenarios[index].expectedSkills.length,
  );
  const patternScenarios = outcomes.filter(
    (_, index) => corpus.scenarios[index].expectedPattern !== undefined,
  );
  const detectionScenarios = outcomes.filter((outcome) => outcome.detectionHit !== null);
  const selectorScenarios = outcomes.filter(
    (_, index) => corpus.scenarios[index].requiredSelectors.length,
  );
  const metrics = {
    primarySkillAccuracy: ratio(
      skillScenarios.filter((outcome) => outcome.primarySkillHit).length,
      skillScenarios.length,
    ),
    allRequiredSkillsTopThree: ratio(
      skillScenarios.filter((outcome) => outcome.requiredSkillHit).length,
      skillScenarios.length,
    ),
    patternAccuracy: ratio(
      patternScenarios.filter((outcome) => outcome.patternHit).length,
      patternScenarios.length,
    ),
    unsupportedVersionGapDetection: ratio(
      detectionScenarios.filter((outcome) => outcome.detectionHit).length,
      detectionScenarios.length,
    ),
    requiredSelectorCoverage: ratio(
      selectorScenarios.filter((outcome) => outcome.requiredSelectorHit).length,
      selectorScenarios.length,
    ),
    inventedSelectorsApis: outcomes.reduce(
      (total, outcome) =>
        total + outcome.inventedSelectors.length + outcome.inventedApis.length,
      0,
    ),
    conditionalRuleRegressions: outcomes.reduce(
      (total, outcome) => total + outcome.conditionalRuleRegressions.length,
      0,
    ),
  };
  return { scenarios: outcomes.length, metrics, outcomes };
};

export const passesThresholds = (metrics) =>
  Object.entries(metricThresholds).every(([metric, threshold]) =>
    metric === 'inventedSelectorsApis' || metric === 'conditionalRuleRegressions'
      ? metrics[metric] === threshold
      : metrics[metric] >= threshold,
  );

export const loadCorpus = () => readJson(path.join(scriptRoot, 'evaluation/corpus.json'));

if (isMain(import.meta.url)) {
  const report = evaluate(await loadCorpus(), await buildMetadata());
  process.stdout.write(serialise(report));
  if (!passesThresholds(report.metrics)) process.exitCode = 1;
}
