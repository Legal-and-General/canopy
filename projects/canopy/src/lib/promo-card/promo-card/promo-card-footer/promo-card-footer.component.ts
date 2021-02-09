import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { PromoCardVariant } from '../../promo-card.interface';

@Component({
  selector: 'lg-promo-card-footer',
  templateUrl: './promo-card-footer.component.html',
  styleUrls: ['./promo-card-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgPromoCardFooterComponent implements OnInit {
  @HostBinding('class.lg-promo-card-footer') class = true;

  @Input() ctaText: string;
  @Input() ctaVariant: PromoCardVariant;

  constructor() {}

  ngOnInit(): void {}
}
