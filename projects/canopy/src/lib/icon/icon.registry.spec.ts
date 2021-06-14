import { TestBed } from '@angular/core/testing';

import { LgIconRegistry } from './icon.registry';
import { Icon } from './icons.interface';

describe('LgIconRegistry', () => {
  let registry: LgIconRegistry;

  beforeEach(() => {
    registry = TestBed.inject(LgIconRegistry);
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get a registered icon', () => {
    const icon = {
      name: 'add',
      data: 'test',
    } as Icon;

    expect(registry.getIcon(icon.name)).toBeUndefined();

    registry.registerIcons([icon]);

    expect(registry.getIcon(icon.name)).toBe(icon.data);
  });

  it('should warn when an icon is not in the registry', () => {
    const unexpectedIcon = 'chevron-right';
    const spy = spyOn(console, 'warn');

    expect(registry.getIcon(unexpectedIcon)).toBeUndefined();
    expect(spy).toHaveBeenCalledWith(
      `${unexpectedIcon}: Icon not found, ensure it is added to the icon registry`,
    );
  });
});
