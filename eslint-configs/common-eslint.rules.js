module.exports = {
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
      ignoredNodes: [ 'PropertyDefinition' ]
    },
  ],
  'key-spacing': 'error',
  'keyword-spacing': 'error',
  'multiline-ternary': [ 'error', 'always' ],
  'no-bitwise': 'error',
  'no-console': [
    'error',
    {
      allow: [ 'warn', 'error', 'info' ],
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
  'no-trailing-spaces': 'error',
  'no-undef-init': 'error',
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
};
