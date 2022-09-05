import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isFuture, isValid, parseISO } from 'date-fns';

export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = parseISO(control.value);

    return !isValid(date) || isFuture(parseISO(control.value))
      ? null
      : { futureDate: true };
  };
}
