import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgMarginDirective } from './margin.directive';

@Component({
  template: `
    <div
      [lgMargin]="lgMargin ? lgMargin : undefined"
      [lgMarginTop]="lgMarginTop"
      [lgMarginRight]="lgMarginRight"
      [lgMarginBottom]="lgMarginBottom"
      [lgMarginLeft]="lgMarginLeft"
      [lgMarginVertical]="lgMarginVertical"
      [lgMarginHorizontal]="lgMarginHorizontal"
    >
      Test feature
    </div>
  `,
  standalone: true,
})
class TestComponent {
  @Input() lgMargin;
  @Input() lgMarginTop;
  @Input() lgMarginRight;
  @Input() lgMarginBottom;
  @Input() lgMarginLeft;
  @Input() lgMarginVertical;
  @Input() lgMarginHorizontal;
}

describe('LgMargin', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgMarginDirective ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  }));

  describe('Non-responsive margin', () => {
    it('renders the same margin all round', () => {
      component.lgMargin = 'xs';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain('lg-margin--xs');
    });

    it('adds margins to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = 'xxxl';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--xxxl`,
        );
      });
    });

    it('updates margins to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = 'xxxl';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--xxxl`,
        );

        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = 'md';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).not.toContain(
          `lg-margin__${side}--xxxl`,
        );

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--md`,
        );
      });
    });

    it('adds margins of none to all sides', () => {
      component.lgMargin = 'none';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin--none',
      );
    });

    it('adds margins of none to specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = 'none';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--none`,
        );
      });
    });

    it('adds margins to top and bottom when the vertical directive is applied', () => {
      component.lgMarginVertical = 'lg';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin__top--lg',
        'lg-margin__bottom--lg',
      );
    });

    it('adds margins to left and right when the horizontal directive is applied', () => {
      component.lgMarginHorizontal = 'xxl';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin__left--xxl',
        'lg-margin__right--xxl',
      );
    });
  });

  describe('Responsive margin', () => {
    it('adds repsonive margin to all of the sides', () => {
      component.lgMargin = { sm: 'md', md: 'lg' };
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin--sm--md',
      );

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin--md--lg',
      );
    });

    it('adds responsive margin to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = { md: 'lg' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--md--lg`,
        );
      });
    });

    it('updates responsive margin to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = { md: 'lg' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--md--lg`,
        );

        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = { lg: 'xxxl' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).not.toContain(
          `lg-margin__${side}--md--lg`,
        );

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--lg--xxxl`,
        );
      });
    });

    it('adds margins of none to all sides', () => {
      component.lgMargin = { sm: 'none' };
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin--sm--none',
      );
    });

    it('adds responsive margin of none to specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = { md: 'none' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--md--none`,
        );
      });
    });

    it('adds respsonsive margin to top and bottom when the vertical directive is applied', () => {
      component.lgMarginVertical = { md: 'xxl' };
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin__top--md--xxl',
        'lg-margin__bottom--md--xxl',
      );
    });

    it('adds respsonsive margin to left and right when the horizontal directive is applied', () => {
      component.lgMarginHorizontal = { md: 'xxl' };
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin__left--md--xxl',
        'lg-margin__right--md--xxl',
      );
    });
  });
});
