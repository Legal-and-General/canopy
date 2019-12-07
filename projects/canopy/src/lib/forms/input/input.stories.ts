import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './input.notes';

const stories = storiesOf('Components|Form', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-input-field [block]="block">
        {{ label }}
        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
        <input lgInput formControlName="name" [size]="size" />
      </lg-input-field>
    </form>
  `
})
class ReactiveFormComponent {
  @Input() block: boolean;
  @Input() hint: string;
  @Input() label: string;
  @Input() size: number;

  @Input()
  set disabled(disabled: boolean) {
    if (disabled === true) {
      this.form.controls.name.disable();
    } else {
      this.form.controls.name.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.name.disabled;
  }

  @Output() inputChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ name: { value: '', disabled: false } });
    this.form.valueChanges.subscribe(val => this.inputChange.emit(val));
  }
}

stories.add(
  'Input',
  () => ({
    moduleMetadata: {
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule, CanopyModule]
    },
    template: `<lg-reactive-form
      (inputChange)="inputChange($event)"
      [disabled]="disabled"
      [block]="block"
      [hint]="hint"
      [label]="label"
      [size]="size"
    ></lg-reactive-form>`,
    props: {
      inputChange: action('inputChange'),
      label: text('label', 'Name'),
      hint: text('hint', 'Please enter your name'),
      size: number('input size', 12),
      block: boolean('block', false),
      disabled: boolean('disabled', false)
    }
  }),
  {
    notes: {
      markdown: notes
    }
  }
);
