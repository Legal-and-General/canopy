import {
  Component,
  ContentChild,
  ContentChildren,
  forwardRef,
  Host,
  HostBinding,
  Input,
  Optional,
  QueryList,
  Self,
  SkipSelf,
  ViewEncapsulation,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl } from '@angular/forms';

import { LgDomService } from '../../utils/dom.service';
import { LgHintComponent } from '../hint/hint.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import { LgRadioButtonComponent } from './radio-button.component';
import { RadioVariant } from './radio.interface';

let uniqueId = 0;

@Component({
  selector: 'lg-radio-group, lg-filter-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgRadioGroupComponent implements ControlValueAccessor {
  nextUniqueId = ++uniqueId;
  private _name = `lg-radio-group-${this.nextUniqueId}`;

  @Input() id = `lg-radio-group-id-${this.nextUniqueId}`;
  @Input() inline = false;
  @Input() disabled = false;
  @Input() ariaDescribedBy: string;
  variant: RadioVariant;

  @HostBinding('class.lg-radio-group') class = true;
  @HostBinding('class.lg-radio-group--inline') public get inlineClass() {
    return this.inline;
  }
  @HostBinding('class.lg-radio-group--error') get errorClass() {
    return this.errorState.isControlInvalid(this.control, this.controlContainer);
  }

  _radios: QueryList<LgRadioButtonComponent>;
  @ContentChildren(
    forwardRef(() => LgRadioButtonComponent),
    {
      descendants: true,
    },
  )
  set radios(radios: QueryList<LgRadioButtonComponent>) {
    radios.toArray().forEach((radio: LgRadioButtonComponent) => {
      radio.control = this.control;
    });
    this._radios = radios;
  }
  get radios(): QueryList<LgRadioButtonComponent> {
    return this._radios;
  }

  _hintElement: LgHintComponent;
  @ContentChild(LgHintComponent)
  set hintElement(element: LgHintComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._validationElement,
      element,
    );
    this._hintElement = element;
  }

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

  _value: string = null;
  @Input()
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.onChange(value);
    if (this.radios) {
      const selectedRadio = this.radios.find(option => option.value === value);
      if (selectedRadio && !selectedRadio.checked) {
        selectedRadio.checked = true;
      }
    }
  }

  @Input()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
    this._updateRadioButtonNames();
  }

  constructor(
    @Self() @Optional() private control: NgControl,
    private errorState: LgErrorStateMatcher,
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: FormGroupDirective,
    private domService: LgDomService,
    private hostElement: ElementRef,
  ) {
    this.variant = this.hostElement.nativeElement.tagName
      .split('-')[1]
      .toLowerCase() as RadioVariant;
    if (this.control != null) {
      this.control.valueAccessor = this;
    }
  }

  public onChange(value: string) {
    this._value = value;
  }

  public onTouched(_?: any) {}

  public writeValue(obj: string): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private _updateRadioButtonNames(): void {
    if (this.radios) {
      this.radios.forEach(radio => {
        radio.name = this.name;
      });
    }
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
