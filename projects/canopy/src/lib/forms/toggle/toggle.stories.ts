import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { CanopyModule } from '../../canopy.module';
import { notes } from './toggle.notes';

const stories = storiesOf('Components/Form', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-toggle formControlName="umbrella" [value]="true" [variant]="variant">
        {{ label }}
      </lg-toggle>
    </form>
  `
})
class ReactiveFormComponent {
  @Input() label: string;
  @Input() variant: 'checkbox' | 'switch';

  @Input()
  set disabled(disabled: boolean) {
    if (disabled === true) {
      this.form.controls.umbrella.disable();
    } else {
      this.form.controls.umbrella.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.umbrella.disabled;
  }

  get umbrella() {
    return this.form.get('umbrella');
  }

  @Output() toggleChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      umbrella: [{ value: '', disabled: false }]
    });
    this.form.valueChanges.subscribe(val => this.toggleChange.emit(val));
  }
}

createStory('Checkbox', 'checkbox');

createStory('Switch', 'switch');

function createStory(name, variant?) {
  return stories.add(
    name,
    () => ({
      moduleMetadata: {
        declarations: [ReactiveFormComponent],
        imports: [ReactiveFormsModule, CanopyModule]
      },
      template: `
      <lg-reactive-form
        [disabled]="disabled"
        [label]="label"
        variant="${variant}"
        (toggleChange)="toggleChange($event)">
      </lg-reactive-form>`,
      props: {
        toggleChange: action('toggleChange'),
        label: text('label', 'I will bring my Umbrella if it is raining'),
        disabled: boolean('disabled', false)
      }
    }),
    {
      notes: { markdown: notes }
    }
  );
}
