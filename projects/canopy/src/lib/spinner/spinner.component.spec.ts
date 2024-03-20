import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import { instance, mock } from '@typestrong/ts-mockito';

import { LgSpinnerComponent } from './spinner.component';

describe('LgSpinnerComponent', () => {
  let component: LgSpinnerComponent;
  let fixture: ComponentFixture<LgSpinnerComponent>;
  let cdrMock: ChangeDetectorRef;

  beforeEach(waitForAsync(() => {
    cdrMock = mock(ChangeDetectorRef);

    TestBed.configureTestingModule({
      imports: [ LgSpinnerComponent ],
      providers: [ { provide: ChangeDetectorRef, useValue: instance(cdrMock) } ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSpinnerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds the variant class to the spinner ring', () => {
    let link = fixture.debugElement.query(By.css('.lg-spinner__ring--color'));

    expect(link).toBeFalsy();
    component.variant = 'color';
    fixture.detectChanges();
    link = fixture.debugElement.query(By.css('.lg-spinner__ring--color'));

    expect(link).toBeTruthy();
  });

  it('adds the small size variant to the component', () => {
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.getAttribute('class')).not.toContain(
      'lg-spinner--sm',
    );

    component.size = 'sm';
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.getAttribute('class')).toContain(
      'lg-spinner--sm',
    );
  });

  describe('text input', () => {
    describe('when not specified', () => {
      it('should add a visually hidden element with default text', () => {
        fixture.detectChanges();
        const hiddenEl = fixture.nativeElement.querySelector('.lg-visually-hidden');
        const textEl = fixture.nativeElement.querySelector('.lg-spinner__content');

        expect(textEl).toBeNull();
        expect(hiddenEl).toBeDefined();
        expect(hiddenEl.innerText).toEqual('Loading...');
      });
    });

    describe('when specified', () => {
      it('should add an element with the specified text', () => {
        component.text = 'Test text';
        fixture.detectChanges();

        const hiddenEl = fixture.nativeElement.querySelector('.lg-visually-hidden');
        const textEl = fixture.nativeElement.querySelector(
          '.lg-spinner__content > span[aria-hidden="true"]',
        );

        expect(hiddenEl.innerText).not.toEqual('Loading...');
        expect(textEl).toBeDefined();
        expect(textEl.innerText).toBe('Test text');
      });
    });
  });

  describe('readScreenReaderAlert', () => {
    beforeEach(() => {
      jasmine.clock().uninstall();
      jasmine.clock().install();
    });

    it('should be toggled every few seconds', fakeAsync(() => {
      component.ngOnInit();

      expect(component.readScreenReaderAlert).toBe(true);

      tick(1000);

      expect(component.readScreenReaderAlert).toBe(true);
      tick(1500);

      expect(component.readScreenReaderAlert).toBe(false);
      discardPeriodicTasks();
    }));

    describe('when set to false', () => {
      it('should remove the role and aria-live attributes', fakeAsync(() => {
        component.ngOnInit();
        tick(2500);
        fixture.detectChanges();

        expect(component.readScreenReaderAlert).toBe(false);
        expect(fixture.nativeElement.getAttribute('role')).toBeNull();
        expect(fixture.nativeElement.getAttribute('aria-live')).toBeNull();
        discardPeriodicTasks();
      }));
    });

    describe('when set to true', () => {
      it('should add the role and aria-live attributes', fakeAsync(() => {
        tick(1000);
        fixture.detectChanges();

        expect(component.readScreenReaderAlert).toBe(true);
        expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
        expect(fixture.nativeElement.getAttribute('aria-live')).toBe('assertive');
        discardPeriodicTasks();
      }));
    });
  });
});
