import { Directive, HostBinding, Input, inject } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

import { LgErrorStateMatcher } from '../validation';
import { randomUniqueId } from '../../utils';

@Directive({
  selector: '[lgInput]',
  standalone: true,
})
export class LgInputDirective {
  private errorState = inject(LgErrorStateMatcher);
  private controlContainer = inject(FormGroupDirective, {
    optional: true,
    host: true,
    skipSelf: true,
  });
  private _name: string | undefined;

  control = inject(NgControl, { self: true, optional: true });
  uniqueId = randomUniqueId();

  @HostBinding('class.lg-input') class = true;
  @HostBinding('class.lg-input--block')
  public get blockClass() {
    return this.block;
  }

  @HostBinding('attr.aria-invalid')
  @HostBinding('class.lg-input--error')
  public get errorClass() {
    return this.errorState.isControlInvalid(this.control, this.controlContainer);
  }

  @Input() block = false;

  @Input()
  @HostBinding('attr.name')
  get name(): string {
    return this._name ?? this.id;
  }

  set name(value: string) {
    this._name = value;
  }

  @Input()
  @HostBinding('id')
  id = `lg-input-${this.uniqueId}`;

  @Input() disabled = false;

  @HostBinding('attr.disabled')
  get disabledAttr() {
    return this.disabled
      ? true
      : null;
  }

  @Input()
  @HostBinding('attr.aria-describedby')
  ariaDescribedBy: string | null = null;
}
