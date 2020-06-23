import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form>
      <lg-toggle formControlName="umbrella" [value]="true" [variant]="variant">
        {{ label }}
      </lg-toggle>
    </form>
  `
})
export class ReactiveToggleFormComponent {
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

export const createToggleStory = (name: string, variant?: string) => ({
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
});
