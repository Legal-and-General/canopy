import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeadingModule } from '../heading/heading.module';
import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import { lgIconChevronDown } from '../icon/icons.interface';
import { LgAccordionItemContentDirective } from './accordion-item/accordion-item-content.directive';
import { LgAccordionItemComponent } from './accordion-item/accordion-item.component';
import { LgAccordionPanelHeadingComponent } from './accordion-panel-heading/accordion-panel-heading.component';
import { LgAccordionComponent } from './accordion.component';

const components = [
  LgAccordionComponent,
  LgAccordionItemComponent,
  LgAccordionPanelHeadingComponent,
  LgAccordionItemContentDirective
];

@NgModule({
  imports: [CommonModule, LgHeadingModule, LgIconModule],
  declarations: [...components],
  exports: [...components]
})
export class LgAccordionModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([lgIconChevronDown]);
  }
}
