import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const tokenPages = findFiles(path.join(root, 'projects/canopy/src'), 'design-tokens.mdx');
const fallbackTokenFile = path.join(
  root,
  'projects/canopy/src/lib/forms/input/docs/design-tokens.css',
);

const tokenSets = tokenPages.flatMap(pagePath => {
  const page = fs.readFileSync(pagePath, 'utf8');
  const title = page.match(/<Meta title="([^"]+)"/)?.[1];
  const label = page.match(/categoryName="([^"]+)"/)?.[1];

  if (!title || !label) return [];

  const tokenFile = fs.existsSync(pagePath.replace(/design-tokens\.mdx$/, 'design-tokens.css'))
    ? pagePath.replace(/design-tokens\.mdx$/, 'design-tokens.css')
    : fallbackTokenFile;

  return [{
    label,
    titlePrefix: title.replace(/\/Design tokens$/, ''),
    tokens: parseTokens(tokenFile),
  }];
});

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

function findFiles(directory, fileName) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? findFiles(entryPath, fileName)
      : entry.name === fileName
        ? [entryPath]
        : [];
  });
}
