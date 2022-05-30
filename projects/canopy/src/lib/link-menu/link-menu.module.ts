import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import { lgIconChevronRight } from '../icon/icons.interface';
import { LgVariantModule } from '../variant/variant.module';
import { LgCardModule } from '../card';

import { LgLinkMenuComponent } from './link-menu.component';
import { LgLinkMenuItemComponent } from './link-menu-item/link-menu-item.component';
import { LgLinkMenuItemHeadingComponent } from './link-menu-item-heading/link-menu-item-heading.component';
import { LgLinkMenuItemContentComponent } from './link-menu-item-content/link-menu-item-content.component';
const components = [
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemHeadingComponent,
  LgLinkMenuItemContentComponent,
];

@NgModule({
  imports: [ CommonModule, LgIconModule, LgVariantModule, LgCardModule ],
  declarations: [ ...components ],
  exports: [ ...components ],
})
export class LgLinkMenuModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconChevronRight ]);
  }
}
