import { Directive, HostAttributeToken, HostBinding, inject, Input } from '@angular/core';

let nextUniqueId = 0;

/**
 * Marks a custom component as a validation wrapper so a form field projects it into the
 * validation slot and can describe its control with the wrapper's id.
 */
@Directive({
  selector: '[lgValidationWrapper]',
  standalone: true,
})
export class LgValidationWrapperDirective {
  private readonly staticId = inject(new HostAttributeToken('id'), { optional: true });

  @HostBinding('id')
  id = this.staticId || `lg-validation-wrapper-${nextUniqueId++}`;

  @Input()
  set lgValidationWrapperId(id: string | null | undefined) {
    if (id) {
      this.id = id;
    }
  }
}
