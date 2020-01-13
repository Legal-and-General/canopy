import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './select.notes';

const stories = storiesOf('Components/Form', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-select-field [block]="block">
        {{ label }}
        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
        <select lgSelect formControlName="color">
          <option *ngFor="let option of options" [value]="option">{{
            option
          }}</option>
        </select>
      </lg-select-field>
    </form>
  `
})
class ReactiveFormComponent {
  @Input() block: boolean;
  @Input() hint: string;
  @Input() label: string;
  @Input() options: string[];

  @Input()
  set disabled(disabled: boolean) {
    if (disabled === true) {
      this.form.controls.color.disable();
    } else {
      this.form.controls.color.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.color.disabled;
  }

  @Output() selectChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      color: { value: '', disabled: false }
    });
    this.form.valueChanges.subscribe(val => this.selectChange.emit(val));
  }
}

stories.add(
  'Select',
  () => ({
    moduleMetadata: {
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule, CanopyModule]
    },
    template: `<lg-reactive-form
      (selectChange)="selectChange($event)"
      [block]="block"
      [disabled]="disabled"
      [hint]="hint"
      [label]="label"
      [options]="options"
    ></lg-reactive-form>`,
    props: {
      selectChange: action('selectChange'),
      label: text('label', 'Color'),
      hint: text('hint', 'Please select a color'),
      block: boolean('block', false),
      options: object('options', ['Red', 'Blue', 'Green', 'Yellow']),
      disabled: boolean('disabled', false)
    }
  }),
  {
    notes: { markdown: notes }
  }
);
