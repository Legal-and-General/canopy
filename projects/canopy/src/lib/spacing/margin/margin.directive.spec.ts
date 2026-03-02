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
      [lgMarginNoneAt]="lgMarginNoneAt"
      [lgMarginTopNoneAt]="lgMarginTopNoneAt"
      [lgMarginRightNoneAt]="lgMarginRightNoneAt"
      [lgMarginBottomNoneAt]="lgMarginBottomNoneAt"
      [lgMarginLeftNoneAt]="lgMarginLeftNoneAt"
      [lgMarginVerticalNoneAt]="lgMarginVerticalNoneAt"
      [lgMarginHorizontalNoneAt]="lgMarginHorizontalNoneAt"
    >
      Test feature
    </div>
  `,
  imports: [ LgMarginDirective ],
})
class TestComponent {
  @Input() lgMargin;
  @Input() lgMarginTop;
  @Input() lgMarginRight;
  @Input() lgMarginBottom;
  @Input() lgMarginLeft;
  @Input() lgMarginVertical;
  @Input() lgMarginHorizontal;
  @Input() lgMarginNoneAt;
  @Input() lgMarginTopNoneAt;
  @Input() lgMarginRightNoneAt;
  @Input() lgMarginBottomNoneAt;
  @Input() lgMarginLeftNoneAt;
  @Input() lgMarginVerticalNoneAt;
  @Input() lgMarginHorizontalNoneAt;
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
      component.lgMargin = '3';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain('lg-margin--3');
    });

    it('adds margins to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = '9';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--9`,
        );
      });
    });

    it('updates margins to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = '9';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--9`,
        );

        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = '5';
        fixture.detectChanges();

        const el = testElement.nativeElement.getAttribute('class');

        expect(el).not.toContain(`lg-margin__${side}--9`);

        expect(el).toContain(`lg-margin__${side}--5`);
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
      component.lgMarginVertical = '6';
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin__top--6');

      expect(el).toContain('lg-margin__bottom--6');
    });

    it('adds margins to left and right when the horizontal directive is applied', () => {
      component.lgMarginHorizontal = '8';
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin__left--8');

      expect(el).toContain('lg-margin__right--8');
    });
  });

  describe('Responsive margin', () => {
    it('adds responsive margin to all of the sides', () => {
      component.lgMargin = { sm: '5', md: '6' };
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin--sm--5');

      expect(el).toContain('lg-margin--md--6');
    });

    it('adds responsive margin to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = { md: '6' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--md--6`,
        );
      });
    });

    it('updates responsive margin to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = { md: '6' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin__${side}--md--6`,
        );

        component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = { lg: '9' };
        fixture.detectChanges();

        const el = testElement.nativeElement.getAttribute('class');

        expect(el).not.toContain(`lg-margin__${side}--md--6`);

        expect(el).toContain(`lg-margin__${side}--lg--9`);
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
      component.lgMarginVertical = { md: '8' };
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin__top--md--8');

      expect(el).toContain('lg-margin__bottom--md--8');
    });

    it('adds respsonsive margin to left and right when the horizontal directive is applied', () => {
      component.lgMarginHorizontal = { md: '8' };
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin__left--md--8');

      expect(el).toContain('lg-margin__right--md--8');
    });
  });

  describe('NoneAt margin', () => {
    it('adds noneAt class for all sides', () => {
      component.lgMargin = '5';
      component.lgMarginNoneAt = 'md';
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin--5');
      expect(el).toContain('lg-margin--md--none');
    });

    it('adds noneAt class for individual sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        const sideCapitalized = side[0].toUpperCase() + side.slice(1);

        component[`lgMargin${sideCapitalized}`] = '6';
        component[`lgMargin${sideCapitalized}NoneAt`] = 'lg';
        fixture.detectChanges();

        const el = testElement.nativeElement.getAttribute('class');

        expect(el).toContain(`lg-margin__${side}--6`);
        expect(el).toContain(`lg-margin__${side}--lg--none`);
      });
    });

    it('adds noneAt class for horizontal margins', () => {
      component.lgMarginHorizontal = '7';
      component.lgMarginHorizontalNoneAt = 'xl';
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin__left--7');
      expect(el).toContain('lg-margin__right--7');
      expect(el).toContain('lg-margin__left--xl--none');
      expect(el).toContain('lg-margin__right--xl--none');
    });

    it('adds noneAt class for vertical margins', () => {
      component.lgMarginVertical = '8';
      component.lgMarginVerticalNoneAt = 'sm';
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin__top--8');
      expect(el).toContain('lg-margin__bottom--8');
      expect(el).toContain('lg-margin__top--sm--none');
      expect(el).toContain('lg-margin__bottom--sm--none');
    });

    it('updates noneAt class when breakpoint changes', () => {
      component.lgMargin = '5';
      component.lgMarginNoneAt = 'md';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin--md--none',
      );

      component.lgMarginNoneAt = 'lg';
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).not.toContain('lg-margin--md--none');
      expect(el).toContain('lg-margin--lg--none');
    });

    it('removes noneAt class when set to null', () => {
      component.lgMargin = '5';
      component.lgMarginNoneAt = 'md';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin--md--none',
      );

      component.lgMarginNoneAt = null;
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-margin--md--none',
      );
    });

    it('works with all breakpoints', () => {
      [ 'sm', 'md', 'lg', 'xl', 'xxl' ].forEach(breakpoint => {
        component.lgMargin = '5';
        component.lgMarginNoneAt = breakpoint;
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-margin--${breakpoint}--none`,
        );
      });
    });

    it('works with array of breakpoints', () => {
      component.lgMargin = '5';
      component.lgMarginNoneAt = [ 'sm', 'lg' ];
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin--sm--none');
      expect(el).toContain('lg-margin--lg--none');
      expect(el).not.toContain('lg-margin--md--none');
    });

    it('works with array of breakpoints for individual sides', () => {
      component.lgMarginTop = '6';
      component.lgMarginTopNoneAt = [ 'md', 'xl' ];
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin__top--6');
      expect(el).toContain('lg-margin__top--md--none');
      expect(el).toContain('lg-margin__top--xl--none');
      expect(el).not.toContain('lg-margin__top--sm--none');
    });

    it('works with array of breakpoints for horizontal margin', () => {
      component.lgMarginHorizontal = '7';
      component.lgMarginHorizontalNoneAt = [ 'sm', 'xxl' ];
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin__left--sm--none');
      expect(el).toContain('lg-margin__left--xxl--none');
      expect(el).toContain('lg-margin__right--sm--none');
      expect(el).toContain('lg-margin__right--xxl--none');
    });

    it('works with array of breakpoints for vertical margin', () => {
      component.lgMarginVertical = '8';
      component.lgMarginVerticalNoneAt = [ 'md', 'lg' ];
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin__top--md--none');
      expect(el).toContain('lg-margin__top--lg--none');
      expect(el).toContain('lg-margin__bottom--md--none');
      expect(el).toContain('lg-margin__bottom--lg--none');
    });

    it('filters duplicate breakpoints in arrays', () => {
      component.lgMargin = '5';
      component.lgMarginNoneAt = [ 'sm', 'sm', 'lg' ];
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');
      const smMatches = (el.match(/lg-margin--sm--none/g) || []).length;

      expect(smMatches).toBe(1);
      expect(el).toContain('lg-margin--lg--none');
    });

    it('handles empty array by removing all noneAt classes', () => {
      component.lgMargin = '5';
      component.lgMarginNoneAt = 'md';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin--md--none',
      );

      component.lgMarginNoneAt = [];
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-margin--md--none',
      );
    });

    it('updates classes when switching from single to array breakpoint', () => {
      component.lgMargin = '5';
      component.lgMarginNoneAt = 'md';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-margin--md--none',
      );

      component.lgMarginNoneAt = [ 'sm', 'lg' ];
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).not.toContain('lg-margin--md--none');
      expect(el).toContain('lg-margin--sm--none');
      expect(el).toContain('lg-margin--lg--none');
    });

    it('updates classes when switching from array to single breakpoint', () => {
      component.lgMargin = '5';
      component.lgMarginNoneAt = [ 'sm', 'lg' ];
      fixture.detectChanges();

      let el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-margin--sm--none');
      expect(el).toContain('lg-margin--lg--none');

      component.lgMarginNoneAt = 'xl';
      fixture.detectChanges();

      el = testElement.nativeElement.getAttribute('class');

      expect(el).not.toContain('lg-margin--sm--none');
      expect(el).not.toContain('lg-margin--lg--none');
      expect(el).toContain('lg-margin--xl--none');
    });
  });
});
