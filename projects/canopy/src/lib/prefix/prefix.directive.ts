import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgPrefix]',
  standalone: true,
})
export class LgPrefixDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-prefix-${nextUniqueId++}`;
}
