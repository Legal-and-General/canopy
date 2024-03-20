import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgSuffix]',
  standalone: true,
})
export class LgSuffixDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-suffix-${nextUniqueId++}`;
}
