import { Component, DebugElement, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgHideAtDirective } from './hide-at.directive';

@Component({
  template: ' <div [lgHideAt]="lgHideAt || null">How you see me...</div> ',
  imports: [ LgHideAtDirective ],
  changeDetection: ChangeDetectionStrategy.Default,
})
class TestComponent {
  @Input() lgHideAt;
}

describe('LgHideAtDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgHideAtDirective ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  });

  it('does not add a class if the breakpoint is not defined', () => {
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toBe(null);
  });

  it('adds the correct class if the breakpoint is "sm"', () => {
    fixture.componentRef.setInput('lgHideAt', 'sm');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-hide-at--sm');
  });

  it('adds the correct class if the breakpoint is "md"', () => {
    fixture.componentRef.setInput('lgHideAt', 'md');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-hide-at--md');
  });

  it('adds the correct class if the breakpoint is "lg"', () => {
    fixture.componentRef.setInput('lgHideAt', 'lg');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-hide-at--lg');
  });

  it('adds the correct class if the breakpoint is "xl"', () => {
    fixture.componentRef.setInput('lgHideAt', 'xl');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-hide-at--xl');
  });

  it('adds the correct class if the breakpoint is "xxl"', () => {
    fixture.componentRef.setInput('lgHideAt', 'xxl');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-hide-at--xxl');
  });
});
