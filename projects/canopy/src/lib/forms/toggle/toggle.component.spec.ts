import { Component, DebugElement, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MockComponents } from 'ng-mocks';
import { anything, instance, mock, when } from 'ts-mockito';

import { LgIconComponent } from '../../icon/icon.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import { LgToggleComponent } from './toggle.component';

const validationTestId = 'test-validation-id';

@Component({
  template: `
    <form (ngSubmit)="login()" [formGroup]="form" #testForm="ngForm">
      <lg-toggle
        formControlName="umbrella"
        [value]="true"
        (change)="onChange()"
        [variant]="variant"
      >
        I will bring my Umbrella if it is raining
        <lg-validation
          id="${validationTestId}"
          *ngIf="isControlInvalid(umbrella, testForm)"
        >
          You must agree to the terms and conditions
        </lg-validation>
      </lg-toggle>
    </form>
  `
})
class TestToggleComponent {
  @Input() variant: 'checkbox' | 'switch';

  form: FormGroup;

  get umbrella() {
    return this.form.get('umbrella');
  }

  constructor(public fb: FormBuilder, private errorState: LgErrorStateMatcher) {
    this.form = this.fb.group({
      umbrella: [
        { value: null, disabled: false },
        [Validators.required, Validators.requiredTrue]
      ]
    });
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }
}

describe('LgToggleComponent', () => {
  let fixture: ComponentFixture<TestToggleComponent>;
  let component: TestToggleComponent;
  let toggleDebugElement: DebugElement;
  let toggleInstance: LgToggleComponent;
  let validationDebugElement: DebugElement;
  let inputDebugElement: DebugElement;
  let inputLabelElement: DebugElement;

  const errorStateMatcherMock = mock(LgErrorStateMatcher);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        TestToggleComponent,
        LgToggleComponent,
        MockComponents(LgIconComponent, LgValidationComponent)
      ],
      providers: [
        {
          provide: LgErrorStateMatcher,
          useFactory: () => instance(errorStateMatcherMock)
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestToggleComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    toggleDebugElement = fixture.debugElement.query(
      By.directive(LgToggleComponent)
    );

    toggleInstance = toggleDebugElement.injector.get<LgToggleComponent>(
      LgToggleComponent
    );

    inputDebugElement = fixture.debugElement.query(By.css('.lg-toggle__input'));
    inputLabelElement = fixture.debugElement.query(By.css('.lg-toggle__label'));
    fixture.detectChanges();
  }));

  it('sets a unique name for the toggle button', () => {
    expect(
      /lg-toggle-\d/.test(inputDebugElement.nativeElement.getAttribute('name'))
    ).toBe(true);
  });

  it('sets a unique id for the toggle button', () => {
    expect(
      /lg-toggle-\d/.test(inputDebugElement.nativeElement.getAttribute('id'))
    ).toBe(true);
  });

  it('sets the correct modifier class based on the variant', () => {
    component.variant = 'checkbox';
    expect(
      inputLabelElement.nativeElement.classList.contains(
        'lg-toggle__label--switch'
      )
    ).toBe(false);

    component.variant = 'switch';
    fixture.detectChanges();

    expect(
      inputLabelElement.nativeElement.classList.contains(
        'lg-toggle__label--switch'
      )
    ).toBe(true);
  });

  it('links the label to the input field with the correct attributes', () => {
    const id = inputDebugElement.nativeElement.getAttribute('id');
    expect(id).toBeTruthy();
    expect(inputLabelElement.nativeElement.getAttribute('for')).toBe(id);
  });

  it('checks the toggle by default if the value is true', () => {
    expect(inputDebugElement.nativeElement.checked).toBe(false);
    component.umbrella.setValue(true);
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.checked).toBe(true);
  });

  it('updates the model value when a toggle is checked', () => {
    expect(component.umbrella.value).toBe(null);
    fixture.detectChanges();
    inputDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.umbrella.value).toBe(true);
  });

  it('triggers the onChange action when the toggle is checked', () => {
    const onChangeSpy = spyOn(toggleInstance, 'onChange');
    inputDebugElement.triggerEventHandler('click', null);
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('disables the input field when the property is set', () => {
    expect(inputDebugElement.nativeElement.disabled).toBe(false);
    component.umbrella.disable();
    fixture.detectChanges();
    expect(inputDebugElement.nativeElement.disabled).toBe(true);
  });

  it('links the error to the input field with the correct attributes', () => {
    const id = inputDebugElement.nativeElement.getAttribute('id');
    expect(id).toBeTruthy();
    expect(inputLabelElement.nativeElement.getAttribute('for')).toBe(id);
  });

  it('links the error to the fieldset with the correct aria attributes', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
      true
    );
    fixture.detectChanges();
    validationDebugElement = fixture.debugElement.query(
      By.directive(LgValidationComponent)
    );
    expect(
      inputDebugElement.nativeElement.getAttribute('aria-describedBy')
    ).toContain(validationTestId);
  });

  it('adds the error class if the form field is invalid', () => {
    when(errorStateMatcherMock.isControlInvalid(anything(), anything())).thenReturn(
      true
    );
    fixture.detectChanges();
    expect(toggleDebugElement.nativeElement.className).toContain(
      'lg-toggle--error'
    );
  });
});
