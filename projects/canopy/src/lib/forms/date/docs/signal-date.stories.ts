import { Component, signal } from '@angular/core';
import { FormField, apply, form, required, submit } from '@angular/forms/signals';
import { moduleMetadata } from '@storybook/angular';

import { LgButtonComponent } from '../../../button';
import { LgSignalDateFieldComponent, lgPastDateSchema } from '../../signal-date';
import { LgValidationComponent } from '../../validation';
import {
  SignalControlExampleComponent,
  renderSignalControlExample,
  signalControlDefaults,
} from '../../validation/docs/signal-control-example';

const template = `
  <form novalidate (submit)="onSubmit($event)">
    <lg-signal-date-field [formField]="fields.date" [submitted]="submitted()">
      Date of birth
      @if (showError()) {
        <lg-validation>Enter a valid date of birth in the past.</lg-validation>
      }
    </lg-signal-date-field>
    <button lg-button type="submit">Continue</button>
  </form>
`;

@Component({
  selector: 'lg-signal-date-example',
  imports: [
    FormField,
    LgButtonComponent,
    LgSignalDateFieldComponent,
    LgValidationComponent,
  ],
  template,
})
class SignalDateExampleComponent {
  readonly model = signal({ date: '' });
  readonly submitted = signal(false);
  readonly fields = form(this.model, path => {
    required(path.date);
    apply(path.date, lgPastDateSchema);
  });

  showError(): boolean {
    const state = this.fields.date();

    return state.invalid() && ((state.dirty() && state.touched()) || this.submitted());
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    if (this.fields.date().invalid()) {
      this.fields.date().focusBoundControl();
    }

    void submit(this.fields, async () => {});
  }
}

export default {
  title: 'Patterns/Date input/Signal Forms',
  decorators: [ moduleMetadata({ imports: [ SignalDateExampleComponent ] }) ],
};

export const SignalForm = {
  name: 'Date input validation',
  render: () => ({ template: '<lg-signal-date-example />' }),
  parameters: { docs: { source: { code: template } } },
};

export const DateInput = {
  name: 'Date input',
  decorators: [ moduleMetadata({ imports: [ SignalControlExampleComponent ] }) ],
  args: { ...signalControlDefaults, label: 'Date of birth' },
  parameters: { controls: { include: [ 'label', 'disabled', 'focus' ] } },
  render: (args: object) => renderSignalControlExample('date', args),
};
