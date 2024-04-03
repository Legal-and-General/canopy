module.exports = {
  files: [ './projects/**/*.component.html' ],
  extends: [ 'plugin:@angular-eslint/template/recommended' ],
  rules: {
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
}
