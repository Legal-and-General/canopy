import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockComponents } from 'ng-mocks';

import { LgAlertComponent } from './alert.component';
import { LgIconComponent } from '../icon';
import { Variant } from '../variant/variant.interface';

describe('LgAlertComponent', () => {
  let component: LgAlertComponent;
  let fixture: ComponentFixture<LgAlertComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgAlertComponent, MockComponents(LgIconComponent)],
      }).compileComponents();

      fixture = TestBed.createComponent(LgAlertComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds generic as the default variant', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('generic');
  });

  it('adds the variant class to the alert component', () => {
    component.variant = Variant.Success;
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('class')).toContain('success');
  });

  it('does not add a Aria role for the info variant', () => {
    component.variant = Variant.Info;
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('role')).toBeNull();
  });

  it('adds the Aria role "alert" for all other variants', () => {
    component.variant = Variant.Warning;
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
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
    { variant: Variant.Error, icon: 'crossmark-spot-fill' },
    { variant: Variant.Info, icon: 'information-fill' },
    { variant: Variant.Warning, icon: 'warning-fill' },
    { variant: Variant.Success, icon: 'checkmark-spot-fill' },
  ].forEach(({ variant, icon }) => {
    it(`renders the correct icon for the ${variant} alert`, () => {
      component.variant = variant;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css(`[name="${icon}"]`))).not.toBeNull();
    });
  });
});
