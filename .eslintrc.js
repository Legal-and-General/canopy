// Use Typescript compilation to provide errors based on typing
// See: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md

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
  overrides: [
    // Typescript files
    {
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
        '@angular-eslint/component-class-suffix': 'error',
        '@angular-eslint/directive-class-suffix': 'error',
        '@angular-eslint/no-host-metadata-property': 'error',
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/no-output-native': 'warn',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',

        // From Typescript ESLint plugin

        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic',
          },
        ],
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
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
          },
        ],
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/quotes': [
          'error',
          'single',
        ],
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unbound-method': 'off',

        // From ESLint plugin

        'array-bracket-spacing': [ 'error', 'always' ],
        'arrow-parens': [
          'error',
          'as-needed',
        ],
        'arrow-spacing': [
          'error',
          {
            after: true,
            before: true,
          },
        ],
        'brace-style': [
          'error',
          '1tbs',
        ],
        'comma-dangle': [
          'error',
          'always-multiline',
        ],
        'comma-spacing': [
          'error',
          {
            after: true,
            before: false,
          },
        ],
        'computed-property-spacing': 'error',
        curly: 'error',
        eqeqeq: [
          'error',
          'smart',
        ],
        'guard-for-in': 'error',
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
            MemberExpression: 1,
          },
        ],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'multiline-ternary': [ 'error', 'always' ],
        'no-console': [
          'error',
          {
            allow: [ 'warn', 'error' ],
          },
        ],
        'no-eval': 'error',
        'no-multiple-empty-lines': 'error',
        'no-multi-spaces': 'error',
        'no-new-wrappers': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unused-expressions': 'error',
        'no-var': 'error',
        'object-curly-spacing': [ 'error', 'always' ],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'return' },
          { blankLine: 'always', prev: [ 'const', 'let' ], next: '*' },
          { blankLine: 'any', prev: [ 'const', 'let' ], next: [ 'const', 'let' ] },
          { blankLine: 'always', prev: '*', next: 'block-like' },
          { blankLine: 'always', prev: 'block-like', next: '*' },
          { blankLine: 'always', prev: '*', next: 'multiline-expression' },
          { blankLine: 'always', prev: 'multiline-expression', next: '*' },
        ],
        'prefer-const': 'error',
        'quote-props': [
          'error',
          'as-needed',
        ],
        'rest-spread-spacing': 'error',
        'semi-spacing': 'error',
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'never',
            asyncArrow: 'always',
            named: 'never',
          },
        ],
        'space-infix-ops': 'error',
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',

        // From unused-imports plugin

        'unused-imports/no-unused-imports-ts': 'error',
        'unused-imports/no-unused-vars-ts': 'warn',

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
          files: [ './projects/**/*.spec.ts' ],
          rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off'
          },
        },
        {
          files: [ './projects/**/*.stories.ts' ],
          rules: {
            'arrow-parens': 'off',
          },
        },
      ],
    },

    // Component HTML files
    {
      files: [ './projects/**/*.component.html' ],
      parser: '@angular-eslint/template-parser',
      rules: {
        '@angular-eslint/template/accessibility-alt-text': 'error',
        '@angular-eslint/template/accessibility-elements-content': 'error',
        '@angular-eslint/template/no-positive-tabindex': 'error',
        '@angular-eslint/template/accessibility-table-scope': 'error',
        '@angular-eslint/template/accessibility-valid-aria': 'error',
        '@angular-eslint/template/no-distracting-elements': 'error',
      },
    },

    // Javascript files
    {
      extends: [ 'eslint:recommended' ],
      files: [ './projects/**/*.js', './.eslintrc.js' ],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        'array-bracket-spacing': [ 'error', 'always' ],
        'arrow-parens': [
          'error',
          'as-needed',
        ],
        'arrow-spacing': [
          'error',
          {
            after: true,
            before: true,
          },
        ],
        'block-spacing': 'error',
        'brace-style': [
          'error',
          '1tbs',
        ],
        'comma-dangle': [
          'error',
          'always-multiline',
        ],
        'comma-spacing': [
          'error',
          {
            after: true,
            before: false,
          },
        ],
        'computed-property-spacing': 'error',
        'constructor-super': 'error',
        curly: 'error',
        'eol-last': 'error',
        eqeqeq: [
          'error',
          'smart',
        ],
        'guard-for-in': 'error',
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
            MemberExpression: 1,
          },
        ],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'max-len': 'off', // Prettier fixes what it can
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-console': [
          'error',
          {
            allow: [
              'warn',
              'error',
            ],
          },
        ],
        'no-eval': 'error',
        'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1 } ],
        'no-multi-spaces': 'error',
        'no-new-wrappers': 'error',
        'no-restricted-imports': [
          'error',
          'rxjs/Rx',
          'rxjs/internal/operators',
        ],
        'no-shadow': [
          'error',
          {
            hoist: 'all',
          },
        ],
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-var': 'error',
        'object-curly-spacing': [ 'error', 'always' ],
        'prefer-const': 'error',
        'quote-props': [
          'error',
          'as-needed',
        ],
        radix: 'error',
        'rest-spread-spacing': 'error',
        'semi-spacing': 'error',
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'never',
            asyncArrow: 'always',
            named: 'never',
          },
        ],
        'space-infix-ops': 'error',
        'spaced-comment': [
          'error',
          'always',
          {
            markers: [
              '/',
            ],
          },
        ],
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
      },
    },
  ],
};
