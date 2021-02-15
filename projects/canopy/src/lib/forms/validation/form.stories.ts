import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { pastDateValidator } from '../date/pastDate.validator';
import { LgErrorStateMatcher } from './error-state-matcher';
import { notes } from './form.notes';

function invalidValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value && control.value.toLowerCase() === 'invalid'
      ? { invalid: true }
      : null;
  };
}

@Component({
  selector: 'lg-validation-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(form)" #validationForm="ngForm">
      <h2>Validation test form</h2>

      <p>
        This is a test form to ensure validation works and that the fields have the
        correct aria controls.
      </p>
      <p>
        All fields are required. selecting or typing the word 'invalid' into a field will
        trigger inline validation. All validation rules are also ran on submission of the
        form.
      </p>

      <lg-input-field>
        Text
        <input lgInput formControlName="text" />
        <lg-hint>This is a standard input field</lg-hint>
        <lg-validation
          *ngIf="isControlInvalid(text, validationForm) && text.hasError('required')"
        >
          Text is a required field
        </lg-validation>
        <lg-validation
          *ngIf="isControlInvalid(text, validationForm) && text.hasError('minlength')"
        >
          Text should be at least 4 characters
        </lg-validation>
        <lg-validation
          *ngIf="isControlInvalid(text, validationForm) && text.hasError('invalid')"
        >
          Please enter a valid value
        </lg-validation>
      </lg-input-field>

      <lg-select-field>
        Select field
        <lg-hint>This is a standard single option select field</lg-hint>
        <select lgSelect formControlName="select">
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="invalid">Invalid</option>
        </select>
        <lg-validation
          *ngIf="isControlInvalid(select, validationForm) && select.hasError('invalid')"
        >
          Please select a valid option
        </lg-validation>
        <lg-validation
          *ngIf="isControlInvalid(select, validationForm) && select.hasError('required')"
        >
          Select is a required field
        </lg-validation>
      </lg-select-field>

      <lg-radio-group formControlName="radio">
        Radio option
        <lg-hint>This is a standard radio group</lg-hint>
        <lg-radio-button value="yellow">Yellow</lg-radio-button>
        <lg-radio-button value="red">Red</lg-radio-button>
        <lg-radio-button value="blue">Blue</lg-radio-button>
        <lg-radio-button value="invalid">Invalid</lg-radio-button>
        <lg-validation
          *ngIf="isControlInvalid(radio, validationForm) && radio.hasError('invalid')"
        >
          Please select a valid option
        </lg-validation>
        <lg-validation
          *ngIf="isControlInvalid(radio, validationForm) && radio.hasError('required')"
        >
          Please select an option
        </lg-validation>
      </lg-radio-group>

      <lg-segment-group formControlName="segment">
        Segment option
        <lg-hint>This is a standard segment group</lg-hint>
        <lg-segment-button value="yellow">Yellow</lg-segment-button>
        <lg-segment-button value="red">Red</lg-segment-button>
        <lg-segment-button value="blue">Blue</lg-segment-button>
        <lg-segment-button value="invalid">Invalid</lg-segment-button>
        <lg-validation
          *ngIf="isControlInvalid(segment, validationForm) && segment.hasError('invalid')"
        >
          Please select a valid option
        </lg-validation>
        <lg-validation
          *ngIf="isControlInvalid(radio, validationForm) && radio.hasError('required')"
        >
          Please select an option
        </lg-validation>
      </lg-segment-group>

      <lg-checkbox-group formControlName="colors">
        Checkbox group
        <lg-hint>This is a standard checkbox group</lg-hint>
        <lg-toggle value="red">Red</lg-toggle>
        <lg-toggle value="yellow">Yellow</lg-toggle>
        <lg-toggle value="green">Green</lg-toggle>
        <lg-toggle value="blue">Blue</lg-toggle>
        <lg-validation
          *ngIf="isControlInvalid(colors, validationForm) && colors.hasError('required')"
        >
          Please select an option
        </lg-validation>
      </lg-checkbox-group>

      <lg-toggle formControlName="checkbox" [value]="true" variant="checkbox">
        Checkbox
        <lg-validation
          *ngIf="
            isControlInvalid(checkbox, validationForm) && checkbox.hasError('required')
          "
        >
          You must check the checkbox
        </lg-validation>
      </lg-toggle>

      <lg-toggle formControlName="switch" [value]="true" variant="switch">
        Switch
        <lg-validation
          *ngIf="isControlInvalid(switch, validationForm) && switch.hasError('required')"
        >
          You must toggle the switch
        </lg-validation>
      </lg-toggle>

      <lg-date-field formControlName="date">
        Date of birth
        <lg-hint>For example, 15 06 1983</lg-hint>
        <lg-validation *ngIf="isControlInvalid(date, validationForm)">
          <ng-container *ngIf="date.hasError('invalidField')">
            Enter a valid {{ date.errors.invalidField }}
          </ng-container>
          <ng-container *ngIf="date.hasError('invalidFields')">
            Enter a valid {{ date.errors.invalidFields[0] }} and
            {{ date.errors.invalidFields[1] }}
          </ng-container>
          <ng-container *ngIf="date.hasError('requiredField')">
            Date of birth must include a {{ date.errors.requiredField }}
          </ng-container>
          <ng-container *ngIf="date.hasError('requiredFields')">
            Date of birth must include a {{ date.errors.requiredFields[0] }} and
            {{ date.errors.requiredFields[1] }}
          </ng-container>
          <ng-container *ngIf="date.hasError('invalidDate')">
            Enter a valid date of birth
          </ng-container>
          <ng-container *ngIf="date.hasError('pastDate')">
            Date must be in the past
          </ng-container>
          <ng-container *ngIf="date.hasError('required')">
            Enter a date of birth
          </ng-container>
        </lg-validation>
      </lg-date-field>

      <lg-sort-code formControlName="sortCode">
        Sort Code
        <lg-hint>Must be 6 digits long</lg-hint>
        <lg-validation *ngIf="isControlInvalid(sortCode, validationForm)">
          Your sort code should be a 6 digit number
        </lg-validation>
      </lg-sort-code>

      <button lg-button type="submit" variant="solid-primary">Submit</button>
    </form>
  `,
})
class ReactiveFormComponent {
  @Output() inputChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  get sortCode() {
    return this.form.get('sortCode');
  }

  get date() {
    return this.form.get('date');
  }

  get text() {
    return this.form.get('text');
  }

  get select() {
    return this.form.get('select');
  }

  get radio() {
    return this.form.get('radio');
  }

  get segment() {
    return this.form.get('segment');
  }

  get colors() {
    return this.form.get('colors');
  }

  get checkbox() {
    return this.form.get('checkbox');
  }

  get switch() {
    return this.form.get('switch');
  }

  @Output() formSubmit: EventEmitter<void> = new EventEmitter();

  constructor(public fb: FormBuilder, private errorState: LgErrorStateMatcher) {
    this.form = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(4), invalidValidator()]],
      select: ['', [Validators.required, invalidValidator()]],
      radio: ['', [Validators.required, invalidValidator()]],
      segment: ['', [Validators.required, invalidValidator()]],
      colors: this.fb.control([], [Validators.required]),
      checkbox: ['', [Validators.requiredTrue]],
      switch: ['', [Validators.requiredTrue]],
      date: ['', [Validators.required, pastDateValidator()]],
      sortCode: ['', [Validators.required]],
    });
  }

  onSubmit(event) {
    this.formSubmit.emit(event);
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }
}

export default {
  title: 'Components/Form/Form Validation',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [ReactiveFormComponent],
        imports: [ReactiveFormsModule, CanopyModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-validation-form
      (formSubmit)="formSubmit($event)">
    </lg-validation-form>
  `,
  props: {
    formSubmit: action('formSubmit'),
  },
});
