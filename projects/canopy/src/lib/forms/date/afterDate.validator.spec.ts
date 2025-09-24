import { AbstractControl, ValidatorFn } from '@angular/forms';
import { addDays, format, subDays } from 'date-fns';

import { afterDateValidator } from './afterDate.validator';
import { dateFormat } from './date-field.interface';

describe('afterDate', () => {
  let control: Partial<AbstractControl>;
  let validator: ValidatorFn;
  let dateToCompare: Date;
  let date: Date;

  beforeEach(() => {
    dateToCompare = new Date();
    validator = afterDateValidator(dateToCompare);
  });

  describe('date to compare is not a valid date', () => {
    it('throws an error', () => {
      expect(() => afterDateValidator(new Date('xx'))).toThrow();
    });
  });

  describe('date is before the specified date', () => {
    beforeEach(() => {
      date = subDays(dateToCompare, 10);
      control = { value: format(date, 'yyyy-MM-dd') };
    });

    it('adds a afterDate error', () => {
      expect(validator(control as AbstractControl)).toEqual(expect.any(Object));
    });

    it('includes the date to compare against', () => {
      expect(validator(control as AbstractControl)?.afterDate).toEqual(
        expect.objectContaining({
          required: format(dateToCompare, dateFormat),
        }),
      );
    });

    it('includes the date that was entered', () => {
      expect(validator(control as AbstractControl)?.afterDate).toEqual(
        expect.objectContaining({
          actual: format(date, dateFormat),
        }),
      );
    });
  });

  it('returns null if the date is null', () => {
    control = { value: null };
    expect(validator(control as AbstractControl)).toBe(null);
  });

  it('throws an error if the date is not a valid date', () => {
    control = { value: new Date('not a date') };
    expect(() => validator(control as AbstractControl)).toThrow();
  });

  it('returns null if date is after the specified date', () => {
    date = addDays(dateToCompare, 10);
    control = { value: format(date, 'yyyy-MM-dd') };
    expect(validator(control as AbstractControl)).toEqual(null);
  });
});
