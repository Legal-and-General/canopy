import { Component, input, signal } from '@angular/core';
import {
  FormField,
  disabled,
  form,
  minLength,
  required,
  submit,
} from '@angular/forms/signals';
import { moduleMetadata } from '@storybook/angular';

import { LgButtonComponent } from '../../../button';
import { LgIconComponent } from '../../../icon';
import { LgPrefixDirective } from '../../../prefix';
import { LgSuffixDirective } from '../../../suffix';
import { LgHintComponent } from '../../hint';
import { LgInputFieldExternalButtonDirective } from '../../input-field-external-button';
import { LgSignalInputDirective, LgSignalInputFieldComponent } from '../../signal-input';
import { LgValidationComponent } from '../../validation';

const template = `
  <form novalidate (submit)="onSubmit($event)">
    <lg-signal-input-field [block]="block()" [showLabel]="showLabel()" [submitted]="submitted()">
      {{ label() }}
      @if (optional()) { <span class="lg-label--optional">(optional)</span> }
      @if (hint()) { <lg-hint>{{ hint() }}</lg-hint> }
      @if (showError()) { <lg-validation>Enter at least 3 characters</lg-validation> }
      @if (showTextPrefix()) { <span lgPrefix>{{ prefix() }}</span> }
      @if (textarea()) {
        <textarea lgSignalInput [formField]="fields.value" rows="4"></textarea>
      } @else {
        <input lgSignalInput [formField]="fields.value" [size]="size()" />
      }
      @if (showButtonFirstSuffix()) {
        <button lg-button lgSuffix type="button" [iconButton]="true" priority="add-on">
          Close <lg-icon name="close-spot-outline" />
        </button>
      }
      @if (showExternalButton()) {
        <button lg-button lgInputFieldExternalButton type="button" [iconButton]="true" priority="primary">
          Search <lg-icon name="search" />
        </button>
      }
      @if (showTextSuffix()) { <span lgSuffix>{{ suffix() }}</span> }
    </lg-signal-input-field>
    <button lg-button type="submit">Continue</button>
  </form>
`;

@Component({
  selector: 'lg-signal-input-variants-example',
  imports: [
    FormField,
    LgButtonComponent,
    LgIconComponent,
    LgPrefixDirective,
    LgSuffixDirective,
    LgHintComponent,
    LgInputFieldExternalButtonDirective,
    LgSignalInputDirective,
    LgSignalInputFieldComponent,
    LgValidationComponent,
  ],
  template,
})
class SignalInputVariantsExampleComponent {
  readonly block = input(false);
  readonly disabled = input(false);
  readonly hint = input('Please enter your name');
  readonly label = input('Name');
  readonly optional = input(false);
  readonly prefix = input('£');
  readonly showButtonFirstSuffix = input(false);
  readonly showExternalButton = input(false);
  readonly showLabel = input(true);
  readonly showTextPrefix = input(false);
  readonly showTextSuffix = input(false);
  readonly size = input(12);
  readonly suffix = input('%');
  readonly textarea = input(false);
  readonly model = signal({ value: '' });
  readonly submitted = signal(false);
  readonly fields = form(this.model, path => {
    disabled(path.value, () => this.disabled());
    required(path.value, { when: () => !this.optional() });
    minLength(path.value, 3);
  });

  showError(): boolean {
    const state = this.fields.value();

    return state.invalid() && ((state.dirty() && state.touched()) || this.submitted());
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    if (this.fields.value().invalid()) {
      this.fields.value().focusBoundControl();
    }

    void submit(this.fields, async () => {});
  }
}

export default {
  title: 'Components/Forms/Text input/Signal Forms',
  decorators: [ moduleMetadata({ imports: [ SignalInputVariantsExampleComponent ] }) ],
  args: {
    block: false,
    disabled: false,
    hint: 'Please enter your name',
    label: 'Name',
    optional: false,
    prefix: '£',
    showButtonFirstSuffix: false,
    showExternalButton: false,
    showLabel: true,
    showTextPrefix: false,
    showTextSuffix: false,
    size: 12,
    suffix: '%',
    textarea: false,
  },
  parameters: { docs: { source: { code: template } } },
};

function render(args: object) {
  return {
    props: args,
    template: `
      <lg-signal-input-variants-example
        [block]="block" [disabled]="disabled" [hint]="hint" [label]="label"
        [optional]="optional" [prefix]="prefix" [showButtonFirstSuffix]="showButtonFirstSuffix"
        [showExternalButton]="showExternalButton" [showLabel]="showLabel"
        [showTextPrefix]="showTextPrefix" [showTextSuffix]="showTextSuffix"
        [size]="size" [suffix]="suffix" [textarea]="textarea"
      />
    `,
  };
}

export const Standard = { name: 'Standard', render };
export const WithButtonSuffix = {
  name: 'With button suffix',
  render,
  args: { showButtonFirstSuffix: true },
};
export const WithTextSuffix = {
  name: 'With text suffix',
  render,
  args: { showTextSuffix: true, label: 'Amount', hint: '' },
};
export const WithMultipleButtonSuffixes = {
  name: 'With multiple buttons suffixes',
  render,
  args: { showButtonFirstSuffix: true, showExternalButton: true },
};
export const WithTextPrefix = {
  name: 'With text prefix',
  render,
  args: { showTextPrefix: true, label: 'Amount', hint: '' },
};
export const ResizableTextarea = {
  name: 'Resizable textarea',
  render,
  args: {
    textarea: true,
    label: 'Description',
    hint: 'Drag the lower-right corner to resize this text area.',
  },
};
