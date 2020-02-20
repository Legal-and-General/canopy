import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgInput]'
})
export class LgInputDirective {
  @HostBinding('class.lg-input') class = true;
  @HostBinding('class.lg-input--block')
  public get blockClass() {
    return this.block;
  }

  @Input() block = false;

  @Input()
  @HostBinding('name')
  name = `lg-input-${nextUniqueId++}`;

  @Input()
  @HostBinding('id')
  id = `lg-input-${nextUniqueId++}`;

  @Input()
  @HostBinding('disabled')
  disabled = false;

  @Input()
  @HostBinding('attr.aria-describedby')
  ariaDescribedBy: string;
}
