#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourcePath = path.join(root, 'node_modules/@legal-and-general/canopy-design-tokens/css/storybook-tokens.css');
const targetPath = path.join(root, 'projects/canopy/storybook/design-tokens/storybook-tokens.css');

// storybook-design-token's glob scan ignores node_modules, so copy the file locally.
fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.copyFileSync(sourcePath, targetPath);

console.log(`Copied storybook-tokens.css to ${path.relative(root, targetPath)}`);
