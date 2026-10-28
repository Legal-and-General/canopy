import { afterEach, beforeEach } from 'node:test';

// Silences the informational console output emitted by the metadata CLIs so it
// never pollutes or influences test reporting. Call once per test file.
export const silenceConsole = (methods = ['info', 'error']) => {
  const original = {};
  beforeEach(() => {
    for (const method of methods) {
      original[method] = console[method];
      console[method] = () => {};
    }
  });
  afterEach(() => {
    for (const method of methods) {
      console[method] = original[method];
    }
  });
};
