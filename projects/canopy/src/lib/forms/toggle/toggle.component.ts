import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl } from '@angular/forms';
import { NgClass } from '@angular/common';

import { LgDomService } from '../../utils';
import { LgErrorStateMatcher } from '../validation';
import { LgValidationComponent } from '../validation';
import { LgCheckboxGroupComponent } from '../checkbox-group';
import { LgIconComponent } from '../../icon';
import { LgFocusDirective } from '../../focus';

import type { ToggleVariant } from './toggle.interface';
import { CheckboxSize } from './toggle.interface';

let nextUniqueId = 0;

@Component({
  selector: 'lg-toggle, lg-checkbox, lg-switch, lg-filter-checkbox',
  templateUrl: './toggle.component.html',
  styleUrls: [
    './toggle.component.scss',
    './toggle--switch.component.scss',
    './toggle--filter.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
  imports: [ LgFocusDirective, NgClass, LgIconComponent ],
})
export class LgToggleComponent implements ControlValueAccessor, OnInit {
  private checkboxGroup = inject(LgCheckboxGroupComponent, { optional: true });
  private domService = inject(LgDomService);
  private errorState = inject(LgErrorStateMatcher);
  private controlContainer = inject(FormGroupDirective, {
    optional: true,
    host: true,
    skipSelf: true,
  });
  private hostElement = inject(ElementRef);
  control = inject(NgControl, { self: true, optional: true });

  uniqueId = nextUniqueId++;
  selectorVariant: string;

  @Input() checked = false;
  @Input() id = `lg-toggle-${this.uniqueId}`;
  @Input() name = `lg-toggle-${this.uniqueId}`;
  @Input() value: boolean | string = false;
  @Input() focus: boolean;
  @Input() ariaDescribedBy: string;
  @Input() variant: ToggleVariant = 'checkbox';
  @Input() size: CheckboxSize = 'sm';
  @Input()
  _disabled = false;
  get disabled(): boolean {
    return this._disabled || (this.checkboxGroup !== null && this.checkboxGroup.disabled);
  }
  set disabled(isDisabled: boolean) {
    this._disabled = isDisabled;
  }

  @Output() blur: EventEmitter<Event> = new EventEmitter<Event>();

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

  constructor() {
    this.selectorVariant = this.hostElement.nativeElement.tagName
      .split('-')[1]
      .toLowerCase();

    if (this.checkboxGroup) {
      return;
    }

    if (this.control != null) {
      this.control.valueAccessor = this;
    }
  }

  onCheck(): void {
    if (this.checkboxGroup) {
      this.checkboxGroup.onTouched();

      if (this.checkboxGroup.value.includes(this.value.toString())) {
        this.checkboxGroup.value = this.checkboxGroup.value.filter(
          (value: string) => value !== this.value,
        );
      } else {
        this.checkboxGroup.value = [ this.value.toString(), ...this.checkboxGroup.value ];
      }

      return;
    }

    this.onTouched();
    this.checked = !this.checked;

    this.onChange(this.checked
      ? this.value
      : null);
  }

  onBlur(event: Event): void {
    this.blur.emit(event);
  }

  public onChange(value: boolean | string): void {
    this.value = value;
  }

  public onTouched(_?: any): void {}

  public writeValue(value: any): void {
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

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    if (this.checkboxGroup) {
      this.variant = this.checkboxGroup.variant;

      if (this.checkboxGroup.value.includes(this.value.toString())) {
        this.checked = true;
      }

      this.name = this.checkboxGroup.name;
    }

    if (this.selectorVariant !== 'toggle' && !this.checkboxGroup) {
      this.variant = this.selectorVariant as ToggleVariant;
    }
  }
}
