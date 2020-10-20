import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './checkbox-group.notes';

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-filter-multiple-group formControlName="colors">
        {{ label }}
        <lg-toggle value="red">Red</lg-toggle>
        <lg-toggle value="yellow">Yellow</lg-toggle>
        <lg-toggle value="green">Green</lg-toggle>
        <lg-toggle value="blue">Blue</lg-toggle>
      </lg-filter-multiple-group>
    </form>
  `,
})
class ReactiveFormComponent {
  @Input() label: string;
  @Input()
  set disabled(isDisabled: boolean) {
    if (isDisabled === true) {
      this.form.controls.colors.disable();
    } else {
      this.form.controls.colors.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.colors.disabled;
  }

  @Output() checkboxChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ colors: this.fb.control(['red']) });
    this.form.valueChanges.subscribe(val => this.checkboxChange.emit(val));
  }
}

export default {
  title: 'Components/Filter Buttons',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [ReactiveFormComponent],
        imports: [ReactiveFormsModule, CanopyModule],
      }),
    ],
    'in-dsm': {
      id: '5f75d9f774621bd9596c8520',
    },
    notes: {
      markdown: notes('Filter', 'filter-multiple'),
    },
  },
};
export const selectMultiple = () => ({
  template: `
    <lg-reactive-form
    [disabled]="disabled"
    [label]="label"
    (checkboxChange)="checkboxChange($event)">
  </lg-reactive-form>
  `,
  props: {
    label: text('label', 'Select colors'),
    checkboxChange: action('checkboxChange'),
    disabled: boolean('disabled', false),
  },
});
