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

  describe('the icon position input', () => {
    describe('when not specified', () => {
      it('should not set an icon class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-btn--icon-',
        );
      });
    });

    describe('when specified as left', () => {
      it('should set the correct class modifier', () => {
        component.iconPosition = 'left';
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--icon-left',
        );
      });
    });

    describe('when specified as right', () => {
      it('uses the default styles without a modifier', () => {
        component.iconPosition = 'right';
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-btn--icon-',
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
        expect(fixture.nativeElement.getAttribute('class')).toContain('lg-btn--loading');
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
          'lg-btn--loading',
        );
      });

      it(`shouldn't display the spinner`, () => {
        const spinnerComponent = fixture.debugElement.query(
          By.directive(LgSpinnerComponent),
        );

        expect(spinnerComponent).toBeNull();
      });
    });
  });

  describe('the size input', () => {
    describe('when not set', () => {
      it('should set the default value to medium', () => {
        expect(component.size).toBe('md');
      });
    });

    describe('when set to "sm"', () => {
      it('should set the small size modifier', () => {
        component.size = 'sm';
        fixture.detectChanges();
        expect(fixture.nativeElement.getAttribute('class')).toContain('lg-btn--sm');
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

        expect(fixture.nativeElement.getAttribute('class')).toContain('lg-btn--block');
      });
    });

    describe('when set to false', () => {
      it('should not set the block class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-btn--block',
        );
      });
    });
  });

  describe('the iconButton input', () => {
    describe('when not set', () => {
      it('should set the default value to false', () => {
        expect(component.iconButton).toBe(false);
      });
    });

    describe('when set to true', () => {
      it('should set the icon button class modifier', () => {
        component.iconButton = true;
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--icon-only',
        );
      });
    });

    describe('when set to false', () => {
      it('should not set the icon button modifier', () => {
        component.iconButton = false;
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-btn--icon-only',
        );
      });
    });
  });
});
