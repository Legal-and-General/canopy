import { TestBed } from '@angular/core/testing';

import { LgIconRegistry } from './icon.registry';
import { Icon } from './ui-icons-files.interface';

// Mock dynamic imports for this test file
jest.mock(
  '../ui-icons-files/set/lgIcon-chevron-right.icon',
  () => ({
    lgIconChevronRight: {
      name: 'chevron-right',
      data: 'mock-svg-data',
    },
  }),
  { virtual: true },
);

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

    const result = await registry.get(unexpectedIcon);

    expect(registry['registry'].has(unexpectedIcon)).toBe(true);
    expect(result).toBe('mock-svg-data');
  });
});
