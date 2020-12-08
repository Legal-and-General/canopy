import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { moduleMetadata } from '@storybook/angular';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { LgSortCodeComponent } from './sort-code.component';
import { CanopyModule } from '../../canopy.module';
import { notes } from './sort-code.notes';

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-sort-code formControlName="sortCode">
        {{ label }}
        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
      </lg-sort-code>
    </form>
  `,
})
class ReactiveFormComponent {
  @Input() hint: string;
  @Input() label: string;

  @Input()
  set disabled(disabled: boolean) {
    if (disabled) {
      this.form.controls.sortCode.disable();
    } else {
      this.form.controls.sortCode.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.sortCode.disabled;
  }

  @Output() inputChange = new EventEmitter<void>();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      sortCode: [''],
    });
    this.form.valueChanges.subscribe((val) => this.inputChange.emit(val));
  }
}

export default {
  title: 'Components/Form/Sort Code',
  component: LgSortCodeComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule, CanopyModule],
    }),
  ],
  parameters: {
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
    label: text('label', 'Sort code'),
    hint: text('hint', 'Must be 6 digits long'),
    disabled: boolean('disabled', false),
  },
});
