import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgStatusDirective } from './status.directive';
import type { Status, Theme } from './status.interface';

@Component({
  template: ' <div [lgStatus]="lgStatus" [lgStatusTheme]="lgStatusTheme">Test</div> ',
  imports: [ LgStatusDirective ],
})
class TestComponent {
  @Input() lgStatus: Status = 'generic';
  @Input() lgStatusTheme: Theme = 'neutral';
}

describe('LgStatus', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgStatusDirective ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  }));

  describe('status classes with default neutral theme', () => {
    it('adds the generic status class', () => {
      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-generic');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the info status class', () => {
      component.lgStatus = 'info';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-info');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the success status class', () => {
      component.lgStatus = 'success';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-success');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the warning status class', () => {
      component.lgStatus = 'warning';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-warning');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the error status class', () => {
      component.lgStatus = 'error';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-error');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('removes the old status class when status changes', () => {
      component.lgStatus = 'info';
      fixture.detectChanges();

      let classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-info');

      component.lgStatus = 'success';
      fixture.detectChanges();

      classes = testElement.nativeElement.getAttribute('class');

      expect(classes).not.toContain('lg-status-info');
      expect(classes).toContain('lg-status-success');
    });
  });

  describe('status classes (with different themes)', () => {
    it('adds status and theme classes when theme is provided', () => {
      component.lgStatus = 'info';
      component.lgStatusTheme = 'bold';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-info');
      expect(classes).toContain('lg-theme-bold');
    });

    it('applies correct status class for each status with theme', () => {
      const statuses: Array<Status> = [ 'generic', 'info', 'success', 'warning', 'error' ];

      statuses.forEach(status => {
        component.lgStatus = status;
        component.lgStatusTheme = 'neutral';
        fixture.detectChanges();

        const classes = testElement.nativeElement.getAttribute('class');

        expect(classes).toContain(`lg-status-${status}`);
        expect(classes).toContain('lg-theme-neutral');
      });
    });

    it('applies correct theme class for each theme type', () => {
      const themes: Array<Theme> = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];

      themes.forEach(theme => {
        component.lgStatus = 'info';
        component.lgStatusTheme = theme;
        fixture.detectChanges();

        const classes = testElement.nativeElement.getAttribute('class');

        expect(classes).toContain('lg-status-info');
        expect(classes).toContain(`lg-theme-${theme}`);
      });
    });

    it('updates theme while keeping status', () => {
      component.lgStatus = 'success';
      component.lgStatusTheme = 'neutral';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-status-success',
      );

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-theme-neutral',
      );

      // Change theme
      component.lgStatusTheme = 'bold';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-status-success');
      expect(classes).not.toContain('lg-theme-neutral');
      expect(classes).toContain('lg-theme-bold');
    });

    it('updates status while keeping theme', () => {
      component.lgStatus = 'info';
      component.lgStatusTheme = 'subtle';
      fixture.detectChanges();

      expect(testElement.nativeElement.getAttribute('class')).toContain('lg-status-info');

      expect(testElement.nativeElement.getAttribute('class')).toContain(
        'lg-theme-subtle',
      );

      // Change status
      component.lgStatus = 'warning';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).not.toContain('lg-status-info');
      expect(classes).toContain('lg-status-warning');
      expect(classes).toContain('lg-theme-subtle');
    });
  });
});
