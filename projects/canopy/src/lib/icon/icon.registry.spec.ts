import { TestBed } from '@angular/core/testing';

import { LgIconRegistry } from './icon.registry';
import { Icon } from './ui-icons-files.interface';

describe('LgIconRegistry', () => {
  let registry: LgIconRegistry;

  beforeEach(() => {
    registry = TestBed.inject(LgIconRegistry);
  });

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  it('should get a registered icon', async () => {
    const icon = {
      name: 'add',
      data: 'test',
    } as Icon;

    registry['registry'].set(icon.name, icon.data);

    expect(registry['registry'].has(icon.name)).toBe(true);

    expect(await registry.get(icon.name)).toBe(icon.data);
  });

  it('should auto-register an icon when it\'s not in the registry', async () => {
    const unexpectedIcon = 'chevron-right';

    expect(registry['registry'].has(unexpectedIcon)).toBe(false);

    await registry.get(unexpectedIcon);

    expect(registry['registry'].has(unexpectedIcon)).toBe(true);
  });
});
