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
      component.lgPadding = '3';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain('lg-padding--3');
    });

    it('adds paddings to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = '9';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--9`,
        );
      });
    });

    it('updates paddings to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = '9';
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--9`,
        );

        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = '5';
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
      component.lgPaddingVertical = '6';
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__top--6');

      expect(el).toContain('lg-padding__bottom--6');
    });

    it('adds paddings to left and right when the horizontal directive is applied', () => {
      component.lgPaddingHorizontal = '8';
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__left--8');

      expect(el).toContain('lg-padding__right--8');
    });
  });

  describe('Responsive padding', () => {
    it('adds responsive padding to all of the sides', () => {
      component.lgPadding = { sm: '5', md: '6' };
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding--sm--5');

      expect(el).toContain('lg-padding--md--6');
    });

    it('adds responsive padding to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = { md: '6' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--md--6`,
        );
      });
    });

    it('updates responsive padding to the specified sides', () => {
      [ 'top', 'right', 'bottom', 'left' ].forEach(side => {
        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = { md: '6' };
        fixture.detectChanges();

        expect(testElement.nativeElement.getAttribute('class')).toContain(
          `lg-padding__${side}--md--6`,
        );

        component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = { lg: '9' };
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
      component.lgPaddingVertical = { md: '8' };
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__top--md--8');

      expect(el).toContain('lg-padding__bottom--md--8');
    });

    it('adds respsonsive padding to left and right when the horizontal directive is applied', () => {
      component.lgPaddingHorizontal = { md: '8' };
      fixture.detectChanges();

      const el = testElement.nativeElement.getAttribute('class');

      expect(el).toContain('lg-padding__left--md--8');

      expect(el).toContain('lg-padding__right--md--8');
    });
  });
});
