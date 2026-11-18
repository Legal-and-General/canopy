import { TestBed } from '@angular/core/testing';

import { ICON_LOADER } from './flag-icon-loader';
import { LgFlagIconRegistry } from './flag-icon.registry';
import type { FlagIconName } from './flag-icons-files.interface';

describe('LgFlagIconRegistry', () => {
  let registry: LgFlagIconRegistry;

  beforeEach(() => {
    vi.spyOn(ICON_LOADER, 'united-kingdom').mockResolvedValue({
      name: 'united-kingdom',
      data: '<svg id="mock-united-kingdom"><path/></svg>',
    });

    vi.spyOn(ICON_LOADER, 'france').mockResolvedValue({
      name: 'france',
      data: '<svg id="mock-france"><path/></svg>',
    });

    registry = TestBed.inject(LgFlagIconRegistry);
  });

  afterEach(() => {
    vi.restoreAllMocks();
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
    const result = await registry.get('non-existent-flag-icon' as FlagIconName);

    expect(result).toBeUndefined();
  });
});
