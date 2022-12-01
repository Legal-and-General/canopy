const commonESLintRules = require('./common-eslint.rules');

module.exports = {
  files: [ './projects/**/*.ts' ],
  extends: [
    'plugin:@angular-eslint/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jasmine/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    // From Angular ESLint plugin

    '@angular-eslint/no-output-native': 'warn',
    '@angular-eslint/component-selector': [
      'error',
      {
        type: ['element', 'attribute'],
        style: 'kebab-case',
        prefix: [ 'lg' ],
      },
    ],
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        style: 'camelCase',
        prefix: [ 'lg' ],
      },
    ],
    '@angular-eslint/no-host-metadata-property': [
      'error',
      {
        'allowStatic': true
      }
    ],

    // From Typescript ESLint plugin

    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': [ 'error', {
      default: [
        // Fields
        'private-field',
        'public-field',

        // Constructors
        'constructor',

        // Methods
        'public-method',
        'private-method',
        'protected-method',
      ],
    } ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    // '@typescript-eslint/no-unused-vars' has to be set to 'off' for 'unused-imports/no-unused-vars' to work correctly
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/quotes': [
      'error',
      'single',
    ],
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unbound-method': [
      'error',
      {
        'ignoreStatic': true
      }
    ],

    // From ESLint plugin

    ...commonESLintRules,
    'no-underscore-dangle': [ 'error', { 'allowAfterThis': true } ],

    // From unused-imports plugin

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'warn',

    // From import/order plugin

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object',
        ],
        pathGroups: [
          {
            pattern: '@angular',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [ 'external' ],
      },
    ],

    // From Jasmine plugin

    'jasmine/new-line-before-expect': 'error',
    'jasmine/no-spec-dupes': [ 'error', 'branch' ],
  },
  overrides: [
    {
      files: [ './**/*.spec.ts' ],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
  ],
}
