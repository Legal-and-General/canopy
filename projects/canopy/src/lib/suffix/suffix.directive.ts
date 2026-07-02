import { Directive, HostBinding, Input } from '@angular/core';

import { randomUniqueId } from '../utils';

@Directive({
  selector: '[lgSuffix]',
  standalone: true,
})
export class LgSuffixDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-suffix-${randomUniqueId()}`;
}
