import { TestBed } from '@angular/core/testing';

import { PICTOGRAM_LOADER } from './pictogram-loader';
import { LgPictogramRegistry } from './pictogram.registry';
import type { PictogramName } from './pictogram-files.interface';

describe('LgPictogramRegistry', () => {
  let registry: LgPictogramRegistry;

  beforeEach(() => {
    vi.spyOn(PICTOGRAM_LOADER, 'accessible').mockResolvedValue({
      name: 'accessible',
      data: '<svg id="mock-accessible"><path/></svg>',
    });

    vi.spyOn(PICTOGRAM_LOADER, 'aeroplane').mockResolvedValue({
      name: 'aeroplane',
      data: '<svg id="mock-aeroplane"><path/></svg>',
    });

    registry = TestBed.inject(LgPictogramRegistry);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get a pictogram from the registry', async () => {
    const result = await registry.get('accessible');

    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toContain('svg');
  });

  it('should cache icons after first load', async () => {
    const firstResult = await registry.get('aeroplane');
    const secondResult = await registry.get('aeroplane');

    expect(firstResult).toBe(secondResult);
    expect(registry['registry'].has('aeroplane')).toBe(true);
  });

  it('should return undefined for non-existent pictograms', async () => {
    const result = await registry.get('non-existent-pictogram' as PictogramName);

    expect(result).toBeUndefined();
  });
});
