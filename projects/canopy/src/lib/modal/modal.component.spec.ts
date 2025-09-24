import { ChangeDetectorRef } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import {
  MockComponents,
  MockDirective,
  MockedComponentFixture,
  MockProvider,
  MockRender,
  ngMocks,
} from 'ng-mocks';
import { of } from 'rxjs';

import { LgCardComponent } from '../card';
import { LgFocusDirective } from '../focus';
import { keyName } from '../utils/keyboard-keys';

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
  let isOpenSpy = jest.fn().mockReturnValue(of(undefined));
  const modalServiceMock = {
    isOpen$: isOpenSpy,
    open: jest.fn(),
    close: jest.fn(),
    remove: jest.fn(),
  };
  const id = 'test-1';

  beforeEach(waitForAsync(() => {
    cdrMock = MockProvider(ChangeDetectorRef) as unknown as ChangeDetectorRef;

    TestBed.configureTestingModule({
      imports: [
        LgModalComponent,
        MockComponents(LgCardComponent, LgModalHeaderComponent, LgModalBodyComponent),
        MockDirective(LgFocusDirective),
      ],
      providers: [ { provide: LgModalService, useValue: modalServiceMock }, cdrMock ],
    }).compileComponents();

    ngMocks.flushTestBed();

    fixture = MockRender(`
      <lg-modal [id]="id">
        <lg-modal-header></lg-modal-header>
        <lg-modal-body></lg-modal-body>
      </lg-modal>
    `);

    component = fixture.debugElement.children[0].componentInstance;
    component.id = id;

    jest.spyOn(component.closed, 'emit').mockImplementation(() => {});
    jest.spyOn(component.open, 'emit').mockImplementation(() => {});
    jest.spyOn(component.closedEscKey, 'emit').mockImplementation(() => {});
    jest.spyOn(component.closedOverlayClick, 'emit').mockImplementation(() => {});
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on init', () => {
    describe('when the modal has been opened/closed', () => {
      it('should update isOpen', () => {
        isOpenSpy.mockReturnValue(of(true));
        component.ngOnInit();

        expect(component.isOpen).toBe(true);
      });

      it('should add the overflow style to the body and emit an open event if the modal is open', () => {
        isOpenSpy.mockReturnValue(of(true));
        component.ngOnInit();

        expect(component.open.emit).toHaveBeenCalledTimes(1);

        const bodyEl: HTMLBodyElement = document.querySelector('body');

        expect(bodyEl.style.overflow).toEqual('hidden');
      });

      it('should remove the overflow style on the body and emit a closed event if the modal is close', () => {
        isOpenSpy.mockReturnValue(of(false));
        component.ngOnInit();

        expect(component.closed.emit).toHaveBeenCalledTimes(1);

        const bodyEl: HTMLBodyElement = document.querySelector('body');

        expect(bodyEl.style.overflow).toEqual('');
      });

      it('should detect changes', () => {
        const cdrDetectChangesSpy = jest.spyOn(component['cdr'], 'detectChanges');

        isOpenSpy.mockReturnValue(of(true));
        component.ngOnInit();

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

      expect(modalServiceMock.close).toHaveBeenNthCalledWith(1, id);
      expect(component.closedEscKey.emit).toHaveBeenCalledTimes(1);
    });

    it('shouldn\'t close the modal and emit an event when any other key is pressed', () => {
      component.isOpen = true;
      const event = new KeyboardEvent('keydown', {
        key: keyName.KEY_UP,
      });

      component.onKeydown(event);

      expect(modalServiceMock.close).not.toHaveBeenCalled();
      expect(component.closedEscKey.emit).not.toHaveBeenCalled();
    });

    it('shouldn\'t close the modal when the modal is already closed', () => {
      component.isOpen = false;
      component.onKeydown(escEvent);

      expect(modalServiceMock.close).not.toHaveBeenCalled();
      expect(component.closedEscKey.emit).not.toHaveBeenCalled();
    });
  });

  describe('clicking on the modal panel', () => {
    it('should stop the propagation of the event', () => {
      const event = new Event('click');

      jest.spyOn(event, 'stopPropagation');
      component.onModalClick(event);

      expect(event.stopPropagation).toHaveBeenCalledTimes(1);
    });
  });

  describe('clicking on the modal overlay', () => {
    it('should close the modal and emit an event when closeOnOverlayClick is true', () => {
      component.isOpen = true;
      component.closeOnOverlayClick = true;
      component.onOverlayClick();

      expect(modalServiceMock.close).toHaveBeenNthCalledWith(1, id);
      expect(component.closedOverlayClick.emit).toHaveBeenCalledTimes(1);
    });

    it('should not close the modal or emit an event when closeOnOverlayClick is false', () => {
      component.isOpen = true;
      component.closeOnOverlayClick = false;
      component.onOverlayClick();

      expect(modalServiceMock.close).not.toHaveBeenCalled();
      expect(component.closedOverlayClick.emit).not.toHaveBeenCalled();
    });
  });

  describe('on destroy', () => {
    it('should call the modal service remove function', () => {
      component.ngOnDestroy();

      expect(modalServiceMock.remove).toHaveBeenNthCalledWith(1, id);
    });
  });
});
