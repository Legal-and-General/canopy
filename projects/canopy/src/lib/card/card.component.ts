import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgCardComponent {
  @HostBinding('class.lg-card') class = true;
}
