import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, EventEmitter, Output } from '@angular/core';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { notes } from './radio.notes';
import { LgRadioModule } from './radio.module';

@Component({
  selector: 'lg-reactive-form-filter',
  template: `
    <form [formGroup]="form">
      <lg-filter-group formControlName="color">
        {{ label }}
        <lg-filter-button value="red">Red</lg-filter-button>
        <lg-filter-button value="yellow">Yellow</lg-filter-button>
        <lg-filter-button value="green">Green</lg-filter-button>
        <lg-filter-button value="blue">Blue</lg-filter-button>
      </lg-filter-group>
    </form>
  `,
})
class ReactiveFormFilterComponent {
  @Input() label: string;
  @Input()
  set disabled(isDisabled: boolean) {
    if (isDisabled === true) {
      this.form.controls.color.disable();
    } else {
      this.form.controls.color.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.color.disabled;
  }

  @Output() filterChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ color: '' });
    this.form.valueChanges.subscribe(val => this.filterChange.emit(val));
  }
}

export default {
  title: 'Components/Filter Buttons',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [ReactiveFormFilterComponent],
        imports: [ReactiveFormsModule, LgRadioModule],
      }),
    ],
    'in-dsm': {
      id: '5f75d9e2a5c09c75c88bd402',
    },
    notes: {
      markdown: notes('Filter'),
    },
  },
};

export const selectOne = () => ({
  template: `
    <lg-reactive-form-filter
    [disabled]="disabled"
    [label]="label"
    (filterChange)="filterChange($event)">
  </lg-reactive-form-filter>
  `,
  props: {
    label: text('label', 'Select a color'),
    filterChange: action('filterChange'),
    disabled: boolean('disabled', false),
  },
});
