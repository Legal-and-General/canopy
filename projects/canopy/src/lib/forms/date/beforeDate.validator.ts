import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { format, isBefore, isValid, parseISO } from 'date-fns';

import { dateFormat } from './date-field.interface';

export function beforeDateValidator(dateToCompare: Date): ValidatorFn {
  if (!isValid(dateToCompare)) {
    throw new Error('beforeDateValidator: dateToCompare is not a valid date');
  }

  return (control: AbstractControl): ValidationErrors | null => {
    const date = parseISO(control.value);

    return !isValid(date) || isBefore(date, dateToCompare)
      ? null
      : {
        beforeDate: {
          required: format(dateToCompare, dateFormat),
          actual: isValid(date)
            ? format(date, dateFormat)
            : control.value,
        },
      };
  };
}
