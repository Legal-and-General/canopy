import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { format, isAfter, isValid, parseISO } from 'date-fns';

import { dateFormat } from './date-field.interface';

export function afterDateValidator(dateToCompare: Date): ValidatorFn {
  if (!isValid(dateToCompare)) {
    throw new Error('afterDateValidator: dateToCompare is not a valid date');
  }

  return (control: AbstractControl): ValidationErrors | null => {
    const date = parseISO(control.value);

    return !isValid(date) || isAfter(date, dateToCompare)
      ? null
      : {
        afterDate: {
          required: format(dateToCompare, dateFormat),
          actual: format(date, dateFormat),
        },
      };
  };
}
