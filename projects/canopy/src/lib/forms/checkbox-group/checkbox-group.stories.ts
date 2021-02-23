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
      <lg-checkbox-group [inline]="inline" [focus]="focus" formControlName="colors">
        {{ label }}
        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
        <lg-toggle value="red">Red</lg-toggle>
        <lg-toggle value="yellow">Yellow</lg-toggle>
      </lg-checkbox-group>
    </form>
  `,
})
class ReactiveFormComponent {
  @Input() inline = false;
  @Input() focus = false;
  @Input() label: string;
  @Input() hint: string;
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
    this.form.valueChanges.subscribe((val) => this.checkboxChange.emit(val));
  }
}

export default {
  title: 'Components/Form/Checkbox Group',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [ReactiveFormComponent],
        imports: [ReactiveFormsModule, CanopyModule],
      }),
    ],
    notes: {
      markdown: notes('Checkbox'),
    },
  },
};
export const standard = () => ({
  template: `
    <lg-reactive-form
    [disabled]="disabled"
    [hint]="hint"
    [inline]="inline"
    [focus]="focus"
    [label]="label"
    (checkboxChange)="checkboxChange($event)">
  </lg-reactive-form>
  `,
  props: {
    inline: boolean('inline', false),
    label: text('label', 'Color'),
    hint: text('hint', 'Please select all colors that apply'),
    checkboxChange: action('checkboxChange'),
    disabled: boolean('disabled', false),
    focus: boolean('focus', false),
  },
});
