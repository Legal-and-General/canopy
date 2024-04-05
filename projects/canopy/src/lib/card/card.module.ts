import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { lgIconArrowRight, LgIconRegistry } from '../icon';

import { LgCardPrincipleDataPointDateComponent } from './card-principle-data-point-date/card-principle-data-point-date.component';
import { LgCardPrincipleDataPointLabelComponent } from './card-principle-data-point-label/card-principle-data-point-label.component';
import { LgCardPrincipleDataPointValueComponent } from './card-principle-data-point-value/card-principle-data-point-value.component';
import { LgCardPrincipleDataPointComponent } from './card-principle-data-point/card-principle-data-point.component';
import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeaderComponent } from './card-header/card-header.component';
import { LgCardSubtitleComponent } from './card-subtitle/card-subtitle.component';
import { LgCardTitleComponent } from './card-title/card-title.component';
import { LgCardSubheadingComponent } from './card-subheading/card-subheading.component';
import { LgCardComponent } from './card.component';
import { LgCardFooterComponent } from './card-footer/card-footer.component';
import { LgCardToggableContentComponent } from './card-toggable-content/card-toggable-content.component';
import { LgCardNavigationTitleComponent } from './card-navigation-title/card-navigation-title.component';
import { LgCardContentInnerDataPointsComponent } from './card-content-inner-data-points/card-content-inner-data-points.component';
import { LgCardHeroImageComponent } from './card-hero-img/card-hero-img.component';
import { LgCardGroupComponent } from './card-group/card-group.component';

const components = [
  LgCardComponent,
  LgCardHeaderComponent,
  LgCardHeroImageComponent,
  LgCardTitleComponent,
  LgCardSubheadingComponent,
  LgCardFooterComponent,
  LgCardGroupComponent,
  LgCardSubtitleComponent,
  LgCardPrincipleDataPointComponent,
  LgCardPrincipleDataPointLabelComponent,
  LgCardPrincipleDataPointValueComponent,
  LgCardPrincipleDataPointDateComponent,
  LgCardContentComponent,
  LgCardContentInnerDataPointsComponent,
  LgCardToggableContentComponent,
  LgCardNavigationTitleComponent,
];

@NgModule({
  imports: [ CommonModule, RouterLink, components ],
  exports: [ components ],
})
export class LgCardModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconArrowRight ]);
  }
}
