import { minLength, required, schema } from '@angular/forms/signals';

/**
 * Marks a checkbox group as required and rejects an empty selection.
 */
export const lgRequiredCheckboxGroup = schema<Array<string>>(path => {
  required(path);
  minLength(path, 1, { error: { kind: 'required' } });
});
