import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgSelect]'
})
export class LgSelectDirective {
  @HostBinding('class') class = 'lg-select';

  @Input()
  @HostBinding('name')
  name = `lg-select-${nextUniqueId++}`;

  @Input()
  @HostBinding('id')
  id = `lg-select-${nextUniqueId++}`;

  @Input()
  @HostBinding('attr.aria-describedby')
  ariaDescribedBy: string;
}
