import { Directive, HostBinding, input } from '@angular/core';

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
