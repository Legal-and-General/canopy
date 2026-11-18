import { TestBed } from '@angular/core/testing';

import { ICON_LOADER } from './icon-loader';
import { LgIconRegistry } from './icon.registry';
import type { IconName } from './ui-icons-files.interface';

describe('LgIconRegistry', () => {
  let registry: LgIconRegistry;

  beforeEach(() => {
    vi.spyOn(ICON_LOADER, 'add').mockResolvedValue({
      name: 'add',
      data: '<svg id="mock-add"><path/></svg>',
    });

    vi.spyOn(ICON_LOADER, 'chevron-right').mockResolvedValue({
      name: 'chevron-right',
      data: '<svg id="mock-chevron-right"><path/></svg>',
    });

    registry = TestBed.inject(LgIconRegistry);
  });

  afterEach(() => {
    vi.restoreAllMocks();
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
    const result = await registry.get('non-existent-icon' as IconName);

    expect(result).toBeUndefined();
  });
});
