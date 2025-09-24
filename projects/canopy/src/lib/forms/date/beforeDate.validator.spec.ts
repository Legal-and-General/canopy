import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { addDays, format, subDays } from 'date-fns';

import { beforeDateValidator } from './beforeDate.validator';
import { dateFormat } from './date-field.interface';

describe('beforeDate', () => {
  let control: AbstractControl;
  let validator: ValidatorFn;
  let dateToCompare: Date;
  let date: Date;

  beforeEach(() => {
    dateToCompare = new Date();
    control = new FormControl();
    validator = beforeDateValidator(dateToCompare);
  });

  describe('date to compare is not a valid date', () => {
    it('throws an error', () => {
      expect(() => beforeDateValidator(new Date('xx'))).toThrow();
    });
  });

  describe('date is after the specified date', () => {
    beforeEach(() => {
      date = addDays(dateToCompare, 10);
      control.setValue(format(date, 'yyyy-MM-dd'));
    });

    it('adds a beforeDate error', () => {
      expect(validator(control)).toEqual(expect.any(Object));
    });

    it('includes the date to compare against', () => {
      expect(validator(control).beforeDate).toEqual(
        expect.objectContaining({
          required: format(dateToCompare, dateFormat),
        }),
      );
    });

    it('includes the date that was entered', () => {
      expect(validator(control).beforeDate).toEqual(
        expect.objectContaining({
          actual: format(date, dateFormat),
        }),
      );
    });
  });

  it('returns null if the date is null', () => {
    control.setValue(null);

    expect(validator(control)).toBe(null);
  });

  it('throws an error if the date is not a valid date', () => {
    control.setValue(new Date('not a date'));

    expect(() => validator(control)).toThrow();
  });

  it('returns null if date is before the specified date', () => {
    date = subDays(dateToCompare, 10);
    control.setValue(format(date, 'yyyy-MM-dd'));

    expect(validator(control)).toEqual(null);
  });
});
