// Use Typescript compilation to provide errors based on typing
// See: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md

const { typescriptConfig, templateConfig, javascriptConfig } = require('./eslint-configs');

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jasmine: true,
    node: true,
  },
  root: true,
  plugins: [
    '@angular-eslint/template',
    '@typescript-eslint',
    'html',
    'import',
    'jasmine',
    'unused-imports',
  ],
  ignorePatterns: [
    '!.github',
  ],
  overrides: [
    typescriptConfig,
    templateConfig,
    javascriptConfig,
  ],
};
