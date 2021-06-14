import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';

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
