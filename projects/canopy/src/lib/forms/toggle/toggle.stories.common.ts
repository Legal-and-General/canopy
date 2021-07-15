import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import type { ToggleVariant } from './toggle.interface';

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-toggle
        formControlName="umbrella"
        [value]="true"
        [variant]="variant"
        [checked]="umbrella.value"
        [focus]="focus"
      >
        {{ label }}
      </lg-toggle>
    </form>
  `,
})
export class ReactiveToggleFormComponent implements OnChanges {
  @Input() label: string;
  @Input() variant: ToggleVariant;
  @Input() checked: boolean;
  @Input() focus: boolean;

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
      umbrella: [{ value: '', disabled: false }],
    });
    this.form.valueChanges.subscribe((val) => this.toggleChange.emit(val));
  }

  ngOnChanges({ checked }: SimpleChanges): void {
    if (checked?.currentValue) {
      this.umbrella.setValue(checked.currentValue);
    }
  }
}

export const createToggleStory = (variant: string) => ({
  template: `
  <lg-reactive-form
    [disabled]="disabled"
    [label]="label"
    variant="${variant}"
    [checked]="checked"
    [focus]="focus"
    (toggleChange)="toggleChange($event)">
  </lg-reactive-form>`,
  props: {
    toggleChange: action('toggleChange'),
    label: text('label', 'I will bring my Umbrella if it is raining'),
    disabled: boolean('disabled', false),
    checked: boolean('reactively checked', false),
    focus: boolean('focus', false),
  },
});
