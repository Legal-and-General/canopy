import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-promo-card-image',
  templateUrl: './promo-card-image.component.html',
  styleUrls: [ './promo-card-image.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgPromoCardImageComponent {
  @HostBinding('class.lg-promo-card-image') class = true;

  @Input() imageUrl: string;
}
