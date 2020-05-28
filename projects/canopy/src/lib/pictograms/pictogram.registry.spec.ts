import { TestBed } from '@angular/core/testing';
import { LgPictogramRegistry } from './pictogram.registry';
import { Pictogram } from './pictograms.interface';

describe('LgPictogramRegistry', () => {
  let registry: LgPictogramRegistry;

  beforeEach(() => {
    registry = TestBed.get(LgPictogramRegistry);
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get a registered pictogram', () => {
    const pictogram = {
      name: 'sun',
      data: 'test'
    } as Pictogram;

    expect(registry.getPictogram(pictogram.name)).toBeUndefined();

    registry.registerPictogram([pictogram]);

    expect(registry.getPictogram(pictogram.name)).toBe(pictogram.data);
  });

  it('should warn when an pictogram is not in the registry', () => {
    const unexpectedPictogram = 'cookies-and-arrows';
    const spy = spyOn(console, 'warn');

    expect(registry.getPictogram(unexpectedPictogram)).toBeUndefined();
    expect(spy).toHaveBeenCalledWith(
      `${unexpectedPictogram}: Pictogram not found, ensure it is added to the pictogram registry`
    );
  });
});
