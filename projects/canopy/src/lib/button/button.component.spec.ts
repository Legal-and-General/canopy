import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgSpinnerComponent } from '../spinner/spinner.component';
import { LgButtonComponent } from './button.component';

describe('LgButtonComponent', () => {
  let component: LgButtonComponent;
  let fixture: ComponentFixture<LgButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgButtonComponent, LgSpinnerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the generic button class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-btn');
  });

  describe('the variant input', () => {
    describe('when not specified', () => {
      it('should set the solid primary class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--solid-primary',
        );
      });
    });

    describe('when specified', () => {
      it('should set the correct class modifier', () => {
        component.variant = 'outline-secondary';
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--outline-secondary',
        );
      });
    });
  });

  describe('the loading input', () => {
    describe('when not set', () => {
      it('should set the default value to false', () => {
        expect(component.loading).toBe(false);
      });
    });

    describe('when set to true', () => {
      beforeEach(() => {
        component.loading = true;
        fixture.detectChanges();
      });

      it('should add the loading class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--solid-primary lg-btn lg-btn--loading',
        );
      });

      it('should set the disabled attribute', () => {
        expect(fixture.nativeElement.getAttribute('disabled')).toBe('');
      });

      it('should display the spinner', () => {
        const spinnerComponent = fixture.debugElement.query(
          By.directive(LgSpinnerComponent),
        );

        expect(spinnerComponent).toBeDefined();
      });
    });

    describe('when set to false', () => {
      it('should not add the loading class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-btn--solid-primary lg-btn lg-btn--loading',
        );
      });

      it(`shouldn'tdisplay the spinner`, () => {
        const spinnerComponent = fixture.debugElement.query(
          By.directive(LgSpinnerComponent),
        );

        expect(spinnerComponent).toBeNull();
      });
    });
  });

  describe('the fullWidth input', () => {
    describe('when not set', () => {
      it('should set the default value to false', () => {
        expect(component.fullWidth).toBe(false);
      });
    });

    describe('when set to true', () => {
      it('should set the block class modifier', () => {
        component.fullWidth = true;
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--solid-primary lg-btn lg-btn--block',
        );
      });
    });

    describe('when set to false', () => {
      it('should not set the block class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-btn--solid-primary lg-btn lg-btn--block',
        );
      });
    });
  });
});
