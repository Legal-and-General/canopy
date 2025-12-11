import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';

import { LgDateFieldComponent, pastDateValidator } from '../../date';
import { LgErrorStateMatcher } from '../error-state-matcher';
import { LgInputDirective, LgInputFieldComponent } from '../../input';
import { LgSelectDirective, LgSelectFieldComponent } from '../../select';
import { LgRadioButtonComponent, LgRadioGroupComponent } from '../../radio';
import { LgCheckboxGroupComponent } from '../../checkbox-group';
import { LgToggleComponent } from '../../toggle';
import { LgValidationComponent } from '../validation.component';
import { LgHintComponent } from '../../hint';
import { LgSortCodeDirective } from '../../sort-code';
import { LgButtonComponent } from '../../../button';

function invalidValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value && control.value.toLowerCase() === 'invalid'
      ? { invalid: true }
      : null;
  };
}

@Component({
  selector: 'lg-form-group-child',
  template: `
    <div formGroupName="innerChildFormGroup">
      <lg-date-field formControlName="date">
        Inner Date Field
        @if (isControlInvalid(date, formGroupDirective)) {
          <lg-validation>
            @if (date.hasError('required')) {
              Enter a date for the inner date field
            }
            @if (date.hasError('invalidField')) {
              Enter a valid {{ date.errors.invalidField }}
            }
            @if (date.hasError('invalidFields')) {
              Enter a valid {{ date.errors.invalidFields[0] }} and
              {{ date.errors.invalidFields[1] }}
            }
            @if (date.hasError('requiredField')) {
              Date must include a {{ date.errors.requiredField }}
            }
            @if (date.hasError('requiredFields')) {
              Date must include a {{ date.errors.requiredFields[0] }} and
              {{ date.errors.requiredFields[1] }}
            }
            @if (date.hasError('invalidDate')) {
              Enter a valid date of birth
            }
            @if (date.hasError('pastDate')) {
              Date must be in the past
            }
          </lg-validation>
        }
      </lg-date-field>
    </div>
  `,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
  imports: [ LgDateFieldComponent, ReactiveFormsModule, LgValidationComponent ],
})
class FormGroupChildComponent implements OnInit {
  private errorState = inject(LgErrorStateMatcher);
  formGroupDirective = inject(FormGroupDirective);

  parentForm: FormGroup;

  get date() {
    return this.parentForm?.get('innerChildFormGroup.date');
  }

  isControlInvalid(control: AbstractControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }

  ngOnInit() {
    this.parentForm = this.formGroupDirective.control;
  }
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
        @if (isControlInvalid(text, validationForm) && text.hasError('required')) {
          <lg-validation> Text is a required field </lg-validation>
        }
        @if (isControlInvalid(text, validationForm) && text.hasError('minlength')) {
          <lg-validation> Text should be at least 4 characters </lg-validation>
        }
        @if (isControlInvalid(text, validationForm) && text.hasError('invalid')) {
          <lg-validation> Please enter a valid value </lg-validation>
        }
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
        @if (isControlInvalid(select, validationForm) && select.hasError('invalid')) {
          <lg-validation> Please select a valid option </lg-validation>
        }
        @if (isControlInvalid(select, validationForm) && select.hasError('required')) {
          <lg-validation> Select is a required field </lg-validation>
        }
      </lg-select-field>

      <lg-radio-group formControlName="radio">
        Radio option
        <lg-hint>This is a standard radio group</lg-hint>
        <lg-radio-button value="yellow">Yellow</lg-radio-button>
        <lg-radio-button value="red">Red</lg-radio-button>
        <lg-radio-button value="blue">Blue</lg-radio-button>
        <lg-radio-button value="invalid">Invalid</lg-radio-button>
        @if (isControlInvalid(radio, validationForm) && radio.hasError('invalid')) {
          <lg-validation> Please select a valid option </lg-validation>
        }
        @if (isControlInvalid(radio, validationForm) && radio.hasError('required')) {
          <lg-validation> Please select an option </lg-validation>
        }
      </lg-radio-group>
      <lg-segment-group formControlName="segment">
        Segment option
        <lg-hint>This is a standard segment group</lg-hint>
        <lg-segment-button value="yellow">Yellow</lg-segment-button>
        <lg-segment-button value="red">Red</lg-segment-button>
        <lg-segment-button value="blue">Blue</lg-segment-button>
        <lg-segment-button value="invalid">Invalid</lg-segment-button>
        @if (isControlInvalid(segment, validationForm) && segment.hasError('invalid')) {
          <lg-validation> Please select a valid option </lg-validation>
        }
        @if (isControlInvalid(radio, validationForm) && radio.hasError('required')) {
          <lg-validation> Please select an option </lg-validation>
        }
      </lg-segment-group>

