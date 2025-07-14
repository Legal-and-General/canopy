const angularTemplatePlugin = require('@angular-eslint/eslint-plugin-template');

module.exports = [
  {
    name: 'Angular Templates',
    files: ['./projects/**/*.component.html'],
    languageOptions: {
      parser: require('@angular-eslint/template-parser'),
    },
    plugins: {
      '@angular-eslint/template': angularTemplatePlugin,
    },
    rules: {
      // Include recommended rules from the template plugin
      ...angularTemplatePlugin.configs.recommended.rules,

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
