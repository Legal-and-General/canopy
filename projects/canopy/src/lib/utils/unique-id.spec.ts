import { randomUniqueId } from './unique-id';

describe('randomUniqueId', () => {
  it('should return a string of exactly 7 characters', () => {
    expect(randomUniqueId()).toHaveLength(7);
  });

  it('should return only alphanumeric characters (base-36)', () => {
    expect(randomUniqueId()).toMatch(/^[0-9a-z]{7}$/);
  });

  it('should return different values on consecutive calls', () => {
    const ids = new Set(Array.from({ length: 20 }, () => randomUniqueId()));

    expect(ids.size).toBe(20);
  });
});
