const commonESLintRules = require('./common-eslint.rules.js');
const angularESLintPlugin = require('@angular-eslint/eslint-plugin');
const typescriptESLintPlugin = require('@typescript-eslint/eslint-plugin');
const jestEslint = require('eslint-plugin-jest');

module.exports = [
  {
    name: 'Typescript',
    files: ['./projects/**/*.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@angular-eslint': angularESLintPlugin,
      '@typescript-eslint': typescriptESLintPlugin,
      '@stylistic': require('@stylistic/eslint-plugin'),
      import: require('eslint-plugin-import'),
      'unused-imports': require('eslint-plugin-unused-imports'),
      jest: jestEslint,
    },
    rules: {
      // Include recommended rules from each plugin
      ...angularESLintPlugin.configs.recommended.rules,
      ...typescriptESLintPlugin.configs.recommended.rules,
      ...typescriptESLintPlugin.configs['recommended-requiring-type-checking'].rules,

      // From Angular ESLint plugin
      '@angular-eslint/no-output-native': 'warn',
      '@angular-eslint/component-selector': [
        'error',
        {
          type: ['element', 'attribute'],
          style: 'kebab-case',
          prefix: ['lg'],
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          style: 'camelCase',
          prefix: ['lg'],
        },
      ],

      // From Typescript ESLint plugin
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-restricted-types': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      '@typescript-eslint/no-wrapper-object-types': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/member-ordering': [
        'error',
        {
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
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/unbound-method': [
        'error',
        {
          ignoreStatic: true,
        },
      ],

      // Stylistic rules
      '@stylistic/member-delimiter-style': [
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
          multilineDetection: 'brackets',
        },
      ],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': 'error',
      '@stylistic/type-annotation-spacing': 'error',

      // From ESLint plugin
      ...commonESLintRules,
      'no-underscore-dangle': ['error', { allowAfterThis: true }],

      // From unused-imports plugin
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'warn',

      // From import/order plugin
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          pathGroups: [
            {
              pattern: '@angular',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['external'],
        },
      ],
    },
  },
  {
    name: 'TypeScript Spec Files',
    files: ['./**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'unused-imports/no-unused-vars': 'off',
      '@angular-eslint/prefer-standalone': 'off'
    },
  },
  {
    name: 'TypeScript Story Files',
    files: ['./**/*.stories.ts'],
    rules: {
      '@angular-eslint/prefer-standalone': 'off'
    },
  },
];
