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
import { LgTabNavBarLinkDirective } from '../tabs';

const components = [
  LgSideNavComponent,
  LgSideNavContentComponent,
  LgSideNavBarComponent,
  LgTabNavBarLinkDirective,
  LgSideNavBarItemComponent,
  LgSideNavBarFooterComponent,
];

@NgModule({
  imports: [CommonModule, LgIconModule],
  declarations: [...components, LgTabNavBarLinkDirective],
  exports: [...components],
})
export class LgSideNavModule {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([lgIconChevronRight]);
  }
}
