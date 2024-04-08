import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import {
  anything,
  instance,
  mock,
  resetCalls,
  spy,
  verify,
  when,
} from '@typestrong/ts-mockito';
import { BehaviorSubject } from 'rxjs';
import {
  MockComponents,
  MockDirective,
  MockedComponentFixture,
  MockRender,
} from 'ng-mocks';

import { keyName } from '../utils/keyboard-keys';
import { LgCardComponent } from '../card';
import { LgFocusDirective } from '../focus';

import {
  LgModalBodyComponent,
  LgModalComponent,
  LgModalHeaderComponent,
  LgModalService,
} from './';

describe('LgModalComponent', () => {
  let component: LgModalComponent;
  let cdrMock: ChangeDetectorRef;
  let fixture: MockedComponentFixture<LgModalComponent>;
  let modalServiceMock: LgModalService;
  let closedEmitterSpy: EventEmitter<void>;
  let openEmitterSpy: EventEmitter<void>;
  let closedEscKeySpy: EventEmitter<void>;
  let closedOverlaySpy: EventEmitter<void>;
  const id = 'test-1';
  const isModalOpen$ = new BehaviorSubject<boolean>(undefined);

  beforeEach(waitForAsync(() => {
    cdrMock = mock(ChangeDetectorRef);
    modalServiceMock = mock(LgModalService);

    TestBed.configureTestingModule({
      imports: [
        LgModalComponent,
        MockComponents(LgCardComponent, LgModalHeaderComponent, LgModalBodyComponent),
        MockDirective(LgFocusDirective),
      ],
      providers: [
        { provide: LgModalService, useValue: instance(modalServiceMock) },
        { provide: ChangeDetectorRef, useValue: instance(cdrMock) },
      ],
    }).compileComponents();

    when(modalServiceMock.isOpen$(anything())).thenReturn(isModalOpen$);

    fixture = MockRender(`
      <lg-modal [id]="id">
        <lg-modal-header></lg-modal-header>
        <lg-modal-body></lg-modal-body>
      </lg-modal>
    `);

    component = fixture.debugElement.children[0].componentInstance;
    component.id = id;

    closedEmitterSpy = spy(component.closed);
    openEmitterSpy = spy(component.open);
    closedEscKeySpy = spy(component.closedEscKey);
    closedOverlaySpy = spy(component.closedOverlayClick);

    resetCalls(closedEmitterSpy);
    resetCalls(openEmitterSpy);
    resetCalls(closedEscKeySpy);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on init', () => {
    describe('when the modal has been opened/closed', () => {
      it('should update isOpen', () => {
        isModalOpen$.next(true);

        expect(component.isOpen).toBe(true);
      });

      it('should add the overflow style to the body and emit an open event if the modal is open', () => {
        isModalOpen$.next(true);

        verify(openEmitterSpy.emit()).once();

        fixture.detectChanges();
        const bodyEl: HTMLBodyElement = document.querySelector('body');

        expect(bodyEl.style.overflow).toEqual('hidden');
      });

      it('should remove the overflow style on the body and emit a closed event if the modal is close', () => {
        isModalOpen$.next(false);

        verify(closedEmitterSpy.emit()).once();

        fixture.detectChanges();
        const bodyEl: HTMLBodyElement = document.querySelector('body');

        expect(bodyEl.style.overflow).toEqual('');
      });

      it('should detect changes', () => {
        const cdrDetectChangesSpy = spyOn(component['cdr'], 'detectChanges');

        isModalOpen$.next(true);

        expect(cdrDetectChangesSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  it('should update the modal header and body id on #ngAfterContentInit', () => {
    component.ngAfterContentInit();

    expect(component.modalHeaderComponent.id).toEqual('lg-modal-header-test-1');
    expect(component.modalBodyComponent.id).toEqual('lg-modal-body-test-1');
  });

  describe('on keydown', () => {
    const escEvent = new KeyboardEvent('keydown', {
      key: keyName.KEY_ESCAPE,
    });

    it('should close the modal and emit an event when the escape key is pressed and the modal is open', () => {
      component.isOpen = true;
      component.onKeydown(escEvent);

      verify(modalServiceMock.close(id)).once();
      verify(closedEscKeySpy.emit()).once();

      expect().nothing();
    });

    it('shouldn\'t close the modal and emit an event when any other key is pressed', () => {
      component.isOpen = true;
      const event = new KeyboardEvent('keydown', {
        key: keyName.KEY_UP,
      });

      component.onKeydown(event);

      verify(modalServiceMock.close(id)).never();
      verify(closedEscKeySpy.emit()).never();

      expect().nothing();
    });

    it('shouldn\'t close the modal when the modal is already closed', () => {
      component.isOpen = false;
      component.onKeydown(escEvent);

      verify(modalServiceMock.close(id)).never();
      verify(closedEscKeySpy.emit()).never();

      expect().nothing();
    });
  });

  describe('clicking on the modal panel', () => {
    it('should stop the propagation of the event', () => {
      const event = new Event('click');

      spyOn(event, 'stopPropagation').and.callThrough();
      component.onModalClick(event);

      expect(event.stopPropagation).toHaveBeenCalledTimes(1);
    });
  });

  describe('clicking on the modal overlay', () => {
    it('should close the modal and emit an event', () => {
      component.isOpen = true;
      component.onOverlayClick();

      verify(modalServiceMock.close(id)).once();
      verify(closedOverlaySpy.emit()).once();

      expect().nothing();
    });
  });
});
