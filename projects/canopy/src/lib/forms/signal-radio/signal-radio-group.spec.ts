import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormField, disabled, form, required, submit } from '@angular/forms/signals';
import { By } from '@angular/platform-browser';

import { LgHintComponent } from '../hint';
import { LgValidationComponent } from '../validation';

import { LgSignalRadioGroupComponent } from './signal-radio-group';
import { LgSignalRadioButtonComponent } from './signal-radio-button';

@Component({
  imports: [
    FormField,
    LgSignalRadioGroupComponent,
    LgSignalRadioButtonComponent,
    LgHintComponent,
    LgValidationComponent,
  ],
  template: `
    <form (submit)="onSubmit($event)">
      <lg-signal-radio-group [formField]="fields.colour" [submitted]="submitted()">
        Colour
        <lg-hint id="group-hint">Choose a colour</lg-hint>
        @if (showValidation()) {
          <lg-validation id="error">Select a colour</lg-validation>
        }
        <lg-signal-radio-button value="red" id="red">
          Red
          <lg-hint id="red-hint">A warm colour</lg-hint>
        </lg-signal-radio-button>
        <lg-signal-radio-button value="blue" id="blue">Blue</lg-signal-radio-button>
        <lg-signal-radio-button value="green" id="green" [disabled]="true"
          >Green</lg-signal-radio-button
        >
      </lg-signal-radio-group>
      <button type="submit">Submit</button>
    </form>
  `,
})
class TestHostComponent {
  readonly data = signal({ colour: '', locked: false });
  readonly submitted = signal(false);
  readonly showValidation = signal(false);
  readonly fields = form(this.data, path => {
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
  imports: [ FormField, LgSignalRadioGroupComponent, LgSignalRadioButtonComponent ],
  template: `
    <lg-signal-segment-group [formField]="fields.choice" stack="md">
      Answer
      <lg-signal-segment-button [value]="true">Yes</lg-signal-segment-button>
      <lg-signal-segment-button [value]="false">No</lg-signal-segment-button>
    </lg-signal-segment-group>
    <lg-signal-filter-group [formField]="fields.filter">
      Filter
      <lg-signal-filter-button value="active">Active</lg-signal-filter-button>
    </lg-signal-filter-group>
  `,
})
class VariantsHostComponent {
  readonly fields = form(signal({ choice: '', filter: '' }));
}

@Component({
  imports: [ FormField, LgSignalRadioGroupComponent, LgSignalRadioButtonComponent ],
  template: `
    <lg-signal-radio-group [formField]="fields.choice">
      Radio
      <lg-signal-radio-button value="yes">Yes</lg-signal-radio-button>
    </lg-signal-radio-group>
    <lg-signal-segment-group [formField]="fields.choice">
      Segment
      <lg-signal-segment-button value="yes">Yes</lg-signal-segment-button>
      <lg-signal-segment-button value="no">No</lg-signal-segment-button>
    </lg-signal-segment-group>
    <lg-signal-filter-group [formField]="fields.choice">
      Filter
      <lg-signal-filter-button value="yes">Yes</lg-signal-filter-button>
    </lg-signal-filter-group>
  `,
})
class ConditionalRequiredRadioHostComponent {
  readonly data = signal({ choice: '', mandatory: false });
  readonly fields = form(this.data, path => {
    required(path.choice, { when: ({ valueOf }) => valueOf(path.mandatory) });
  });
}

describe('LgSignalRadioGroupComponent', () => {
  it('reflects conditional required state on radio, segment and filter groups', () => {
    const fixture = TestBed.createComponent(ConditionalRequiredRadioHostComponent);

    fixture.detectChanges();

    const groups = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('[role="radiogroup"]'),
    );

    expect(groups).toHaveLength(3);
    expect(groups.every(group => !group.hasAttribute('aria-required'))).toBe(true);
    fixture.componentInstance.data.update(data => ({ ...data, mandatory: true }));
    fixture.detectChanges();

    expect(groups.every(group => group.getAttribute('aria-required') === 'true')).toBe(
      true,
    );

    fixture.componentInstance.data.update(data => ({ ...data, mandatory: false }));
    fixture.detectChanges();
    expect(groups.every(group => !group.hasAttribute('aria-required'))).toBe(true);
  });

  it('marks the group touched when an option loses focus', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();
    fixture.nativeElement.querySelector('input#red').dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(fixture.componentInstance.fields.colour().touched()).toBe(true);
    expect(fixture.componentInstance.data().colour).toBe('');
  });

