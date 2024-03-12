import {
  Directive,
  Host,
  HostBinding,
  Input,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

import { LgErrorStateMatcher } from '../validation';

let nextUniqueId = 0;

@Directive({
  selector: '[lgSelect]',
  standalone: true,
})
export class LgSelectDirective {
  private uniqueId = nextUniqueId++;
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
  @HostBinding('name')
  name = `lg-select-${this.uniqueId}`;

  @Input()
  @HostBinding('id')
  id = `lg-select-${this.uniqueId}`;

  @Input()
  @HostBinding('attr.aria-describedby')
  ariaDescribedBy = null;

  constructor(
    @Self() @Optional() public control: NgControl,
    private errorState: LgErrorStateMatcher,
    @Optional()
    @Host()
    @SkipSelf()
    public controlContainer: FormGroupDirective,
  ) {}
}
