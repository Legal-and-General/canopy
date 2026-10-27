#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { discoverSources } from './discover-sources.js';
import { isMain, parseArguments, relativePath } from './lib.js';

// Classifies reviewed prose by its surrounding heading so semantic guidance
// remains traceable to the original skill rather than being inferred from code.
const classify = (heading) => {
  const value = heading.toLowerCase();
  if (value.includes("don't") || value.includes('dont')) return 'avoid';
  if (value.includes('accessib')) return 'accessibility';
  if (value.includes('do')) return 'recommend';
  if (value.includes('when') || value.includes('usage')) return 'usage';
  return 'guidance';
};

export const extractSkillGuidance = async (skill) => {
  const markdown = await readFile(skill.skillFile, 'utf8');
  const lines = markdown.split('\n');
  let heading = '';
  const title =
    lines
      .find((line) => /^#\s+/.test(line))
      ?.replace(/^#\s+/, '')
      .replace(/\s+[—-]\s+Best Practices.*$/i, '') || skill.name;
  const guidance = [];
  const relatedSkills = new Set();
  lines.forEach((line, index) => {
    const headingMatch = line.match(/^#{2,4}\s+(.+)/);
    if (headingMatch) heading = headingMatch[1];
    const statement = line.match(/^\s*(?:[-*]|\d+\.)\s+(?:\*\*(?:Do|Don't)\*\*\s*)?(.+)/);
    if (statement && !statement[1].startsWith('`')) {
      const text = statement[1].replace(/\s+/g, ' ').trim();
      guidance.push({
        type: classify(heading),
        statement: text,
        evidence: `${relativePath(skill.skillFile)}:${index + 1}`,
        confidence: /^(?:Do|Don't)\b/i.test(line.replace(/^[\s\d.*-]+/, ''))
          ? 'high'
          : 'medium',
      });
    }
    for (const match of line.matchAll(/`(?:canopy-)?([a-z][\w-]+)`\s+skills?/gi)) {
      relatedSkills.add(match[1]);
    }
    for (const match of line.matchAll(/\.\.\/([a-z][\w-]+)\/SKILL\.md/gi)) {
      relatedSkills.add(match[1]);
    }
  });
  const removedLine = lines.findIndex(
    (line) =>
      /^#\s+.*(?:—|-)\s+REMOVED\s*$/i.test(line) ||
      /\*\*.*(?:has been|was) removed from Canopy's public API/i.test(line),
  );
  const deprecatedLine = lines.findIndex(
    (line) =>
      /^#\s+.*(?:—|-)\s+DEPRECATED\s*$/i.test(line) ||
      /\*\*.*is deprecated (?:in|from) Canopy/i.test(line),
  );
  return {
    skill: skill.id,
    title,
    guidance,
    relatedSkills: [...relatedSkills]
      .filter((id) => id !== skill.id)
      .map((id) => `canopy-${id.replace(/^canopy-/, '')}`)
      .sort(),
    lifecycle: {
      introduced: null,
      deprecated:
        deprecatedLine >= 0
          ? {
              confidence: 'high',
              evidence: `${relativePath(skill.skillFile)}:${deprecatedLine + 1}`,
            }
          : null,
      removed:
        removedLine >= 0
          ? {
              confidence: 'high',
              evidence: `${relativePath(skill.skillFile)}:${removedLine + 1}`,
            }
          : null,
    },
  };
};

if (isMain(import.meta.url)) {
  const arguments_ = parseArguments(process.argv.slice(2));
  const skills = await discoverSources(arguments_);
  console.info(
    JSON.stringify(
      await Promise.all(skills.map((skill) => extractSkillGuidance(skill))),
      null,
      2,
    ),
  );
}
