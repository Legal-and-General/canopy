import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgPromoCardComponent } from './promo-card/promo-card.component';
import { LgButtonModule } from '../button';
import { LgHeadingModule } from '../heading';
import { LgPromoCardListComponent } from './promo-card-list/promo-card-list.component';
import { LgPromoCardHeaderComponent } from './promo-card/promo-card-header/promo-card-header.component';
import { LgPromoCardFooterComponent } from './promo-card/promo-card-footer/promo-card-footer.component';
import { LgPromoCardContentComponent } from './promo-card/promo-card-content/promo-card-content.component';
import { LgPromoCardImageComponent } from './promo-card/promo-card-image/promo-card-image.component';

const components = [
  LgPromoCardComponent,
  LgPromoCardListComponent,
  LgPromoCardHeaderComponent,
  LgPromoCardFooterComponent,
  LgPromoCardContentComponent,
  LgPromoCardImageComponent,
];

@NgModule({
  imports: [CommonModule, LgButtonModule, LgHeadingModule],
  declarations: [...components],
  exports: [...components],
})
export class LgPromoCardModule {}
