import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgShowAtDirective } from './show-at.directive';

@Component({
  template: ` <div [lgShowAt]="lgShowAt || null">How you see me...</div> `,
})
class TestComponent {
  @Input() lgShowAt = null;
}

describe('LgShowAt', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, LgShowAtDirective],
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
    component.lgShowAt = 'sm';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-show-at--sm`);
  });

  it('adds the correct class if the breakpoint is "md"', () => {
    component.lgShowAt = 'md';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-show-at--md`);
  });

  it('adds the correct class if the breakpoint is "lg"', () => {
    component.lgShowAt = 'lg';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-show-at--lg`);
  });

  it('adds the correct class if the breakpoint is "xl"', () => {
    component.lgShowAt = 'xl';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-show-at--xl`);
  });

  it('adds the correct class if the breakpoint is "xxl"', () => {
    component.lgShowAt = 'xxl';
    fixture.detectChanges();
    expect(testElement.nativeElement.getAttribute('class')).toContain(`lg-show-at--xxl`);
  });
});
