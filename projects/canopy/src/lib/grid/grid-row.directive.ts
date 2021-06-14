import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgRow]',
})
export class LgGridRowDirective {
  @HostBinding('class.lg-row') class = true;
}