      <lg-checkbox-group formControlName="colors">
        Checkbox group
        <lg-hint>This is a standard checkbox group</lg-hint>
        <lg-toggle value="red">Red</lg-toggle>
        <lg-toggle value="yellow">Yellow</lg-toggle>
        <lg-toggle value="green">Green</lg-toggle>
        <lg-toggle value="blue">Blue</lg-toggle>
        @if (isControlInvalid(colors, validationForm) && colors.hasError('required')) {
          <lg-validation> Please select an option </lg-validation>
        }
      </lg-checkbox-group>

      <lg-toggle formControlName="checkbox" [value]="true" variant="checkbox">
        Checkbox
        @if (
          isControlInvalid(checkbox, validationForm) && checkbox.hasError('required')
        ) {
          <lg-validation> You must check the checkbox </lg-validation>
        }
      </lg-toggle>

      <lg-toggle formControlName="switch" [value]="true" variant="switch">
        Switch
        @if (isControlInvalid(switch, validationForm) && switch.hasError('required')) {
          <lg-validation> You must toggle the switch </lg-validation>
        }
      </lg-toggle>

      <lg-date-field formControlName="date">
        Date of birth
        @if (isControlInvalid(date, validationForm)) {
          <lg-validation>
            @if (date.hasError('invalidField')) {
              Enter a valid {{ date.errors.invalidField }}
            }
            @if (date.hasError('invalidFields')) {
              Enter a valid {{ date.errors.invalidFields[0] }} and
              {{ date.errors.invalidFields[1] }}
            }
            @if (date.hasError('requiredField')) {
              Date of birth must include a {{ date.errors.requiredField }}
            }
            @if (date.hasError('requiredFields')) {
              Date of birth must include a {{ date.errors.requiredFields[0] }} and
              {{ date.errors.requiredFields[1] }}
            }
            @if (date.hasError('invalidDate')) {
              Enter a valid date of birth
            }
            @if (date.hasError('pastDate')) {
              Date must be in the past
            }
            @if (date.hasError('required')) {
              Enter a date of birth
            }
          </lg-validation>
        }
      </lg-date-field>

      <lg-form-group-child />

      <lg-input-field>
        Sort Code
        <lg-hint>Must be 6 digits long, for example 00-00-00</lg-hint>
        <input lgInput lgSortCode formControlName="sortCode" />
        @if (isControlInvalid(sortCode, validationForm)) {
          <lg-validation>
            @if (sortCode.hasError('required')) {
              Enter a sort code
            }
            @if (sortCode.hasError('pattern')) {
              Enter a valid sort code
            }
          </lg-validation>
        }
      </lg-input-field>

      <button lg-button type="submit" variant="primary-dark">Submit</button>
    </form>
  `,
  imports: [
    ReactiveFormsModule,
    LgInputFieldComponent,
    LgInputDirective,
    LgHintComponent,
    LgValidationComponent,
    LgSelectFieldComponent,
    LgSelectDirective,
    LgRadioGroupComponent,
    LgRadioButtonComponent,
    LgCheckboxGroupComponent,
    LgToggleComponent,
    LgDateFieldComponent,
    FormGroupChildComponent,
    LgSortCodeDirective,
    LgButtonComponent,
  ],
})
class ReactiveFormComponent {
  private fb = inject(UntypedFormBuilder);
  private errorState = inject(LgErrorStateMatcher);
  private el = inject(ElementRef);

  @Output() inputChange: EventEmitter<void> = new EventEmitter();

  form: UntypedFormGroup;

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

  constructor() {
    this.form = this.fb.group({
      text: [ '', [ Validators.required, Validators.minLength(4), invalidValidator() ] ],
      select: [ '', [ Validators.required, invalidValidator() ] ],
      radio: [ '', [ Validators.required, invalidValidator() ] ],
      segment: [ '', [ Validators.required, invalidValidator() ] ],
      colors: this.fb.control([], [ Validators.required ]),
      checkbox: [ '', [ Validators.requiredTrue ] ],
      switch: [ '', [ Validators.requiredTrue ] ],
      sortCode: [ '', [ Validators.required ] ],
      date: [ '', [ Validators.required, pastDateValidator() ] ],
      innerChildFormGroup: this.fb.group({
        date: [ '', [ Validators.required, pastDateValidator() ] ],
      }),
    });
  }

  onSubmit(event) {
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');

    if (invalidControl) {
      invalidControl.focus();
    }

    this.formSubmit.emit(event);
  }

  isControlInvalid(control: AbstractControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }
}

export default {
  title: 'Components/Forms/Form validation/Examples',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [ ReactiveFormsModule, ReactiveFormComponent ],
    }),
  ],
  argTypes: {
    formSubmit: {
      action: 'submit',
      table: {
        disable: true,
      },
    },
  },
};

const template = `
<lg-validation-form
  (formSubmit)="formSubmit($event)">
</lg-validation-form>
`;

export const FormValidation = {
  name: 'Form validation',
  render: (args: LgValidationComponent) => ({
    props: args,
    template,
  }),
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};
