import {
  Component,
  ContentChild,
  ElementRef,
  Host,
  HostBinding,
  Input,
  Optional,
  Self,
  SkipSelf,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl } from '@angular/forms';

import { LgDomService } from '../../utils/dom.service';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgToggleComponent implements ControlValueAccessor {
  uniqueId = nextUniqueId++;

  @Input() checked = false;
  @Input() disabled = false;
  @Input() id = `lg-toggle-${this.uniqueId}`;
  @Input() name = `lg-toggle-${this.uniqueId}`;
  @Input() value: boolean | string = false;
  @Input() ariaDescribedBy: string;
  @Input() variant: 'checkbox' | 'switch' = 'checkbox';

  @HostBinding('class.lg-toggle') class = true;
  @HostBinding('class.lg-toggle--error') get errorClass() {
    return this.errorState.isControlInvalid(this.control, this.controlContainer);
  }

  @ViewChild('input', { static: true }) inputRef: ElementRef;

  _validationElement: LgValidationComponent;
  @ContentChild(LgValidationComponent)
  set errorElement(element: LgValidationComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._validationElement,
      element,
    );
    this._validationElement = element;
  }

  onCheck() {
    this.onTouched();
    this.checked = !this.checked;
    this.onChange(this.checked ? this.value : null);
  }

  public onChange(value: boolean | string) {
    this.value = value;
  }

  public onTouched(_?: any) {}

  public writeValue(value: any) {
    if (value === this.value) {
      this.checked = true;
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  constructor(
    @Self() @Optional() private control: NgControl,
    private domService: LgDomService,
    private errorState: LgErrorStateMatcher,
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: FormGroupDirective,
  ) {
    if (this.control != null) {
      this.control.valueAccessor = this;
    }
  }
}
