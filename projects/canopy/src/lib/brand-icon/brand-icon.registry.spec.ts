import { TestBed } from '@angular/core/testing';

import { LgBrandIconRegistry } from './brand-icon.registry';
import { BrandIcon } from './brand-icons.interface';

describe('LgBrandIconRegistry', () => {
  let registry: LgBrandIconRegistry;

  beforeEach(() => {
    registry = TestBed.inject(LgBrandIconRegistry);
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get a registered brand-icon', () => {
    const icon = {
      name: 'sun',
      data: 'test',
    } as BrandIcon;

    expect(registry.getBrandIcon(icon.name)).toBeUndefined();

    registry.registerBrandIcon([ icon ]);

    expect(registry.getBrandIcon(icon.name)).toBe(icon.data);
  });

  it('should warn when an brand icon is not in the registry', () => {
    const unexpectedBrandIcon = 'cookies-and-arrows';
    const spy = spyOn(console, 'warn');

    expect(registry.getBrandIcon(unexpectedBrandIcon)).toBeUndefined();

    expect(spy).toHaveBeenCalledWith(
      `${unexpectedBrandIcon}: Brand icon not found, ensure it is added to the brand icon registry`,
    );
  });
});
