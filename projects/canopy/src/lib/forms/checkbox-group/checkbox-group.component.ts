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
  Renderer2,
} from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl } from '@angular/forms';

import { LgDomService } from '../../utils/dom.service';
import { LgHintComponent } from '../hint/hint.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import { LgToggleComponent } from '../toggle';
import { CheckboxGroupVariant } from './checkbox-group.interface';

let uniqueId = 0;

@Component({
  selector: 'lg-checkbox-group, lg-filter-multiple-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgCheckboxGroupComponent implements ControlValueAccessor {
  nextUniqueId = ++uniqueId;
  private _name = `lg-checkbox-group-${this.nextUniqueId}`;

  @Input() id = `lg-checkbox-group-id-${this.nextUniqueId}`;
  @Input() inline = false;
  @Input() disabled = false;
  @Input() ariaDescribedBy: string;
  _variant: CheckboxGroupVariant;

  set variant(variant: CheckboxGroupVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-checkbox-group--${this.variant}`,
      );
    }
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `lg-checkbox-group--${variant}`,
    );
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @HostBinding('class.lg-checkbox-group--inline') get inlineClass() {
    return this.inline;
  }

  @HostBinding('class.lg-checkbox-group--error') get errorClass() {
    return this.errorState.isControlInvalid(this.control, this.controlContainer);
  }

  _checkboxes: QueryList<LgToggleComponent>;
  @ContentChildren(
    forwardRef(() => LgToggleComponent),
    {
      descendants: true,
    },
  )
  set checkboxes(checkboxes: QueryList<LgToggleComponent>) {
    checkboxes.toArray().forEach((checkbox: LgToggleComponent) => {
      checkbox.control = this.control;
    });
    this._checkboxes = checkboxes;
  }
  get checkboxes(): QueryList<LgToggleComponent> {
    return this._checkboxes;
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

  _value: Array<string> = null;
  @Input()
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.onChange(value);
    if (this.checkboxes) {
      this.checkboxes.forEach(checkbox => {
        if (value.includes(checkbox.value.toString())) {
          checkbox.checked = true;
        }
      });
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
    @Self() @Optional() public control: NgControl,
    private errorState: LgErrorStateMatcher,
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: FormGroupDirective,
    private domService: LgDomService,
    private renderer: Renderer2,
    private hostElement: ElementRef,
  ) {
    this.variant = this.hostElement.nativeElement.tagName
      .split('-')[1]
      .toLowerCase() as CheckboxGroupVariant;
    if (this.control != null) {
      this.control.valueAccessor = this;
    }
  }

  public onChange(value: Array<string>) {
    this._value = value;
  }

  public onTouched(_?: any) {}

  public writeValue(obj: Array<string>): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private _updateRadioButtonNames(): void {
    if (this.checkboxes) {
      this.checkboxes.forEach(checkbox => {
        checkbox.name = this.name;
      });
    }
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
