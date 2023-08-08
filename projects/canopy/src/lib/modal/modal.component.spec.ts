import { ChangeDetectorRef } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { anything, instance, mock, spy, verify, when } from '@typestrong/ts-mockito';
import { BehaviorSubject } from 'rxjs';
import { MockComponents, MockedComponentFixture, MockModule, MockRender } from 'ng-mocks';

import { keyName } from '../utils/keyboard-keys';
import { LgCardModule } from '../card';
import { LgFocusModule } from '../focus';

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
  const id = 'test-1';
  const isModalOpen$ = new BehaviorSubject<boolean>(undefined);

  beforeEach(waitForAsync(() => {
    cdrMock = mock(ChangeDetectorRef);
    modalServiceMock = mock(LgModalService);

    TestBed.configureTestingModule({
      declarations: [
        LgModalComponent,
        MockComponents(LgModalHeaderComponent, LgModalBodyComponent),
      ],
      imports: [ MockModule(LgCardModule), MockModule(LgFocusModule) ],
      providers: [
        { provide: LgModalService, useValue: instance(modalServiceMock) },
        { provide: ChangeDetectorRef, useValue: instance(cdrMock) },
      ],
    }).compileComponents();

    when(modalServiceMock.isOpen$(anything())).thenReturn(isModalOpen$);
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <lg-modal [id]="id">
        <lg-modal-header></lg-modal-header>
        <lg-modal-body></lg-modal-body>
      </lg-modal>
    `);

    component = fixture.debugElement.children[0].componentInstance;
    component.id = id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on init', () => {
    describe('when the modal hasn\'t been opened/closed yet', () => {
      it('should not emit a closed event', () => {
        const closedEmitterSpy = spy(component.closed);

        component.ngOnInit();

        verify(closedEmitterSpy.emit()).never();
      });
    });

    describe('when the modal has been opened/closed', () => {
      it('should update isOpen', () => {
        isModalOpen$.next(true);

        expect(component.isOpen).toBe(true);
      });

      it('should add the overflow style to the body and emit an open event if the modal is open', () => {
        const openEmitterSpy = spy(component.open);

        isModalOpen$.next(true);

        verify(openEmitterSpy.emit()).once();

        fixture.detectChanges();
        const bodyEl: HTMLBodyElement = document.querySelector('body');

        expect(bodyEl.style.overflow).toEqual('hidden');
      });

      it('should remove the overflow style on the body and emit a closed event if the modal is close', () => {
        const closedEmitterSpy = spy(component.closed);

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

    it('should close the modal when escape key is pressed and the modal is open', () => {
      component.isOpen = true;
      component.onKeydown(escEvent);

      verify(modalServiceMock.close(id)).once();

      expect().nothing();
    });

    it('shouldn\'t close the modal when any other key is pressed', () => {
      component.isOpen = true;
      const event = new KeyboardEvent('keydown', {
        key: keyName.KEY_UP,
      });

      component.onKeydown(event);

      verify(modalServiceMock.close(id)).never();

      expect().nothing();
    });

    it('shouldn\'t close the modal when the modal is already closed', () => {
      component.isOpen = false;
      component.onKeydown(escEvent);

      verify(modalServiceMock.close(id)).never();

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
});
