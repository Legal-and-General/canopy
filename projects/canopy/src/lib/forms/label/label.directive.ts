import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgLabel]'
})
export class LgLabelDirective {
  @HostBinding('class')
  class: string;

  @Input()
  @HostBinding('attr.id')
  id: string;
}
