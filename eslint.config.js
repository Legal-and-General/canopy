const storybook = require("eslint-plugin-storybook");
const globals = require('globals');
const angularTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
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
        ...globals.jasmine,
        ...globals.node,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  {
    name: 'Global - Ignores',
    ignores: [
      '**/test.ts',
      '**/brand-icons.interface.ts',
      '**/icons.interface.ts',
      '!.github',
      '**/*.d.ts',
      '!.storybook',
    ],
  },
  ...storybook.configs['flat/recommended'],
  ...typescriptConfig,
  ...templateConfig,
  ...javascriptConfig,
];
