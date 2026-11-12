import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  FormField,
  apply,
  disabled,
  form,
  readonly,
  submit,
} from '@angular/forms/signals';
import { By } from '@angular/platform-browser';

import { LgHintComponent } from '../hint';
import { LgValidationComponent } from '../validation';

import { LgSignalCheckboxGroupComponent } from './signal-checkbox-group';
import { LgSignalCheckboxOptionComponent } from './signal-checkbox-option';
import { lgRequiredCheckboxGroup } from './required-checkbox-group';

@Component({
  imports: [
    FormField,
    LgSignalCheckboxGroupComponent,
    LgSignalCheckboxOptionComponent,
    LgHintComponent,
    LgValidationComponent,
  ],
  template: `
    <form (submit)="onSubmit($event)">
      <lg-signal-checkbox-group
        [formField]="fields.colours"
        [submitted]="submitted()"
        ariaDescribedBy="extra"
      >
        Colours
        <lg-hint id="hint">Choose colours</lg-hint>
        @if (showValidation()) {
          <lg-validation id="error">Select a colour</lg-validation>
        }
        <lg-signal-toggle value="red" id="red">Red</lg-signal-toggle>
        <lg-signal-toggle value="blue" id="blue">Blue</lg-signal-toggle>
        <lg-signal-toggle value="green" id="green" [disabled]="true"
          >Green</lg-signal-toggle
        >
      </lg-signal-checkbox-group>
      <button type="submit">Submit</button>
    </form>
  `,
})
class TestHostComponent {
  readonly data = signal({
    colours: [] as Array<string>,
    locked: false,
    readOnly: false,
  });
  readonly submitted = signal(false);
  readonly showValidation = signal(false);
  readonly fields = form(this.data, path => {
    apply(path.colours, lgRequiredCheckboxGroup);
    disabled(path.colours, ({ valueOf }) => valueOf(path.locked));
    readonly(path.colours, ({ valueOf }) => valueOf(path.readOnly));
  });

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    void submit(this.fields, async () => {});
  }
}

@Component({
  imports: [ FormField, LgSignalCheckboxGroupComponent, LgSignalCheckboxOptionComponent ],
  template: `
    <lg-signal-filter-multiple-group [formField]="fields.options">
      Filter
      <lg-signal-filter-checkbox value="a">Alpha</lg-signal-filter-checkbox>
    </lg-signal-filter-multiple-group>
  `,
})
class FilterHostComponent {
  readonly fields = form(signal({ options: [] as Array<string> }));
}

describe('LgSignalCheckboxGroupComponent', () => {
  it('marks the group touched when an option loses focus', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();
    fixture.nativeElement.querySelector('input#red').dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.colours().touched()).toBe(true);
    expect(fixture.componentInstance.data().colours).toEqual([]);
  });

  it('updates and resets group values in the existing selection order', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const red = fixture.nativeElement.querySelector('input#red') as HTMLInputElement;
    const blue = fixture.nativeElement.querySelector('input#blue') as HTMLInputElement;
    const green = fixture.nativeElement.querySelector('input#green') as HTMLInputElement;

    expect(fixture.nativeElement.querySelectorAll('#red')).toHaveLength(1);
    expect(green.disabled).toBe(true);
    expect(fixture.componentInstance.fields.colours().invalid()).toBe(true);
    expect(fixture.componentInstance.fields.colours().required()).toBe(true);

    red.click();
    fixture.detectChanges();
    blue.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.data().colours).toEqual([ 'blue', 'red' ]);
    expect(fixture.componentInstance.fields.colours().dirty()).toBe(true);
    expect(fixture.componentInstance.fields.colours().touched()).toBe(true);

    red.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.data().colours).toEqual([ 'blue' ]);

    fixture.componentInstance.fields().reset({
      colours: [],
      locked: false,
      readOnly: false,
    });

    fixture.detectChanges();

    expect(red.checked).toBe(false);
    expect(blue.checked).toBe(false);
    expect(fixture.componentInstance.fields.colours().dirty()).toBe(false);
  });

  it('links descriptions and shows errors after submission', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const fieldset = fixture.nativeElement.querySelector(
      'fieldset',
    ) as HTMLFieldSetElement;
    const red = fixture.nativeElement.querySelector('input#red') as HTMLInputElement;
    const label = fixture.nativeElement.querySelector(
      'label[for="red"]',
    ) as HTMLLabelElement;

    expect(label.textContent).toContain('Red');
    expect(fieldset.getAttribute('aria-describedby')).toBe('extra hint');
    expect(red.getAttribute('aria-invalid')).toBeNull();
    fixture.componentInstance.showValidation.set(true);
    fixture.detectChanges();
    expect(fieldset.getAttribute('aria-describedby')).toBe('extra hint error');

    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    fixture.detectChanges();
    expect(red.getAttribute('aria-invalid')).toBe('true');

    fixture.componentInstance.showValidation.set(false);
    fixture.detectChanges();
    expect(fieldset.getAttribute('aria-describedby')).toBe('extra hint');
  });

  it('supports focus, disabled state and readonly state', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const group = fixture.debugElement.query(
      By.directive(LgSignalCheckboxGroupComponent),
    );
    const red = fixture.nativeElement.querySelector('input#red') as HTMLInputElement;

    group.injector.get(FormField).focus();
    expect(document.activeElement).toBe(red);

    fixture.componentInstance.data.update(data => ({ ...data, readOnly: true }));
    fixture.detectChanges();
    red.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.data().colours).toEqual([]);
    expect(red.checked).toBe(false);
    expect(red.getAttribute('aria-readonly')).toBe('true');

    fixture.componentInstance.data.update(data => ({
      ...data,
      readOnly: false,
      locked: true,
    }));

    fixture.detectChanges();
    expect(red.matches(':disabled')).toBe(true);
  });

  it('uses the filter variant for multiple-selection filters', () => {
    const fixture = TestBed.createComponent(FilterHostComponent);

    fixture.detectChanges();

    const group = fixture.nativeElement.querySelector(
      'lg-signal-filter-multiple-group',
    ) as HTMLElement;
    const checkbox = group.querySelector<HTMLInputElement>('input');

    expect(group.classList.contains('lg-checkbox-group--filter')).toBe(true);
    checkbox?.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.options().value()).toEqual([ 'a' ]);
  });
});
