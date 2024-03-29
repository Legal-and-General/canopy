import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';

import { LgIconComponent } from '../icon';
import type { Variant } from '../variant';

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
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds generic as the default variant', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('generic');
  });

  it('adds the variant class to the alert component', () => {
    component.variant = 'success';
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('class')).toContain('success');
  });

  describe('role', () => {
    it('does not add a Aria role for the info variant', () => {
      component.variant = 'info';
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('role')).toBeNull();
    });

    it('does not add a Aria role for the generic variant', () => {
      component.variant = 'generic';
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('role')).toBeNull();
    });

    for (const variant of [ 'success', 'warning', 'error' ]) {
      it(`adds the Aria role "alert" for the ${variant} variant`, () => {
        component.variant = variant as Variant;
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
      });
    }

    it('overrides the role attribute when role input is set', () => {
      component.role = 'status';
      fixture.detectChanges();

      expect(fixture.nativeElement.getAttribute('role')).toBe('status');
    });
  });

  it('does not renders an icon for generic variant', () => {
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
    { variant: 'error', icon: 'crossmark-spot-fill' },
    { variant: 'info', icon: 'information-fill' },
    { variant: 'warning', icon: 'warning-fill' },
    { variant: 'success', icon: 'checkmark-spot-fill' },
  ].forEach(({ variant, icon }) => {
    it(`renders the correct icon for the ${variant} alert`, () => {
      component.variant = variant as Variant;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css(`[name="${icon}"]`))).not.toBeNull();
    });
  });
});
