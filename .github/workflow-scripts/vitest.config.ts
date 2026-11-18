import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'workflow-scripts',
    environment: 'node',
    globals: true,
    include: [ '.github/workflow-scripts/**/__tests__/**/*.spec.cjs' ],
    maxWorkers: 2,
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage/workflow-scripts',
      reporter: [ 'html', 'text-summary' ],
      include: [ '.github/workflow-scripts/**/*.cjs' ],
      exclude: [ '**/__tests__/**', '**/node_modules/**' ],
    },
  },
});
