import { Component, signal } from '@angular/core';
import { FormField, apply, form, submit } from '@angular/forms/signals';
import { moduleMetadata } from '@storybook/angular';

import { LgButtonComponent } from '../../../button';
import { LgHintComponent } from '../../hint';
import { LgSignalInputDirective, LgSignalInputFieldComponent } from '../../signal-input';
import { LgSignalSortCodeDirective, lgSortCodeSchema } from '../../signal-sort-code';
import { LgValidationComponent } from '../../validation';
import {
  SignalControlExampleComponent,
  renderSignalControlExample,
  signalControlDefaults,
} from '../../validation/docs/signal-control-example';

const template = `
  <form novalidate (submit)="onSubmit($event)">
    <lg-signal-input-field [submitted]="submitted()">
      Sort code
      <lg-hint>Must be 6 digits long, for example 00-00-00</lg-hint>
      @if (showError()) {
        <lg-validation>Enter a valid sort code.</lg-validation>
      }
      <input lgSignalInput lgSignalSortCode [formField]="fields.sortCode" />
    </lg-signal-input-field>
    <button lg-button type="submit">Continue</button>
  </form>
`;

@Component({
  selector: 'lg-signal-sort-code-example',
  imports: [
    FormField,
    LgButtonComponent,
    LgHintComponent,
    LgSignalInputDirective,
    LgSignalInputFieldComponent,
    LgSignalSortCodeDirective,
    LgValidationComponent,
  ],
  template,
})
class SignalSortCodeExampleComponent {
  readonly model = signal({ sortCode: '' });
  readonly submitted = signal(false);
  readonly fields = form(this.model, path => {
    apply(path.sortCode, lgSortCodeSchema);
  });

  showError(): boolean {
    const state = this.fields.sortCode();

    return state.invalid() && ((state.dirty() && state.touched()) || this.submitted());
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    if (this.fields.sortCode().invalid()) {
      this.fields.sortCode().focusBoundControl();
    }

    void submit(this.fields, async () => {});
  }
}

export default {
  title: 'Patterns/Sort code/Signal Forms',
  decorators: [ moduleMetadata({ imports: [ SignalSortCodeExampleComponent ] }) ],
};

export const SignalForm = {
  name: 'Sort code validation',
  render: () => ({ template: '<lg-signal-sort-code-example />' }),
  parameters: { docs: { source: { code: template } } },
};

export const SortCode = {
  name: 'Sort code',
  decorators: [ moduleMetadata({ imports: [ SignalControlExampleComponent ] }) ],
  args: { ...signalControlDefaults, label: 'Sort code', hint: 'Must be 6 digits long' },
  parameters: { controls: { include: [ 'label', 'hint', 'disabled' ] } },
  render: (args: object) => renderSignalControlExample('sort-code', args),
};
