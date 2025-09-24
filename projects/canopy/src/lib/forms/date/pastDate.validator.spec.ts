import { AbstractControl, FormControl } from '@angular/forms';
import { addDays, format, subDays } from 'date-fns';

import { pastDateValidator } from './pastDate.validator';

describe('pastDate', () => {
  let control: AbstractControl;
  let validator: ReturnType<typeof pastDateValidator>;

  beforeEach(() => {
    control = new FormControl();
    validator = pastDateValidator();
  });

  it('returns a pastDate error if the date is not in the past', () => {
    const futureDate = format(addDays(new Date(), 10), 'yyyy-MM-dd');

    control.setValue(futureDate);

    expect(validator(control)).toEqual({
      pastDate: true,
    });
  });

  it('returns null if the date is not a valid date', () => {
    control.setValue(null);

    expect(validator(control)).toBe(null);
  });

  it('returns null if date is in the past', () => {
    const pastDate = format(subDays(new Date(), 10), 'yyyy-MM-dd');

    control.setValue(pastDate);

    expect(validator(control)).toBe(null);
  });
});
