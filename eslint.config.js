const storybook = require('eslint-plugin-storybook');
const globals = require('globals');
const jestEslint = require('eslint-plugin-jest');
const {
  javascriptConfig,
  templateConfig,
  typescriptConfig,
} = require('./eslint-configs/index.js');

module.exports = [
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
