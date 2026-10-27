'use strict';

const fs = require('fs');
const path = require('path');

const SKILL_SOURCE_PREFIX = 'https://github.com/Legal-and-General/canopy/tree/master/';
const ORCHESTRATION_REFERENCES =
  'skills/best-practice/canopy-ui-orchestration/references/';

function extractSourcePath(content) {
  const match = content.match(/^\s*source:\s*(.+)$/m);

  if (!match) {
    return null;
  }

  const url = match[1].trim();

  return url.startsWith(SKILL_SOURCE_PREFIX)
    ? url.slice(SKILL_SOURCE_PREFIX.length)
    : null;
}

function capabilityPathForSkill(skillFile) {
  return path.posix.join(path.posix.dirname(skillFile), 'references/capability.json');
}

function sourceCoversGuide(sourcePath, guidePath) {
  return sourcePath === guidePath || guidePath.startsWith(`${sourcePath}/`);
}

function isMetadataSource(file) {
  return (
    file === 'projects/canopy/src/public-api.ts' ||
    /^projects\/canopy\/src\/lib\/.+\/index\.ts$/.test(file) ||
    /^projects\/canopy\/src\/lib\/.+\.(component|directive|pipe|service)\.ts$/.test(
      file,
    ) ||
    /^projects\/canopy\/src\/lib\/.+\.component\.html$/.test(file) ||
    /^projects\/canopy\/src\/lib\/.+\/docs\/.+\.stories\.ts$/.test(file) ||
    /^projects\/canopy\/src\/styles\/.+\.(scss|mdx)$/.test(file)
  );
}

async function listChangedFiles(github, owner, repo, pullNumber) {
  const filenames = [];
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

    filenames.push(...data.map((file) => file.filename));
    hasMore = data.length === 100;
    page++;
  }

  return filenames;
}

