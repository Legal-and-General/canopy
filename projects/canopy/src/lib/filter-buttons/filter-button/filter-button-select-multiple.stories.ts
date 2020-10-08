import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { FilterVariant } from '../filter-button.interface';

@Component({
  selector: 'lg-reactive-form-multiple',
  template: `
    <form [formGroup]="form">
      <lg-filter-group
        [variant]="variant"
        [valueArrayName]="valueArrayName"
        [formArrayName]="valueArrayName"
      >
        {{ label }}
        <lg-filter-button value="red">Red</lg-filter-button>
        <lg-filter-button value="yellow">Yellow</lg-filter-button>
        <lg-filter-button value="green">Green</lg-filter-button>
        <lg-filter-button value="blue">Blue</lg-filter-button>
      </lg-filter-group>
    </form>
  `,
})
export class ReactiveFormFilterSelectMultipleComponent {
  @Input() label: string;
  @Input() valueArrayName = 'filters';
  @Input() variant: FilterVariant = 'select-multiple';

  @Input()
  set disabled(isDisabled: boolean) {
    if (isDisabled === true) {
      this.form.controls.filters.disable();
    } else {
      this.form.controls.filters.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.dates.disabled;
  }

  @Output() colorChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      filters: new FormArray([]),
    });
    this.form.valueChanges.subscribe(val => this.colorChange.emit(val));
  }
}
