import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-card-content',
  templateUrl: './card-content.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LgCardContentComponent {
  @HostBinding('class.lg-card-content') class = true;
}
