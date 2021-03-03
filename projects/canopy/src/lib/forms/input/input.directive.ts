import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  Input,
  Optional,
  Renderer2,
  Self,
  SkipSelf,
} from '@angular/core';
import { FormGroupDirective, NgControl } from '@angular/forms';

import { LgErrorStateMatcher } from '../validation/error-state-matcher';

let nextUniqueId = 0;

@Directive({
  selector: '[lgInput]',
})
export class LgInputDirective {
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

  _size: number;
  @Input()
  public set size(size) {
    if (this._size) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-input--size-${this.size}`,
      );
    }
    this.renderer.addClass(this.hostElement.nativeElement, `lg-input--size-${size}`);
    this._size = size;
  }
  public get size(): number {
    return this._size;
  }

  constructor(
    @Self() @Optional() public control: NgControl,
    private errorState: LgErrorStateMatcher,
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: FormGroupDirective,
    private renderer: Renderer2,
    private hostElement: ElementRef,
  ) {}
}
