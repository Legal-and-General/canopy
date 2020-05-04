import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import isFuture from 'date-fns/isFuture';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';

export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = parseISO(control.value);
    return !isValid(date) || isFuture(parseISO(control.value))
      ? null
      : { futureDate: true };
  };
}
