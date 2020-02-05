import {
  Component,
  forwardRef,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'lg-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LgToggleComponent),
      multi: true
    }
  ]
})
export class LgToggleComponent implements ControlValueAccessor {
  uniqueId = nextUniqueId++;

  @Input() checked = false;
  @Input() disabled = false;
  @Input() id = `lg-toggle-${this.uniqueId}`;
  @Input() name = `lg-toggle-${this.uniqueId}`;
  @Input() value = 'on';
  @Input() ariaDescribedBy: string;
  @Input() variant: 'checkbox' | 'switch' = 'checkbox';

  @HostBinding('class.lg-toggle') class = true;

  onCheck() {
    this.checked = !this.checked;
    this.onChange(this.checked ? this.value : null);
  }

  public onChange(value: string) {
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
}
