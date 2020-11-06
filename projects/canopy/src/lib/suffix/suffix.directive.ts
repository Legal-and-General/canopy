import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgSuffix]',
})
export class LgSuffixDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-suffix-${nextUniqueId++}`;
}
