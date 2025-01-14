import { TestBed } from '@angular/core/testing';

import { LgBrandIconRegistry } from './brand-icon.registry';
import { BrandIcon } from './brand-icons-files.interface';

describe('LgBrandIconRegistry', () => {
  let registry: LgBrandIconRegistry;

  beforeEach(() => {
    registry = TestBed.inject(LgBrandIconRegistry);
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get a registered brand-icon', async () => {
    const icon = {
      name: 'sun',
      data: 'test',
    } as BrandIcon;

    registry['registry'].set(icon.name, icon.data);

    expect(registry['registry'].has(icon.name)).toBe(true);

    expect(await registry.get(icon.name)).toBe(icon.data);
  });

  it('should auto-register a brand icon when it\'s not in the registry', async () => {
    const unexpectedBrandIcon = 'cookies-and-arrows';

    expect(registry['registry'].has(unexpectedBrandIcon)).toBe(false);

    await registry.get(unexpectedBrandIcon);

    expect(registry['registry'].has(unexpectedBrandIcon)).toBe(true);
  });
});
