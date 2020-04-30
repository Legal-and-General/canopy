import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import isFuture from 'date-fns/isFuture';
import parseISO from 'date-fns/parseISO';

export default function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return isFuture(parseISO(control.value)) ? null : { futureDate: true };
  };
}
