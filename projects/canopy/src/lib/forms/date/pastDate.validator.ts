import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isPast, isValid, parseISO } from 'date-fns';

export function pastDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = parseISO(control.value);

    return !isValid(date) || isPast(date)
      ? null
      : { pastDate: true };
  };
}
