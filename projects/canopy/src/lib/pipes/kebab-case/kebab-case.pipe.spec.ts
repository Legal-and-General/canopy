import { LgKebabCasePipe } from './kebab-case.pipe';

describe('LgKebabCasePipe', () => {
  let pipe: LgKebabCasePipe;

  beforeEach(() => {
    pipe = new LgKebabCasePipe();
  });

  it('should return the input if the input string is falsy', () => {
    expect(pipe.transform(null)).toBeNull();
    expect(pipe.transform(undefined)).toBeUndefined();
    expect(pipe.transform('')).toBe('');
  });

  it('should return the input in kebab case', () => {
    expect(pipe.transform('kebab case test')).toBe('kebab-case-test');
    expect(pipe.transform('Kebab Case Test')).toBe('kebab-case-test');
    expect(pipe.transform('fooBar')).toBe('foo-bar');
    expect(pipe.transform('fooBarTest')).toBe('foo-bar-test');
    expect(pipe.transform('__FOO_BAR__')).toBe('foo-bar');
    expect(pipe.transform('FOO--BAR')).toBe('foo-bar');
    expect(pipe.transform('foo-Bar_Test_test')).toBe('foo-bar-test-test');
    expect(pipe.transform('fOo-BaRTest_test')).toBe('f-oo-ba-rtest-test');
  });
});
