import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FilterVariant } from '../filter-button.interface';

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-filter-group [variant]="variant" formControlName="dates">
        {{ label }}
        <lg-filter-button value="3m">Last 3 months </lg-filter-button>
        <lg-filter-button value="6m">Last 6 months </lg-filter-button>
        <lg-filter-button value="1y">Last year</lg-filter-button>
        <lg-filter-button value="2y">Last 2 years</lg-filter-button>
      </lg-filter-group>
    </form>
  `,
})
export class ReactiveFormFilterSelectOneComponent {
  @Input() variant: FilterVariant = 'select-one';
  @Input() label: string;
  @Input()
  set disabled(isDisabled: boolean) {
    if (isDisabled === true) {
      this.form.controls.dates.disable();
    } else {
      this.form.controls.dates.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.dates.disabled;
  }

  @Output() dateChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ dates: '' });
    this.form.valueChanges.subscribe(val => this.dateChange.emit(val));
  }
}
