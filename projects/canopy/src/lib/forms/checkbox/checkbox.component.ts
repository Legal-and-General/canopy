import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'lg-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LgCheckboxComponent),
      multi: true
    }
  ]
})
export class LgCheckboxComponent implements ControlValueAccessor {
  @Input() checked = false;
  @Input() id = `lg-checkbox-${nextUniqueId++}`;
  @Input() name = `lg-checkbox-${nextUniqueId++}`;
  @Input() value = 'on';

  @HostBinding('class') class = 'lg-checkbox';

  constructor(private changeDetector: ChangeDetectorRef) {}

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
      this.changeDetector.markForCheck();
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
