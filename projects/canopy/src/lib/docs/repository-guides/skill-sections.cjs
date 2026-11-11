'use strict';

function extractSkillSection(markdown, section) {
  if (section !== 'migration' && section !== 'bestPractice') {
    throw new Error(`Unknown skills section: ${section}`);
  }

  const migration = [...markdown.matchAll(/^## Migration Skills[ \t]*\r?$/gm)];
  const bestPractice = [...markdown.matchAll(/^## Best Practice Skills[ \t]*\r?$/gm)];

  if (migration.length !== 1 || bestPractice.length !== 1 || bestPractice[0].index <= migration[0].index) {
    throw new Error('The skills catalogue must contain each section exactly once, in order.');
  }

  return section === 'migration'
    ? markdown.slice(migration[0].index, bestPractice[0].index).trimEnd()
    : markdown.slice(bestPractice[0].index).trimEnd();
}

module.exports = { extractSkillSection };
