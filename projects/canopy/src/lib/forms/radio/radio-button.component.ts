import {
  Component,
  Host,
  HostBinding,
  Input,
  OnInit,
  Optional,
  Self,
  SkipSelf,
  ViewEncapsulation
} from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

import { LgErrorStateMatcher } from '../validation/error-state-matcher';
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

  @Input() id = `lg-radio-button-${++nextUniqueId}`;
  @Input() name: string;
  @Input() value: string;

  @Input()
  _disabled = false;
  get disabled(): boolean {
    return (
      this._disabled || (this.radioGroup !== null && this.radioGroup.disabled)
    );
  }
  set disabled(isDisabled: boolean) {
    this._disabled = isDisabled;
  }

  @HostBinding('class.lg-radio-button') class = true;
  @HostBinding('class.lg-radio-button--error')
  public get errorClass() {
    return this.errorState.isControlInvalid(this.control, this.controlContainer);
  }

  constructor(
    @Self() @Optional() public control: NgControl,
    private radioGroup: LgRadioGroupComponent,
    private errorState: LgErrorStateMatcher,
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: FormGroupDirective
  ) {}

  ngOnInit() {
    if (this.radioGroup.value === this.value) {
      this.checked = true;
    }
    this.name = this.radioGroup.name;
  }

  onCheck() {
    this.radioGroup.onTouched();
    if (this.radioGroup.value !== this.value) {
      this.radioGroup.value = this.value;
    }
  }
}