  it('updates, resets and externally updates selected values', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const red = fixture.nativeElement.querySelector('input#red') as HTMLInputElement;
    const blue = fixture.nativeElement.querySelector('input#blue') as HTMLInputElement;
    const green = fixture.nativeElement.querySelector('input#green') as HTMLInputElement;

    expect(fixture.nativeElement.querySelectorAll('#red')).toHaveLength(1);
    expect(green.disabled).toBe(true);
    expect(red.name).toBe(blue.name);
    red.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.data().colour).toBe('red');
    expect(fixture.componentInstance.fields.colour().touched()).toBe(true);
    expect(fixture.componentInstance.fields.colour().dirty()).toBe(true);

    blue.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.data().colour).toBe('blue');
    expect(red.checked).toBe(false);
    expect(blue.checked).toBe(true);

    fixture.componentInstance.data.update(data => ({ ...data, colour: 'red' }));
    fixture.detectChanges();
    expect(red.checked).toBe(true);
    expect(blue.checked).toBe(false);

    fixture.componentInstance.fields().reset({ colour: '', locked: false });

    fixture.detectChanges();
    expect(red.checked).toBe(false);
    expect(fixture.componentInstance.fields.colour().dirty()).toBe(false);
  });

  it('associates group and option hints and displays errors on submission', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const fieldset = fixture.nativeElement.querySelector(
      'fieldset',
    ) as HTMLFieldSetElement;
    const red = fixture.nativeElement.querySelector('input#red') as HTMLInputElement;

    expect(fieldset.getAttribute('aria-describedby')).toBe('group-hint');
    expect(red.getAttribute('aria-describedby')).toBe('red-hint');
    expect(red.getAttribute('aria-invalid')).toBeNull();

    fixture.componentInstance.showValidation.set(true);
    fixture.detectChanges();
    expect(fieldset.getAttribute('aria-describedby')).toBe('group-hint error');

    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    fixture.detectChanges();
    expect(red.getAttribute('aria-invalid')).toBe('true');
  });

  it('focuses the selected option and respects the disabled state', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const group = fixture.debugElement.query(By.directive(LgSignalRadioGroupComponent));
    const red = fixture.nativeElement.querySelector('input#red') as HTMLInputElement;
    const blue = fixture.nativeElement.querySelector('input#blue') as HTMLInputElement;

    blue.click();
    fixture.detectChanges();
    group.injector.get(FormField).focus();
    expect(document.activeElement).toBe(blue);

    expect(group.nativeElement.querySelector('fieldset').getAttribute('role')).toBe(
      'radiogroup',
    );

    expect(
      group.nativeElement.querySelector('fieldset').hasAttribute('aria-readonly'),
    ).toBe(false);

    expect('readonly' in group.componentInstance).toBe(false);

    fixture.componentInstance.data.update(data => ({ ...data, locked: true }));
    fixture.detectChanges();
    expect(red.matches(':disabled')).toBe(true);
    red.click();
    expect(fixture.componentInstance.data().colour).toBe('blue');
  });

  it('supports segment, filter and boolean options', () => {
    const fixture = TestBed.createComponent(VariantsHostComponent);

    fixture.detectChanges();

    const root: HTMLElement = fixture.nativeElement;
    const segment = root.querySelector('lg-signal-segment-group');
    const filter = root.querySelector('lg-signal-filter-group');
    const choice = segment?.querySelector<HTMLInputElement>('input');
    const filterOption = filter?.querySelector<HTMLInputElement>('input');

    expect(segment?.querySelector('.lg-radio-group__segment')).not.toBeNull();
    expect(segment?.classList.contains('lg-radio-group--stack-md')).toBe(true);
    expect(filter?.querySelector('.lg-radio-button--filter')).not.toBeNull();
    choice?.click();
    filterOption?.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.fields.choice().value()).toBe(true);
    expect(fixture.componentInstance.fields.filter().value()).toBe('active');
  });
});
