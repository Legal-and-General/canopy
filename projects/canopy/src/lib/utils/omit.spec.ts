import omit from './omit';

describe('omit', () => {
  it('removes the name field from the object', () => {
    expect(omit({ one: true, two: true }, 'two')).toEqual({
      one: true,
    });
  });

  it('returns falsy values without modifying them', () => {
    expect(omit(null, 'two')).toBe(null);
  });

  it('returns null if the last key was removed', () => {
    expect(omit({ one: true }, 'one')).toBe(null);
  });
});
