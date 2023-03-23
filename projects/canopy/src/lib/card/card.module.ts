import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { LgHeadingModule } from '../heading/heading.module';
import { lgIconArrowRight, LgIconModule, LgIconRegistry } from '../icon';

import { LgCardPrincipleDataPointDateComponent } from './card-principle-data-point-date/card-principle-data-point-date.component';
import { LgCardPrincipleDataPointLabelComponent } from './card-principle-data-point-label/card-principle-data-point-label.component';
import { LgCardPrincipleDataPointValueComponent } from './card-principle-data-point-value/card-principle-data-point-value.component';
import { LgCardPrincipleDataPointComponent } from './card-principle-data-point/card-principle-data-point.component';
import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeaderComponent } from './card-header/card-header.component';
import { LgCardSubtitleComponent } from './card-subtitle/card-subtitle.component';
import { LgCardTitleComponent } from './card-title/card-title.component';
import { LgCardComponent } from './card.component';
import { LgCardFooterComponent } from './card-footer/card-footer.component';
import { LgCardToggableContentComponent } from './card-toggable-content/card-toggable-content.component';
import { LgCardNavigationTitleComponent } from './card-navigation-title/card-navigation-title.component';

const components = [
  LgCardComponent,
  LgCardHeaderComponent,
  LgCardTitleComponent,
  LgCardFooterComponent,
  LgCardSubtitleComponent,
  LgCardPrincipleDataPointComponent,
  LgCardPrincipleDataPointLabelComponent,
  LgCardPrincipleDataPointValueComponent,
  LgCardPrincipleDataPointDateComponent,
  LgCardContentComponent,
  LgCardToggableContentComponent,
  LgCardNavigationTitleComponent,
];

@NgModule({
  imports: [ CommonModule, LgHeadingModule, LgIconModule, RouterLinkWithHref ],
  declarations: [ components ],
  exports: [ components ],
})
export class LgCardModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconArrowRight ]);
  }
}
