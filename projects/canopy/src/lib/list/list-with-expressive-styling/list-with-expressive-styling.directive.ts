import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgListWithExpressiveStyling]',
  standalone: true,
})
export class LgListWithExpressiveStylingDirective {
  @HostBinding('class.lg-expressive-list') class = true;
}
