import { TestBed } from '@angular/core/testing';

import { LgPictogramRegistry } from './pictogram.registry';

// Mock auto-generated pictogram-loader file
const KNOWN_PICTOGRAMS = [ 'sun', 'cookies-and-arrows' ];

jest.mock('./pictogram-loader', () => ({
  PICTOGRAM_LOADER: new Proxy(
    {},
    {
      get: (_target, iconName: string) => {
        // Only return a loader for known pictograms, undefined for others
        if (KNOWN_PICTOGRAMS.includes(iconName)) {
          return () =>
            Promise.resolve({
              name: iconName,
              data: `<svg id="mock-${iconName}"><path/></svg>`,
            });
        }

        return undefined;
      },
    },
  ),
}));

describe('LgPictogramRegistry', () => {
  let registry: LgPictogramRegistry;

  beforeEach(() => {
    registry = TestBed.inject(LgPictogramRegistry);
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get a pictogram from the registry', async () => {
    const result = await registry.get('sun' as any);

    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toContain('svg');
  });

  it('should cache icons after first load', async () => {
    const firstResult = await registry.get('cookies-and-arrows' as any);
    const secondResult = await registry.get('cookies-and-arrows' as any);

    expect(firstResult).toBe(secondResult);
    expect(registry['registry'].has('cookies-and-arrows' as any)).toBe(true);
  });

  it('should return undefined for non-existent pictograms', async () => {
    const result = await registry.get('non-existent-pictogram' as any);

    expect(result).toBeUndefined();
  });
});
