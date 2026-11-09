import angularESLint from 'angular-eslint';

// `angular-eslint` ships its recommended rules as an array of flat config
// objects rather than a single `configs.recommended` object, so merge the
// `rules` from each entry into one object.
const mergeRules = (configs) =>
  configs.reduce((rules, config) => ({ ...rules, ...(config.rules ?? {}) }), {});

export default [
  {
    name: 'Angular Templates',
    files: ['./projects/**/*.component.html'],
    languageOptions: {
      parser: angularESLint.templateParser,
    },
    plugins: {
      '@angular-eslint/template': angularESLint.templatePlugin,
    },
    rules: {
      // Include recommended rules from the template plugin
      ...mergeRules(angularESLint.configs.templateRecommended),

      // Custom rules
      '@angular-eslint/template/alt-text': 'error',
      '@angular-eslint/template/elements-content': 'error',
      '@angular-eslint/template/label-has-associated-control': 'warn',
      '@angular-eslint/template/table-scope': 'error',
      '@angular-eslint/template/valid-aria': 'error',
      '@angular-eslint/template/button-has-type': 'warn',
      '@angular-eslint/template/no-distracting-elements': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/no-negated-async': 'warn',
      '@angular-eslint/template/no-positive-tabindex': 'error',
    },
  },
];
