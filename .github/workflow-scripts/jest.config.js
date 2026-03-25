export default {
  displayName: 'workflow-scripts',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.spec.cjs'],
  collectCoverageFrom: [
    '**/*.cjs',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
  coverageDirectory: '../../coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['html', 'text-summary'],
};

