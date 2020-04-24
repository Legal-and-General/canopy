import { Component, DebugElement, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
  `
})
class TestComponent {
  @Input() lgPadding = 'xs';
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LgPaddingDirective]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  }));

  it('renders the same padding all round', () => {
    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-padding--xs'
    );
  });

  it('adds paddings to the specified sides', () => {
    ['top', 'right', 'bottom', 'left'].forEach(side => {
      component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = 'xxxl';
      fixture.detectChanges();
      expect(testElement.nativeElement.getAttribute('class')).toContain(
        `lg-padding__${side}--xxxl`
      );
    });
  });

  it('updates paddings to the specified sides', () => {
    ['top', 'right', 'bottom', 'left'].forEach(side => {
      component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = 'xxxl';
      fixture.detectChanges();
      expect(testElement.nativeElement.getAttribute('class')).toContain(
        `lg-padding__${side}--xxxl`
      );
      component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = 'md';
      fixture.detectChanges();
      expect(testElement.nativeElement.getAttribute('class')).not.toContain(
        `lg-padding__${side}--xxxl`
      );
      expect(testElement.nativeElement.getAttribute('class')).toContain(
        `lg-padding__${side}--md`
      );
    });
  });

  it('adds paddings of none to all sides', () => {
    component.lgPadding = 'none';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(
      `lg-padding--none`
    );
  });

  it('adds paddings of none to specified sides', () => {
    ['top', 'right', 'bottom', 'left'].forEach(side => {
      component[`lgPadding${side[0].toUpperCase()}${side.slice(1)}`] = 'none';
      fixture.detectChanges();
      expect(testElement.nativeElement.getAttribute('class')).toContain(
        `lg-padding__${side}--none`
      );
    });
  });

  it('adds paddings to top and bottom when the vertical directive is applied', () => {
    component.lgPaddingVertical = 'lg';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(
      `lg-padding__top--lg`,
      `lg-padding__bottom--lg`
    );
  });

  it('adds paddings to left and right when the horizontal directive is applied', () => {
    component.lgPaddingHorizontal = 'xxl';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(
      `lg-padding__left--xxl`,
      `lg-padding__right--xxl`
    );
  });
});
