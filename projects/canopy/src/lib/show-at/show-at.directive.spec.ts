import { Component, DebugElement, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgShowAtDirective } from './show-at.directive';

@Component({
  template: ' <div [lgShowAt]="lgShowAt || null">How you see me...</div> ',
  imports: [ LgShowAtDirective ],
  changeDetection: ChangeDetectionStrategy.Default,
})
class TestComponent {
  @Input() lgShowAt = null;
}

describe('LgShowAt', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgShowAtDirective ],
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
    fixture.componentRef.setInput('lgShowAt', 'sm');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-show-at--sm');
  });

  it('adds the correct class if the breakpoint is "md"', () => {
    fixture.componentRef.setInput('lgShowAt', 'md');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-show-at--md');
  });

  it('adds the correct class if the breakpoint is "lg"', () => {
    fixture.componentRef.setInput('lgShowAt', 'lg');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-show-at--lg');
  });

  it('adds the correct class if the breakpoint is "xl"', () => {
    fixture.componentRef.setInput('lgShowAt', 'xl');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-show-at--xl');
  });

  it('adds the correct class if the breakpoint is "xxl"', () => {
    fixture.componentRef.setInput('lgShowAt', 'xxl');
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain('lg-show-at--xxl');
  });
});
