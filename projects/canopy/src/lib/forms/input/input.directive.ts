import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgInput]'
})
export class LgInputDirective {
  @HostBinding('class') class: string;

  @Input()
  @HostBinding('name')
  name = `lg-input-${nextUniqueId++}`;

  @Input()
  @HostBinding('id')
  id = `lg-input-${nextUniqueId++}`;

  @Input()
  @HostBinding('attr.aria-describedby')
  ariaDescribedBy: string;
}
