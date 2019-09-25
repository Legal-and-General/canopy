import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgInput]'
})
export class LgInputDirective {
  @HostBinding('class') class = 'lg-input';

  @Input()
  @HostBinding('name')
  name = `lg-input-${nextUniqueId++}`;

  @Input()
  @HostBinding('id')
  id = `lg-input-${nextUniqueId++}`;
}
