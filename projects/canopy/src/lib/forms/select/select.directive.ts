import { Directive, HostBinding, Input, inject } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

import { LgErrorStateMatcher } from '../validation';
import { randomUniqueId } from '../../utils';

@Directive({
  selector: '[lgSelect]',
  standalone: true,
})
export class LgSelectDirective {
  private errorState = inject(LgErrorStateMatcher);
  private uniqueId = randomUniqueId();
  private _name: string | undefined;

  control = inject(NgControl, { self: true, optional: true });
  controlContainer = inject(FormGroupDirective, {
    optional: true,
    host: true,
    skipSelf: true,
  });

  @HostBinding('class.lg-select') class = true;
  @HostBinding('class.lg-select--block')
  public get blockClass() {
    return this.block;
  }

  @HostBinding('attr.aria-invalid')
  @HostBinding('class.lg-select--error')
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
  id = `lg-select-${this.uniqueId}`;

  @Input()
  @HostBinding('attr.aria-describedby')
  ariaDescribedBy = null;
}
