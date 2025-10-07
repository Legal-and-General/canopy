import { TestBed, waitForAsync } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { LgModalService } from './';

describe('LgModalService', () => {
  const id = 'test-1';
  let service: LgModalService;
  let subscription: Subscription;

  beforeEach(waitForAsync(() => {
    service = TestBed.inject(LgModalService);
  }));

  beforeEach(() => {
    service.add(id);
  });

  afterEach(() => {
    subscription?.unsubscribe();
    jest.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should push true to the state of the specific modal when calling the #open fn', done => {
    service.open(id);

    subscription = service['states'].get(id).subscribe(data => {
      expect(data).toBe(true);
      done();
    });
  });

  it('should push false to the state of the specific modal when calling the #close fn', done => {
    service.close(id);

    subscription = service['states'].get(id).subscribe(data => {
      expect(data).toBe(false);
      done();
    });
  });

  describe('isOpen$', () => {
    it('should return the state observable for the specific modal', done => {
      service['states'].get(id).next(true);

      subscription = service.isOpen$(id).subscribe(data => {
        expect(data).toBe(true);
        done();
      });
    });

    it('should call #add when the modal doesn\'t exist', done => {
      const addSpy = jest.spyOn(service, 'add');

      subscription = service.isOpen$('test-2').subscribe(data => {
        expect(addSpy).toHaveBeenCalledWith('test-2');
        expect(data).toBeUndefined();
        done();
      });
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

    const closeSpy = jest.spyOn(service, 'close');

    service.remove(id);

    expect(closeSpy).toHaveBeenCalledWith(id);
    expect(service['states'].has(id)).toBe(false);
  });
});
