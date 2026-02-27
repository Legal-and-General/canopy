import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

import { LgSpinnerComponent } from '../spinner';
import { LgIconComponent } from '../icon';

import { LgButtonComponent } from './button.component';

describe('LgButtonComponent', () => {
  let component: LgButtonComponent;
  let fixture: ComponentFixture<LgButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgButtonComponent, LgSpinnerComponent, MockComponent(LgIconComponent) ],
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
      it('should set the primary class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).toContain('lg-btn--primary');
      });
    });

    describe('when specified', () => {
      it('should set the correct class modifier', () => {
        component.priority = 'secondary';
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--secondary',
        );
      });
    });
  });

  describe('the leftIcon input', () => {
    describe('when not specified', () => {
      it('should set the default value to false', () => {
        expect(component.leftIcon).toBe(false);
      });

      it('should not set the icon-left class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-btn--icon-left',
        );
      });
    });

    describe('when set to true', () => {
      it('should set the correct class modifier', () => {
        component.leftIcon = true;
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--icon-left',
        );
      });
    });

    describe('when set to false', () => {
      it('should not set the icon-left class modifier', () => {
        component.leftIcon = false;
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-btn--icon-left',
        );
      });
    });
  });

  describe('the rightIcon input', () => {
    describe('when not specified', () => {
      it('should set the default value to null', () => {
        expect(component.rightIcon).toBe(null);
      });
    });

    describe('when set to an icon name', () => {
      it('should set the icon name', () => {
        component.rightIcon = 'chevron-right';
        fixture.detectChanges();

        expect(component.rightIcon).toBe('chevron-right');
      });
    });
  });

  describe('icon validation', () => {
    it('should log an error and clear rightIcon when both leftIcon and rightIcon are set', () => {
      spyOn(console, 'error');
      component.leftIcon = true;
      component.rightIcon = 'chevron-right';
      component.ngOnInit();
      fixture.detectChanges();

      expect(console.error).toHaveBeenCalledWith(
        'Button component error: Cannot have both leftIcon and rightIcon set at the same time. Left icon takes precedence.',
      );

      expect(component.rightIcon).toBe(null);
    });
  });

  describe('the disabled input', () => {
    describe('when not set', () => {
      it('should not set the disabled attribute', () => {
        expect(fixture.nativeElement.hasAttribute('disabled')).toBe(false);
      });
    });

    describe('when set to true', () => {
      it('should set the disabled attribute', () => {
        component.disabled = true;
        fixture.detectChanges();

        expect(fixture.nativeElement.hasAttribute('disabled')).toBe(true);
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

      it('shouldn\'t display the spinner', () => {
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
