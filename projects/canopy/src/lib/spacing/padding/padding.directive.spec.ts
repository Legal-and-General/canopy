import { Component, DebugElement, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgPaddingDirective } from './padding.directive';

@Component({
  template: `
    <div
      [lgPadding]="lgPadding ? lgPadding : undefined"
      [lgPaddingTop]="lgPaddingTop"
      [lgPaddingRight]="lgPaddingRight"
      [lgPaddingBottom]="lgPaddingBottom"
      [lgPaddingLeft]="lgPaddingLeft"
      [lgPaddingVertical]="lgPaddingVertical"
      [lgPaddingHorizontal]="lgPaddingHorizontal"
      [lgPaddingNoneAt]="lgPaddingNoneAt"
      [lgPaddingTopNoneAt]="lgPaddingTopNoneAt"
      [lgPaddingRightNoneAt]="lgPaddingRightNoneAt"
      [lgPaddingBottomNoneAt]="lgPaddingBottomNoneAt"
      [lgPaddingLeftNoneAt]="lgPaddingLeftNoneAt"
      [lgPaddingVerticalNoneAt]="lgPaddingVerticalNoneAt"
      [lgPaddingHorizontalNoneAt]="lgPaddingHorizontalNoneAt"
    >
      Test feature
    </div>
  `,
  imports: [ LgPaddingDirective ],
  changeDetection: ChangeDetectionStrategy.Default,
})
class TestComponent {
  @Input() lgPadding;
  @Input() lgPaddingTop;
  @Input() lgPaddingRight;
  @Input() lgPaddingBottom;
  @Input() lgPaddingLeft;
  @Input() lgPaddingVertical;
  @Input() lgPaddingHorizontal;
  @Input() lgPaddingNoneAt;
  @Input() lgPaddingTopNoneAt;
  @Input() lgPaddingRightNoneAt;
  @Input() lgPaddingBottomNoneAt;
  @Input() lgPaddingLeftNoneAt;
  @Input() lgPaddingVerticalNoneAt;
  @Input() lgPaddingHorizontalNoneAt;
}

