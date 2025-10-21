import { Directive, HostBinding, Input, inject } from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

import { LgErrorStateMatcher } from '../validation';

let nextUniqueId = 0;

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

  control = inject(NgControl, { self: true, optional: true });
  uniqueId = nextUniqueId++;

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
  @HostBinding('name')
  name = `lg-input-${this.uniqueId}`;

  @Input()
  @HostBinding('id')
  id = `lg-input-${this.uniqueId}`;

  @Input()
  @HostBinding('disabled')
  disabled = false;

  @Input()
  @HostBinding('attr.aria-describedby')
  ariaDescribedBy: string | null = null;
}
