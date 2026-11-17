import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { apply, form } from '@angular/forms/signals';

import {
  lgAfterDateSchema,
  lgBeforeDateSchema,
  lgFutureDateSchema,
  lgPastDateSchema,
} from './signal-date-validators';

@Component({ template: '' })
class TestHostComponent {
  readonly model = signal({ past: '', future: '', before: '', after: '' });
  readonly fields = form(this.model, path => {
    apply(path.past, lgPastDateSchema);
    apply(path.future, lgFutureDateSchema);
    apply(path.before, lgBeforeDateSchema(new Date(2024, 0, 1)));
    apply(path.after, lgAfterDateSchema(new Date(2024, 0, 1)));
  });
}

describe('Signal date schemas', () => {
  it('applies past and future rules without rejecting invalid dates', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.componentInstance.model.set({
      past: '2099-01-01',
      future: '2000-01-01',
      before: 'invalid',
      after: '',
    });

    expect(fixture.componentInstance.fields.past().errors()).toEqual(
      expect.arrayContaining([ expect.objectContaining({ kind: 'pastDate' }) ]),
    );

    expect(fixture.componentInstance.fields.future().errors()).toEqual(
      expect.arrayContaining([ expect.objectContaining({ kind: 'futureDate' }) ]),
    );

    expect(fixture.componentInstance.fields.before().valid()).toBe(true);
    expect(fixture.componentInstance.fields.after().valid()).toBe(true);
  });

  it('returns the compared dates for before and after errors', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.componentInstance.model.set({
      past: '2000-01-01',
      future: '2099-01-01',
      before: '2024-01-02',
      after: '2023-12-31',
    });

    expect(fixture.componentInstance.fields.before().errors()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          kind: 'beforeDate',
          required: '01 January 2024',
          actual: '02 January 2024',
        }),
      ]),
    );

    expect(fixture.componentInstance.fields.after().errors()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          kind: 'afterDate',
          required: '01 January 2024',
          actual: '31 December 2023',
        }),
      ]),
    );
  });

  it('rejects invalid comparison dates', () => {
    expect(() => lgBeforeDateSchema(new Date(NaN))).toThrow('not a valid date');
    expect(() => lgAfterDateSchema(new Date(NaN))).toThrow('not a valid date');
  });
});
