import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { LgRadioGroupComponent } from './radio-group.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgRadioButtonComponent implements OnInit {
  checked = false;
  _disabled = false;

  @Input() id = `lg-radio-button-${++nextUniqueId}`;
  @Input() name: string;
  @Input() value: string;

  @Input()
  get disabled(): boolean {
    return (
      this._disabled || (this.radioGroup !== null && this.radioGroup.disabled)
    );
  }
  set disabled(isDisabled: boolean) {
    this._disabled = isDisabled;
  }

  @HostBinding('class.lg-radio-button') class = true;

  constructor(private radioGroup: LgRadioGroupComponent) {}

  ngOnInit() {
    if (this.radioGroup.value === this.value) {
      this.checked = true;
    }
    this.name = this.radioGroup.name;
  }

  onCheck() {
    if (this.radioGroup.value !== this.value) {
      this.radioGroup.value = this.value;
    }
  }
}
