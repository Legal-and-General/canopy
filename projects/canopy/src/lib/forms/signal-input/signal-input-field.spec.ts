import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  FormField,
  disabled,
  form,
  minLength,
  required,
  submit,
} from '@angular/forms/signals';

import { LgButtonComponent } from '../../button';
import { LgPrefixDirective } from '../../prefix';
import { LgSuffixDirective } from '../../suffix';
import { LgHintComponent } from '../hint';
import { LgValidationComponent } from '../validation';

import { LgSignalInputFieldComponent } from './signal-input-field';
import { LgSignalInputDirective } from './signal-input';

@Component({
  imports: [
    FormField,
    LgSignalInputFieldComponent,
    LgSignalInputDirective,
    LgButtonComponent,
    LgHintComponent,
    LgValidationComponent,
    LgPrefixDirective,
    LgSuffixDirective,
  ],
  template: `
    <form (submit)="onSubmit($event)">
      <lg-signal-input-field id="name" [submitted]="submitted()">
        Name
        <lg-hint id="hint">Enter your name</lg-hint>
        @if (showValidation()) {
          <lg-validation id="error">Enter a name</lg-validation>
        }
        <span lgPrefix id="prefix">Prefix</span>
        <input lgSignalInput [formField]="fields.name" />
        <span lgSuffix id="suffix">Suffix</span>
        <button lg-button lgSuffix type="button">Clear</button>
      </lg-signal-input-field>
      <button type="submit">Submit</button>
    </form>
  `,
})
class TestHostComponent {
  readonly data = signal({ name: '', locked: false });
  readonly submitted = signal(false);
  readonly showValidation = signal(false);
  readonly fields = form(this.data, path => {
    required(path.name);
    minLength(path.name, 3);
    disabled(path.name, ({ valueOf }) => valueOf(path.locked));
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    void submit(this.fields, async () => {});
  }
}

@Component({
  imports: [ FormField, LgSignalInputFieldComponent, LgSignalInputDirective ],
  template: `
    <lg-signal-input-field [block]="true" [showLabel]="false">
      First
      <textarea lgSignalInput [formField]="fields.first"></textarea>
    </lg-signal-input-field>
    <lg-signal-input-field>
      Second
      <input lgSignalInput [formField]="fields.second" />
    </lg-signal-input-field>
  `,
})
class MultipleInputsHostComponent {
  readonly fields = form(signal({ first: '', second: '' }));
}

describe('LgSignalInputFieldComponent', () => {
  it('associates the label and dynamic descriptions, excluding interactive affixes', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    const label = fixture.nativeElement.querySelector('label') as HTMLLabelElement;

    expect(label.htmlFor).toBe('name');
    expect(input.id).toBe('name');
    expect(fixture.nativeElement.querySelectorAll('#name')).toHaveLength(1);
    expect(input.getAttribute('aria-describedby')).toBe('hint prefix suffix');

    fixture.componentInstance.showValidation.set(true);
    fixture.detectChanges();

    expect(input.getAttribute('aria-describedby')).toBe('hint error prefix suffix');

    fixture.componentInstance.showValidation.set(false);
    fixture.detectChanges();

    expect(input.getAttribute('aria-describedby')).toBe('hint prefix suffix');
  });

  it('matches dirty and touched error timing, including pristine submission', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;

    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(input.getAttribute('aria-invalid')).toBeNull();

    input.value = 'a';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    expect(input.getAttribute('aria-invalid')).toBe('true');

    fixture.componentInstance.fields().reset({ name: '', locked: false });
    fixture.detectChanges();
    expect(input.getAttribute('aria-invalid')).toBeNull();

    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    fixture.detectChanges();

    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('propagates signal-form disabled state to the input and projected buttons', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();
    fixture.componentInstance.data.update(data => ({ ...data, locked: true }));
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    const button = fixture.nativeElement.querySelector(
      'button[lgSuffix]',
    ) as HTMLButtonElement;
    const wrapper = fixture.nativeElement.querySelector(
      'lg-signal-input-field',
    ) as HTMLElement;

    expect(input.disabled).toBe(true);
    expect(button.disabled).toBe(true);
    expect(wrapper.classList.contains('lg-input-field--disabled')).toBe(true);

    fixture.componentInstance.data.update(data => ({ ...data, locked: false }));
    fixture.detectChanges();

    expect(input.disabled).toBe(false);
    expect(button.disabled).toBe(false);
  });

  it('supports textarea, distinct ids, hidden labels, and block layout', () => {
    const fixture = TestBed.createComponent(MultipleInputsHostComponent);

    fixture.detectChanges();

    const textarea = fixture.nativeElement.querySelector(
      'textarea',
    ) as HTMLTextAreaElement;
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    const root: HTMLElement = fixture.nativeElement;
    const labels = root.querySelectorAll<HTMLLabelElement>('label');
    const wrapper = textarea.closest<HTMLElement>('lg-signal-input-field');

    expect(textarea.id).not.toBe(input.id);
    expect(labels[0].htmlFor).toBe(textarea.id);
    expect(labels[1].htmlFor).toBe(input.id);
    expect(labels[0].classList.contains('lg-visually-hidden')).toBe(true);
    expect(wrapper?.classList.contains('lg-input-field--block')).toBe(true);
    expect(textarea.classList.contains('lg-input--block')).toBe(true);

    textarea.value = 'Description';
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.first().value()).toBe('Description');
  });
});
