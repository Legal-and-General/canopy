import isExternalURL from './external-links';

describe('#isExternalURL', () => {
  it('should return true when the url is external', () => {
    expect(isExternalURL('http://test.com')).toBe(true);
  });

  it('should return false when the url has the same location origin', () => {
    expect(isExternalURL(`${location.origin}/this-is-an-internal-path`)).toBe(false);
  });

  it('should return false when passing a path is internal', () => {
    expect(isExternalURL('/this-is-an-internal-path')).toBe(false);
  });
});
