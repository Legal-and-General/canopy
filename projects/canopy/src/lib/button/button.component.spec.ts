import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

import { LgSpinnerComponent } from '../spinner/spinner.component';
import { lgIconAdd, LgIconComponent, lgIconFilter, LgIconRegistry } from '../icon';

import { LgButtonComponent } from './button.component';

@Component({
  template: `
    <button lg-button variant="primary-dark" [iconPosition]="iconPosition">
      <lg-icon name="filter" first></lg-icon>
      Test
      <lg-icon name="add" second></lg-icon>
    </button>
  `,
  standalone: true,
})
class ButtonDoubleIconTestComponent {
  @Input() iconPosition = null;

  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconFilter, lgIconAdd ]);
  }
}

describe('LgButtonComponent', () => {
  let component: LgButtonComponent;
  let fixture: ComponentFixture<LgButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgButtonComponent,
        ButtonDoubleIconTestComponent,
        LgSpinnerComponent,
        MockComponent(LgIconComponent),
      ],
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
      it('should set the primary dark class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--primary-dark',
        );
      });
    });

    describe('when specified', () => {
      it('should set the correct class modifier', () => {
        component.variant = 'secondary-dark';
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-btn--secondary-dark',
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

  it('should add the correct margin to the first icon when two icons are added to the button', () => {
    const fixtureButtonDoubleIcon = TestBed.createComponent(
      ButtonDoubleIconTestComponent,
    );

    fixtureButtonDoubleIcon.detectChanges();

    const deFirst = fixtureButtonDoubleIcon.debugElement.query(By.css('lg-icon[first]'));
    const deSecond = fixtureButtonDoubleIcon.debugElement.query(
      By.css('lg-icon[second]'),
    );

    expect(deFirst.nativeElement.getAttribute('class')).toContain(
      'lg-margin__left--none',
    );

    expect(deFirst.nativeElement.getAttribute('class')).toContain(
      'lg-margin__right--xxs',
    );

    expect(deSecond.nativeElement.getAttribute('class')).not.toContain(
      'lg-margin__left--none',
    );

    expect(deSecond.nativeElement.getAttribute('class')).not.toContain(
      'lg-margin__right--xxs',
    );
  });
});
