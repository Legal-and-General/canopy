import { Directive, InjectionToken, Signal, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { isSignalFieldInvalid } from '../validation/signal-error-state';

export interface LgSignalInputContext {
  readonly id: Signal<string>;
  readonly block: Signal<boolean>;
  readonly describedBy: Signal<string | null>;
  readonly submitted: Signal<boolean>;
}

export const LG_SIGNAL_INPUT_CONTEXT = new InjectionToken<LgSignalInputContext>(
  'LG_SIGNAL_INPUT_CONTEXT',
);

@Directive({
  selector: 'input[lgSignalInput], textarea[lgSignalInput]',
  host: {
    class: 'lg-input',
    '[id]': 'context.id()',
    '[class.lg-input--block]': 'context.block()',
    '[class.lg-input--error]': 'showError()',
    '[attr.aria-invalid]': 'showError() ? "true" : null',
    '[attr.aria-describedby]': 'context.describedBy()',
  },
})
export class LgSignalInputDirective {
  readonly context = inject(LG_SIGNAL_INPUT_CONTEXT);
  readonly field = inject(FormField<unknown>, { self: true });

  showError(): boolean {
    return isSignalFieldInvalid(this.field.state(), this.context.submitted());
  }
}
