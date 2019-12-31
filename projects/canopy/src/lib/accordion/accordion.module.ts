import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeadingModule } from '../heading/heading.module';
import { LgAccordionItemComponent } from './accordion-item/accordion-item.component';
import { LgAccordionPanelHeadingComponent } from './accordion-panel-heading/accordion-panel-heading.component';
import { LgAccordionComponent } from './accordion.component';

const components = [
  LgAccordionComponent,
  LgAccordionItemComponent,
  LgAccordionPanelHeadingComponent
];

@NgModule({
  imports: [CommonModule, LgHeadingModule],
  declarations: [...components],
  exports: [...components]
})
export class LgAccordionModule {}
