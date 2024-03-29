import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
    >
      Test feature
    </div>
  `,
  standalone: true,
  imports: [ LgPaddingDirective ],
})
class TestComponent {
  @Input() lgPadding;
  @Input() lgPaddingTop;
  @Input() lgPaddingRight;
  @Input() lgPaddingBottom;
  @Input() lgPaddingLeft;
  @Input() lgPaddingVertical;
  @Input() lgPaddingHorizontal;
}

describe('LgPadding', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgPaddingDirective ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  }));

  describe('Non-responsive padding', () => {
    it('renders the same padding all round', () => {
      component.lgPadding = 'xs';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain('lg-padding--xs');
    });

    it('adds paddings to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = 'xxxl';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--xxxl`,
        );
      });
    });

    it('updates paddings to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = 'xxxl';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--xxxl`,
        );

        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = 'md';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).not.toContain(
          `lg-padding__${side}--xxxl`,
        );

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--md`,
        );
      });
    });

    it('adds paddings of none to all sides', () => {
      component.lgPadding = 'none';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--none',
      );
    });

    it('adds paddings of none to specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = 'none';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--none`,
        );
      });
    });

    it('adds paddings to top and bottom when the vertical directive is applied', () => {
      component.lgPaddingVertical = 'lg';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding__top--lg',
        'lg-padding__bottom--lg',
      );
    });

    it('adds paddings to left and right when the horizontal directive is applied', () => {
      component.lgPaddingHorizontal = 'xxl';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding__left--xxl',
        'lg-padding__right--xxl',
      );
    });
  });

  describe('Responsive padding', () => {
    it('adds repsonive padding to all of the sides', () => {
      component.lgPadding = { sm: 'md', md: 'lg' };
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--sm--md',
      );

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--md--lg',
      );
    });

    it('adds responsive padding to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = { md: 'lg' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--md--lg`,
        );
      });
    });

    it('updates responsive padding to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = { md: 'lg' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--md--lg`,
        );

        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = { lg: 'xxxl' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).not.toContain(
          `lg-padding__${side}--md--lg`,
        );

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--lg--xxxl`,
        );
      });
    });

    it('adds paddings of none to all sides', () => {
      component.lgPadding = { sm: 'none' };
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding--sm--none',
      );
    });

    it('adds responsive padding of none to specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = { md: 'none' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--md--none`,
        );
      });
    });

    it('adds respsonsive padding to top and bottom when the vertical directive is applied', () => {
      component.lgPaddingVertical = { md: 'xxl' };
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding__top--md--xxl',
        'lg-padding__bottom--md--xxl',
      );
    });

    it('adds respsonsive padding to left and right when the horizontal directive is applied', () => {
      component.lgPaddingHorizontal = { md: 'xxl' };
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-padding__left--md--xxl',
        'lg-padding__right--md--xxl',
      );
    });
  });
});
