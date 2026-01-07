module.exports = {
  preset: 'jest-preset-angular',
  collectCoverage: true,
  coverageReporters: ['json-summary', 'text-summary', 'html'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    // Exclude auto-generated icon loader files from coverage
    'icon-loader\\.ts$',
    'brand-icon-loader\\.ts$',
    // Exclude auto-generated icon files from coverage
    '/ui-icons-files/',
    '/brand-icons-files/',
  ],
  globals: {},
  moduleDirectories: ['node_modules', '<rootDir>/projects/canopy'],
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  modulePaths: ['<rootDir>', './'],
  passWithNoTests: true,
  setupFilesAfterEnv: ['<rootDir>/projects/canopy/test-setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/projects/canopy/**/?(*.)+(spec).ts?(x)'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/projects/canopy/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
};

