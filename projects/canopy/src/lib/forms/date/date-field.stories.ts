import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './date-field.notes';

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-date-field formControlName="date">
        {{ label }}
        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
      </lg-date-field>
    </form>
  `,
})
class ReactiveFormComponent {
  @Input() hint: string;
  @Input() label: string;

  @Input()
  set disabled(disabled: boolean) {
    if (disabled === true) {
      this.form.controls.date.disable();
    } else {
      this.form.controls.date.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.name.disabled;
  }

  @Output() inputChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      date: { value: '1970-01-01', disabled: false },
    });
    this.form.valueChanges.subscribe(val => this.inputChange.emit(val));
  }
}

export default {
  title: 'Components/Form/Date Input',
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
  template: `<lg-reactive-form
    (inputChange)="inputChange($event)"
    [disabled]="disabled"
    [hint]="hint"
    [label]="label"
  ></lg-reactive-form>`,
  props: {
    inputChange: action('inputChange'),
    label: text('label', 'Date of birth'),
    hint: text('hint', 'For example, 12 06 1983'),
    disabled: boolean('disabled', false),
  },
});
