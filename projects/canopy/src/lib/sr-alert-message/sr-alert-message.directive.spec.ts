import { ChangeDetectorRef, Component, DebugElement, Input } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { instance, mock } from '@typestrong/ts-mockito';

import { LgSrAlertMessageDirective } from './sr-alert-message.directive';

@Component({
  template: ' <p [lgSrAlertMessage]="lgSrAlertMessage">Test feature</p> ',
  standalone: true,
  imports: [ LgSrAlertMessageDirective ],
})
class TestComponent {
  @Input() lgSrAlertMessage;
}

describe('lgSrAlertMessage', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: LgSrAlertMessageDirective;
  let testElement: DebugElement;
  let component: TestComponent;
  let cdrMock: ChangeDetectorRef;

  beforeEach(waitForAsync(() => {
    cdrMock = mock(ChangeDetectorRef);

    TestBed.configureTestingModule({
      imports: [ TestComponent, LgSrAlertMessageDirective ],
      providers: [ { provide: ChangeDetectorRef, useValue: instance(cdrMock) } ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    testElement = fixture.debugElement.query(By.directive(LgSrAlertMessageDirective));
    directive = testElement.injector.get(LgSrAlertMessageDirective);
  }));

  it('should have the class to visually hide the element', () => {
    component.lgSrAlertMessage = true;
    fixture.detectChanges();

    expect(testElement.nativeElement.getAttribute('class')).toContain(
      'lg-visually-hidden',
    );
  });

  describe('when lgSrAlertMessage is set to false', () => {
    beforeEach(() => {
      component.lgSrAlertMessage = false;
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
      component.lgSrAlertMessage = true;
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
    it('should set lgSrAlertMessage to false after the default amount of time', fakeAsync(() => {
      component.lgSrAlertMessage = true;
      fixture.detectChanges();
      tick(7000);

      expect(directive.lgSrAlertMessage).toBe(true);
      tick(8000);

      expect(directive.lgSrAlertMessage).toBe(false);
    }));

    it('should set lgSrAlertMessage to false after the amount of time specified with the timer input', fakeAsync(() => {
      component.lgSrAlertMessage = true;
      directive.timer = 5000;
      fixture.detectChanges();
      tick(4000);

      expect(directive.lgSrAlertMessage).toBe(true);
      tick(5000);

      expect(directive.lgSrAlertMessage).toBe(false);
    }));
  });
});
