import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-separator',
  template: '',
  styleUrls: ['./separator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgSeparatorComponent {
  @HostBinding('class.lg-separator') class = true;
  @HostBinding('attr.role') role = 'separator';
}
