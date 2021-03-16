import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { notes } from './radio.notes';
import { LgRadioModule } from './radio.module';
import { LgHintModule } from '../hint/hint.module';

@Component({
  selector: 'lg-reactive-form-radio',
  template: `
    <form [formGroup]="form">
      <lg-radio-group [inline]="inline" formControlName="color">
        {{ label }}
        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
        <lg-radio-button value="red">Red</lg-radio-button>
        <lg-radio-button value="yellow">Yellow</lg-radio-button>
      </lg-radio-group>
    </form>
  `,
})
class ReactiveFormRadioComponent {
  @Input() inline = false;
  @Input() label: string;
  @Input() hint: string;
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

  @Output() radioChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ color: 'red' });
    this.form.valueChanges.subscribe((val) => this.radioChange.emit(val));
  }
}

export default {
  title: 'Components/Form/Radio',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [ReactiveFormRadioComponent],
        imports: [ReactiveFormsModule, LgHintModule, LgRadioModule],
      }),
    ],
    notes: {
      markdown: notes('Radio'),
    },
  },
};

export const standard = () => ({
  template: `
    <lg-reactive-form-radio
    [disabled]="disabled"
    [hint]="hint"
    [inline]="inline"
    [label]="label"
    (radioChange)="radioChange($event)">
  </lg-reactive-form-radio>
  `,
  props: {
    inline: boolean('inline', false),
    label: text('label', 'Color'),
    hint: text('hint', 'Please select a color'),
    radioChange: action('radioChange'),
    disabled: boolean('disabled', false),
  },
});
