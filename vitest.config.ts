import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    isolate: true,
    maxWorkers: 2,
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: [ 'json-summary', 'text-summary', 'html' ],
      exclude: [
        '**/*icon-loader.ts',
        '**/pictogram-loader.ts',
        '**/ui-icons-files/**',
        '**/pictogram-files/**',
        '**/flag-icons-files/**',
      ],
    },
  },
});
