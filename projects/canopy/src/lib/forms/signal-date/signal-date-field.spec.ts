import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  FormField,
  apply,
  disabled,
  form,
  required,
  submit,
} from '@angular/forms/signals';
import { By } from '@angular/platform-browser';

import { LgValidationComponent } from '../validation';

import { LgSignalDateFieldComponent } from './signal-date-field';
import { lgPastDateSchema } from './signal-date-validators';

@Component({
  imports: [ FormField, LgSignalDateFieldComponent, LgValidationComponent ],
  template: `
    <form novalidate (submit)="onSubmit($event)">
      <lg-signal-date-field
        [formField]="fields.date"
        [submitted]="submitted()"
        dateId="day"
        monthId="month"
        yearId="year"
        ariaDescribedBy="extra"
      >
        Date of birth
        @if (showValidation()) {
          <lg-validation id="error">Enter a valid date.</lg-validation>
        }
      </lg-signal-date-field>
      <button type="submit">Submit</button>
    </form>
  `,
})
class TestHostComponent {
  readonly model = signal({ date: '', locked: false });
  readonly submitted = signal(false);
  readonly actionCalled = signal(false);
  readonly showValidation = signal(false);
  readonly fields = form(this.model, path => {
    required(path.date);
    disabled(path.date, ({ valueOf }) => valueOf(path.locked));
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    void submit(this.fields, () => {
      this.actionCalled.set(true);

      return Promise.resolve();
    });
  }
}

@Component({
  imports: [ FormField, LgSignalDateFieldComponent ],
  template: `
    <lg-signal-date-field [formField]="fields.date" [submitted]="true">
      Date of birth
    </lg-signal-date-field>
  `,
})
class PastDateHostComponent {
  readonly fields = form(signal({ date: '2099-01-01' }), path => {
    apply(path.date, lgPastDateSchema);
  });
}

@Component({
  imports: [ FormField, LgSignalDateFieldComponent ],
  template: `
    <lg-signal-date-field [formField]="fields.first">First date</lg-signal-date-field>
    <lg-signal-date-field [formField]="fields.second">Second date</lg-signal-date-field>
  `,
})
class MultipleDatesHostComponent {
  readonly fields = form(signal({ first: '', second: '' }));
}

@Component({
  imports: [ FormField, LgSignalDateFieldComponent ],
  template: `
    <lg-signal-date-field [formField]="fields.date">Date</lg-signal-date-field>
  `,
})
class ConditionalRequiredDateHostComponent {
  readonly model = signal({ date: '', mandatory: false });
  readonly fields = form(this.model, path => {
    required(path.date, { when: ({ valueOf }) => valueOf(path.mandatory) });
  });
}

describe('LgSignalDateFieldComponent', () => {
  it('reflects conditional required state on all date inputs', () => {
    const fixture = TestBed.createComponent(ConditionalRequiredDateHostComponent);

    fixture.detectChanges();

    const inputs = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('input'),
    );

    expect(inputs).toHaveLength(3);
    expect(inputs.every(input => !input.required)).toBe(true);
    fixture.componentInstance.model.update(model => ({ ...model, mandatory: true }));
    fixture.detectChanges();
    expect(inputs.every(input => input.required)).toBe(true);
    fixture.componentInstance.model.update(model => ({ ...model, mandatory: false }));
    fixture.detectChanges();
    expect(inputs.every(input => !input.required)).toBe(true);
  });

  it('associates labels with distinct inputs in multiple date fields', () => {
    const fixture = TestBed.createComponent(MultipleDatesHostComponent);

    fixture.detectChanges();

    const root: HTMLElement = fixture.nativeElement;
    const inputs = Array.from(root.querySelectorAll('input'));
    const labels = Array.from(root.querySelectorAll('label'));

    expect(inputs).toHaveLength(6);
    expect(new Set(inputs.map(input => input.id)).size).toBe(6);

    expect(
      labels.every(label => inputs.some(input => input.id === label.htmlFor)),
    ).toBe(true);
  });

  it('marks date parts invalid when an external date rule fails', () => {
    const fixture = TestBed.createComponent(PastDateHostComponent);

    fixture.detectChanges();

    const inputs = fixture.nativeElement.querySelectorAll('input');

    expect(fixture.componentInstance.fields.date().invalid()).toBe(true);

    expect(
      Array.from(inputs).every(
        input => (input as HTMLInputElement).getAttribute('aria-invalid') === 'true',
      ),
    ).toBe(true);
  });

  it('preserves partial input while emitting padded values and handles external updates', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const day = fixture.nativeElement.querySelector('#day') as HTMLInputElement;
    const month = fixture.nativeElement.querySelector('#month') as HTMLInputElement;
    const year = fixture.nativeElement.querySelector('#year') as HTMLInputElement;

    day.value = '1';
    day.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();
    expect(day.value).toBe('1');
    expect(fixture.componentInstance.model().date).toBe('--01');

    day.value = '12';
    day.dispatchEvent(new Event('input', { bubbles: true }));
    month.value = '3';
    month.dispatchEvent(new Event('input', { bubbles: true }));
    year.value = '2024';
    year.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();
    expect(day.value).toBe('12');
    expect(month.value).toBe('3');
    expect(fixture.componentInstance.model().date).toBe('2024-03-12');

    fixture.componentInstance.model.update(model => ({ ...model, date: '2000-01-02' }));
    fixture.detectChanges();
    expect(day.value).toBe('02');
    expect(month.value).toBe('01');
    expect(year.value).toBe('2000');

    fixture.componentInstance.fields().reset({ date: '', locked: false });
    fixture.detectChanges();
    expect(day.value).toBe('');
    expect(month.value).toBe('');
    expect(year.value).toBe('');
  });

