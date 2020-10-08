import {
  Component,
  HostBinding,
  Input,
  OnInit,
  Optional,
  Self,
  ViewEncapsulation,
  Host,
  SkipSelf,
} from '@angular/core';
import {
  NgControl,
  ControlValueAccessor,
  FormGroupDirective,
  ControlContainer,
} from '@angular/forms';

import { LgErrorStateMatcher } from '../../forms/validation/error-state-matcher';
import { LgFilterGroupComponent } from '../filter-group.component';
import { FilterVariant } from '../filter-button.interface';

let uniqueId = 0;

@Component({
  selector: 'lg-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgFilterButtonComponent implements OnInit, ControlValueAccessor {
  nextUniqueId = ++uniqueId;
  @Input() checked = false;
  @Input() id = `lg-filter-button-${this.nextUniqueId}`;
  @Input() name = `lg-filter-button-${this.nextUniqueId}`;
  @Input() value: string | boolean;
  @Input() ariaDescribedBy: string;
  @Input() variant: FilterVariant;

  @Input()
  _disabled = false;
  get disabled(): boolean {
    if (this.controlArray) {
      return this._disabled || (this.controlArray !== null && this.controlArray.disabled);
    } else {
      return this._disabled || (this.filterGroup !== null && this.filterGroup.disabled);
    }
  }
  set disabled(isDisabled: boolean) {
    this._disabled = isDisabled;
  }

  @HostBinding('class.lg-filter-button') class = true;
  @HostBinding('class.lg-filter-button--error') get errorClass() {
    if (this.variant !== 'select-multiple') {
      return this.errorState.isControlInvalid(this.control, this.controlContainer);
    }
    if (!this.control) {
      return this.errorState.isControlInvalid(this.controlArray, this.controlContainer);
    }
    return this.errorState.isControlInvalid(this.control, this.controlContainer);
  }

  constructor(
    @Self() @Optional() public control: NgControl,
    @Host() @Optional() public controlArray: ControlContainer,
    private filterGroup: LgFilterGroupComponent,
    private errorState: LgErrorStateMatcher,
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: FormGroupDirective,
  ) {
    if (this.control !== null) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.variant = this.filterGroup.variant;
    if (this.variant !== 'select-multiple') {
      if (this.filterGroup.value === this.value) {
        this.checked = true;
      }
      this.name = this.filterGroup.name;
    }
  }

  onCheck() {
    if (this.variant === 'select-one') {
      this.filterGroup.onTouched();
      if (this.filterGroup.value !== this.value) {
        this.filterGroup.value = this.value.toString();
      }
    } else {
      this.onTouched();
      this.checked = !this.checked;
      if (this.control) {
        this.onChange(this.checked ? this.value : null);
      }
    }
  }

  public onChange(value: string | boolean) {
    if (this.variant === 'select-multiple') {
      this.value = value;
    }
  }

  public onTouched(_?: any) {}

  public writeValue(value: any) {}

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    if (this.variant === 'select-multiple') {
      this.disabled = isDisabled;
    }
  }
}
