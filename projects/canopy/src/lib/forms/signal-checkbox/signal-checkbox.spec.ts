import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormField, disabled, form, readonly, required } from '@angular/forms/signals';
import { By } from '@angular/platform-browser';

import { LgHintComponent } from '../hint';
import { LgValidationComponent } from '../validation';

import { LgSignalCheckboxComponent } from './signal-checkbox';

@Component({
  imports: [ FormField, LgSignalCheckboxComponent, LgHintComponent, LgValidationComponent ],
  template: `
    <lg-signal-checkbox
      id="consent"
      [formField]="fields.consent"
      [submitted]="submitted()"
    >
      I agree
      <lg-hint id="hint">Please read the terms.</lg-hint>
      @if (showValidation()) {
        <lg-validation id="error">Confirm your agreement.</lg-validation>
      }
    </lg-signal-checkbox>
  `,
})
class TestHostComponent {
  readonly model = signal({ consent: false, locked: false, readOnly: false });
  readonly submitted = signal(false);
  readonly showValidation = signal(false);
  readonly fields = form(this.model, path => {
    required(path.consent);
    disabled(path.consent, ({ valueOf }) => valueOf(path.locked));
    readonly(path.consent, ({ valueOf }) => valueOf(path.readOnly));
  });
}

describe('LgSignalCheckboxComponent', () => {
  it('marks the field touched on blur without changing its value', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();
    fixture.nativeElement.querySelector('input').dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.consent().touched()).toBe(true);
    expect(fixture.componentInstance.model().consent).toBe(false);
  });

  it('updates a boolean signal model and resets the checked state', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    const label = fixture.nativeElement.querySelector('label') as HTMLLabelElement;

    expect(checkbox.required).toBe(true);
    expect(label.htmlFor).toBe(checkbox.id);
    expect(label.textContent).toContain('I agree');
    expect(fixture.nativeElement.querySelectorAll('#consent')).toHaveLength(1);
    checkbox.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.model().consent).toBe(true);
    expect(fixture.componentInstance.fields.consent().touched()).toBe(true);
    expect(fixture.componentInstance.fields.consent().dirty()).toBe(true);

    fixture.componentInstance.fields().reset({
      consent: false,
      locked: false,
      readOnly: false,
    });

    fixture.detectChanges();
    expect(checkbox.checked).toBe(false);
  });

  it('exposes descriptions and submitted errors', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    expect(checkbox.getAttribute('aria-describedby')).toBe('hint');
    expect(checkbox.getAttribute('aria-invalid')).toBeNull();
    fixture.componentInstance.submitted.set(true);
    fixture.componentInstance.showValidation.set(true);
    fixture.detectChanges();
    expect(checkbox.getAttribute('aria-invalid')).toBe('true');
    expect(checkbox.getAttribute('aria-describedby')).toBe('hint error');
  });

  it('supports focus, disabled and readonly states', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    const debugElement = fixture.debugElement.query(
      By.directive(LgSignalCheckboxComponent),
    );

    debugElement.injector.get(FormField).focus();
    expect(document.activeElement).toBe(checkbox);

    fixture.componentInstance.model.update(model => ({ ...model, readOnly: true }));
    fixture.detectChanges();
    checkbox.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.model().consent).toBe(false);
    expect(checkbox.checked).toBe(false);

    fixture.componentInstance.model.update(model => ({ ...model, locked: true }));
    fixture.detectChanges();
    expect(checkbox.disabled).toBe(true);
  });
});
