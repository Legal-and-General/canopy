import { Component, signal } from '@angular/core';
import {
  FormField,
  apply,
  form,
  minLength,
  required,
  submit,
  validate,
} from '@angular/forms/signals';

import { LgButtonComponent } from '../../../button';
import { LgHintComponent } from '../../hint';
import {
  LgSignalCheckboxComponent,
  LgSignalCheckboxGroupComponent,
  LgSignalCheckboxOptionComponent,
  lgRequiredCheckboxGroup,
} from '../../signal-checkbox';
import { LgSignalDateFieldComponent, lgPastDateSchema } from '../../signal-date';
import { LgSignalInputDirective, LgSignalInputFieldComponent } from '../../signal-input';
import {
  LgSignalRadioButtonComponent,
  LgSignalRadioGroupComponent,
} from '../../signal-radio';
import {
  LgSignalSelectDirective,
  LgSignalSelectFieldComponent,
} from '../../signal-select';
import { LgSignalSortCodeDirective, lgSortCodeSchema } from '../../signal-sort-code';
import { LgValidationComponent } from '../validation.component';

interface ExampleState {
  invalid: () => boolean;
  dirty: () => boolean;
  touched: () => boolean;
  focusBoundControl: () => void;
}

@Component({
  selector: 'lg-signal-validation-form',
  imports: [
    FormField,
    LgButtonComponent,
    LgHintComponent,
    LgSignalCheckboxComponent,
    LgSignalCheckboxGroupComponent,
    LgSignalCheckboxOptionComponent,
    LgSignalDateFieldComponent,
    LgSignalInputDirective,
    LgSignalInputFieldComponent,
    LgSignalRadioButtonComponent,
    LgSignalRadioGroupComponent,
    LgSignalSelectDirective,
    LgSignalSelectFieldComponent,
    LgSignalSortCodeDirective,
    LgValidationComponent,
  ],
  template: `
    <form novalidate (submit)="onSubmit($event)">
      <h2>Validation test form</h2>
      <p>
        All fields are required. Entering or selecting "invalid" also triggers validation.
      </p>
      <lg-signal-input-field id="validation-text" [submitted]="submitted()">
        Text
        <lg-hint>This is a standard input field</lg-hint>
        @if (showError(fields.text())) {
          <lg-validation>Enter valid text of at least 4 characters</lg-validation>
        }
        <input lgSignalInput [formField]="fields.text" />
      </lg-signal-input-field>
      <lg-signal-input-field id="validation-textarea" [submitted]="submitted()">
        Text area
        <lg-hint>This is a standard text area field</lg-hint>
        @if (showError(fields.textArea())) {
          <lg-validation>Enter valid text of at least 4 characters</lg-validation>
        }
        <textarea lgSignalInput [formField]="fields.textArea" rows="4"></textarea>
      </lg-signal-input-field>
      <lg-signal-select-field id="validation-select" [submitted]="submitted()">
        Select field
        <lg-hint>This is a standard single option select field</lg-hint>
        @if (showError(fields.select())) {
          <lg-validation>Select a valid option</lg-validation>
        }
        <select lgSignalSelect [formField]="fields.select">
          <option value="">Select an option</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="invalid">Invalid</option>
        </select>
      </lg-signal-select-field>
      <lg-signal-radio-group [formField]="fields.radio" [submitted]="submitted()">
        Radio option <lg-hint>This is a standard radio group</lg-hint>
        @if (showError(fields.radio())) {
          <lg-validation>Select a valid option</lg-validation>
        }
        <lg-signal-radio-button id="validation-radio" value="yellow"
          >Yellow</lg-signal-radio-button
        >
        <lg-signal-radio-button value="red">Red</lg-signal-radio-button>
        <lg-signal-radio-button value="blue">Blue</lg-signal-radio-button>
        <lg-signal-radio-button value="invalid">Invalid</lg-signal-radio-button>
      </lg-signal-radio-group>
      <lg-signal-segment-group [formField]="fields.segment" [submitted]="submitted()">
        Segment option <lg-hint>This is a standard segment group</lg-hint>
        @if (showError(fields.segment())) {
          <lg-validation>Select a valid option</lg-validation>
        }
        <lg-signal-segment-button id="validation-segment" value="yellow"
          >Yellow</lg-signal-segment-button
        >
        <lg-signal-segment-button value="red">Red</lg-signal-segment-button>
        <lg-signal-segment-button value="blue">Blue</lg-signal-segment-button>
        <lg-signal-segment-button value="invalid">Invalid</lg-signal-segment-button>
      </lg-signal-segment-group>
      <lg-signal-checkbox-group [formField]="fields.colours" [submitted]="submitted()">
        Checkbox group <lg-hint>This is a standard checkbox group</lg-hint>
        @if (showError(fields.colours())) {
          <lg-validation>Select at least one colour</lg-validation>
        }
        <lg-signal-toggle id="validation-colours" value="red">Red</lg-signal-toggle>
        <lg-signal-toggle value="yellow">Yellow</lg-signal-toggle>
        <lg-signal-toggle value="green">Green</lg-signal-toggle>
        <lg-signal-toggle value="blue">Blue</lg-signal-toggle>
      </lg-signal-checkbox-group>
      <lg-signal-checkbox
        id="validation-checkbox"
        [formField]="fields.checkbox"
        [submitted]="submitted()"
      >
        Checkbox
        @if (showError(fields.checkbox())) {
          <lg-validation>Select the checkbox</lg-validation>
        }
      </lg-signal-checkbox>
      <lg-signal-date-field
        dateId="validation-date"
        [formField]="fields.date"
        [submitted]="submitted()"
      >
        Date of birth
        @if (showError(fields.date())) {
          <lg-validation>Enter a valid date of birth in the past</lg-validation>
        }
      </lg-signal-date-field>
      <lg-signal-date-field
        dateId="validation-inner-date"
        [formField]="fields.inner.date"
        [submitted]="submitted()"
      >
        Inner date field
        @if (showError(fields.inner.date())) {
          <lg-validation>Enter a valid date in the past</lg-validation>
        }
      </lg-signal-date-field>
      <lg-signal-input-field id="validation-sort-code" [submitted]="submitted()">
        Sort code <lg-hint>Must be 6 digits long, for example 00-00-00</lg-hint>
        @if (showError(fields.sortCode())) {
          <lg-validation>Enter a valid sort code</lg-validation>
        }
        <input lgSignalInput lgSignalSortCode [formField]="fields.sortCode" />
      </lg-signal-input-field>
      <button lg-button type="submit">Submit</button>
    </form>
  `,
})
export class SignalValidationFormExampleComponent {
  readonly model = signal({
    text: '',
    textArea: '',
    select: '',
    radio: '',
    segment: '',
    colours: [] as Array<string>,
    checkbox: false,
    date: '',
    inner: { date: '' },
    sortCode: '',
  });
  readonly submitted = signal(false);
  readonly fields = form(this.model, path => {
    required(path.text);
    minLength(path.text, 4);
    required(path.textArea);
    minLength(path.textArea, 4);
    required(path.select);
    required(path.radio);
    required(path.segment);

    for (const field of [
      path.text,
      path.textArea,
      path.select,
      path.radio,
      path.segment,
    ]) {
      validate(field, ({ value }) =>
        value().toLowerCase() === 'invalid'
          ? { kind: 'invalid' }
          : undefined,
      );
    }

    apply(path.colours, lgRequiredCheckboxGroup);
    required(path.checkbox);
    required(path.date);
    apply(path.date, lgPastDateSchema);
    required(path.inner.date);
    apply(path.inner.date, lgPastDateSchema);
    apply(path.sortCode, lgSortCodeSchema);
  });

  showError(state: ExampleState): boolean {
    return state.invalid() && ((state.dirty() && state.touched()) || this.submitted());
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    const firstInvalid = [
      this.fields.text(),
      this.fields.textArea(),
      this.fields.select(),
      this.fields.radio(),
      this.fields.segment(),
      this.fields.colours(),
      this.fields.checkbox(),
      this.fields.date(),
      this.fields.inner.date(),
      this.fields.sortCode(),
    ].find(field => field.invalid());

    firstInvalid?.focusBoundControl();

    void submit(this.fields, async () => {});
  }
}
