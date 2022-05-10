import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Directive({
  selector: '[lgSortCode]',
})
export class LgSortCodeDirective implements OnInit {
  @HostBinding('placeholder') placeholder = '00-00-00';
  @HostBinding('required') required = true;
  @HostBinding('attr.inputmode') inputmode = 'numeric';
  // 8 because we allow for the two dashes
  @HostBinding('attr.maxlength') maxlength = '8';
  @HostBinding('attr.size') size = '7';

  constructor(private ngControl: NgControl) {}

  @HostListener('focusout', [ '$event.target.value' ]) onBlur(value) {
    if (this.ngControl.valid) {
      this.ngControl.control.setValue(this.format(value), { emitEvent: false });
    }
  }

  ngOnInit(): void {
    const validators = [
      Validators.required,
      Validators.pattern(/^(?:\d{6}|\d\d-\d\d-\d\d|\d\d\s\d\d\s\d\d)$/),
    ];

    if (this.ngControl.control.validator) {
      validators.push(this.ngControl.control.validator);
    }

    this.ngControl.control.setValidators(validators);
  }

  private format(value: string): string {
    return value
      .replace(/-|\s/g, '')
      .match(/.{1,2}/g)
      .join('-');
  }
}