module.exports = async ({
  github,
  context: {
    repo: { repo, owner },
    payload,
  },
  core,
}) => {
  const pullRequest = payload.pull_request;
  const labels = (pullRequest.labels || []).map((label) => label.name);

  if (labels.includes('skip-skill-check')) {
    const bypassReason = pullRequest.body?.match(
      /Skill check bypass reason:\s*(.+)/i,
    )?.[1];

    if (!bypassReason?.trim()) {
      core.setFailed(
        'SKILL_STALE: The "skip-skill-check" label requires a pull request body entry in the form "Skill check bypass reason: <reason>".',
      );

      return;
    }

    core.info(
      `PR has the "skip-skill-check" label. Bypass reason: ${bypassReason.trim()}`,
    );

    return;
  }

  const changedFiles = await listChangedFiles(github, owner, repo, pullRequest.number);
  const changedGuides = changedFiles.filter((file) => path.extname(file) === '.mdx');
  const changedSkills = changedFiles.filter(
    (file) =>
      file.startsWith('skills/best-practice/') && path.basename(file) === 'SKILL.md',
  );
  const changedCapabilities = new Set(
    changedFiles.filter((file) =>
      /^skills\/best-practice\/.+\/references\/capability\.json$/.test(file),
    ),
  );
  const aggregateChanged = changedFiles.some(
    (file) =>
      file === `${ORCHESTRATION_REFERENCES}capabilities.json` ||
      file === `${ORCHESTRATION_REFERENCES}compositions.json` ||
      file === `${ORCHESTRATION_REFERENCES}schema-version.json`,
  );
  const metadataSources = changedFiles.filter(isMetadataSource);
  const schemasChanged = changedFiles.some((file) =>
    file.startsWith('scripts/skill-metadata/schemas/'),
  );

  if (
    changedGuides.length === 0 &&
    changedSkills.length === 0 &&
    changedCapabilities.size === 0 &&
    metadataSources.length === 0 &&
    !schemasChanged
  ) {
    core.info('No skill metadata inputs changed. Skipping impact check.');

    return;
  }

  const skillSources = new Map();

  for (const skillFile of changedSkills) {
    try {
      const content = fs.readFileSync(path.resolve(skillFile), 'utf8');
      const sourcePath = extractSourcePath(content);

      if (sourcePath) {
        skillSources.set(skillFile, sourcePath);
      }
    } catch {
      // Deleted skills are validated by deterministic generation and reference checks.
    }
  }

  const missingSkillUpdates = changedGuides.filter(
    (guide) =>
      ![...skillSources.values()].some((source) => sourceCoversGuide(source, guide)),
  );
  const coveredGuides = changedGuides.filter(
    (guide) => !missingSkillUpdates.includes(guide),
  );
  const staleCapabilities = changedSkills
    .map(capabilityPathForSkill)
    .filter((capability) => !changedCapabilities.has(capability));
  const skillsWithoutGuideChange = [...skillSources.entries()]
    .filter(
      ([, source]) => !changedGuides.some((guide) => sourceCoversGuide(source, guide)),
    )
    .map(([, source]) => source);
  const failures = [];

  if (missingSkillUpdates.length > 0) {
    failures.push(
      missingSkillUpdates.length === changedGuides.length
        ? `SKILL_STALE: ${missingSkillUpdates.length} .mdx file(s) were changed but no corresponding best-practice skill(s) were found.`
        : `SKILL_STALE: ${missingSkillUpdates.length} of ${changedGuides.length} changed .mdx file(s) are missing a corresponding best-practice skill update.`,
      ...missingSkillUpdates.map((file) => `  - ${file}`),
    );

    if (coveredGuides.length > 0) {
      failures.push('Already covered:', ...coveredGuides.map((file) => `  - ${file}`));
    }
  }

  if (staleCapabilities.length > 0) {
    // Non-blocking: the authoritative `generate:skill-metadata --check` step
    // deterministically regenerates and byte-compares, so it owns drift
    // detection. This diff-based heuristic only guides and must never preempt
    // that step with a false positive (e.g. a SKILL.md edit that does not alter
    // the generated metadata).
    core.warning(
      [
        'INDEX_STALE: Changed skills may require regenerated per-skill capability metadata.',
        ...staleCapabilities.map((file) => `  - ${file}`),
        'If generation produces a diff, run: npm run generate:skill-metadata',
      ].join('\n'),
    );
  }

  if (
    (changedGuides.length > 0 ||
      changedSkills.length > 0 ||
      changedCapabilities.size > 0 ||
      schemasChanged) &&
    !aggregateChanged
  ) {
    // Non-blocking for the same reason as above; drift is enforced by the
    // deterministic generation check.
    core.warning(
      [
        'INDEX_STALE: Skill or schema inputs changed without regenerated aggregate indexes.',
        'If generation produces a diff, run: npm run generate:skill-metadata',
      ].join('\n'),
    );
  }

  if (skillsWithoutGuideChange.length > 0) {
    core.warning(
      `${skillsWithoutGuideChange.length} skill(s) changed without their source documentation. ` +
        'This is allowed for a skill correction, but verify the source remains accurate:\n' +
        skillsWithoutGuideChange.map((file) => `  - ${file}`).join('\n'),
    );
  }

  if (metadataSources.length > 0) {
    core.info(
      `Metadata extraction will verify ${metadataSources.length} changed source file(s). ` +
        'Implementation-only changes are allowed when deterministic generation produces no diff.',
    );
  }

  if (changedGuides.length > 0) {
    core.info(
      `Found ${changedGuides.length} changed .mdx file(s):\n${changedGuides
        .map((file) => `  - ${file}`)
        .join('\n')}`,
    );
  }

  if (failures.length > 0) {
    core.setFailed(
      [
        ...failures,
        '',
        'Run the Best Practice Skill Generator for semantic changes, then commit the regenerated metadata.',
      ].join('\n'),
    );

    return;
  }

  core.info(
    [
      'Skill metadata impact check passed.',
      `All ${coveredGuides.length} changed .mdx file(s) have a corresponding best-practice skill update.`,
      `Changed guides: ${changedGuides.length}`,
      `Changed skills: ${changedSkills.length}`,
      `Changed capabilities: ${changedCapabilities.size}`,
      `Changed metadata sources: ${metadataSources.length}`,
    ].join('\n'),
  );
};
