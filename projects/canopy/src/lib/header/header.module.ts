import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconRegistry } from '../icon/icon.registry';
import { lgIconClose, lgIconHamburgerMenu, lgIconSignIn } from '../icon/icons.interface';

import { LgHeaderLogoComponent } from './header-logo/header-logo.component';
import { LgHeaderComponent } from './header.component';
import { LgPrimaryNavComponent } from './primary-navigation/primary-navigation.component';
import { LgPrimaryNavItemDirective } from './primary-navigation/primary-navigation-item.directive';
import { LgPrimaryNavListItemComponent } from './primary-navigation/primary-navigation-list-item/primary-navigation-list-item.component';
import { LgNotificationBadgeComponent } from './notification-badge/notification-badge.component';
import { LgAccountMenuItemDirective } from './account-menu/account-menu-item.directive';
import { LgAccountMenuComponent } from './account-menu/account-menu.component';
import { LgAccountMenuListItemComponent } from './account-menu/account-menu-list-item/account-menu-list-item.component';
import { LgAccountMenuItemLabelComponent } from './account-menu/account-menu-item-label/account-menu-item-label.component';

const components = [
  LgAccountMenuComponent,
  LgAccountMenuItemDirective,
  LgAccountMenuItemLabelComponent,
  LgAccountMenuListItemComponent,
  LgHeaderComponent,
  LgHeaderLogoComponent,
  LgNotificationBadgeComponent,
  LgPrimaryNavComponent,
  LgPrimaryNavItemDirective,
  LgPrimaryNavListItemComponent,
];

@NgModule({
  exports: [ ...components ],
  imports: [ CommonModule, ...components ],
})
export class LgHeaderModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconClose, lgIconHamburgerMenu, lgIconSignIn ]);
  }
}
