import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-card-header',
  templateUrl: './card-header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LgCardHeaderComponent {
  @HostBinding('class.lg-card-header') class = true;
}
