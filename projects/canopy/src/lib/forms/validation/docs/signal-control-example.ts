import { Component, afterRenderEffect, input, signal, untracked } from '@angular/core';
import {
  FormField,
  apply,
  applyWhen,
  disabled,
  form,
  required,
  submit,
} from '@angular/forms/signals';

import { LgButtonComponent } from '../../../button';
import { LgHintComponent } from '../../hint';
import { RadioSize, RadioStackBreakpoint } from '../../radio';
import {
  LgSignalCheckboxComponent,
  LgSignalCheckboxGroupComponent,
  LgSignalCheckboxOptionComponent,
  lgRequiredCheckboxGroup,
} from '../../signal-checkbox';
import { LgSignalDateFieldComponent } from '../../signal-date';
import { LgSignalInputDirective, LgSignalInputFieldComponent } from '../../signal-input';
import {
  LgSignalRadioButtonComponent,
  LgSignalRadioGroupComponent,
} from '../../signal-radio';
import {
  LgSignalSelectDirective,
  LgSignalSelectFieldComponent,
} from '../../signal-select';
import { LgSignalSortCodeDirective, lgSortCodeSchema } from '../../signal-sort-code';
import { CheckboxSize } from '../../toggle';
import { LgValidationComponent } from '../validation.component';

type ExampleKind =
  | 'select'
  | 'radio'
  | 'segment'
  | 'checkbox'
  | 'checkbox-group'
  | 'filter-single'
  | 'filter-multiple'
  | 'date'
  | 'sort-code';

@Component({
  selector: 'lg-signal-control-example',
  imports: [
    FormField,
    LgButtonComponent,
    LgHintComponent,
    LgSignalCheckboxComponent,
    LgSignalCheckboxGroupComponent,
    LgSignalCheckboxOptionComponent,
    LgSignalDateFieldComponent,
    LgSignalInputDirective,
    LgSignalInputFieldComponent,
    LgSignalRadioButtonComponent,
    LgSignalRadioGroupComponent,
    LgSignalSelectDirective,
    LgSignalSelectFieldComponent,
    LgSignalSortCodeDirective,
    LgValidationComponent,
  ],
  template: `
    <form novalidate (submit)="onSubmit($event)">
      @switch (kind()) {
        @case ('select') {
          <lg-signal-select-field [block]="block()" [submitted]="submitted()">
            {{ label() }}
            @if (optional()) {
              <span class="lg-label--optional">(optional)</span>
            }
            @if (hint()) {
              <lg-hint>{{ hint() }}</lg-hint>
            }
            @if (showError(fields.choice())) {
              <lg-validation>Select an option</lg-validation>
            }
            <select lgSignalSelect [formField]="fields.choice">
              <option value="">Select an option</option>
              @for (option of options(); track option) {
                <option [value]="option">{{ option }}</option>
              }
            </select>
          </lg-signal-select-field>
        }
        @case ('radio') {
          <lg-signal-radio-group
            [formField]="fields.choice"
            [submitted]="submitted()"
            [inline]="inline()"
          >
            {{ label() }}
            @if (optional()) {
              <span class="lg-label--optional">(optional)</span>
            }
            @if (hint()) {
              <lg-hint>{{ hint() }}</lg-hint>
            }
            @if (showError(fields.choice())) {
              <lg-validation>Select an option</lg-validation>
            }
            <lg-signal-radio-button value="red" [size]="size()"
              >Red</lg-signal-radio-button
            >
            <lg-signal-radio-button value="yellow" [size]="size()"
              >Yellow <lg-hint>Internal custom text</lg-hint></lg-signal-radio-button
            >
          </lg-signal-radio-group>
        }
        @case ('segment') {
          <lg-signal-segment-group
            [formField]="fields.choice"
            [submitted]="submitted()"
            [stack]="stack()"
          >
            {{ label() }}
            @if (optional()) {
              <span class="lg-label--optional">(optional)</span>
            }
            @if (hint()) {
              <lg-hint>{{ hint() }}</lg-hint>
            }
            @if (showError(fields.choice())) {
              <lg-validation>Select an option</lg-validation>
            }
            <lg-signal-segment-button value="red">Red</lg-signal-segment-button>
            <lg-signal-segment-button value="yellow">Yellow</lg-signal-segment-button>
            <lg-signal-segment-button value="green">Green</lg-signal-segment-button>
            <lg-signal-segment-button value="blue">Blue</lg-signal-segment-button>
          </lg-signal-segment-group>
        }
        @case ('checkbox') {
          <lg-signal-checkbox
            [formField]="fields.checked"
            [submitted]="submitted()"
            [size]="size()"
          >
            {{ label() }}
            @if (showError(fields.checked())) {
              <lg-validation>Select the checkbox</lg-validation>
            }
          </lg-signal-checkbox>
        }
        @case ('checkbox-group') {
          <lg-signal-checkbox-group
            [formField]="fields.choices"
            [submitted]="submitted()"
            [inline]="inline()"
          >
            {{ label() }}
            @if (optional()) {
              <span class="lg-label--optional">(optional)</span>
            }
            @if (hint()) {
              <lg-hint>{{ hint() }}</lg-hint>
            }
            @if (showError(fields.choices())) {
              <lg-validation>Select at least one option</lg-validation>
            }
            <lg-signal-toggle value="red" [size]="size()">Red</lg-signal-toggle>
            <lg-signal-toggle value="yellow" [size]="size()">Yellow</lg-signal-toggle>
          </lg-signal-checkbox-group>
        }
        @case ('filter-single') {
          <lg-signal-filter-group [formField]="fields.choice" [submitted]="submitted()">
            {{ label() }}
            @if (showError(fields.choice())) {
              <lg-validation>Select an option</lg-validation>
            }
            <lg-signal-filter-button value="red">Red</lg-signal-filter-button>
            <lg-signal-filter-button value="yellow">Yellow</lg-signal-filter-button>
            <lg-signal-filter-button value="green">Green</lg-signal-filter-button>
            <lg-signal-filter-button value="blue">Blue</lg-signal-filter-button>
          </lg-signal-filter-group>
        }
        @case ('filter-multiple') {
          <lg-signal-filter-multiple-group
            [formField]="fields.choices"
            [submitted]="submitted()"
          >
            {{ label() }}
            @if (hint()) {
              <lg-hint>{{ hint() }}</lg-hint>
            }
            @if (showError(fields.choices())) {
              <lg-validation>Select at least one option</lg-validation>
            }
            <lg-signal-filter-checkbox value="red">Red</lg-signal-filter-checkbox>
            <lg-signal-filter-checkbox value="yellow">Yellow</lg-signal-filter-checkbox>
            <lg-signal-filter-checkbox value="green">Green</lg-signal-filter-checkbox>
            <lg-signal-filter-checkbox value="blue">Blue</lg-signal-filter-checkbox>
          </lg-signal-filter-multiple-group>
        }
        @case ('date') {
          <lg-signal-date-field [formField]="fields.date" [submitted]="submitted()">
            {{ label() }}
            @if (showError(fields.date())) {
              <lg-validation>Enter a valid date</lg-validation>
            }
          </lg-signal-date-field>
        }
        @case ('sort-code') {
          <lg-signal-input-field [submitted]="submitted()">
            {{ label() }}
            @if (hint()) {
              <lg-hint>{{ hint() }}</lg-hint>
            }
            @if (showError(fields.sortCode())) {
              <lg-validation>Enter a valid sort code</lg-validation>
            }
            <input lgSignalInput lgSignalSortCode [formField]="fields.sortCode" />
          </lg-signal-input-field>
        }
      }
      <button lg-button type="submit">Continue</button>
    </form>
  `,
})
export class SignalControlExampleComponent {
  readonly kind = input.required<ExampleKind>();
  readonly label = input('');
  readonly hint = input('');
  readonly disabled = input(false);
  readonly focus = input(false);
  readonly inline = input(false);
  readonly optional = input(false);
  readonly block = input(false);
  readonly size = input<RadioSize & CheckboxSize>('lg');
  readonly stack = input<RadioStackBreakpoint | undefined>();
  readonly options = input<Array<string>>([ 'Red', 'Blue', 'Green', 'Yellow' ]);
  readonly model = signal({
    choice: '',
    choices: [] as Array<string>,
    checked: false,
    date: '',
    sortCode: '',
  });
  readonly submitted = signal(false);
  readonly fields = form(this.model, path => {
    disabled(path.choice, () => this.disabled() || !this.usesChoice());
    disabled(path.choices, () => this.disabled() || !this.usesChoices());
    disabled(path.checked, () => this.disabled() || this.kind() !== 'checkbox');
    disabled(path.date, () => this.disabled() || this.kind() !== 'date');
    disabled(path.sortCode, () => this.disabled() || this.kind() !== 'sort-code');
    required(path.choice, { when: () => !this.optional() });
    applyWhen(path.choices, () => !this.optional(), lgRequiredCheckboxGroup);
    required(path.checked);
    required(path.date);
    apply(path.sortCode, lgSortCodeSchema);
  });

