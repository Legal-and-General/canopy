import { TestBed } from '@angular/core/testing';

import { LgFlagIconRegistry } from './flag-icon.registry';

// Mock auto-generated flag-icon-loader file
const KNOWN_FLAG_ICONS = [ 'united-kingdom', 'france' ];

jest.mock('./flag-icon-loader', () => ({
  ICON_LOADER: new Proxy(
    {},
    {
      get: (_target, iconName: string) => {
        // Only return a loader for known flag icons, undefined for others
        if (KNOWN_FLAG_ICONS.includes(iconName)) {
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

describe('LgFlagIconRegistry', () => {
  let registry: LgFlagIconRegistry;

  beforeEach(() => {
    registry = TestBed.inject(LgFlagIconRegistry);
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get a flag icon from the registry', async () => {
    const result = await registry.get('united-kingdom');

    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toContain('svg');
  });

  it('should cache icons after first load', async () => {
    const firstResult = await registry.get('france');
    const secondResult = await registry.get('france');

    expect(firstResult).toBe(secondResult);
    expect(registry['registry'].has('france')).toBe(true);
  });

  it('should return undefined for non-existent flag icons', async () => {
    const result = await registry.get('non-existent-flag-icon' as any);

    expect(result).toBeUndefined();
  });
});
