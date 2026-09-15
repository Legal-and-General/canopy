import fs from 'node:fs';
import path from 'node:path';
import tokenSources from '../.storybook/component-token-sources.js';

const root = process.cwd();
const tokenSets = tokenSources.map(({ label, source, titlePrefix }) => ({
  label,
  titlePrefix,
  tokens: parseTokens(path.join(root, source)),
}));

const output = `const tokenSets = ${JSON.stringify(deduplicate(tokenSets), null, 2)};\n\nexport default tokenSets;\n`;
fs.writeFileSync(path.join(root, '.storybook/component-token-data.js'), output);

function parseTokens(filePath) {
  return fs.readFileSync(filePath, 'utf8').split('\n').flatMap(line => {
    const match = line.match(/^\s*(--[\w-]+):\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*\*\/)?/);
    return match ? [{
      name: match[1],
      value: match[2],
      description: match[3] || '',
      presenter: getPresenter(match[1], match[2]),
    }] : [];
  });
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

