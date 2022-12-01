module.exports = {
  files: [ './projects/**/*.component.html' ],
  extends: [ 'plugin:@angular-eslint/template/recommended' ],
  rules: {
    '@angular-eslint/template/accessibility-alt-text': 'error',
    '@angular-eslint/template/accessibility-elements-content': 'error',
    '@angular-eslint/template/accessibility-label-for': 'warn',
    '@angular-eslint/template/accessibility-label-has-associated-control': 'warn',
    '@angular-eslint/template/accessibility-table-scope': 'error',
    '@angular-eslint/template/accessibility-valid-aria': 'error',
    '@angular-eslint/template/button-has-type': 'warn',
    '@angular-eslint/template/no-distracting-elements': 'error',
    '@angular-eslint/template/no-duplicate-attributes': 'error',
    '@angular-eslint/template/no-negated-async': 'warn',
    '@angular-eslint/template/no-positive-tabindex': 'error',
  },
}
