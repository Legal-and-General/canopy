module.exports = {
  'projects/canopy/src/**/*.json': [
    'prettier --write',
    'git add'
  ],
  'projects/canopy/src/**/*.{scss, css}': [
    'prettier --write',
    'stylelint --fix',
    'git add'
  ],
  'projects/canopy/src/**/*.{ts, js, component.html}': [
    'prettier --write',
    'eslint --fix',
    'git add'
  ],
  'projects/canopy-test-app/src/**/*.{scss, css}': [
    'prettier --write',
    'stylelint --fix',
    'git add'
  ],
  'projects/canopy-test-app/src/**/*.{ts, js, component.html}': [
    'prettier --write',
    'eslint --fix',
    'git add'
  ]
};
