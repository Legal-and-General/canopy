import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

import { LgIconComponent } from '../../icon';

import { LgValidationComponent } from './validation.component';

describe('LgValidationComponent', () => {
  let component: LgValidationComponent;
  let fixture: ComponentFixture<LgValidationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgValidationComponent, MockComponent(LgIconComponent) ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds a unique identifier', () => {
    expect(/lg-validation-\d/.test(fixture.nativeElement.getAttribute('id'))).toBe(true);
  });

  it('renders an icon by default', () => {
    const icon = fixture.debugElement.query(By.directive(LgIconComponent));

    expect(icon).not.toBeNull();
  });

  it('does not render an icon when showIcon is set to false', () => {
    component.showIcon = false;
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.directive(LgIconComponent));

    expect(icon).toBeNull();
  });

  it('renders the correct icon for the status', () => {
    [
      { status: 'error', icon: 'crossmark-spot-fill' },
      { status: 'info', icon: 'information-fill' },
      { status: 'warning', icon: 'warning-fill' },
      { status: 'success', icon: 'checkmark-spot-fill' },
    ].forEach(({ status, icon }) => {
      fixture.componentRef.setInput('status', status);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css(`[name="${icon}"]`))).not.toBeNull();
    });
  });
});
