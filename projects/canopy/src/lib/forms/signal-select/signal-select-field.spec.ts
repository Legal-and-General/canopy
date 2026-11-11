import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormField, disabled, form, required, submit } from '@angular/forms/signals';
import { By } from '@angular/platform-browser';

import { LgHintComponent } from '../hint';
import { LgValidationComponent } from '../validation';

import { LgSignalSelectFieldComponent } from './signal-select-field';
import { LgSignalSelectDirective } from './signal-select';

@Component({
  imports: [
    FormField,
    LgSignalSelectFieldComponent,
    LgSignalSelectDirective,
    LgHintComponent,
    LgValidationComponent,
  ],
  template: `
    <form (submit)="onSubmit($event)">
      <input id="before" />
      <lg-signal-select-field id="colour" [block]="true" [submitted]="submitted()">
        Colour
        <lg-hint id="hint">Select a colour</lg-hint>
        @if (showValidation()) {
          <lg-validation id="error">Select a colour</lg-validation>
        }
        <select lgSignalSelect [formField]="fields.colour">
          <option value="">Select</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
      </lg-signal-select-field>
      <input id="after" />
      <button type="submit">Submit</button>
    </form>
  `,
})
class TestHostComponent {
  readonly model = signal({ colour: '', locked: false });
  readonly submitted = signal(false);
  readonly showValidation = signal(false);
  readonly fields = form(this.model, path => {
    required(path.colour);
    disabled(path.colour, ({ valueOf }) => valueOf(path.locked));
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    void submit(this.fields, async () => {});
  }
}

@Component({
  imports: [ FormField, LgSignalSelectFieldComponent, LgSignalSelectDirective ],
  template: `
    <lg-signal-select-field
      >First
      <select lgSignalSelect [formField]="fields.first">
        <option value="">Select</option>
      </select>
    </lg-signal-select-field>
    <lg-signal-select-field
      >Second
      <select lgSignalSelect [formField]="fields.second">
        <option value="">Select</option>
      </select>
    </lg-signal-select-field>
  `,
})
class MultipleSelectsHostComponent {
  readonly fields = form(signal({ first: '', second: '' }));
}

describe('LgSignalSelectFieldComponent', () => {
  it('associates the label and dynamic hint and validation descriptions', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const select = fixture.nativeElement.querySelector('select') as HTMLSelectElement;
    const label = fixture.nativeElement.querySelector('label') as HTMLLabelElement;
    const inner = fixture.nativeElement.querySelector(
      '.lg-select-field__inner',
    ) as HTMLElement;

    expect(label.htmlFor).toBe('colour');
    expect(select.id).toBe('colour');
    expect(fixture.nativeElement.querySelectorAll('#colour')).toHaveLength(1);
    expect(select.getAttribute('aria-describedby')).toBe('hint');
    expect(select.classList.contains('lg-select--block')).toBe(true);
    expect(inner.classList.contains('lg-select-field__inner--block')).toBe(true);

    fixture.componentInstance.showValidation.set(true);
    fixture.detectChanges();

    expect(select.getAttribute('aria-describedby')).toBe('hint error');

    fixture.componentInstance.showValidation.set(false);
    fixture.detectChanges();

    expect(select.getAttribute('aria-describedby')).toBe('hint');
  });

  it('updates and resets the model and shows errors after interaction or submit', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const select = fixture.nativeElement.querySelector('select') as HTMLSelectElement;
    const wrapper = fixture.nativeElement.querySelector(
      'lg-signal-select-field',
    ) as HTMLElement;

    select.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(select.getAttribute('aria-invalid')).toBeNull();

    select.value = 'red';
    select.dispatchEvent(new Event('input', { bubbles: true }));
    select.dispatchEvent(new Event('change', { bubbles: true }));
    fixture.detectChanges();
    expect(fixture.componentInstance.model().colour).toBe('red');

    select.value = '';
    select.dispatchEvent(new Event('input', { bubbles: true }));
    select.dispatchEvent(new Event('change', { bubbles: true }));
    fixture.detectChanges();
    expect(select.getAttribute('aria-invalid')).toBe('true');
    expect(wrapper.classList.contains('lg-select-field--error')).toBe(true);

    fixture.componentInstance.fields().reset({ colour: '', locked: false });
    fixture.detectChanges();
    expect(select.getAttribute('aria-invalid')).toBeNull();

    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    fixture.detectChanges();
    expect(select.getAttribute('aria-invalid')).toBe('true');

    fixture.componentInstance.model.update(model => ({ ...model, colour: 'blue' }));
    fixture.detectChanges();
    expect(select.value).toBe('blue');
    expect(select.getAttribute('aria-invalid')).toBeNull();
  });

  it('propagates disabled state and generates distinct ids', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();
    fixture.componentInstance.model.update(model => ({ ...model, locked: true }));
    fixture.detectChanges();

    expect(
      (fixture.nativeElement.querySelector('select') as HTMLSelectElement).disabled,
    ).toBe(true);

    const multipleFixture = TestBed.createComponent(MultipleSelectsHostComponent);

    multipleFixture.detectChanges();

    const root: HTMLElement = multipleFixture.nativeElement;
    const selects = root.querySelectorAll<HTMLSelectElement>('select');
    const labels = root.querySelectorAll<HTMLLabelElement>('label');

    expect(selects[0].id).not.toBe(selects[1].id);
    expect(labels[0].htmlFor).toBe(selects[0].id);
    expect(labels[1].htmlFor).toBe(selects[1].id);
  });

  it('reuses select keyboard handling for arrow changes and tab navigation', async () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const select = fixture.nativeElement.querySelector('select') as HTMLSelectElement;
    const after = fixture.nativeElement.querySelector('#after') as HTMLInputElement;
    const debugElement = fixture.debugElement.query(
      By.directive(LgSignalSelectDirective),
    );
    const focusSpy = jest.spyOn(after, 'focus');

    debugElement.triggerEventHandler(
      'keydown',
      new KeyboardEvent('keydown', { key: 'ArrowDown' }),
    );

    select.selectedIndex = 1;
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance.model().colour).toBe('red');

    debugElement.triggerEventHandler(
      'keydown',
      new KeyboardEvent('keydown', { key: 'Tab' }),
    );

    await new Promise(resolve => setTimeout(resolve));

    expect(focusSpy).toHaveBeenCalledTimes(1);
  });
});
