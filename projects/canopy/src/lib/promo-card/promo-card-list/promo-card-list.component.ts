import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-promo-card-list',
  templateUrl: './promo-card-list.component.html',
  styleUrls: [ './promo-card-list.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class LgPromoCardListComponent {
  @HostBinding('class.lg-promo-card-list') class = true;
}
