import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { LgLabelDirective } from '../label/label.directive';
import { LgRadioButtonComponent } from './radio-button.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LgRadioGroupComponent),
      multi: true
    }
  ]
})
export class LgRadioGroupComponent
  implements ControlValueAccessor, AfterViewInit {
  private _value: any = null;

  private _name = `lg-radio-group-${nextUniqueId++}`;

  @Input() id: string;

  @Input() inline: false;

  @HostBinding('class.lg-radio-group--inline')
  public get inlineClass() {
    return this.inline;
  }

  @HostBinding('class') class = 'lg-radio-group';

  @HostBinding('attr.role') role = 'radiogroup';

  @HostBinding('attr.aria-labelledby')
  @Input()
  ariaLabelledBy = `lg-radio-group-label-${++nextUniqueId}`;

  @ContentChildren(forwardRef(() => LgRadioButtonComponent), {
    descendants: true
  })
  radios: QueryList<LgRadioButtonComponent>;

  @ContentChild(LgLabelDirective, { static: false })
  labelElement: LgLabelDirective;

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
        selectedRadio.markForCheck();
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

  ngAfterViewInit() {
    if (this.labelElement) {
      this.labelElement.class = `${this.labelElement.class} lg-radio-group__label`;
      this.labelElement.id = this.ariaLabelledBy;
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
        radio.markForCheck();
      });
    }
  }
}
