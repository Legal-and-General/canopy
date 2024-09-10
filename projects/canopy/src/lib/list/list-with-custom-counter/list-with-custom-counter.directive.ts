import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgListWithCustomCounter]',
  standalone: true,
})
export class LgListWithCustomCounterDirective {
  @HostBinding('class.lg-list-with-custom-counter') class = true;
}
