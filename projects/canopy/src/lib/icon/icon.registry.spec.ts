import { TestBed } from '@angular/core/testing';

import { LgIconRegistry } from './icon.registry';

// Mock auto-generated icon-loader file
const KNOWN_ICONS = [ 'add', 'chevron-right' ];

jest.mock('./icon-loader', () => ({
  ICON_LOADER: new Proxy(
    {},
    {
      get: (_target, iconName: string) => {
        // Only return a loader for known icons, undefined for others
        if (KNOWN_ICONS.includes(iconName)) {
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

describe('LgIconRegistry', () => {
  let registry: LgIconRegistry;

  beforeEach(() => {
    registry = TestBed.inject(LgIconRegistry);
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get an icon from the registry', async () => {
    const result = await registry.get('add');

    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toContain('svg');
  });

  it('should cache icons after first load', async () => {
    const firstResult = await registry.get('chevron-right');
    const secondResult = await registry.get('chevron-right');

    expect(firstResult).toBe(secondResult);
    expect(registry['registry'].has('chevron-right')).toBe(true);
  });

  it('should return undefined for non-existent icons', async () => {
    const result = await registry.get('non-existent-icon' as any);

    expect(result).toBeUndefined();
  });
});
