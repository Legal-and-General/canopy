import { TestBed, waitForAsync } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { LgModalService } from './';

describe('LgModalService', () => {
  const id = 'test-1';
  let service: LgModalService;

  beforeEach(waitForAsync(() => {
    service = TestBed.inject(LgModalService);
  }));

  beforeEach(() => {
    service.add(id);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should push true to the state of the specific modal when calling the #open fn', async () => {
    service.open(id);

    expect(await firstValueFrom(service['states'].get(id))).toBe(true);
  });

  it('should push false to the state of the specific modal when calling the #close fn', async () => {
    service.close(id);

    expect(await firstValueFrom(service['states'].get(id))).toBe(false);
  });

  describe('isOpen$', () => {
    it('should return the state observable for the specific modal', async () => {
      service['states'].get(id).next(true);

      expect(await firstValueFrom(service.isOpen$(id))).toBe(true);
    });

    it('should call #add when the modal doesn\'t exist', async () => {
      const addSpy = vi.spyOn(service, 'add');
      const state = await firstValueFrom(service.isOpen$('test-2'));

      expect(addSpy).toHaveBeenCalledWith('test-2');
      expect(state).toBeUndefined();
    });
  });

  it('should add a new item to the map when calling #add', () => {
    expect(service['states'].has(id)).toBe(true);
    expect(service['states'].has('test-2')).toBe(false);

    service.add('test-2');

    expect(service['states'].has(id)).toBe(true);
    expect(service['states'].has('test-2')).toBe(true);
  });

  it('should call #close and remove an item from the map when calling #remove', () => {
    expect(service['states'].has(id)).toBe(true);

    const closeSpy = vi.spyOn(service, 'close');

    service.remove(id);

    expect(closeSpy).toHaveBeenCalledWith(id);
    expect(service['states'].has(id)).toBe(false);
  });
});
