import { LgCamelCasePipe } from './camel-case.pipe';

describe('LgCamelCasePipe', () => {
  let pipe: LgCamelCasePipe;

  beforeEach(() => {
    pipe = new LgCamelCasePipe();
  });

  it('should return the input if the input string is falsy', () => {
    expect(pipe.transform(null)).toBeNull();
    expect(pipe.transform(undefined)).toBeUndefined();
    expect(pipe.transform('')).toBe('');
  });

  it('should return the input in camel case', () => {
    expect(pipe.transform('camel case test')).toBe('camelCaseTest');
    expect(pipe.transform('camel-case-test')).toBe('camelCaseTest');
  });
});
