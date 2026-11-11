import { Component, ElementRef, input, inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { LgButtonComponent } from '../../../button';
import { LgCheckboxGroupComponent } from '../../checkbox-group';
import { LgDateFieldComponent } from '../../date';
import { LgInputDirective, LgInputFieldComponent } from '../../input';
import { LgRadioButtonComponent, LgRadioGroupComponent } from '../../radio';
import { LgSelectDirective, LgSelectFieldComponent } from '../../select';
import { LgSortCodeDirective } from '../../sort-code';
import { LgToggleComponent } from '../../toggle';
import { LgValidationComponent } from '../validation.component';

type ExampleKind =
  | 'input'
  | 'select'
  | 'radio'
  | 'segment'
  | 'checkbox'
  | 'filter-single'
  | 'filter-multiple'
  | 'date'
  | 'sort-code';

@Component({
  selector: 'lg-reactive-validation-example',
  imports: [
    ReactiveFormsModule,
    LgButtonComponent,
    LgCheckboxGroupComponent,
    LgDateFieldComponent,
    LgInputDirective,
    LgInputFieldComponent,
    LgRadioButtonComponent,
    LgRadioGroupComponent,
    LgSelectDirective,
    LgSelectFieldComponent,
    LgSortCodeDirective,
    LgToggleComponent,
    LgValidationComponent,
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" #formDirective="ngForm" novalidate>
      @switch (kind()) {
        @case ('input') {
          <lg-input-field
            >Name
            @if (showError(formDirective.submitted)) {
              <lg-validation>Enter a name</lg-validation>
            }
            <input lgInput formControlName="value" />
          </lg-input-field>
        }
        @case ('select') {
          <lg-select-field
            >Colour
            @if (showError(formDirective.submitted)) {
              <lg-validation>Select a colour</lg-validation>
            }
            <select lgSelect formControlName="value">
              <option value="">Select a colour</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
          </lg-select-field>
        }
        @case ('radio') {
          <lg-radio-group formControlName="value"
            >Colour
            @if (showError(formDirective.submitted)) {
              <lg-validation>Select a colour</lg-validation>
            }
            <lg-radio-button value="red">Red</lg-radio-button>
            <lg-radio-button value="blue">Blue</lg-radio-button>
          </lg-radio-group>
        }
        @case ('segment') {
          <lg-segment-group formControlName="value"
            >Delivery preference
            @if (showError(formDirective.submitted)) {
              <lg-validation>Select a delivery preference</lg-validation>
            }
            <lg-segment-button value="digital">Digital</lg-segment-button>
            <lg-segment-button value="post">Post</lg-segment-button>
          </lg-segment-group>
        }
        @case ('filter-single') {
          <lg-filter-group formControlName="value"
            >Status
            @if (showError(formDirective.submitted)) {
              <lg-validation>Select a status</lg-validation>
            }
            <lg-filter-button value="active">Active</lg-filter-button>
            <lg-filter-button value="closed">Closed</lg-filter-button>
          </lg-filter-group>
        }
        @case ('filter-multiple') {
          <lg-filter-multiple-group formControlName="value"
            >Document type
            @if (showError(formDirective.submitted)) {
              <lg-validation>Select at least one document type</lg-validation>
            }
            <lg-filter-checkbox value="letters">Letters</lg-filter-checkbox>
            <lg-filter-checkbox value="statements">Statements</lg-filter-checkbox>
          </lg-filter-multiple-group>
        }
        @case ('checkbox') {
          <lg-checkbox-group formControlName="value"
            >Colours
            @if (showError(formDirective.submitted)) {
              <lg-validation>Select at least one colour</lg-validation>
            }
            <lg-toggle value="red">Red</lg-toggle>
            <lg-toggle value="blue">Blue</lg-toggle>
          </lg-checkbox-group>
        }
        @case ('date') {
          <lg-date-field formControlName="value"
            >Date
            @if (showError(formDirective.submitted)) {
              <lg-validation>Enter a valid date</lg-validation>
            }
          </lg-date-field>
        }
        @case ('sort-code') {
          <lg-input-field
            >Sort code
            @if (showError(formDirective.submitted)) {
              <lg-validation>Enter a valid sort code</lg-validation>
            }
            <input lgInput lgSortCode formControlName="value" />
          </lg-input-field>
        }
      }
      <button lg-button type="submit">Continue</button>
    </form>
  `,
})
export class ReactiveValidationExampleComponent implements OnInit {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly kind = input.required<ExampleKind>();
  readonly control = new UntypedFormControl('', Validators.required);
  readonly form = new UntypedFormGroup({ value: this.control });

  ngOnInit(): void {
    if (this.kind() === 'checkbox' || this.kind() === 'filter-multiple') {
      this.control.setValue([]);
    }
  }

  showError(submitted: boolean): boolean {
    return (
      this.control.invalid && ((this.control.dirty && this.control.touched) || submitted)
    );
  }

  onSubmit(): void {
    if (this.control.invalid) {
      this.element.nativeElement
        .querySelector<HTMLElement>('input, select, textarea')
        ?.focus();
    }
  }
}
