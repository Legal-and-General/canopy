import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeadingModule } from '../heading/heading.module';
import { LgHeroCardContentComponent } from './hero-card-content/hero-card-content.component';
import { LgHeroCardDataPointLabelComponent } from './hero-card-data-point-label/hero-card-data-point-label.component';
import { LgHeroCardDataPointListComponent } from './hero-card-data-point-list/hero-card-data-point-list.component';
import { LgHeroCardDataPointValueComponent } from './hero-card-data-point-value/hero-card-data-point-value.component';
import { LgHeroCardDataPointComponent } from './hero-card-data-point/hero-card-data-point.component';
import { LgHeroCardHeaderComponent } from './hero-card-header/hero-card-header.component';
import { LgHeroCardPrincipleDataPointLabelComponent } from './hero-card-principle-data-point-label/hero-card-principle-data-point-label.component';
import { LgHeroCardPrincipleDataPointValueComponent } from './hero-card-principle-data-point-value/hero-card-principle-data-point-value.component';
import { LgHeroCardPrincipleDataPointComponent } from './hero-card-principle-data-point/hero-card-principle-data-point.component';
import { LgHeroCardSubtitleComponent } from './hero-card-subtitle/hero-card-subtitle.component';
import { LgHeroCardTitleComponent } from './hero-card-title/hero-card-title.component';
import { LgHeroCardComponent } from './hero-card/hero-card.component';
import { LgHeroHeaderComponent } from './hero-content/hero-header.component';
import { LgHeroContentComponent } from './hero-header/hero-content.component';
import { LgHeroComponent } from './hero.component';
import { LgHeroCardFooterComponent } from './lg-hero-card-footer/lg-hero-card-footer.component';
import { LgHeroCardNotificationComponent } from './hero-card-notification/hero-card-notification.component';

@NgModule({
  imports: [CommonModule, LgHeadingModule],
  declarations: [
    LgHeroComponent,
    LgHeroCardComponent,
    LgHeroCardHeaderComponent,
    LgHeroCardContentComponent,
    LgHeroCardTitleComponent,
    LgHeroCardDataPointListComponent,
    LgHeroCardDataPointComponent,
    LgHeroCardSubtitleComponent,
    LgHeroCardDataPointLabelComponent,
    LgHeroCardDataPointValueComponent,
    LgHeroCardPrincipleDataPointComponent,
    LgHeroCardPrincipleDataPointLabelComponent,
    LgHeroCardPrincipleDataPointValueComponent,
    LgHeroContentComponent,
    LgHeroHeaderComponent,
    LgHeroCardFooterComponent,
    LgHeroCardNotificationComponent,
  ],
  exports: [
    LgHeroComponent,
    LgHeroCardComponent,
    LgHeroCardHeaderComponent,
    LgHeroCardContentComponent,
    LgHeroCardTitleComponent,
    LgHeroCardDataPointListComponent,
    LgHeroCardDataPointComponent,
    LgHeroCardSubtitleComponent,
    LgHeroCardDataPointLabelComponent,
    LgHeroCardDataPointValueComponent,
    LgHeroCardPrincipleDataPointComponent,
    LgHeroCardPrincipleDataPointLabelComponent,
    LgHeroCardPrincipleDataPointValueComponent,
    LgHeroContentComponent,
    LgHeroHeaderComponent,
    LgHeroCardFooterComponent,
    LgHeroCardNotificationComponent,
  ],
})
export class LgHeroModule {}
