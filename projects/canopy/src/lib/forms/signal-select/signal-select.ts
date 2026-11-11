import { Directive, InjectionToken, Signal, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';

import { LgSelectKeyboard } from '../select/select-keyboard';
import { isSignalFieldInvalid } from '../validation/signal-error-state';

export interface LgSignalSelectContext {
  readonly id: Signal<string>;
  readonly block: Signal<boolean>;
  readonly describedBy: Signal<string | null>;
  readonly submitted: Signal<boolean>;
}

export const LG_SIGNAL_SELECT_CONTEXT = new InjectionToken<LgSignalSelectContext>(
  'LG_SIGNAL_SELECT_CONTEXT',
);

@Directive({
  selector: 'select[lgSignalSelect]',
  host: {
    class: 'lg-select',
    '[id]': 'context.id()',
    '[class.lg-select--block]': 'context.block()',
    '[class.lg-select--error]': 'showError()',
    '[attr.aria-invalid]': 'showError() ? "true" : null',
    '[attr.aria-describedby]': 'context.describedBy()',
  },
})
export class LgSignalSelectDirective extends LgSelectKeyboard {
  readonly context = inject(LG_SIGNAL_SELECT_CONTEXT);
  readonly field = inject(FormField<unknown>, { self: true });

  showError(): boolean {
    return isSignalFieldInvalid(this.field.state(), this.context.submitted());
  }

  protected override notifySelectionChanged(selectElement: HTMLSelectElement): void {
    selectElement.dispatchEvent(new Event('input', { bubbles: true }));
    super.notifySelectionChanged(selectElement);
  }
}
