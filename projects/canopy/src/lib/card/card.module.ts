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

import { LgHeadingModule } from '../heading/heading.module';

const components = [
  LgCardComponent,
  LgCardHeaderComponent,
  LgCardTitleComponent,
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
export class LgCardModule {}
