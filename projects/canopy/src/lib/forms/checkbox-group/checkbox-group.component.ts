import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  forwardRef,
  Host,
  HostBinding,
  Input,
  Optional,
  QueryList,
  Renderer2,
  Self,
  SkipSelf,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl } from '@angular/forms';

import { LgDomService } from '../../utils';
import { LgHintComponent } from '../hint';
import { LgErrorStateMatcher } from '../validation';
import { LgValidationComponent } from '../validation';
import { LgToggleComponent } from '../toggle';
import { LgMarginDirective } from '../../spacing';
import { LgLabelComponent } from '../label';
import { LgFocusDirective } from '../../focus';

import { CheckboxGroupVariant } from './checkbox-group.interface';

let uniqueId = 0;

@Component({
  selector: 'lg-checkbox-group, lg-filter-multiple-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: [ './checkbox-group.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [ LgFocusDirective, LgLabelComponent, LgMarginDirective ],
})
export class LgCheckboxGroupComponent implements ControlValueAccessor {
  private nextUniqueId = ++uniqueId;
  private _name = `lg-checkbox-group-${this.nextUniqueId}`;
  private _value: Array<string> = [];
  _variant: CheckboxGroupVariant;
  _checkboxes: QueryList<LgToggleComponent>;
  _hintElement: LgHintComponent;
  _validationElement: LgValidationComponent;

  @Input() id = `lg-checkbox-group-id-${this.nextUniqueId}`;
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

  @ContentChild(LgValidationComponent)
  set errorElement(element: LgValidationComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._validationElement,
      element,
    );

    this._validationElement = element;
  }

  constructor(
    @Self() @Optional() private control: NgControl,
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

  public onChange(value: Array<string>): void {
    this._value = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onTouched(_?: any): void {}

  public writeValue(obj: Array<string>): void {
    this.value = obj;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
}
