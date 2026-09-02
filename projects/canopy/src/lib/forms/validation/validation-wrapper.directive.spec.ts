import { Component, DebugElement, inject, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';

import { LgIconComponent } from '../../icon';
import { LgCheckboxGroupComponent } from '../checkbox-group';
import { LgDateFieldComponent } from '../date';
import { LgInputDirective, LgInputFieldComponent } from '../input';
import { LgRadioButtonComponent, LgRadioGroupComponent } from '../radio';
import { LgSelectDirective, LgSelectFieldComponent } from '../select';
import { LgToggleComponent } from '../toggle';

import { LgValidationComponent } from './validation.component';
import { LgValidationWrapperDirective } from './validation-wrapper.directive';

const validationId = 'test-validation-id';
const wrapperId = 'test-wrapper-id';

function isInsideLabelOrLegend(element: HTMLElement): boolean {
  return Boolean(element.closest('label, legend'));
}

describe('LgValidationWrapperDirective', () => {
  @Component({
    template: '<div lgValidationWrapper></div>',
    imports: [ LgValidationWrapperDirective ],
  })
  class DefaultIdHostComponent {}

  @Component({
    template: '<div lgValidationWrapper id="static-wrapper-id"></div>',
    imports: [ LgValidationWrapperDirective ],
  })
  class StaticIdHostComponent {}

  @Component({
    template: '<div lgValidationWrapper [lgValidationWrapperId]="wrapperId"></div>',
    imports: [ LgValidationWrapperDirective ],
  })
  class DynamicIdHostComponent {
    wrapperId = 'dynamic-wrapper-id';
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DefaultIdHostComponent,
        StaticIdHostComponent,
        DynamicIdHostComponent,
        LgValidationWrapperDirective,
      ],
    }).compileComponents();
  }));

  it('generates a unique id when no id is provided', () => {
    const fixture = TestBed.createComponent(DefaultIdHostComponent);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div').id).toMatch(
      /^lg-validation-wrapper-\d+$/,
    );
  });

  it('uses a static host id', () => {
    const fixture = TestBed.createComponent(StaticIdHostComponent);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div').id).toBe('static-wrapper-id');
  });

  it('uses lgValidationWrapperId for a dynamic id', () => {
    const fixture = TestBed.createComponent(DynamicIdHostComponent);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div').id).toBe('dynamic-wrapper-id');
  });
});

