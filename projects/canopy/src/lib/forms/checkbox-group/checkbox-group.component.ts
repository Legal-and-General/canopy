import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  QueryList,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl } from '@angular/forms';

import { LgDomService, randomUniqueId } from '../../utils';
import { LgHintComponent } from '../hint';
import { LgErrorStateMatcher } from '../validation';
import { LgValidationComponent, LgValidationWrapperDirective } from '../validation';
import { LgToggleComponent } from '../toggle';
import { LgMarginDirective } from '../../spacing';
import { LgLabelComponent } from '../label';
import { LgFocusDirective } from '../../focus';

import { CheckboxGroupVariant } from './checkbox-group.interface';

@Component({
  selector: 'lg-checkbox-group, lg-filter-multiple-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: [ './checkbox-group.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ LgFocusDirective, LgLabelComponent, LgMarginDirective ],
})
export class LgCheckboxGroupComponent implements ControlValueAccessor {
  private control = inject(NgControl, { self: true, optional: true });
  private errorState = inject(LgErrorStateMatcher);
  private controlContainer = inject(FormGroupDirective, {
    optional: true,
    host: true,
    skipSelf: true,
  });
  private domService = inject(LgDomService);
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  private uniqueId = randomUniqueId();
  private _name = `lg-checkbox-group-${this.uniqueId}`;
  private _value: Array<string> = [];
  private _describedByValidation: { id: string };
  _variant: CheckboxGroupVariant;
  _checkboxes: QueryList<LgToggleComponent>;
  _hintElement: LgHintComponent;
  _validationElement: LgValidationComponent;
  _validationWrapperElement: LgValidationWrapperDirective;
  hintText = '';

  @Input() id = `lg-checkbox-group-id-${this.uniqueId}`;
  @Input() inline = false;
  @Input() disabled = false;
  @Input() focus: boolean;
  @Input() ariaDescribedBy: string;

  @Input()
  get value() {
    return this._value;
  }
  set value(value: Array<string>) {
    this._value = value;
    this.onChange(value);

    if (!this.checkboxes) {
      return;
    }

    this.checkboxes.forEach(
      checkbox => (checkbox.checked = value.includes(checkbox.value.toString())),
    );
  }

  @Input()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
    this._updateRadioButtonNames();
  }

  @HostBinding('class.lg-checkbox-group--inline') get inlineClass() {
    return this.inline;
  }

  @HostBinding('class.lg-checkbox-group--error') get errorClass() {
    return this.errorState.isControlInvalid(this.control, this.controlContainer);
  }

  @ContentChildren(forwardRef(() => LgToggleComponent), {
    descendants: true,
  })
  set checkboxes(checkboxes: QueryList<LgToggleComponent>) {
    checkboxes.toArray().forEach((checkbox: LgToggleComponent) => {
      checkbox.control = this.control;
    });

    this._checkboxes = checkboxes;
  }
  get checkboxes(): QueryList<LgToggleComponent> {
    return this._checkboxes;
  }

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

  @ContentChild(LgHintComponent)
  set hintElement(element: LgHintComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._validationElement,
      element,
    );

    this._hintElement = element;
  }

  @ContentChild(LgValidationComponent, { descendants: true })
  set errorElement(element: LgValidationComponent) {
    this._validationElement = element;
    this.updateValidationDescription();
  }

  @ContentChild(LgValidationWrapperDirective)
  set errorWrapperElement(element: LgValidationWrapperDirective) {
    this._validationWrapperElement = element;
    this.updateValidationDescription();
  }

  constructor() {
    this.variant = this.hostElement.nativeElement.tagName
      .split('-')[1]
      .toLowerCase() as CheckboxGroupVariant;

    if (this.control != null) {
      this.control.valueAccessor = this;
    }
  }

  public onChange(value: Array<string>): void {
    this._value = value;
  }

  public onTouched(_?: any): void {}

  public writeValue(obj: Array<string>): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private _updateRadioButtonNames(): void {
    if (this.checkboxes) {
      this.checkboxes.forEach(checkbox => {
        checkbox.name = this.name;
      });
    }
  }

  private updateValidationDescription(): void {
    const element = this._validationElement ?? this._validationWrapperElement ?? null;

    if (element === this._describedByValidation) {
      return;
    }

    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._describedByValidation,
      element,
    );

    this._describedByValidation = element;
  }
}
