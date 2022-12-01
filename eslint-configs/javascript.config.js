const commonESLintRules = require('./common-eslint.rules');

module.exports = {
  extends: [ 'eslint:recommended' ],
  files: [ './projects/**/*.js', './.eslintrc.js' ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    ...commonESLintRules,
    'block-spacing': 'error',
    'max-len': 'off', // Prettier fixes what it can
    'no-caller': 'error',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'no-sparse-arrays': 'off',
    'no-throw-literal': 'error',
    'no-underscore-dangle': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
  },
  overrides: [
    /*
      Overrides for GitHub Workflow Scripts
    */
    {
      files: [
        '.github/workflow-scripts/**/*.js',
      ],
      rules: {
        'no-shadow': 'off',
      },
    },
  ],
}
