import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgPromoCardComponent } from './promo-card/promo-card.component';
import { LgPromoCardListComponent } from './promo-card-list/promo-card-list.component';
import { LgPromoCardTitleComponent } from './promo-card/promo-card-title/promo-card-title.component';
import { LgPromoCardFooterComponent } from './promo-card/promo-card-footer/promo-card-footer.component';
import { LgPromoCardContentComponent } from './promo-card/promo-card-content/promo-card-content.component';
import { LgPromoCardImageComponent } from './promo-card/promo-card-image/promo-card-image.component';
import { LgPromoCardListTitleComponent } from './promo-card-list/promo-card-list-title/promo-card-list-title.component';

const components = [
  LgPromoCardComponent,
  LgPromoCardListComponent,
  LgPromoCardTitleComponent,
  LgPromoCardFooterComponent,
  LgPromoCardContentComponent,
  LgPromoCardImageComponent,
  LgPromoCardListTitleComponent,
];

@NgModule({
  imports: [ CommonModule, ...components ],
  exports: [ ...components ],
})
export class LgPromoCardModule {}
