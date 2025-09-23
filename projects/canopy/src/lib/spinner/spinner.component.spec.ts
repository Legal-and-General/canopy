import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import { MockProvider } from 'ng-mocks';

import { LgSpinnerComponent } from './spinner.component';

describe('LgSpinnerComponent', () => {
  let component: LgSpinnerComponent;
  let fixture: ComponentFixture<LgSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgSpinnerComponent ],
      providers: [ MockProvider(ChangeDetectorRef) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgSpinnerComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    jest.clearAllMocks();
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

  it('adds the extra small size variant to the component', () => {
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.getAttribute('class')).not.toContain(
      'lg-spinner--xs',
    );

    component.size = 'xs';
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.getAttribute('class')).toContain(
      'lg-spinner--xs',
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
        expect(hiddenEl.textContent).toEqual('Loading...');
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

        expect(hiddenEl.textContent).not.toEqual('Loading...');
        expect(textEl).toBeDefined();
        expect(textEl.textContent).toBe('Test text');
      });
    });
  });

  describe('readScreenReaderAlert', () => {
    describe('when set to false', () => {
      it('should remove the role and aria-live attributes', () => {
        component.readScreenReaderAlert = false;
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('role')).toBeNull();
        expect(fixture.nativeElement.getAttribute('aria-live')).toBeNull();
      });
    });

    describe('when set to true', () => {
      it('should add the role and aria-live attributes', () => {
        fixture.detectChanges();

        expect(component.readScreenReaderAlert).toBe(true);
        expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
        expect(fixture.nativeElement.getAttribute('aria-live')).toBe('assertive');
      });
    });

    describe('constructor', () => {
      beforeEach(() => {
        jest.useFakeTimers();

        fixture = TestBed.createComponent(LgSpinnerComponent);
        component = fixture.componentInstance;
      });

      afterEach(() => {
        jest.useRealTimers();
      });

      it('should toggle readScreenReaderAlert every 2.5 seconds', () => {
        expect(component.readScreenReaderAlert).toBe(true);

        jest.advanceTimersByTime(2500);

        expect(component.readScreenReaderAlert).toBe(false);

        jest.advanceTimersByTime(2500);

        expect(component.readScreenReaderAlert).toBe(true);
      });

      it('should clean up subscription on destroy', () => {
        const unsubscribeSpy = jest.spyOn(component.subscription, 'unsubscribe');

        component.ngOnDestroy();

        expect(unsubscribeSpy).toHaveBeenCalled();
      });
    });
  });
});
