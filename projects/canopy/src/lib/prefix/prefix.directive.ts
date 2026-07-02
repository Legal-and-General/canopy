import { Directive, HostBinding, Input } from '@angular/core';

import { randomUniqueId } from '../utils';

@Directive({
  selector: '[lgPrefix]',
  standalone: true,
})
export class LgPrefixDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-prefix-${randomUniqueId()}`;
}
