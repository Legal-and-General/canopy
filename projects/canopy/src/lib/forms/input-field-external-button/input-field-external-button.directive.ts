import { Directive, HostBinding, Input } from '@angular/core';

import { randomUniqueId } from '../../utils';

@Directive({
  selector: '[lgInputFieldExternalButton]',
  standalone: true,
})
export class LgInputFieldExternalButtonDirective {
  @Input()
  @HostBinding('attr.id')
  id = `lg-input-field-external-button-${randomUniqueId()}`;
}
