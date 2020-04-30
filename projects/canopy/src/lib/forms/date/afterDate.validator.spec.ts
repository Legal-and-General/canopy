import { AbstractControl, ValidatorFn } from '@angular/forms';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import { instance, mock, when } from 'ts-mockito';

import afterDateValidator from './afterDate.validator';
import { dateFormat } from './date-field.interface';

describe('afterDate', () => {
  let control: AbstractControl;
  let validator: ValidatorFn;
  let dateToCompare: Date;
  let date;

  beforeEach(() => {
    dateToCompare = new Date();
    control = mock(AbstractControl);
    validator = afterDateValidator(dateToCompare);
  });

  describe('date to compare is not a valid date', () => {
    it('throws an error', () => {
      expect(() => afterDateValidator(new Date('xx'))).toThrow();
    });
  });

  describe('date is after the specified date', () => {
    beforeEach(() => {
      date = subDays(dateToCompare, 10);
      when(control.value).thenReturn(format(date, 'yyyy-MM-dd'));
    });

    it('adds a afterDate error', () => {
      expect(validator(instance(control))).toEqual(jasmine.any(Object));
    });

    it('includes the date to compare against', () => {
      expect(validator(instance(control)).afterDate).toEqual(
        jasmine.objectContaining({
          required: format(dateToCompare, dateFormat)
        })
      );
    });

    it('includes the date that was entered', () => {
      expect(validator(instance(control)).afterDate).toEqual(
        jasmine.objectContaining({
          actual: format(date, dateFormat)
        })
      );
    });
  });

  describe('date entered is not a date', () => {
    describe('null', () => {
      beforeEach(() => {
        date = null;
        when(control.value).thenReturn(date);
      });

      it('adds a afterDate error', () => {
        expect(validator(instance(control))).toEqual(jasmine.any(Object));
      });

      it('includes the date to compare against', () => {
        expect(validator(instance(control)).afterDate).toEqual(
          jasmine.objectContaining({
            required: format(dateToCompare, dateFormat)
          })
        );
      });

      it('returns the invalid date that was sent', () => {
        expect(validator(instance(control)).afterDate).toEqual(
          jasmine.objectContaining({
            actual: date
          })
        );
      });
    });

    describe('invalid date', () => {
      beforeEach(() => {
        date = 'not a date';
        when(control.value).thenReturn(date);
      });

      it('adds a afterDate error', () => {
        expect(validator(instance(control))).toEqual(jasmine.any(Object));
      });

      it('includes the date to compare against', () => {
        expect(validator(instance(control)).afterDate).toEqual(
          jasmine.objectContaining({
            required: format(dateToCompare, dateFormat)
          })
        );
      });

      it('returns the invalid date that was sent', () => {
        expect(validator(instance(control)).afterDate).toEqual(
          jasmine.objectContaining({
            actual: date
          })
        );
      });
    });

    describe('date is before the specified date', () => {
      beforeEach(() => {
        date = addDays(dateToCompare, 10);
        when(control.value).thenReturn(format(date, 'yyyy-MM-dd'));
      });

      it('returns null', () => {
        expect(validator(instance(control))).toEqual(null);
      });
    });
  });
});
