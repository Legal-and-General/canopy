import { TestBed, waitForAsync } from '@angular/core/testing';
import { spy, verify } from '@typestrong/ts-mockito/ts-mockito';
import { Subscription } from 'rxjs';

import { LgModalService } from './';

describe('LgModalService', () => {
  const id = 'test-1';
  let service: LgModalService;
  let serviceSpy: LgModalService;
  let subscription: Subscription;

  beforeEach(waitForAsync(() => {
    service = TestBed.inject(LgModalService);
  }));

  beforeEach(() => {
    serviceSpy = spy(service);
    service.add(id);
  });

  afterEach(() => {
    subscription?.unsubscribe();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should push true to the state of the specific modal when calling the #open fn', (done: DoneFn) => {
    service.open(id);

    subscription = service['states'].get(id).subscribe(data => {
      expect(data).toBeTrue();
      done();
    });
  });

  it('should push false to the state of the specific modal when calling the #close fn', (done: DoneFn) => {
    service.close(id);

    subscription = service['states'].get(id).subscribe(data => {
      expect(data).toBeFalse();
      done();
    });
  });

  describe('isOpen$', () => {
    it('should return the state observable for the specific modal', (done: DoneFn) => {
      service['states'].get(id).next(true);

      subscription = service.isOpen$(id).subscribe(data => {
        expect(data).toBeTrue();
        done();
      });
    });

    it('should call #add when the modal doesn\'t exist', (done: DoneFn) => {
      subscription = service.isOpen$('test-2').subscribe(data => {
        verify(serviceSpy.add('test-2')).once();

        expect(data).toBeFalse();
        done();
      });
    });
  });

  it('should add a new item to the map when calling #add', () => {
    expect(service['states'].has(id)).toBeTrue();
    expect(service['states'].has('test-2')).toBeFalse();

    service.add('test-2');

    expect(service['states'].has(id)).toBeTrue();
    expect(service['states'].has('test-2')).toBeTrue();
  });

  it('should call #close and remove an item from the map when calling #remove', () => {
    expect(service['states'].has(id)).toBeTrue();

    service.remove(id);

    verify(serviceSpy.close(id)).once();

    expect(service['states'].has(id)).toBeFalse();
  });
});
