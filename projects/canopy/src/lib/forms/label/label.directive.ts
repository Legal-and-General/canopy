import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[lgLabel]'
})
export class LgLabelDirective {
  @Input()
  @HostBinding('class')
  class = 'lg-label';

  @Input()
  @HostBinding('attr.id')
  id: string;

  @Input()
  @HostBinding('attr.for')
  for: string;
}
