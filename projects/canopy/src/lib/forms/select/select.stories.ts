import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './select.notes';

const stories = storiesOf('Components|Form', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-select-field>
        {{ label }}
        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
        <select lgSelect formControlName="color">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </lg-select-field>
    </form>
  `
})
class ReactiveFormComponent implements OnInit {
  @Input() disabled = false;
  @Input() hint: string;
  @Input() label: string;

  @Output() selectChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      color: { value: '', disabled: this.disabled }
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
      [hint]="hint"
      [label]="label"
    ></lg-reactive-form>`,
    props: {
      selectChange: action('selectChange'),
      label: text('label', 'Color'),
      hint: text('hint', 'Please select a color')
    }
  }),
  {
    notes: { markdown: notes }
  }
);
