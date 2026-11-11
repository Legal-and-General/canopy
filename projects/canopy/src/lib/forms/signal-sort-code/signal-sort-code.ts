import { Directive, OnInit, inject } from '@angular/core';
import { FormField, pattern, required, schema } from '@angular/forms/signals';

const SORT_CODE_PATTERN = /^(?:\d{6}|\d\d-\d\d-\d\d|\d\d\s\d\d\s\d\d)$/;

/**
 * Required sort code validation for signal forms.
 */
export const lgSortCodeSchema = schema<string>(path => {
  required(path);
  pattern(path, SORT_CODE_PATTERN);
});

@Directive({
  selector: 'input[lgSignalSortCode]',
  host: {
    '[attr.inputmode]': '"numeric"',
    '[attr.maxlength]': '8',
    '[attr.size]': '7',
    '(focusout)': 'onBlur()',
  },
})
export class LgSignalSortCodeDirective implements OnInit {
  private readonly field = inject<FormField<string>>(FormField, { self: true });

  ngOnInit(): void {
    const state = this.field.state();
    const hasSortCodePattern = state
      .pattern()
      .some(
        value =>
          value.source === SORT_CODE_PATTERN.source &&
          value.flags === SORT_CODE_PATTERN.flags,
      );

    if (!state.required() || !hasSortCodePattern) {
      throw new Error(
        'lgSignalSortCode requires lgSortCodeSchema to be applied to its signal form field',
      );
    }
  }

  onBlur(): void {
    const state = this.field.state();

    if (state.valid()) {
      const digits = state.value().replace(/-|\s/g, '');

      state.controlValue.set(
        `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4, 6)}`,
      );
    }
  }
}
