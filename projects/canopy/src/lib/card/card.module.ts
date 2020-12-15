import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgCardPrincipleDataPointDateComponent } from './card-principle-data-point-date/card-principle-data-point-date.component';
import { LgCardPrincipleDataPointLabelComponent } from './card-principle-data-point-label/card-principle-data-point-label.component';
import { LgCardPrincipleDataPointValueComponent } from './card-principle-data-point-value/card-principle-data-point-value.component';
import { LgCardPrincipleDataPointComponent } from './card-principle-data-point/card-principle-data-point.component';

import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeaderComponent } from './card-header/card-header.component';
import { LgCardSubtitleComponent } from './card-subtitle/card-subtitle.component';
import { LgCardTitleComponent } from './card-title/card-title.component';
import { LgCardComponent } from './card.component';
import * as iconSet from '../icon/icons.interface';

import { LgHeadingModule } from '../heading/heading.module';
import { LgCardTopAreaComponent } from './card-top-area/card-top-area.component';
import { LgIconRegistry } from '../icon/icon.registry';
import { LgCardBottomAreaComponent } from './card-bottom-area/card-bottom-area.component';

const components = [
  LgCardComponent,
  LgCardHeaderComponent,
  LgCardTitleComponent,
  LgCardTopAreaComponent,
  LgCardBottomAreaComponent,
  LgCardSubtitleComponent,
  LgCardPrincipleDataPointComponent,
  LgCardPrincipleDataPointLabelComponent,
  LgCardPrincipleDataPointValueComponent,
  LgCardPrincipleDataPointDateComponent,
  LgCardContentComponent,
];
@NgModule({
  imports: [CommonModule, LgHeadingModule],
  declarations: [components],
  exports: [components],
})
export class LgCardModule {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([iconSet.lgIconChevronLeft]);
  }
}
