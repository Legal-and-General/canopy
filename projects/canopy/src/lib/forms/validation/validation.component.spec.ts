import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  DefaultRenderComponent,
  MockedComponentFixture,
  MockRender,
  ngMocks,
} from 'ng-mocks';

import { LgIconComponent } from '../../icon';
import type { Status } from '../../status';

import { LgValidationComponent } from './validation.component';

@Component({
  standalone: true,
  imports: [ LgValidationComponent ],
  template: ' <lg-validation status="success"> Validation message </lg-validation> ',
})
class TestHostValidationStatusComponent {}

describe('LgValidationComponent', () => {
  let component: LgValidationComponent;
  let fixture: MockedComponentFixture<
    LgValidationComponent,
    DefaultRenderComponent<LgValidationComponent>
  >;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgValidationComponent, TestHostValidationStatusComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    ngMocks.flushTestBed();

    fixture = MockRender('<lg-validation></lg-validation>');
    component = ngMocks.findInstance(LgValidationComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds a unique identifier', () => {
    const validationElement = fixture.debugElement.query(By.css('lg-validation'));

    expect(
      /^lg-validation-[a-z0-9]{7}$/.test(
        validationElement.nativeElement.getAttribute('id'),
      ),
    ).toBe(true);
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
    const testCases: Array<{ status: Status; icon: string; hostClass: string }> = [
      {
        status: 'error',
        icon: 'crossmark-spot-filled',
        hostClass: 'lg-status-error',
      },
      {
        status: 'info',
        icon: 'information-filled',
        hostClass: 'lg-status-info',
      },
      {
        status: 'warning',
        icon: 'warning-filled',
        hostClass: 'lg-status-warning',
      },
      {
        status: 'success',
        icon: 'checkmark-spot-filled',
        hostClass: 'lg-status-success',
      },
    ];

    testCases.forEach(({ status, icon, hostClass }) => {
      component.status = status;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css(`[name="${icon}"]`))).not.toBeNull();

      const validationElement = fixture.debugElement.query(By.css('lg-validation'));
      const classes = validationElement.nativeElement.getAttribute('class');

      expect(classes).toContain(hostClass);
      expect(classes).toContain('lg-theme-neutral');
    });
  });

  it('uses static status input bindings', () => {
    const hostFixture = TestBed.createComponent(TestHostValidationStatusComponent);

    hostFixture.detectChanges();

    expect(
      hostFixture.debugElement.query(By.css('[name="checkmark-spot-filled"]')),
    ).not.toBeNull();

    expect(
      hostFixture.debugElement.query(By.css('[name="crossmark-spot-filled"]')),
    ).toBeNull();

    const validationElement = hostFixture.debugElement.query(By.css('lg-validation'));
    const classes = validationElement.nativeElement.getAttribute('class');

    expect(classes).toContain('lg-status-success');
    expect(classes).toContain('lg-theme-neutral');
    expect(classes).not.toContain('lg-status-error');
  });
});
