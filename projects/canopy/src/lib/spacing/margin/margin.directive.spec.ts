import { Component, DebugElement, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
})
class TestComponent {
  @Input() lgMargin = 'xs';
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LgMarginDirective],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  }));

  it('renders the same margin all round', () => {
    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-margin--xs',
    );
  });

  it('adds margins to the specified sides', () => {
    ['top', 'right', 'bottom', 'left'].forEach(side => {
      component[`lgMargin${side[0].toUpperCase()}${side.slice(1)}`] = 'xxxl';
      fixture.detectChanges();
      expect(testElement.nativeElement.getAttribute('class')).toContain(
        `lg-margin__${side}--xxxl`,
      );
    });
  });

  it('updates margins to the specified sides', () => {
    ['top', 'right', 'bottom', 'left'].forEach(side => {
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
      `lg-margin--none`,
    );
  });

  it('adds margins of none to specified sides', () => {
    ['top', 'right', 'bottom', 'left'].forEach(side => {
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
      `lg-margin__top--lg`,
      `lg-margin__bottom--lg`,
    );
  });

  it('adds margins to left and right when the horizontal directive is applied', () => {
    component.lgMarginHorizontal = 'xxl';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(
      `lg-margin__left--xxl`,
      `lg-margin__right--xxl`,
    );
  });
});