describe('validation wrapper projection', () => {
  describe('lg-input-field', () => {
    @Component({
      template: `
        <lg-input-field>
          Label
          <div lgValidationWrapper id="${wrapperId}">
            <lg-validation id="${validationId}">Error</lg-validation>
          </div>
          <input lgInput />
        </lg-input-field>
      `,
      imports: [
        LgInputFieldComponent,
        LgInputDirective,
        LgValidationComponent,
        LgValidationWrapperDirective,
      ],
    })
    class TransparentHostComponent {}

    @Component({
      template: `
        <lg-input-field>
          Label
          <div lgValidationWrapper id="${wrapperId}"></div>
          <input lgInput />
        </lg-input-field>
      `,
      imports: [ LgInputFieldComponent, LgInputDirective, LgValidationWrapperDirective ],
    })
    class OpaqueHostComponent {}

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TransparentHostComponent,
          OpaqueHostComponent,
          FormsModule,
          ReactiveFormsModule,
          MockComponents(LgIconComponent),
        ],
      }).compileComponents();
    }));

    it('projects a wrapper with validation outside the label and uses the validation id', () => {
      const fixture = TestBed.createComponent(TransparentHostComponent);

      fixture.detectChanges();

      const wrapper: HTMLElement = fixture.nativeElement.querySelector(
        '[lgValidationWrapper]',
      );

      expect(isInsideLabelOrLegend(wrapper)).toBe(false);

      expect(
        fixture.nativeElement.querySelector('input').getAttribute('aria-describedby'),
      ).toBe(validationId);
    });

    it('projects an empty wrapper outside the label and falls back to the wrapper id', () => {
      const fixture = TestBed.createComponent(OpaqueHostComponent);

      fixture.detectChanges();

      const wrapper: HTMLElement = fixture.nativeElement.querySelector(
        '[lgValidationWrapper]',
      );

      expect(isInsideLabelOrLegend(wrapper)).toBe(false);

      expect(
        fixture.nativeElement.querySelector('input').getAttribute('aria-describedby'),
      ).toBe(wrapperId);
    });
  });

  describe('lg-select-field', () => {
    @Component({
      template: `
        <lg-select-field>
          Label
          <div lgValidationWrapper id="${wrapperId}"></div>
          <select lgSelect>
            <option value="1">One</option>
          </select>
        </lg-select-field>
      `,
      imports: [ LgSelectFieldComponent, LgSelectDirective, LgValidationWrapperDirective ],
    })
    class HostComponent {}

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HostComponent,
          FormsModule,
          ReactiveFormsModule,
          MockComponents(LgIconComponent),
        ],
      }).compileComponents();
    }));

    it('projects the wrapper outside the label and describes the select', () => {
      const fixture = TestBed.createComponent(HostComponent);

      fixture.detectChanges();

      const wrapper: HTMLElement = fixture.nativeElement.querySelector(
        '[lgValidationWrapper]',
      );

      expect(isInsideLabelOrLegend(wrapper)).toBe(false);

      expect(
        fixture.nativeElement.querySelector('select').getAttribute('aria-describedby'),
      ).toBe(wrapperId);
    });
  });

  describe('lg-radio-group', () => {
    @Component({
      template: `
        <lg-radio-group>
          Label
          <div lgValidationWrapper id="${wrapperId}"></div>
          <lg-radio-button value="1">One</lg-radio-button>
        </lg-radio-group>
      `,
      imports: [
        LgRadioGroupComponent,
        LgRadioButtonComponent,
        LgValidationWrapperDirective,
      ],
    })
    class HostComponent {}

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HostComponent,
          FormsModule,
          ReactiveFormsModule,
          MockComponents(LgIconComponent),
        ],
      }).compileComponents();
    }));

    it('projects the wrapper outside the legend and describes the fieldset', () => {
      const fixture = TestBed.createComponent(HostComponent);

      fixture.detectChanges();

      const wrapper: HTMLElement = fixture.nativeElement.querySelector(
        '[lgValidationWrapper]',
      );

      expect(isInsideLabelOrLegend(wrapper)).toBe(false);

      expect(
        fixture.nativeElement.querySelector('fieldset').getAttribute('aria-describedby'),
      ).toBe(wrapperId);
    });
  });

  describe('lg-checkbox-group', () => {
    @Component({
      template: `
        <lg-checkbox-group>
          Label
          <div lgValidationWrapper id="${wrapperId}"></div>
          <lg-checkbox value="1">One</lg-checkbox>
        </lg-checkbox-group>
      `,
      imports: [
        LgCheckboxGroupComponent,
        LgToggleComponent,
        LgValidationWrapperDirective,
      ],
    })
    class HostComponent {}

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HostComponent,
          FormsModule,
          ReactiveFormsModule,
          MockComponents(LgIconComponent),
        ],
      }).compileComponents();
    }));

    it('projects the wrapper outside the legend and describes the fieldset', () => {
      const fixture = TestBed.createComponent(HostComponent);

      fixture.detectChanges();

      const wrapper: HTMLElement = fixture.nativeElement.querySelector(
        '[lgValidationWrapper]',
      );

      expect(isInsideLabelOrLegend(wrapper)).toBe(false);

      expect(
        fixture.nativeElement.querySelector('fieldset').getAttribute('aria-describedby'),
      ).toBe(wrapperId);
    });
  });

  describe('lg-toggle', () => {
    @Component({
      template: `
        <lg-toggle>
          Label
          <div lgValidationWrapper id="${wrapperId}"></div>
        </lg-toggle>
      `,
      imports: [ LgToggleComponent, LgValidationWrapperDirective ],
    })
    class HostComponent {}

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HostComponent,
          FormsModule,
          ReactiveFormsModule,
          MockComponents(LgIconComponent),
        ],
      }).compileComponents();
    }));

    it('projects the wrapper outside the label and describes the checkbox', () => {
      const fixture = TestBed.createComponent(HostComponent);

      fixture.detectChanges();

      const wrapper: HTMLElement = fixture.nativeElement.querySelector(
        '[lgValidationWrapper]',
      );

      expect(isInsideLabelOrLegend(wrapper)).toBe(false);

      expect(
        fixture.nativeElement.querySelector('input').getAttribute('aria-describedby'),
      ).toBe(wrapperId);
    });
  });

  describe('lg-date-field', () => {
    @Component({
      template: `
        <form [formGroup]="form" #testForm="ngForm">
          <lg-date-field formControlName="dateOfBirth">
            Date of birth
            <div lgValidationWrapper id="${wrapperId}"></div>
          </lg-date-field>
        </form>
      `,
      imports: [
        FormsModule,
        ReactiveFormsModule,
        LgDateFieldComponent,
        LgValidationWrapperDirective,
      ],
    })
    class HostComponent {
      private fb = inject(UntypedFormBuilder);
      form: UntypedFormGroup = this.fb.group({ dateOfBirth: [ '' ] });

      @ViewChild('testForm') testFormDirective: FormGroupDirective;
    }

    let fixture: ComponentFixture<HostComponent>;
    let fieldset: DebugElement;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HostComponent,
          FormsModule,
          ReactiveFormsModule,
          MockComponents(LgIconComponent),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(HostComponent);
      fixture.detectChanges();
      fieldset = fixture.debugElement.query(By.css('fieldset'));
    }));

    it('projects the wrapper outside the legend and describes the fieldset', () => {
      const wrapper: HTMLElement = fixture.nativeElement.querySelector(
        '[lgValidationWrapper]',
      );

      expect(isInsideLabelOrLegend(wrapper)).toBe(false);

      expect(fieldset.nativeElement.getAttribute('aria-describedby')).toContain(
        wrapperId,
      );
    });
  });
});
