import { Component, signal } from '@angular/core';
import { FormField, form, required, submit } from '@angular/forms/signals';
import { moduleMetadata } from '@storybook/angular';

import { LgButtonComponent } from '../../../button';
import { LgSignalInputDirective, LgSignalInputFieldComponent } from '../../signal-input';
import { LgValidationComponent } from '../validation.component';
import { LgValidationWrapperDirective } from '../validation-wrapper.directive';

import { SignalValidationFormExampleComponent } from './signal-validation-form-example';

@Component({
  selector: 'lg-signal-example-error',
  template: '<ng-content />',
})
class SignalExampleErrorComponent {}

const wrapperTemplate = `
  <form novalidate (submit)="onSubmit($event)">
    <lg-signal-input-field [submitted]="submitted()">
      Username
      @if (showError()) {
        <lg-signal-example-error lgValidationWrapper>
          <lg-validation>Enter a username</lg-validation>
        </lg-signal-example-error>
      }
      <input lgSignalInput [formField]="fields.username" />
    </lg-signal-input-field>
    <button lg-button type="submit">Continue</button>
  </form>
`;

@Component({
  selector: 'lg-signal-validation-example',
  imports: [
    FormField,
    LgButtonComponent,
    LgSignalInputDirective,
    LgSignalInputFieldComponent,
    LgValidationComponent,
    LgValidationWrapperDirective,
    SignalExampleErrorComponent,
  ],
  template: wrapperTemplate,
})
class SignalValidationExampleComponent {
  readonly model = signal({ username: '' });
  readonly submitted = signal(false);
  readonly fields = form(this.model, path => required(path.username));

  showError(): boolean {
    const state = this.fields.username();

    return state.invalid() && ((state.dirty() && state.touched()) || this.submitted());
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    if (this.fields.username().invalid()) {
      this.fields.username().focusBoundControl();
    }

    void submit(this.fields, async () => {});
  }
}

export default {
  title: 'Components/Forms/Form validation/Signal Forms',
  decorators: [
    moduleMetadata({
      imports: [
        LgValidationComponent,
        SignalValidationExampleComponent,
        SignalValidationFormExampleComponent,
      ],
    }),
  ],
};

export const FormValidation = {
  name: 'Form validation',
  render: () => ({ template: '<lg-signal-validation-form />' }),
};

export const Validation = {
  args: {
    content: 'Enter a username',
    status: 'error',
    statusTheme: 'neutral',
    showIcon: true,
  },
  argTypes: {
    status: {
      control: 'select',
      options: [ 'generic', 'info', 'success', 'warning', 'error' ],
    },
  },
  render: (args: object) => ({
    props: args,
    template:
      '<lg-validation [status]="status" [statusTheme]="statusTheme" [showIcon]="showIcon">{{ content }}</lg-validation>',
  }),
};

export const ValidationWrapper = {
  name: 'Validation wrapper',
  render: () => ({ template: '<lg-signal-validation-example />' }),
  parameters: { docs: { source: { code: wrapperTemplate } } },
};
