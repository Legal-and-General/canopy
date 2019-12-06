import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './checkbox.notes';

const stories = storiesOf('Components|Form', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-checkbox [disabled]="disabled" formControlName="umbrella" value="yes">
        {{ label }}
      </lg-checkbox>
    </form>
  `
})
class ReactiveFormComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  @Input() label: string;
  @Input() disabled: boolean;

  @Output() checkboxChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({ umbrella: null });
    this.form.valueChanges.subscribe(val => this.checkboxChange.emit(val));
  }
}

stories.add(
  'Checkbox',
  () => ({
    moduleMetadata: {
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule, CanopyModule]
    },
    template: `<lg-reactive-form
        [disabled]="disabled"
        [label]="label"
        (checkboxChange)="checkboxChange($event)">
      </lg-reactive-form>`,
    props: {
      checkboxChange: action('checkboxChange'),
      label: text('label', 'I will bring my Umbrella if it is raining'),
      disabled: boolean('disabled', false)
    }
  }),
  {
    notes: { markdown: notes }
  }
);
