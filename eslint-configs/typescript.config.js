import commonESLintRules from './common-eslint.rules.js';
import angularESLint from 'angular-eslint';
import tseslint from 'typescript-eslint';
import jestEslint from 'eslint-plugin-jest';
import stylisticESLintPlugin from '@stylistic/eslint-plugin';
import importESLintPlugin from 'eslint-plugin-import';
import unusedImportsESLintPlugin from 'eslint-plugin-unused-imports';

// `angular-eslint` and `typescript-eslint` ship their recommended rules as an
// array of flat config objects rather than a single `configs.recommended`
// object, so merge the `rules` from each entry into one object.
const mergeRules = (configs) =>
  configs.reduce((rules, config) => ({ ...rules, ...(config.rules ?? {}) }), {});

export default [
  {
    name: 'Typescript',
    files: ['./projects/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@angular-eslint': angularESLint.tsPlugin,
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylisticESLintPlugin,
      import: importESLintPlugin,
      'unused-imports': unusedImportsESLintPlugin,
      jest: jestEslint,
    },
    rules: {
      // Include recommended rules from each plugin
      ...mergeRules(angularESLint.configs.tsRecommended),
      ...mergeRules(tseslint.configs.recommendedTypeChecked),

      // From Angular ESLint plugin
      '@angular-eslint/no-output-native': 'warn',
      // Preserve existing change detection strategies rather than requiring
      // a migration to `OnPush`, which would be a breaking behavioural
      // change.
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
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
      '@angular-eslint/prefer-standalone': 'off',
      // ESLint's type-aware linting uses the root tsconfig.json, whereas
      // ts-jest compiles specs against projects/canopy/tsconfig.spec.json;
      // the two disagree on whether `as unknown as jest.Mocked<T>` mock
      // casts are "unnecessary", so disable the rule here to avoid removing
      // casts that are actually required at test-compile time.
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
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
