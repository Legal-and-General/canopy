import { AbstractControl, ValidatorFn } from '@angular/forms';
import { addDays, format, subDays } from 'date-fns';
import { instance, mock, when } from '@typestrong/ts-mockito';

import { pastDateValidator } from './pastDate.validator';

describe('pastDate', () => {
  let control: AbstractControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    control = mock(AbstractControl);
    validator = pastDateValidator();
  });

  it('returns a pastDate error if the date is not in the past', () => {
    when(control.value).thenReturn(format(addDays(new Date(), 10), 'yyyy-MM-dd'));

    expect(validator(instance(control))).toEqual({
      pastDate: true,
    });
  });

  it('throws an error if the date is not a valid date', () => {
    when(control.value).thenReturn(null);

    expect(() => validator(instance(control))).toThrow();
  });

  it('returns null if date is in the past', () => {
    when(control.value).thenReturn(format(subDays(new Date(), 10), 'yyyy-MM-dd'));

    expect(validator(instance(control))).toBe(null);
  });
});
