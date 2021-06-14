import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgHideAtDirective } from './hide-at.directive';

@Component({
  template: ` <div [lgHideAt]="lgHideAt || null">How you see me...</div> `,
})
class TestComponent {
  @Input() lgHideAt;
}

describe('LgHideAtDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, LgHideAtDirective],
      }).compileComponents();
    }),
  );

  beforeEach(
    waitForAsync(() => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;

      testElement = fixture.debugElement.query(By.css('div'));

      fixture.detectChanges();
    }),
  );

  it('does not add a class if the breakpoint is not defined', () => {
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toBe(null);
  });

  it('adds the correct class if the breakpoint is "sm"', () => {
    component.lgHideAt = 'sm';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-hide-at--sm`);
  });

  it('adds the correct class if the breakpoint is "md"', () => {
    component.lgHideAt = 'md';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-hide-at--md`);
  });

  it('adds the correct class if the breakpoint is "lg"', () => {
    component.lgHideAt = 'lg';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-hide-at--lg`);
  });

  it('adds the correct class if the breakpoint is "xl"', () => {
    component.lgHideAt = 'xl';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-hide-at--xl`);
  });

  it('adds the correct class if the breakpoint is "xxl"', () => {
    component.lgHideAt = 'xxl';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-hide-at--xxl`);
  });
});
