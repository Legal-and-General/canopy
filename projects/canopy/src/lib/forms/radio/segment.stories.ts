import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, EventEmitter, Output } from '@angular/core';

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { notes } from './radio.notes';
import { LgRadioModule } from './radio.module';
import type { RadioStackBreakpoint } from './radio.interface';

@Component({
  selector: 'lg-reactive-form-segment',
  template: `
    <form [formGroup]="form">
      <lg-segment-group formControlName="color" [stack]="stack" [focus]="focus">
        {{ label }} {{ itemsInSegment }}
        <lg-segment-button value="red" (blur)="segmentBlur.emit($event)"
          >Red</lg-segment-button
        >
        <lg-segment-button value="yellow" (blur)="segmentBlur.emit($event)">{{
          secondButtonLabel
        }}</lg-segment-button>
        <lg-segment-button value="green" (blur)="segmentBlur.emit($event)"
          >Green</lg-segment-button
        >
        <lg-segment-button value="blue" (blur)="segmentBlur.emit($event)"
          >Blue</lg-segment-button
        >
      </lg-segment-group>
    </form>
  `,
})
class ReactiveFormSegmentComponent {
  @Input() label: string;
  @Input() secondButtonLabel: string;
  @Input() stack: RadioStackBreakpoint;
  @Input() focus: boolean;
  @Input()
  set disabled(isDisabled: boolean) {
    if (isDisabled === true) {
      this.form.controls.color.disable();
    } else {
      this.form.controls.color.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.color.disabled;
  }

  @Output() segmentChange: EventEmitter<void> = new EventEmitter();
  @Output() segmentBlur: EventEmitter<Event> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ color: null });
    this.form.valueChanges.subscribe((val) => this.segmentChange.emit(val));
  }
}

export default {
  title: 'Components/Form/Segment',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [ReactiveFormSegmentComponent],
        imports: [ReactiveFormsModule, LgRadioModule],
      }),
    ],
    notes: {
      markdown: notes('Segment'),
    },
  },
};

export const standard = () => ({
  template: `
    <lg-reactive-form-segment
    [stack]="stack === 'false' ? false : stack"
    [disabled]="disabled"
    [focus]="focus"
    [label]="label"
    [secondButtonLabel]="secondButtonLabel"
    (segmentChange)="segmentChange($event)"
    (segmentBlur)="segmentBlur($event)">
  </lg-reactive-form-segment>
  `,
  props: {
    label: text('label', 'Select a color'),
    secondButtonLabel: text('secondButtonLabel', 'Yellow'),
    segmentChange: action('segmentChange'),
    segmentBlur: action('segmentBlur'),
    disabled: boolean('disabled', false),
    focus: boolean('focus', false),
    stack: select('stack', ['false', 'sm', 'md', 'lg'], undefined),
  },
});