  constructor() {
    afterRenderEffect(() => {
      if (this.focus()) {
        untracked(() => this.activeField().focusBoundControl());
      }
    });
  }

  showError(state: {
    invalid: () => boolean;
    dirty: () => boolean;
    touched: () => boolean;
  }): boolean {
    return state.invalid() && ((state.dirty() && state.touched()) || this.submitted());
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    const field = this.activeField();

    if (field.invalid()) {
      field.focusBoundControl();
    }

    void submit(this.fields, async () => {});
  }

  private usesChoice(): boolean {
    return [ 'select', 'radio', 'segment', 'filter-single' ].includes(this.kind());
  }

  private usesChoices(): boolean {
    return [ 'checkbox-group', 'filter-multiple' ].includes(this.kind());
  }

  private activeField() {
    switch (this.kind()) {
      case 'select':
      case 'radio':
      case 'segment':
      case 'filter-single':
        return this.fields.choice();
      case 'checkbox-group':
      case 'filter-multiple':
        return this.fields.choices();
      case 'checkbox':
        return this.fields.checked();
      case 'date':
        return this.fields.date();
      case 'sort-code':
        return this.fields.sortCode();
    }
  }
}

export function renderSignalControlExample(kind: ExampleKind, args: object) {
  return {
    props: { ...args, kind },
    template: `
      <lg-signal-control-example [kind]="kind" [label]="label" [hint]="hint"
        [disabled]="disabled" [focus]="focus" [inline]="inline" [optional]="optional"
        [block]="block" [size]="size" [stack]="stack" [options]="options" />
    `,
  };
}

export const signalControlDefaults = {
  label: 'Colour',
  hint: '',
  disabled: false,
  focus: false,
  inline: false,
  optional: false,
  block: false,
  size: 'lg',
  stack: undefined,
  options: [ 'Red', 'Blue', 'Green', 'Yellow' ],
};
