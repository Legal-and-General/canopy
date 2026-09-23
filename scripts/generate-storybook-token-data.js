import fs from 'node:fs';
import path from 'node:path';
import tokenSources from '../.storybook/component-token-sources.js';

const root = process.cwd();
const tokensCssPath = path.join(root, 'projects/canopy/storybook/design-tokens/storybook-tokens.css');

const tokenMap = parseTokens(tokensCssPath);

const tokenSets = tokenSources.map(({ label, prefix, titlePrefix }) => {
  const tokens = [...tokenMap.entries()]
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, { value, comment }]) => ({
      name,
      value,
      description: comment || toSentence(name),
      presenter: getPresenter(name, value),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (tokens.length === 0) {
    console.warn(`No tokens found for "${label}" (prefix "${prefix}")`);
  }

  return { label, titlePrefix, tokens };
});

const output = `const tokenSets = ${JSON.stringify(deduplicate(tokenSets), null, 2)};\n\nexport default tokenSets;\n`;
fs.writeFileSync(path.join(root, '.storybook/component-token-data.js'), output);

function parseTokens(filePath) {
  const tokenMap = new Map();
  if (!fs.existsSync(filePath)) return tokenMap;

  const css = fs.readFileSync(filePath, 'utf8');
  const regex = /(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*\*\/)?/g;

  for (const match of css.matchAll(regex)) {
    const [, name, rawValue, comment] = match;
    const value = rawValue.replace(/\s+/g, ' ').trim();

    if (!name || !value || tokenMap.has(name)) continue;

    tokenMap.set(name, { value, comment: comment?.trim() || '' });
  }

  return tokenMap;
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

function deduplicate(sets) {
  return [...new Map(sets.map(set => [set.titlePrefix, set])).values()];
}

