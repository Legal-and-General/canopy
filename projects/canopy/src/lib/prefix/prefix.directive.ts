import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgPrefix]',
})
export class LgPrefixDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-prefix-${nextUniqueId++}`;

  @Input()
  ariaDescribeInput = false;
}
