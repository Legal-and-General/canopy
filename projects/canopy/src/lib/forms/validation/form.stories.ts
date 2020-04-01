import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { LgErrorStateMatcher } from './error-state-matcher';
import { notes } from './form.notes';

function invalidValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value && control.value.toLowerCase() === 'invalid'
      ? { invalid: true }
      : null;
  };
}

const stories = storiesOf('Components/Form/Validation', module).addDecorator(
  withKnobs
);

@Component({
  selector: 'lg-validation-form',
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="onSubmit(form)"
      #validationForm="ngForm"
    >
      <h2>Validation test form</h2>

      <p>
        This is a test form to ensure validation works and that the fields have
        the correct aria controls.
      </p>
      <p>
        All fields are required. selecting or typing the word 'invalid' into a
        field will trigger inline validation. All validation rules are also ran
        on submission of the form.
      </p>

      <lg-input-field>
        Text
        <input lgInput formControlName="text" />
        <lg-hint>This is a standard input field</lg-hint>
        <lg-validation
          *ngIf="
            isControlInvalid(text, validationForm) && text.hasError('required')
          "
        >
          Text is a required field
        </lg-validation>
        <lg-validation
          *ngIf="
            isControlInvalid(text, validationForm) && text.hasError('minlength')
          "
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
          *ngIf="
            isControlInvalid(select, validationForm) && select.hasError('invalid')
          "
        >
          Please select a valid option
        </lg-validation>
        <lg-validation
          *ngIf="
            isControlInvalid(select, validationForm) && select.hasError('required')
          "
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
          *ngIf="
            isControlInvalid(radio, validationForm) && radio.hasError('invalid')
          "
        >
          Please select a valid option
        </lg-validation>
        <lg-validation
          *ngIf="
            isControlInvalid(radio, validationForm) && radio.hasError('required')
          "
        >
          Please select an option
        </lg-validation>
      </lg-radio-group>

      <lg-toggle formControlName="checkbox" [value]="true" variant="checkbox">
        Checkbox
        <lg-validation
          *ngIf="
            isControlInvalid(checkbox, validationForm) &&
            checkbox.hasError('required')
          "
        >
          You must check the checkbox
        </lg-validation>
      </lg-toggle>

      <lg-toggle formControlName="switch" [value]="true" variant="switch">
        Checkbox
        <lg-validation
          *ngIf="
            isControlInvalid(switch, validationForm) && switch.hasError('required')
          "
        >
          You must toggle the switch
        </lg-validation>
      </lg-toggle>

      <button lg-button type="submit" variant="solid-primary">
        Submit
      </button>
    </form>
  `
})
class ReactiveFormComponent {
  @Output() inputChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  get text() {
    return this.form.get('text');
  }

  get select() {
    return this.form.get('select');
  }

  get radio() {
    return this.form.get('radio');
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
      text: [
        '',
        [Validators.required, Validators.minLength(4), invalidValidator()]
      ],
      select: ['', [Validators.required, invalidValidator()]],
      radio: ['', [Validators.required, invalidValidator()]],
      checkbox: ['', [Validators.requiredTrue]],
      switch: ['', [Validators.requiredTrue]]
    });
  }

  onSubmit(event) {
    this.formSubmit.emit(event);
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }
}

stories.add(
  'Form',
  () => ({
    moduleMetadata: {
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule, FormsModule, CanopyModule]
    },
    template: `<lg-validation-form
      (formSubmit)="formSubmit($event)">
    </lg-validation-form>`,
    props: {
      formSubmit: action('formSubmit')
    }
  }),
  {
    notes: {
      markdown: notes
    }
  }
);
