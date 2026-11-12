import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormField, apply, form, pattern } from '@angular/forms/signals';

import { LgSignalSortCodeDirective, lgSortCodeSchema } from './signal-sort-code';

@Component({
  imports: [ FormField, LgSignalSortCodeDirective ],
  template: '<input lgSignalSortCode [formField]="fields.sortCode" />',
})
class TestHostComponent {
  readonly model = signal({ sortCode: '' });
  readonly fields = form(this.model, path => {
    apply(path.sortCode, lgSortCodeSchema);
  });
}

@Component({
  imports: [ FormField, LgSignalSortCodeDirective ],
  template: '<input lgSignalSortCode [formField]="fields.sortCode" />',
})
class AdditionalValidatorHostComponent {
  readonly model = signal({ sortCode: '' });
  readonly fields = form(this.model, path => {
    apply(path.sortCode, lgSortCodeSchema);
    pattern(path.sortCode, /^12/);
  });
}

@Component({
  imports: [ FormField, LgSignalSortCodeDirective ],
  template: '<input lgSignalSortCode [formField]="fields.sortCode" />',
})
class MissingSchemaHostComponent {
  readonly fields = form(signal({ sortCode: '' }));
}

describe('LgSignalSortCodeDirective', () => {
  it('applies required and pattern validation and input attributes', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    expect(input.getAttribute('inputmode')).toBe('numeric');
    expect(input.maxLength).toBe(8);
    expect(input.size).toBe(7);
    expect(fixture.componentInstance.fields.sortCode().required()).toBe(true);

    expect(
      fixture.componentInstance.fields
        .sortCode()
        .errors()
        .map(error => error.kind),
    ).toContain('required');

    input.value = '123';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    expect(
      fixture.componentInstance.fields
        .sortCode()
        .errors()
        .map(error => error.kind),
    ).toContain('pattern');
  });

  it.each([ '123456', '12 34 56', '12-34-56' ])(
    'formats a valid %s value on blur',
    value => {
      const fixture = TestBed.createComponent(TestHostComponent);

      fixture.detectChanges();

      const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      fixture.detectChanges();
      input.dispatchEvent(new Event('focusout', { bubbles: true }));
      fixture.detectChanges();

      expect(fixture.componentInstance.model().sortCode).toBe('12-34-56');
      expect(input.value).toBe('12-34-56');
    },
  );

  it('does not format a value rejected by an additional validator', () => {
    const fixture = TestBed.createComponent(AdditionalValidatorHostComponent);

    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    input.value = '998877';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();
    input.dispatchEvent(new Event('focusout', { bubbles: true }));
    fixture.detectChanges();

    expect(fixture.componentInstance.model().sortCode).toBe('998877');
  });

  it('reports a missing sort-code schema', () => {
    const fixture = TestBed.createComponent(MissingSchemaHostComponent);

    expect(() => fixture.detectChanges()).toThrow('requires lgSortCodeSchema');
  });
});
