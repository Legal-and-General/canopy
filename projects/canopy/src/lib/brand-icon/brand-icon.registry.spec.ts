import { TestBed } from '@angular/core/testing';

import { LgBrandIconRegistry } from './brand-icon.registry';

// Mock auto-generated brand-icon-loader file
const KNOWN_BRAND_ICONS = [ 'sun', 'cookies-and-arrows' ];

jest.mock('./brand-icon-loader', () => ({
  ICON_LOADER: new Proxy(
    {},
    {
      get: (_target, iconName: string) => {
        // Only return a loader for known brand icons, undefined for others
        if (KNOWN_BRAND_ICONS.includes(iconName)) {
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

describe('LgBrandIconRegistry', () => {
  let registry: LgBrandIconRegistry;

  beforeEach(() => {
    registry = TestBed.inject(LgBrandIconRegistry);
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get a brand icon from the registry', async () => {
    const result = await registry.get('sun');

    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toContain('svg');
  });

  it('should cache icons after first load', async () => {
    const firstResult = await registry.get('cookies-and-arrows');
    const secondResult = await registry.get('cookies-and-arrows');

    expect(firstResult).toBe(secondResult);
    expect(registry['registry'].has('cookies-and-arrows')).toBe(true);
  });

  it('should return undefined for non-existent brand icons', async () => {
    const result = await registry.get('non-existent-brand-icon' as any);

    expect(result).toBeUndefined();
  });
});
