import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgShadow]',
})
export class LgShadowDirective {
  @HostBinding('class.lg-shadow') class = true;
}
