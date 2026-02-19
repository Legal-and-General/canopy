import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';

import { LgIconComponent } from '../icon';
import type { Status } from '../status';

import { LgAlertComponent } from './alert.component';

describe('LgAlertComponent', () => {
  let component: LgAlertComponent;
  let fixture: ComponentFixture<LgAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgAlertComponent, MockComponents(LgIconComponent) ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgAlertComponent);
    component = fixture.componentInstance;
  }));

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
      component.role = 'status';
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('role')).toBe('status');
    });

    it('sets no role attribute when role input is set to "none"', () => {
      component.role = 'none';
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('role')).toBe(null);
    });
  });

  it('does not renders an icon for generic status', () => {
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.directive(LgIconComponent));

    expect(icon).toBeNull();
  });

  it('does not render an icon when showIcon is set to false', () => {
    component.showIcon = false;
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.directive(LgIconComponent));

    expect(icon).toBeNull();
  });

  [
    { status: 'error', icon: 'crossmark-spot-fill' },
    { status: 'info', icon: 'information-fill' },
    { status: 'warning', icon: 'warning-fill' },
    { status: 'success', icon: 'checkmark-spot-fill' },
  ].forEach(({ status, icon }) => {
    it(`renders the correct icon for the ${status} alert`, () => {
      fixture.componentRef.setInput('status', status);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css(`[name="${icon}"]`))).not.toBeNull();
    });
  });
});
