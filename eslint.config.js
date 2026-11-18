import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import {
  javascriptConfig,
  templateConfig,
  typescriptConfig,
} from './eslint-configs/index.js';

export default [
  {
    name: 'Global - Language options',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  {
    name: 'Vitest - Language options',
    files: [ '**/*.spec.{ts,tsx,js,mjs,cjs}', '**/spec.{ts,tsx}' ],
    languageOptions: {
      globals: {
        ...globals.vitest,
        aroundAll: 'readonly',
        aroundEach: 'readonly',
      },
    },
  },
  {
    name: 'Global - Ignores',
    ignores: [
      '**/pictogram.interface.ts',
      '**/icons.interface.ts',
      'projects/canopy/src/lib/ui-icons-files/**',
      'projects/canopy/src/lib/flag-icons-files/**',
      'projects/canopy/src/lib/pictogram-files/**',
      'projects/canopy/storybook/css-variables/**',
      '!.github',
      '**/*.d.ts',
      '!.storybook',
      'coverage/**',
      'dist/**',
      '.husky/**',
      'node_modules/**',
    ],
  },
  ...storybook.configs['flat/recommended'],
  ...typescriptConfig,
  ...templateConfig,
  ...javascriptConfig,
];
