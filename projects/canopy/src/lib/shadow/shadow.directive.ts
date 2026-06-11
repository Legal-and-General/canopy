import { Directive, HostBinding, input } from '@angular/core';

/**
 * @deprecated This directive will be removed in a future major release as part of the brand modernisation (date/version TBC).
 */
@Directive({
  selector: '[lgShadow]',
  standalone: true,
})
export class LgShadowDirective {
  hasHoverState = input(false);

  @HostBinding('class.lg-shadow') class = true;
  @HostBinding('class.lg-shadow--hover') get hoverClass() {
    return this.hasHoverState();
  }
}
