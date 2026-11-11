#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import tokenSources from '../.storybook/component-token-sources.js';

const root = process.cwd();
// Placeholder until @legal-and-general/canopy-design-tokens publishes this file; swap to
// 'node_modules/@legal-and-general/canopy-design-tokens/dist/css/storybook-tokens.css' once released.
const tokensCssPath = path.join(root, 'projects/canopy/src/styles/tokens/storybook-tokens.css');

const tokenMap = new Map();

if (fs.existsSync(tokensCssPath)) {
  const css = fs.readFileSync(tokensCssPath, 'utf8');
  const regex = /(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*\*\/)?/g;

  for (const match of css.matchAll(regex)) {
    const [, name, rawValue, comment] = match;
    const value = rawValue.replace(/\s+/g, ' ').trim();

    if (!name || !value || tokenMap.has(name)) {
      continue;
    }

    tokenMap.set(name, { value, comment: comment?.trim() || '' });
  }
}

function toSentence(name) {
  return name
    .replace(/^--/, '')
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getPresenter(name, value) {
  if (/colour|color|background|border.*colour|text.*colour|icon.*colour/i.test(name)) {
    return 'Color';
  }

  if (/shadow/i.test(name) || /\b(?:inset|rgba?)\(/i.test(value)) return 'Shadow';
  if (/opacity/i.test(name) || /^0(?:\.\d+)?$|^1$/.test(value)) return 'Opacity';
  if (/font-size/i.test(name)) return 'FontSize';
  if (/font-weight/i.test(name)) return 'FontWeight';
  if (/line-height/i.test(name)) return 'LineHeight';
  if (/letter-spacing/i.test(name)) return 'LetterSpacing';
  if (/font-family/i.test(name)) return 'FontFamily';
  if (/border-radius/i.test(name)) return 'BorderRadius';
  if (/^\d+(?:\.\d+)?(?:rem|em|px|%|vh|vw|ms|s|deg)$/.test(value)) return 'Spacing';

  return 'Empty';
}

for (const source of tokenSources) {
  const { label, prefix, source: sourcePath } = source;
  if (!prefix) continue;

  const matches = [...tokenMap.entries()]
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, { value, comment }]) => ({
      name,
      value,
      description: comment || toSentence(name),
      presenter: getPresenter(name, value),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (matches.length === 0) {
    continue;
  }

  const hasColourTokens = matches.some(token => token.presenter === 'Color');

  const output = [
    ':root {',
    '  /**',
    `   * @tokens ${label}`,
    `   * @presenter ${hasColourTokens ? 'Color' : 'Spacing'}`,
    '   */',
    ...matches.map(token => `  ${token.name}: ${token.value}; /* ${token.description} */`),
    '}',
    '',
  ].join('\n');

  const targetPath = path.join(root, sourcePath);
  const targetDir = path.dirname(targetPath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(targetPath, output);
}

console.log(`Generated component design token CSS for ${tokenSources.filter(item => item.prefix).length} token sets.`);
