import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { anything, instance, mock, verify, when } from '@typestrong/ts-mockito';
import { BehaviorSubject } from 'rxjs';

import { LgModalService } from '../modal.service';

import { LgModalTriggerDirective } from './modal-trigger.directive';

@Component({
  template: ' <button lgModalTrigger="test" id="modal-trigger">Open modal</button> ',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestTriggerComponent {}

describe('LgModalTriggerComponent', () => {
  let fixture: ComponentFixture<TestTriggerComponent>;
  let triggerDebugElement: DebugElement;
  let triggerInstance: LgModalTriggerDirective;
  let modalServiceMock: LgModalService;
  let focusSpy: jasmine.Spy;
  const isOpen$ = new BehaviorSubject(true);

  beforeEach(waitForAsync(() => {
    modalServiceMock = mock(LgModalService);

    TestBed.configureTestingModule({
      declarations: [ LgModalTriggerDirective, TestTriggerComponent ],
      providers: [ { provide: LgModalService, useValue: instance(modalServiceMock) } ],
    }).compileComponents();

    when(modalServiceMock.isOpen$(anything())).thenReturn(isOpen$);

    fixture = TestBed.createComponent(TestTriggerComponent);

    triggerDebugElement = fixture.debugElement.query(
      By.directive(LgModalTriggerDirective),
    );

    triggerInstance = triggerDebugElement.injector.get<LgModalTriggerDirective>(
      LgModalTriggerDirective,
    );

    focusSpy = spyOn(triggerDebugElement.nativeElement, 'focus');

    fixture.detectChanges();
  }));

  it('should open the modal on click of the trigger element', () => {
    const clickedSpy = spyOn(triggerInstance.clicked, 'emit');

    triggerDebugElement.nativeElement.click();

    expect(triggerInstance['allowFocusOnModalTrigger']).toBeTrue();
    verify(modalServiceMock.open('test')).once();

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
