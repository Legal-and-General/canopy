import { Directive, HostBinding, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[lgInputFieldExternalButton]',
  standalone: true,
})
export class LgInputFieldExternalButtonDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-input-field-external-button-${nextUniqueId++}`;
}
