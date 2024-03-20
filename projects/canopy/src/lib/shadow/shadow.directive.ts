import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgShadow]',
  standalone: true,
})
export class LgShadowDirective {
  @HostBinding('class.lg-shadow') class = true;
}
