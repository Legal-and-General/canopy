import {
  AfterContentInit,
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
import { NgIf } from '@angular/common';

import { LgDomService } from '../../utils/dom.service';
import { LgHintComponent } from '../hint/hint.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import { LgMarginDirective } from '../../spacing/margin/margin.directive';
import { LgLabelComponent } from '../label/label.component';
import { LgFocusDirective } from '../../focus/focus.directive';

import type { RadioStackBreakpoint, RadioVariant } from './radio.interface';
import { LgRadioButtonComponent } from './radio-button.component';

let uniqueId = 0;

@Component({
  selector: 'lg-radio-group, lg-filter-group, lg-segment-group',
  templateUrl: './radio-group.component.html',
  styleUrls: [ './radio-group.component.scss', './radio-group--segment.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [ LgFocusDirective, LgLabelComponent, LgMarginDirective, NgIf ],
})
export class LgRadioGroupComponent implements ControlValueAccessor, AfterContentInit {
  private nextUniqueId = ++uniqueId;
  private _name = `lg-radio-group-${this.nextUniqueId}`;
  variant: RadioVariant;
  _stack: RadioStackBreakpoint;
  _radios: QueryList<LgRadioButtonComponent>;
  _hintElement: LgHintComponent;
  _validationElement: LgValidationComponent;
  _value: boolean | string = null;

  @Input() id = `lg-radio-group-id-${this.nextUniqueId}`;
  @Input() inline = false;
  @Input() disabled = false;
  @Input() focus = false;
  @Input() ariaDescribedBy: string;
  @Input()
  set stack(stack: RadioStackBreakpoint) {
    if (this._stack) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-radio-group--stack-${this.stack}`,
      );
    }

    if (stack) {
      this.renderer.addClass(
        this.hostElement.nativeElement,
        `lg-radio-group--stack-${stack}`,
      );
    }

    this._stack = stack;
  }
  get stack(): RadioStackBreakpoint {
    return this._stack;
  }

  @HostBinding('class.lg-radio-group') class = true;
  @HostBinding('class.lg-radio-group--inline') public get inlineClass() {
    return this.inline;
  }
  @HostBinding('class.lg-radio-group--error') get errorClass() {
    return this.errorState.isControlInvalid(this.control, this.controlContainer);
  }

  @ContentChildren(forwardRef(() => LgRadioButtonComponent), {
    descendants: true,
  })
  set radios(radios: QueryList<LgRadioButtonComponent>) {
    radios.toArray().forEach((radio: LgRadioButtonComponent) => {
      radio.control = this.control;
    });

    this._radios = radios;
  }
  get radios(): QueryList<LgRadioButtonComponent> {
    return this._radios;
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
    private renderer: Renderer2,
  ) {
    this.variant = this.hostElement.nativeElement.tagName
      .split('-')[1]
      .toLowerCase() as RadioVariant;

    if (this.control != null) {
      this.control.valueAccessor = this;
    }
  }

  ngAfterContentInit(): void {
    if (this.radios && this.stack) {
      this.radios.toArray().forEach(radio => {
        radio.stacked = this.stack;
      });
    }
  }

  public onChange(value: boolean | string) {
    this._value = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onTouched(_?: any) {}

  public writeValue(obj: string): void {
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

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  private _updateRadioButtonNames(): void {
    if (this.radios) {
      this.radios.forEach(radio => {
        radio.name = this.name;
      });
    }
  }
}
