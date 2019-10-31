import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './input.notes';

const stories = storiesOf('Components|Form', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-input-field>
        {{ label }}
        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
        <input lgInput formControlName="name" />
      </lg-input-field>
    </form>
  `
})
class ReactiveFormComponent implements OnInit {
  @Input() disabled = false;
  @Input() hint: string;
  @Input() label: string;

  @Output() inputChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({ name: { value: '', disabled: this.disabled } });
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
      [hint]="hint"
      [label]="label"
    ></lg-reactive-form>`,
    props: {
      inputChange: action('inputChange'),
      label: text('label', 'Name'),
      hint: text('hint', 'Please enter your name')
    }
  }),
  {
    notes: {
      markdown: notes
    }
  }
);
