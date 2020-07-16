import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgContainer]',
})
export class LgGridContainerDirective {
  @HostBinding('class.lg-container') class = true;
}
