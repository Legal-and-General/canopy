'use strict';

const REPOSITORY_DOCS_URL = 'https://github.com/Legal-and-General/canopy/blob/master/docs/';

const GUIDE_ROUTES = {
  'AGENTIC_AI.md': 'development-contributing-agents-and-workflows--docs',
  'BEST_PRACTICE.md': 'principles-using-canopy--docs',
  'BREAKING_CHANGES.md': 'development-using-canopy-breaking-changes--docs',
  'CODING_STANDARDS.md': 'development-contributing-coding-standards--docs',
  'CONTRIBUTING.md': 'development-contributing-overview--docs',
  'DEPENDABOT.md': 'development-contributing-dependency-updates--docs',
  'MAINTENANCE_RELEASES.md': 'development-contributing-releases-maintenance-releases--docs',
  'NEXT_BRANCH.md': 'development-contributing-releases-pre-release-branch--docs',
  'RELEASES.md': 'development-contributing-releases-overview--docs',
  'USAGE.md': 'development-using-canopy-installation-and-usage--docs',
};

const SKILL_GUIDE_ROUTES = {
  migration: 'ai-migration-skills--docs',
  bestPractice: 'ai-best-practice-skills--docs',
};

const SKILL_ANCHOR_ROUTES = {
  'migration-skills': SKILL_GUIDE_ROUTES.migration,
  'installing-migration-skills': SKILL_GUIDE_ROUTES.migration,
  'best-practice-skills': SKILL_GUIDE_ROUTES.bestPractice,
  'installing-best-practice-skills': SKILL_GUIDE_ROUTES.bestPractice,
  'generating-best-practice-skills': SKILL_GUIDE_ROUTES.bestPractice,
  'available-best-practice-skills': SKILL_GUIDE_ROUTES.bestPractice,
};

function resolveRepositoryHref(href) {
  if (
    typeof href !== 'string' ||
    href.startsWith('#') ||
    href.startsWith('/') ||
    href.startsWith('./?path=') ||
    /^[a-z][a-z\d+.-]*:/i.test(href)
  ) {
    return href;
  }

  const match = /^(?:\.\/)?([^#?]+\.md)(#.*)?$/i.exec(href);
  let route = match && GUIDE_ROUTES[match[1]];

  if (match && match[1] === 'COPILOT_SKILLS.md') {
    const anchor = (match[2] || '').slice(1);
    route = Object.hasOwn(SKILL_ANCHOR_ROUTES, anchor)
      ? SKILL_ANCHOR_ROUTES[anchor]
      : undefined;
  }

  if (route) {
    return `./?path=/docs/${route}${match[2] || ''}`;
  }

  return new URL(href, REPOSITORY_DOCS_URL).href;
}

function resolveRepositoryImage(src) {
  const assetsPrefix = './assets/';

  if (typeof src === 'string' && src.startsWith(assetsPrefix)) {
    return `./repository-docs-assets/${src.slice(assetsPrefix.length)}`;
  }

  return src;
}

module.exports = { GUIDE_ROUTES, SKILL_GUIDE_ROUTES, resolveRepositoryHref, resolveRepositoryImage };
