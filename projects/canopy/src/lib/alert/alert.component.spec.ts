import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';

import { LgIconComponent } from '../icon';
import type { Status } from '../status';

import { LgAlertComponent } from './alert.component';

@Component({
  standalone: true,
  template: `
    <lg-alert>
      <p>Alert content</p>
    </lg-alert>
  `,
  imports: [ LgAlertComponent ],
  changeDetection: ChangeDetectionStrategy.Default,
})
class TestHostComponent {}

describe('LgAlertComponent', () => {
  let component: LgAlertComponent;
  let fixture: ComponentFixture<LgAlertComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ LgAlertComponent, MockComponents(LgIconComponent) ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgAlertComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('adds the status class when status changes', () => {
    fixture.componentRef.setInput('status', 'success');
    fixture.detectChanges();

    const classes = fixture.nativeElement.getAttribute('class');

    expect(classes).toContain('lg-status-success');
    expect(classes).toContain('lg-theme-neutral');
  });

  it('can change the theme', () => {
    fixture.componentRef.setInput('status', 'info');
    fixture.componentRef.setInput('statusTheme', 'bold');
    fixture.detectChanges();

    const classes = fixture.nativeElement.getAttribute('class');

    expect(classes).toContain('lg-status-info');
    expect(classes).toContain('lg-theme-bold');
  });

  describe('role', () => {
    function testStatus(status: Status, expectedRole: null | 'alert' | 'status') {
      fixture.componentRef.setInput('status', status);
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('role')).toBe(expectedRole);
    }

    for (const status of [ 'info', 'generic' ]) {
      it(`does not add a Aria role for the ${status} status`, () => {
        testStatus(status as Status, null);
      });
    }

    for (const status of [ 'success', 'warning', 'error' ]) {
      it(`adds the Aria role "alert" for the ${status} status`, () => {
        testStatus(status as Status, 'alert');
      });
    }

    it('overrides the role attribute when role input is set', () => {
      fixture.componentRef.setInput('role', 'status');
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('role')).toBe('status');
    });

    it('sets no role attribute when role input is set to "none"', () => {
      fixture.componentRef.setInput('role', 'none');
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('role')).toBe(null);
    });
  });

  it('does not render an icon when showIcon is set to false', () => {
    fixture.componentRef.setInput('showIcon', false);
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.directive(LgIconComponent));

    expect(icon).toBeNull();
  });

  it('projects content into the body', () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);

    hostFixture.detectChanges();

    const body = hostFixture.nativeElement.querySelector('.lg-alert__body');

    expect(body.textContent).toContain('Alert content');
  });

  [
    { status: 'error', icon: 'crossmark-spot-filled' },
    { status: 'info', icon: 'information-filled' },
    { status: 'warning', icon: 'warning-filled' },
    { status: 'success', icon: 'checkmark-spot-filled' },
    { status: 'generic', icon: 'globe' },
  ].forEach(({ status, icon }) => {
    it(`renders the correct icon for the ${status} alert`, () => {
      fixture.componentRef.setInput('status', status);
      fixture.detectChanges();

      expect(component.statusIcon).toBe(icon);
    });
  });

  it('renders a custom icon for generic status', () => {
    fixture.componentRef.setInput('status', 'generic');
    component.icon = 'settings';
    fixture.detectChanges();

    expect(component.statusIcon).toBe('settings');
  });

  it('renders a custom icon for info status', () => {
    fixture.componentRef.setInput('status', 'info');
    component.icon = 'help';
    fixture.detectChanges();

    expect(component.statusIcon).toBe('help');
  });

  it('does not render a custom icon for success status', () => {
    fixture.componentRef.setInput('status', 'success');
    component.icon = 'settings';
    fixture.detectChanges();

    expect(component.statusIcon).toBe('checkmark-spot-filled');
  });
});
