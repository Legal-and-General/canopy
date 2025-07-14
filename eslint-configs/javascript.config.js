const commonESLintRules = require('./common-eslint.rules.js');

module.exports = [
  {
    name: 'JavaScript',
    files: ['./projects/**/*.js', './.eslintrc.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Include ESLint recommended rules
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
  },

  // GitHub Workflow Scripts overrides
  {
    name: 'GitHub Workflow Scripts',
    files: ['.github/workflow-scripts/**/*.js'],
    rules: {
      'no-shadow': 'off',
    },
  },
];
