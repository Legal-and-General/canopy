import { AbstractControl, ValidatorFn } from '@angular/forms';
import { addDays, format, subDays } from 'date-fns';

import { futureDateValidator } from './futureDate.validator';

describe('futureDate', () => {
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = futureDateValidator();
  });

  it('returns a futureDate error if the date is not in the future', () => {
    const pastDate = format(subDays(new Date(), 10), 'yyyy-MM-dd');
    const control = { value: pastDate } as AbstractControl;

    expect(validator(control)).toEqual({
      futureDate: true,
    });
  });

  it('returns null if the date is not a valid date', () => {
    const control = { value: null } as AbstractControl;

    expect(validator(control)).toBe(null);
  });

  it('returns null if date is in the future', () => {
    const futureDate = format(addDays(new Date(), 10), 'yyyy-MM-dd');
    const control = { value: futureDate } as AbstractControl;

    expect(validator(control)).toBe(null);
  });
});
