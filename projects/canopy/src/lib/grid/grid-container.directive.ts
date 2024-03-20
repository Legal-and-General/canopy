import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgContainer]',
  standalone: true,
})
export class LgGridContainerDirective {
  @HostBinding('class.lg-container') class = true;
}