  it('reports the existing field-specific error priority after interaction', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const day = fixture.nativeElement.querySelector('#day') as HTMLInputElement;
    const month = fixture.nativeElement.querySelector('#month') as HTMLInputElement;

    month.value = '13';
    month.dispatchEvent(new Event('input', { bubbles: true }));
    month.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.date().errors()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: 'invalidField', field: 'month' }),
      ]),
    );

    expect(month.getAttribute('aria-invalid')).toBe('true');
    expect(day.getAttribute('aria-invalid')).toBeNull();

    day.value = '32';
    day.dispatchEvent(new Event('input', { bubbles: true }));
    day.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.date().errors()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: 'invalidFields', fields: [ 'day', 'month' ] }),
      ]),
    );
  });

  it('prioritises invalid parts and reports three invalid parts as an invalid date', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const day = fixture.nativeElement.querySelector('#day') as HTMLInputElement;
    const month = fixture.nativeElement.querySelector('#month') as HTMLInputElement;
    const year = fixture.nativeElement.querySelector('#year') as HTMLInputElement;

    day.value = '32';
    day.dispatchEvent(new Event('input', { bubbles: true }));
    day.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.componentInstance.submitted.set(true);
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.date().errors()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: 'invalidField', field: 'day' }),
      ]),
    );

    month.value = '13';
    month.dispatchEvent(new Event('input', { bubbles: true }));
    year.value = '12';
    year.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.date().errors()).toEqual(
      expect.arrayContaining([ expect.objectContaining({ kind: 'invalidDate' }) ]),
    );
  });

  it('validates missing parts on submission and leaves future dates allowed', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const year = fixture.nativeElement.querySelector('#year') as HTMLInputElement;

    year.value = '2099';
    year.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    fixture.detectChanges();

    expect(fixture.componentInstance.fields.date().errors()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: 'requiredFields', fields: [ 'day', 'month' ] }),
      ]),
    );

    fixture.componentInstance.model.update(model => ({ ...model, date: '2099-12-31' }));
    fixture.detectChanges();
    expect(fixture.componentInstance.fields.date().valid()).toBe(true);
  });

  it('does not submit an incomplete date when submitted before blur', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const year = fixture.nativeElement.querySelector('#year') as HTMLInputElement;

    year.value = '2024';
    year.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    fixture.detectChanges();

    expect(fixture.componentInstance.actionCalled()).toBe(false);
  });

  it('clears interaction state on a reset to the same incomplete value', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const day = fixture.nativeElement.querySelector('#day') as HTMLInputElement;

    day.value = '32';
    day.dispatchEvent(new Event('input', { bubbles: true }));
    day.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(day.getAttribute('aria-invalid')).toBe('true');

    fixture.componentInstance.fields().reset({ date: '--32', locked: false });
    fixture.detectChanges();

    expect(fixture.componentInstance.model().date).toBe('--32');
    expect(fixture.componentInstance.fields.date().invalid()).toBe(true);
    expect(fixture.componentInstance.fields.date().dirty()).toBe(false);
    expect(fixture.componentInstance.fields.date().touched()).toBe(false);
    expect(day.value).toBe('32');
    expect(day.getAttribute('aria-invalid')).toBeNull();
  });

  it('clears submitted errors when resetting to an empty date', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    fixture.detectChanges();

    const day = fixture.nativeElement.querySelector('#day') as HTMLInputElement;

    expect(day.getAttribute('aria-invalid')).toBe('true');
    fixture.componentInstance.fields().reset({ date: '', locked: false });
    fixture.componentInstance.submitted.set(false);
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.date().errors()).toEqual(
      expect.arrayContaining([ expect.objectContaining({ kind: 'required' }) ]),
    );

    expect(day.getAttribute('aria-invalid')).toBeNull();
  });

  it('validates an externally provided impossible calendar date', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();
    fixture.componentInstance.model.update(model => ({ ...model, date: '2024-02-31' }));
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.date().errors()).toEqual(
      expect.arrayContaining([ expect.objectContaining({ kind: 'invalidDate' }) ]),
    );
  });

  it('validates the initial external date without changing its formatting', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.componentInstance.model.update(model => ({ ...model, date: '2024-2-31' }));
    fixture.detectChanges();

    expect(fixture.componentInstance.model().date).toBe('2024-2-31');

    expect(fixture.componentInstance.fields.date().errors()).toEqual(
      expect.arrayContaining([ expect.objectContaining({ kind: 'invalidDate' }) ]),
    );

    fixture.componentInstance.submitted.set(true);
    fixture.detectChanges();
    expect(fixture.componentInstance.model().date).toBe('2024-2-31');
  });

  it.each([ '2024-01-01-extra', '--', '2024-01-01-', '2024-01-01T00:00:00' ])(
    'rejects malformed external date %s without rewriting it and allows correction',
    date => {
      const fixture = TestBed.createComponent(TestHostComponent);

      fixture.componentInstance.model.update(model => ({ ...model, date }));
      fixture.detectChanges();
      expect(fixture.componentInstance.model().date).toBe(date);

      expect(fixture.componentInstance.fields.date().errors()).toEqual(
        expect.arrayContaining([ expect.objectContaining({ kind: 'invalidDate' }) ]),
      );

      fixture.nativeElement
        .querySelector('form')
        .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

      fixture.detectChanges();
      expect(fixture.componentInstance.actionCalled()).toBe(false);
      expect(fixture.componentInstance.model().date).toBe(date);

      fixture.componentInstance.model.update(model => ({
        ...model,
        date: '2024-2-29',
      }));

      fixture.detectChanges();
      expect(fixture.componentInstance.fields.date().valid()).toBe(true);
      expect(fixture.componentInstance.model().date).toBe('2024-2-29');
    },
  );

  it('allows a user to correct a malformed external date', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.componentInstance.model.update(model => ({
      ...model,
      date: '2024-01-01-extra',
    }));

    fixture.detectChanges();

    const day = fixture.nativeElement.querySelector('#day') as HTMLInputElement;

    day.value = '2';
    day.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();
    expect(fixture.componentInstance.model().date).toBe('2024-01-02');
    expect(fixture.componentInstance.fields.date().valid()).toBe(true);
  });

  it('rejects malformed values set after a valid date and clears the error on reset', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.componentInstance.model.update(model => ({ ...model, date: '2024-01-01' }));
    fixture.detectChanges();
    expect(fixture.componentInstance.fields.date().valid()).toBe(true);

    fixture.componentInstance.model.update(model => ({ ...model, date: '--' }));
    fixture.detectChanges();
    expect(fixture.componentInstance.model().date).toBe('--');

    expect(fixture.componentInstance.fields.date().errors()).toEqual(
      expect.arrayContaining([ expect.objectContaining({ kind: 'invalidDate' }) ]),
    );

    fixture.componentInstance.fields().reset({ date: '', locked: false });
    fixture.detectChanges();
    expect(fixture.componentInstance.model().date).toBe('');

    expect(fixture.componentInstance.fields.date().errors()).not.toEqual(
      expect.arrayContaining([ expect.objectContaining({ kind: 'invalidDate' }) ]),
    );
  });

  it('allows an invalid required date to reach the custom submit handler', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const formElement = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    expect(formElement.noValidate).toBe(true);
    button.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.submitted()).toBe(true);
    expect(fixture.componentInstance.actionCalled()).toBe(false);
  });

  it('shows required errors on submit but not after a pristine blur', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const day = fixture.nativeElement.querySelector('#day') as HTMLInputElement;

    day.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(day.getAttribute('aria-invalid')).toBeNull();

    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    fixture.detectChanges();
    expect(day.getAttribute('aria-invalid')).toBe('true');
  });

  it('links labels, hint and dynamic validation and supports disabled and focus', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const day = fixture.nativeElement.querySelector('#day') as HTMLInputElement;
    const label = fixture.nativeElement.querySelector(
      'label[for="day"]',
    ) as HTMLLabelElement;
    const fieldset = fixture.nativeElement.querySelector(
      'fieldset',
    ) as HTMLFieldSetElement;
    const control = fixture.debugElement.query(By.directive(LgSignalDateFieldComponent));

    expect(label.textContent).toContain('Day');
    expect(fieldset.getAttribute('aria-describedby')).toContain('extra');
    expect(day.getAttribute('aria-describedby')).toContain('lg-hint-');
    control.injector.get(FormField).focus();
    fixture.detectChanges();
    expect(document.activeElement).toBe(day);

    expect(
      day.closest('.lg-input-field')?.classList.contains('lg-input-field--focus'),
    ).toBe(true);

    fixture.componentInstance.showValidation.set(true);
    fixture.detectChanges();
    expect(fieldset.getAttribute('aria-describedby')).toContain('error');

    fixture.componentInstance.model.update(model => ({ ...model, locked: true }));
    fixture.detectChanges();
    expect(day.matches(':disabled')).toBe(true);
  });
});
