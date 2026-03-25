'use strict';

const { kebabCase } = require('../utils.cjs');

describe('kebabCase', () => {
  it('should replace forward slashes with hyphens', () => {
    expect(kebabCase('feature/my-feature')).toBe('feature-my-feature');
  });

  it('should handle multiple slashes', () => {
    expect(kebabCase('feat/scope/my-feature')).toBe('feat-scope-my-feature');
  });

  it('should return the string unchanged when there are no slashes', () => {
    expect(kebabCase('master')).toBe('master');
  });
});

