import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CanopyModule } from '../../canopy.module';
import { LgValidationComponent } from './validation.component';

import { LgIconComponent } from '../../icon';
import { ValidationVariant } from './validation';

describe('LgValidationComponent', () => {
  let component: LgValidationComponent;
  let fixture: ComponentFixture<LgValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CanopyModule],
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

  it('renders the correct icon for the variant', () => {
    [
      { variant: 'error', icon: 'crossmark-spot-fill' },
      { variant: 'info', icon: 'information-fill' },
      { variant: 'warning', icon: 'warning-fill' },
      { variant: 'success', icon: 'checkmark-spot-fill' },
    ].forEach(({ variant, icon }) => {
      component.variant = variant as ValidationVariant;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css(`[name="${icon}"]`))).not.toBeNull();
    });
  });
});
