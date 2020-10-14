import {
  Component,
  Host,
  HostBinding,
  Input,
  OnInit,
  Optional,
  Self,
  SkipSelf,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgRadioGroupComponent } from './radio-group.component';
import { RadioVariant } from './radio.interface';

let nextUniqueId = 0;

@Component({
  selector: 'lg-radio-button, lg-filter-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss', './radio-button--filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgRadioButtonComponent implements OnInit {
  checked = false;
  _variant: RadioVariant;
  set variant(variant: RadioVariant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-radio-button--${this.variant}`,
      );
    }
    this.renderer.addClass(this.hostElement.nativeElement, `lg-radio-button--${variant}`);
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @Input() id = `lg-radio-button-${++nextUniqueId}`;
  @Input() name: string;
  @Input() value: string;

  @Input()
  _disabled = false;
  get disabled(): boolean {
    return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
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
    private controlContainer: FormGroupDirective,
    private renderer: Renderer2,
    private hostElement: ElementRef,
  ) {}

  ngOnInit() {
    this.variant = this.radioGroup.variant;
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
