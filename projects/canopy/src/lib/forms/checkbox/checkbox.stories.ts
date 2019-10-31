import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './checkbox.notes';

const stories = storiesOf('Components|Form', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-checkbox formControlName="umbrella" value="yes">
        {{ label }}
        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
      </lg-checkbox>
    </form>
  `
})
class ReactiveFormComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  @Input() hint: string;
  @Input() label: string;

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
        [hint]="hint"
        [label]="label"
        (checkboxChange)="checkboxChange($event)">
      </lg-reactive-form>`,
    props: {
      checkboxChange: action('checkboxChange'),
      label: text('label', 'I will bring my Umbrella if it is raining'),
      hint: text('hint', 'This is not advisable in bad weather')
    }
  }),
  {
    notes: { markdown: notes }
  }
);
