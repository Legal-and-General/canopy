import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { LgModalService } from '../modal.service';

import { LgModalTriggerDirective } from './modal-trigger.directive';

@Component({
  template: ' <button lgModalTrigger="test" id="modal-trigger">Open modal</button> ',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ LgModalTriggerDirective ],
})
class TestTriggerComponent {}

describe('LgModalTriggerComponent', () => {
  let fixture: ComponentFixture<TestTriggerComponent>;
  let triggerDebugElement: DebugElement;
  let triggerInstance: LgModalTriggerDirective;
  let modalServiceMock: jest.Mocked<LgModalService>;
  let focusSpy: jest.SpyInstance;
  const isOpen$ = new BehaviorSubject(true);

  beforeEach(waitForAsync(() => {
    modalServiceMock = {
      isOpen$: jest.fn(),
      open: jest.fn(),
    } as unknown as jest.Mocked<LgModalService>;

    modalServiceMock.isOpen$.mockReturnValue(isOpen$);

    TestBed.configureTestingModule({
      imports: [ LgModalTriggerDirective, TestTriggerComponent ],
      providers: [ { provide: LgModalService, useValue: modalServiceMock } ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestTriggerComponent);

    triggerDebugElement = fixture.debugElement.query(
      By.directive(LgModalTriggerDirective),
    );

    triggerInstance = triggerDebugElement.injector.get<LgModalTriggerDirective>(
      LgModalTriggerDirective,
    );

    focusSpy = jest.spyOn(triggerDebugElement.nativeElement, 'focus');

    fixture.detectChanges();
  }));

  it('should open the modal on click of the trigger element', () => {
    const clickedSpy = jest.spyOn(triggerInstance.clicked, 'emit');

    triggerDebugElement.nativeElement.click();

    expect(triggerInstance['allowFocusOnModalTrigger']).toBe(true);
    expect(modalServiceMock.open).toHaveBeenNthCalledWith(1, 'test');
    expect(clickedSpy).toHaveBeenCalledTimes(1);
  });

  it('should set the focus on the trigger when the modal is closed', () => {
    triggerInstance['allowFocusOnModalTrigger'] = true;
    isOpen$.next(false);

    expect(focusSpy).toHaveBeenCalledTimes(1);
  });

  it('shouldn\'t set the focus on the trigger when the modal is open', () => {
    triggerInstance['allowFocusOnModalTrigger'] = true;
    isOpen$.next(true);

    expect(focusSpy).toHaveBeenCalledTimes(0);
  });

  it('shouldn\'t set the focus on the trigger if the modal has just been initialised', () => {
    triggerInstance['allowFocusOnModalTrigger'] = false;
    isOpen$.next(false);

    expect(focusSpy).toHaveBeenCalledTimes(0);
  });
});
