import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgSideNavComponent } from './side-nav.component';
import { LgSideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { LgSideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { LgSideNavBarItemComponent } from './side-nav-bar-item/side-nav-bar-item.component';
import { LgSideNavBarFooterComponent } from './side-nav-bar-footer/side-nav-bar-footer.component';
import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import { lgIconChevronRight } from '../icon/icons.interface';
import { LgSideNavBarItemHeadingComponent } from './side-nav-bar-item-heading/side-nav-bar-item-heading.component';
import { LgSideNavBarItemContentComponent } from './side-nav-bar-item-content/side-nav-bar-item-content.component';

const components = [
  LgSideNavComponent,
  LgSideNavContentComponent,
  LgSideNavBarComponent,
  LgSideNavBarItemComponent,
  LgSideNavBarFooterComponent,
  LgSideNavBarItemHeadingComponent,
  LgSideNavBarItemContentComponent,
];

@NgModule({
  imports: [CommonModule, LgIconModule],
  declarations: [...components],
  exports: [...components],
})
export class LgSideNavModule {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([lgIconChevronRight]);
  }
}
