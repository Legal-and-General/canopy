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
});
