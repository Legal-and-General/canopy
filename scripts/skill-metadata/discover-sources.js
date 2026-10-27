#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { isMain, parseArguments, pathExists, repositoryRoot, walk } from './lib.js';

// Discovers installable best-practice skills and resolves each skill's canonical
// documentation source from its frontmatter.
const parseFrontmatter = (markdown) => {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const values = {};
  let section = values;
  for (const line of match[1].split('\n')) {
    const nested = line.match(/^  ([\w-]+):\s*(.*)$/);
    const root = line.match(/^([\w-]+):\s*(.*)$/);
    if (nested) section[nested[1]] = nested[2].trim();
    else if (root) {
      values[root[1]] = root[2].trim();
      section = root[1] === 'metadata' ? (values.metadata = {}) : values;
    }
  }
  return values;
};

export const resolveSourcePath = (source) => {
  if (!source) return null;
  const github = source.match(
    /^https:\/\/github\.com\/Legal-and-General\/canopy\/(?:tree|blob)\/[^/]+\/(.+)$/,
  );
  return path.resolve(repositoryRoot, github ? github[1] : source);
};

export const discoverSources = async ({ skill = null } = {}) => {
  const skillsRoot = path.join(repositoryRoot, 'skills/best-practice');
  const files = await walk(skillsRoot, (file) => path.basename(file) === 'SKILL.md');
  const discovered = [];
  for (const skillFile of files) {
    const id = path.basename(path.dirname(skillFile));
    if (skill && skill !== id && skill !== `canopy-${id}`) continue;
    const markdown = await readFile(skillFile, 'utf8');
    const frontmatter = parseFrontmatter(markdown);
    const source = resolveSourcePath(frontmatter.metadata?.source);
    discovered.push({
      id,
      name: frontmatter.name || `canopy-${id}`,
      description: frontmatter.description || '',
      category: frontmatter.metadata?.category || null,
      skillFile,
      source,
      sourceExists: source ? await pathExists(source) : false,
    });
  }
  return discovered;
};

if (isMain(import.meta.url)) {
  const arguments_ = parseArguments(process.argv.slice(2));
  console.info(JSON.stringify(await discoverSources(arguments_), null, 2));
}