describe('LgPadding', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgPaddingDirective ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  });

  describe('Non-responsive padding', () => {
    it('renders the same padding all round', () => {
      fixture.componentRef.setInput('lgPadding', '3');
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain('lg-padding--3');
    });

    it('adds paddings to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        fixture.componentRef.setInput(
          `lgPadding${side[0].toUpperCase()}${side.slice(1)}`,
          '9',
        );

        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--9`,
        );
      });
    });

    it('updates paddings to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        fixture.componentRef.setInput(
          `lgPadding${side[0].toUpperCase()}${side.slice(1)}`,
          '9',
        );

        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--9`,
        );

        fixture.componentRef.setInput(
          `lgPadding${side[0].toUpperCase()}${side.slice(1)}`,
          '5',
        );

        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).not.toContain(
          `lg-padding__${side}--9`,
        );

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--5`,
        );
      });
    });

    it('adds paddings of none to all sides', () => {
      fixture.componentRef.setInput('lgPadding', 'none');
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--none',
      );
    });

    it('adds paddings of none to specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        fixture.componentRef.setInput(
          `lgPadding${side[0].toUpperCase()}${side.slice(1)}`,
          'none',
        );

        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--none`,
        );
      });
    });

    it('adds paddings to top and bottom when the vertical directive is applied', () => {
      fixture.componentRef.setInput('lgPaddingVertical', '6');
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__top--6');

      expect(el).toContain('lg-padding__bottom--6');
    });

    it('adds paddings to left and right when the horizontal directive is applied', () => {
      fixture.componentRef.setInput('lgPaddingHorizontal', '8');
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__left--8');

      expect(el).toContain('lg-padding__right--8');
    });
  });

  describe('Responsive padding', () => {
    it('adds responsive padding to all of the sides', () => {
      fixture.componentRef.setInput('lgPadding', { sm: '5', md: '6' });
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding--sm--5');

      expect(el).toContain('lg-padding--md--6');
    });

    it('adds responsive padding to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        fixture.componentRef.setInput(
          `lgPadding${side[0].toUpperCase()}${side.slice(1)}`,
          { md: '6' },
        );

        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--md--6`,
        );
      });
    });

    it('updates responsive padding to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        fixture.componentRef.setInput(
          `lgPadding${side[0].toUpperCase()}${side.slice(1)}`,
          { md: '6' },
        );

        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--md--6`,
        );

        fixture.componentRef.setInput(
          `lgPadding${side[0].toUpperCase()}${side.slice(1)}`,
          { lg: '9' },
        );

        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).not.toContain(
          `lg-padding__${side}--md--6`,
        );

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--lg--9`,
        );
      });
    });

    it('adds paddings of none to all sides', () => {
      fixture.componentRef.setInput('lgPadding', { sm: 'none' });
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--sm--none',
      );
    });

    it('adds responsive padding of none to specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        fixture.componentRef.setInput(
          `lgPadding${side[0].toUpperCase()}${side.slice(1)}`,
          { md: 'none' },
        );

        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--md--none`,
        );
      });
    });

    it('adds respsonsive padding to top and bottom when the vertical directive is applied', () => {
      fixture.componentRef.setInput('lgPaddingVertical', { md: '8' });
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__top--md--8');

      expect(el).toContain('lg-padding__bottom--md--8');
    });

    it('adds respsonsive padding to left and right when the horizontal directive is applied', () => {
      fixture.componentRef.setInput('lgPaddingHorizontal', { md: '8' });
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__left--md--8');

      expect(el).toContain('lg-padding__right--md--8');
    });
  });

  describe('NoneAt padding', () => {
    it('adds noneAt class for all sides', () => {
      fixture.componentRef.setInput('lgPadding', '5');
      fixture.componentRef.setInput('lgPaddingNoneAt', 'md');
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding--5');
      expect(el).toContain('lg-padding--md--none');
    });

    it('adds noneAt class for individual sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        const sideCapitalized = side[0].toUpperCase() + side.slice(1);

        fixture.componentRef.setInput(`lgPadding${sideCapitalized}`, '6');
        fixture.componentRef.setInput(`lgPadding${sideCapitalized}NoneAt`, 'lg');
        fixture.detectChanges();

        const el = testElement.nativeElement.getAttribute('class');

        expect(el).toContain(`lg-padding__${side}--6`);
        expect(el).toContain(`lg-padding__${side}--lg--none`);
      });
    });

    it('adds noneAt class for horizontal paddings', () => {
      fixture.componentRef.setInput('lgPaddingHorizontal', '7');
      fixture.componentRef.setInput('lgPaddingHorizontalNoneAt', 'xl');
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__left--7');
      expect(el).toContain('lg-padding__right--7');
      expect(el).toContain('lg-padding__left--xl--none');
      expect(el).toContain('lg-padding__right--xl--none');
    });

    it('adds noneAt class for vertical paddings', () => {
      fixture.componentRef.setInput('lgPaddingVertical', '8');
      fixture.componentRef.setInput('lgPaddingVerticalNoneAt', 'sm');
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__top--8');
      expect(el).toContain('lg-padding__bottom--8');
      expect(el).toContain('lg-padding__top--sm--none');
      expect(el).toContain('lg-padding__bottom--sm--none');
    });

    it('updates noneAt class when breakpoint changes', () => {
      fixture.componentRef.setInput('lgPadding', '5');
      fixture.componentRef.setInput('lgPaddingNoneAt', 'md');
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--md--none',
      );

      fixture.componentRef.setInput('lgPaddingNoneAt', 'lg');
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).not.toContain('lg-padding--md--none');
      expect(el).toContain('lg-padding--lg--none');
    });

    it('removes noneAt class when set to null', () => {
      fixture.componentRef.setInput('lgPadding', '5');
      fixture.componentRef.setInput('lgPaddingNoneAt', 'md');
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--md--none',
      );

      fixture.componentRef.setInput('lgPaddingNoneAt', null);
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-padding--md--none',
      );
    });

    it('works with all breakpoints', () => {
      [ 'sm', 'md', 'lg', 'xl', 'xxl' ].forEach(breakpoint => {
        fixture.componentRef.setInput('lgPadding', '5');
        fixture.componentRef.setInput('lgPaddingNoneAt', breakpoint);
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding--${breakpoint}--none`,
        );
      });
    });

    it('works with array of breakpoints', () => {
      fixture.componentRef.setInput('lgPadding', '5');
      fixture.componentRef.setInput('lgPaddingNoneAt', [ 'sm', 'lg' ]);
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding--sm--none');
      expect(el).toContain('lg-padding--lg--none');
      expect(el).not.toContain('lg-padding--md--none');
    });

    it('works with array of breakpoints for individual sides', () => {
      fixture.componentRef.setInput('lgPaddingTop', '6');
      fixture.componentRef.setInput('lgPaddingTopNoneAt', [ 'md', 'xl' ]);
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__top--6');
      expect(el).toContain('lg-padding__top--md--none');
      expect(el).toContain('lg-padding__top--xl--none');
      expect(el).not.toContain('lg-padding__top--sm--none');
    });

    it('works with array of breakpoints for horizontal padding', () => {
      fixture.componentRef.setInput('lgPaddingHorizontal', '7');
      fixture.componentRef.setInput('lgPaddingHorizontalNoneAt', [ 'sm', 'xxl' ]);
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__left--sm--none');
      expect(el).toContain('lg-padding__left--xxl--none');
      expect(el).toContain('lg-padding__right--sm--none');
      expect(el).toContain('lg-padding__right--xxl--none');
    });

    it('works with array of breakpoints for vertical padding', () => {
      fixture.componentRef.setInput('lgPaddingVertical', '8');
      fixture.componentRef.setInput('lgPaddingVerticalNoneAt', [ 'md', 'lg' ]);
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__top--md--none');
      expect(el).toContain('lg-padding__top--lg--none');
      expect(el).toContain('lg-padding__bottom--md--none');
      expect(el).toContain('lg-padding__bottom--lg--none');
    });

    it('filters duplicate breakpoints in arrays', () => {
      fixture.componentRef.setInput('lgPadding', '5');
      fixture.componentRef.setInput('lgPaddingNoneAt', [ 'sm', 'sm', 'lg' ]);
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');
      const smMatches = (el.match(/lg-padding--sm--none/g) || []).length;

      expect(smMatches).toBe(1);
      expect(el).toContain('lg-padding--lg--none');
    });

    it('handles empty array by removing all noneAt classes', () => {
      fixture.componentRef.setInput('lgPadding', '5');
      fixture.componentRef.setInput('lgPaddingNoneAt', 'md');
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--md--none',
      );

      fixture.componentRef.setInput('lgPaddingNoneAt', []);
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-padding--md--none',
      );
    });

    it('updates classes when switching from single to array breakpoint', () => {
      fixture.componentRef.setInput('lgPadding', '5');
      fixture.componentRef.setInput('lgPaddingNoneAt', 'md');
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--md--none',
      );

      fixture.componentRef.setInput('lgPaddingNoneAt', [ 'sm', 'lg' ]);
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).not.toContain('lg-padding--md--none');
      expect(el).toContain('lg-padding--sm--none');
      expect(el).toContain('lg-padding--lg--none');
    });

    it('updates classes when switching from array to single breakpoint', () => {
      fixture.componentRef.setInput('lgPadding', '5');
      fixture.componentRef.setInput('lgPaddingNoneAt', [ 'sm', 'lg' ]);
      fixture.detectChanges();

      let el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding--sm--none');
      expect(el).toContain('lg-padding--lg--none');

      fixture.componentRef.setInput('lgPaddingNoneAt', 'xl');
      fixture.detectChanges();

      el = testElement.nativeElement.getAttribute('class');

      expect(el).not.toContain('lg-padding--sm--none');
      expect(el).not.toContain('lg-padding--lg--none');
      expect(el).toContain('lg-padding--xl--none');
    });
  });
});
