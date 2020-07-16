import { async, TestBed } from '@angular/core/testing';

import { UniqueSelectionDispatcher } from './unique-selection-dispatcher';

describe('SingleItemDispatcherService', () => {
  const id = '123';
  const context = 'test-zone';

  let dispatcher: UniqueSelectionDispatcher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    dispatcher = TestBed.get(UniqueSelectionDispatcher);
  });

  it('should be created', () => {
    expect(dispatcher).toBeTruthy();
  });

  it('should add listener', async(() => {
    dispatcher.listen((_id: string, _context: string) => {
      expect(_id).toBe(id);
      expect(_context).toBe(context);
    });

    dispatcher.notify(id, context);
  }));

  it('should remove listener', () => {
    const spy = jasmine.createSpy('listener', () => {});
    const removeListener = dispatcher.listen(spy);

    dispatcher.notify(id, context);
    expect(spy).toHaveBeenCalledTimes(1);

    removeListener();
    dispatcher.notify(id, context);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should clear listeners when destroyed', () => {
    const spy = jasmine.createSpy('listener', () => {});
    dispatcher.listen(spy);
    dispatcher.ngOnDestroy();

    dispatcher.notify(id, context);
    expect(spy).not.toHaveBeenCalled();
  });
});
