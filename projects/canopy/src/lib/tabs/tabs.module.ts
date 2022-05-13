import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgFocusModule } from '../focus/focus.module';
import { LgHeadingModule } from '../heading/heading.module';
import { LgSeparatorModule } from '../separator/separator.module';

import { LgTabItemContentComponent } from './tab-item-content/tab-item-content.component';
import { LgTabItemHeadingComponent } from './tab-item-heading/tab-item-heading.component';
import { LgTabItemComponent } from './tab-item/tab-item.component';
import { LgTabsComponent } from './tabs.component';
import { LgTabNavBarComponent } from './tab-nav-bar/tab-nav-bar.component';
import { LgTabNavContentComponent } from './tab-nav-content/tab-nav-content.component';
import { LgTabNavBarLinkDirective } from './tab-nav-bar/tab-nav-bar-link.directive';

@NgModule({
  declarations: [
    LgTabsComponent,
    LgTabItemComponent,
    LgTabItemHeadingComponent,
    LgTabItemContentComponent,
    LgTabNavBarComponent,
    LgTabNavContentComponent,
    LgTabNavBarLinkDirective,
  ],
  exports: [
    LgTabsComponent,
    LgTabItemComponent,
    LgTabItemHeadingComponent,
    LgTabItemContentComponent,
    LgTabNavBarComponent,
    LgTabNavContentComponent,
    LgTabNavBarLinkDirective,
  ],
  imports: [ CommonModule, LgFocusModule, LgSeparatorModule, LgHeadingModule ],
})
export class LgTabsModule {}
