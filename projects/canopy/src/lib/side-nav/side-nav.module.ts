import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import { lgIconChevronRight } from '../icon/icons.interface';

import { LgSideNavComponent } from './side-nav.component';
import { LgSideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { LgSideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { LgSideNavBarItemComponent } from './side-nav-bar-item/side-nav-bar-item.component';
import { LgSideNavBarFooterComponent } from './side-nav-bar-footer/side-nav-bar-footer.component';
import { LgCardModule } from './../card/card.module';
import { LgSpacingModule } from './../spacing/spacing.module';
import { LgSideNavBarItemHeadingComponent } from './side-nav-bar-item-heading/side-nav-bar-item-heading.component';
import { LgSideNavBarItemContentComponent } from './side-nav-bar-item-content/side-nav-bar-item-content.component';
import { LgSideNavBarLinkDirective } from './side-nav-bar-link/side-nav-bar-link.directive';

const components = [
  LgSideNavComponent,
  LgSideNavContentComponent,
  LgSideNavBarComponent,
  LgSideNavBarItemComponent,
  LgSideNavBarFooterComponent,
  LgSideNavBarItemHeadingComponent,
  LgSideNavBarItemContentComponent,
  LgSideNavBarLinkDirective,
];

@NgModule({
  imports: [ CommonModule, LgCardModule, LgIconModule, LgSpacingModule ],
  declarations: [ ...components ],
  exports: [ ...components ],
})
export class LgSideNavModule {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconChevronRight ]);
  }
}
