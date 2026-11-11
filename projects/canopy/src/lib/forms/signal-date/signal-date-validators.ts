import { schema, validate } from '@angular/forms/signals';
import { format, isAfter, isBefore, isFuture, isPast, isValid, parseISO } from 'date-fns';

import { dateFormat } from '../date/date-field.interface';

export const lgPastDateSchema = schema<string>(path => {
  validate(path, ({ value }) => {
    const date = parseISO(value());

    return !isValid(date) || isPast(date)
      ? undefined
      : { kind: 'pastDate' };
  });
});

export const lgFutureDateSchema = schema<string>(path => {
  validate(path, ({ value }) => {
    const date = parseISO(value());

    return !isValid(date) || isFuture(date)
      ? undefined
      : { kind: 'futureDate' };
  });
});

export function lgBeforeDateSchema(dateToCompare: Date) {
  if (!isValid(dateToCompare)) {
    throw new Error('lgBeforeDateSchema: dateToCompare is not a valid date');
  }

  return schema<string>(path => {
    validate(path, ({ value }) => {
      const date = parseISO(value());

      return !isValid(date) || isBefore(date, dateToCompare)
        ? undefined
        : {
          kind: 'beforeDate',
          required: format(dateToCompare, dateFormat),
          actual: format(date, dateFormat),
        };
    });
  });
}

export function lgAfterDateSchema(dateToCompare: Date) {
  if (!isValid(dateToCompare)) {
    throw new Error('lgAfterDateSchema: dateToCompare is not a valid date');
  }

  return schema<string>(path => {
    validate(path, ({ value }) => {
      const date = parseISO(value());

      return !isValid(date) || isAfter(date, dateToCompare)
        ? undefined
        : {
          kind: 'afterDate',
          required: format(dateToCompare, dateFormat),
          actual: format(date, dateFormat),
        };
    });
  });
}
