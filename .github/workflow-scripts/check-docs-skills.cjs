'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Parses the `metadata.source` value from a SKILL.md frontmatter block and
 * returns the repository-relative path of the corresponding .mdx file.
 *
 * @param {string} content - Raw file contents of a SKILL.md.
 * @returns {string|null}
 */
function extractSourcePath(content) {
  const match = content.match(/^\s*source:\s*(.+)$/m);

  if (!match) {
    return null;
  }

  const url = match[1].trim();

  // The Best Practice Skill Generator always writes metadata.source URLs with this
  // prefix. It is a fixed convention, not a branch reference — master here just
  // reflects the canonical URL format used when generating skills.
  const SKILL_SOURCE_PREFIX = 'https://github.com/Legal-and-General/canopy/tree/master/';

  return url.startsWith(SKILL_SOURCE_PREFIX)
    ? url.slice(SKILL_SOURCE_PREFIX.length)
    : null;
}

/**
 * Fetches every file changed in the PR, handling pagination.
 *
 * @param {object} github
 * @param {string} owner
 * @param {string} repo
 * @param {number} pullNumber
 * @returns {Promise<Array<{filename: string, status: string}>>} Changed files metadata.
 */
async function listChangedFiles(github, owner, repo, pullNumber) {
  const files = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const { data } = await github.rest.pulls.listFiles({
      owner,
      repo,
      pull_number: pullNumber,
      per_page: 100,
      page,
    });

    files.push(...data.map(f => ({ filename: f.filename, status: f.status })));
    hasMore = data.length === 100;
    page++;
  }

  return files;
}

/**
 * Checks that every changed .mdx file in the PR has a corresponding
 * best-practice skill that was also added or updated. Fails the workflow step
 * when documentation changes are not accompanied by skill updates.
 *
 * @param {object} params
 * @param {object} params.github     - Octokit client from actions/github-script.
 * @param {object} params.context    - Actions context from actions/github-script.
 * @param {object} params.core       - Actions core from actions/github-script.
 */
module.exports = async ({ github, context: { repo: { repo, owner }, payload }, core }) => {
  const pullNumber = payload.pull_request.number;

  const labels = (payload.pull_request.labels || []).map(l => l.name);

  if (labels.includes('skip-skill-check')) {
    core.info('PR has the "skip-skill-check" label. Skipping skill update check.');

    return;
  }

  const changedFiles = await listChangedFiles(github, owner, repo, pullNumber);

  const changedGuides = changedFiles.filter(
    f => path.extname(f.filename) === '.mdx' && f.status !== 'removed',
  ).map(
    f => f.filename,
  );

  const changedSkills = changedFiles.filter(
    f =>
      f.filename.startsWith('skills/best-practice/') &&
      path.basename(f.filename) === 'SKILL.md' &&
      f.status !== 'removed',
  ).map(
    f => f.filename,
  );

  if (changedGuides.length === 0 && changedSkills.length === 0) {
    core.info('No .mdx files or best-practice skills changed. Skipping check.');

    return;
  }

  // Build a set of .mdx paths that are covered by a changed skill.
  const coveredGuidePaths = new Set();

  for (const skillFile of changedSkills) {
    try {
      const content = fs.readFileSync(path.resolve(skillFile), 'utf8');
      const sourcePath = extractSourcePath(content);

      if (sourcePath) {
        coveredGuidePaths.add(sourcePath);
      }
    } catch {
      // The skill file may have been deleted in this PR — ignore.
    }
  }

  // Warn when a skill was amended but its source .mdx was not — likely a bug fix.
  const skillsWithoutDocChange = [...coveredGuidePaths].filter(
    p => !changedGuides.includes(p),
  );

  if (skillsWithoutDocChange.length > 0) {
    core.warning(
      `${skillsWithoutDocChange.length} skill(s) were updated without a corresponding .mdx change. ` +
        `This is allowed (e.g. fixing a skill bug) but please double-check the source documentation is still accurate:\n` +
        skillsWithoutDocChange.map(f => `  - ${f}`).join('\n'),
    );
  }

  if (changedGuides.length === 0) {
    return;
  }

  core.info(
    `Found ${changedGuides.length} changed .mdx file(s):\n${changedGuides.map(f => `  - ${f}`).join('\n')}`,
  );

  const missing = changedGuides.filter(g => !coveredGuidePaths.has(g));
  const covered = changedGuides.filter(g => coveredGuidePaths.has(g));

  if (missing.length === 0) {
    core.info(
      `All ${covered.length} changed .mdx file(s) have a corresponding best-practice skill update.`,
    );

    return;
  }

  const lines = [
    missing.length === changedGuides.length
      ? `${missing.length} .mdx file(s) were changed but no corresponding best-practice skill(s) were found.`
      : `${missing.length} of ${changedGuides.length} changed .mdx file(s) are missing a corresponding best-practice skill update.`,
    '',
    'Please run the "Best Practice Skill Generator" agent and commit the generated skill(s) alongside the documentation changes.',
    '',
    'Missing skills for:',
    ...missing.map(f => `  - ${f}`),
  ];

  if (covered.length > 0) {
    lines.push('', 'Already covered:', ...covered.map(f => `  - ${f}`));
  }

  core.setFailed(lines.join('\n'));
};
