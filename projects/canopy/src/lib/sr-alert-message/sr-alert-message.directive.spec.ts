import {
  ChangeDetectorRef,
  Component,
  DebugElement,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgSrAlertMessageDirective } from './sr-alert-message.directive';

@Component({
  template: ' <p [lgSrAlertMessage]="lgSrAlertMessage">Test feature</p> ',
  imports: [ LgSrAlertMessageDirective ],
  changeDetection: ChangeDetectionStrategy.Default,
})
class TestComponent {
  @Input() lgSrAlertMessage;
}

describe('lgSrAlertMessage', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: LgSrAlertMessageDirective;
  let testElement: DebugElement;
  let cdrMock: jest.Mocked<ChangeDetectorRef>;

  beforeEach(async () => {
    cdrMock = {
      detectChanges: jest.fn(),
      markForCheck: jest.fn(),
    } as unknown as jest.Mocked<ChangeDetectorRef>;

    TestBed.configureTestingModule({
      imports: [ TestComponent, LgSrAlertMessageDirective ],
      providers: [ { provide: ChangeDetectorRef, useValue: cdrMock } ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestComponent);
    testElement = fixture.debugElement.query(By.directive(LgSrAlertMessageDirective));
    directive = testElement.injector.get(LgSrAlertMessageDirective);
  });

  it('should have the class to visually hide the element', () => {
    fixture.componentRef.setInput('lgSrAlertMessage', true);
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-visually-hidden',
    );
  });

  describe('when lgSrAlertMessage is set to false', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('lgSrAlertMessage', false);
      fixture.detectChanges();
    });

    it('should have an aria-hidden attribute set to true', () => {
      expect(testElement.nativeElement.getAttribute('aria-hidden')).toBe('true');
    });

    it('shouldn\'t have a role or aria-live attribute', () => {
      expect(testElement.nativeElement.getAttribute('role')).toBeNull();
      expect(testElement.nativeElement.getAttribute('aria-live')).toBeNull();
    });
  });

  describe('when lgSrAlertMessage is set to true', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('lgSrAlertMessage', true);
      fixture.detectChanges();
    });

    it('should have an aria-hidden attribute set to false', () => {
      expect(testElement.nativeElement.getAttribute('aria-hidden')).toBe('false');
    });

    it('should have a role and an aria-live attribute', () => {
      expect(testElement.nativeElement.getAttribute('role')).toBe('alert');
      expect(testElement.nativeElement.getAttribute('aria-live')).toBe('assertive');
    });
  });

  describe('on init', () => {
    it('should set lgSrAlertMessage to false after the default amount of time', () => {
      jest.useFakeTimers();
      fixture.componentRef.setInput('lgSrAlertMessage', true);
      fixture.detectChanges();
      jest.advanceTimersByTime(7000);

      expect(directive.lgSrAlertMessage).toBe(true);
      jest.advanceTimersByTime(8000);

      expect(directive.lgSrAlertMessage).toBe(false);
      jest.useRealTimers();
    });

    it('should set lgSrAlertMessage to false after the amount of time specified with the timer input', () => {
      jest.useFakeTimers();
      fixture.componentRef.setInput('lgSrAlertMessage', true);
      fixture.componentRef.setInput('timer', 5000);
      fixture.detectChanges();
      jest.advanceTimersByTime(4000);

      expect(directive.lgSrAlertMessage).toBe(true);
      jest.advanceTimersByTime(5000);

      expect(directive.lgSrAlertMessage).toBe(false);
      jest.useRealTimers();
    });
  });
});
