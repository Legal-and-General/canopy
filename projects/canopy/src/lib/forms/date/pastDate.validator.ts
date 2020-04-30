import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import isPast from 'date-fns/isPast';
import parseISO from 'date-fns/parseISO';

export default function pastDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return isPast(parseISO(control.value)) ? null : { pastDate: true };
  };
}
