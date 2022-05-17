module.exports = {
  'projects/canopy/src/**/*.svg': [
    'npm run build:icons',
    'git add'
  ],
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
  ]
};
