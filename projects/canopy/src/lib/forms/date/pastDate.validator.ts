import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import isPast from 'date-fns/isPast';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';

export function pastDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = parseISO(control.value);
    return !isValid(date) || isPast(date) ? null : { pastDate: true };
  };
}
