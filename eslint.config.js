import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import jestEslint from 'eslint-plugin-jest';
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
        ...globals.jest,
        ...globals.node,
        ...jestEslint.environments.globals.globals,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  {
    name: 'Global - Ignores',
    ignores: [
      '**/brand-icons.interface.ts',
      '**/icons.interface.ts',
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
