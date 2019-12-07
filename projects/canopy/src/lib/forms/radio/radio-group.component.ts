import {
  Component,
  ContentChild,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  QueryList,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { LgHintComponent } from '../hint/hint.component';
import { LgLabelComponent } from '../label/label.component';
import { LgRadioButtonComponent } from './radio-button.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LgRadioGroupComponent),
      multi: true
    }
  ]
})
export class LgRadioGroupComponent implements ControlValueAccessor {
  private _value: any = null;

  private _name = `lg-radio-group-${nextUniqueId++}`;

  @Input() id = `lg-radio-group-id-${nextUniqueId++}`;
  @Input() inline = false;
  @Input() disabled = false;

  @HostBinding('attr.aria-labelledby')
  @Input()
  ariaLabelledBy: string;

  @HostBinding('class.lg-radio-group') class = true;
  @HostBinding('attr.role') role = 'radiogroup';

  @HostBinding('class.lg-radio-group--inline')
  public get inlineClass() {
    return this.inline;
  }

  @ContentChildren(forwardRef(() => LgRadioButtonComponent), {
    descendants: true
  })
  radios: QueryList<LgRadioButtonComponent>;

  _labelElement: LgLabelComponent;
  @ViewChild(LgLabelComponent, { static: true })
  set labelElement(element: LgLabelComponent) {
    if (element) {
      this.ariaLabelledBy = this.ariaLabelledBy
        ? `${this.ariaLabelledBy} ${element.id}`
        : element.id;
    } else {
      this.ariaLabelledBy = this.ariaLabelledBy.replace(
        this._labelElement.id,
        ''
      );
    }
    this._labelElement = element;
  }

  _hintElement: LgHintComponent;
  @ContentChild(LgHintComponent, { static: false })
  set hintElement(element: LgHintComponent) {
    if (element) {
      this.ariaLabelledBy = this.ariaLabelledBy
        ? `${this.ariaLabelledBy} ${element.id}`
        : element.id;
    } else {
      this.ariaLabelledBy = this.ariaLabelledBy.replace(
        this._hintElement.id,
        ''
      );
    }
    this._hintElement = element;
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
