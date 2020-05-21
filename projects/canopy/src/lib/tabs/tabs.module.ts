import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LgFocusModule } from '../focus/focus.module';
import { LgHeadingModule } from '../heading/heading.module';
import { LgSeparatorModule } from '../separator/separator.module';
import { LgTabItemContentComponent } from './tab-item-content/tab-item-content.component';
import { LgTabItemHeadingComponent } from './tab-item-heading/tab-item-heading.component';
import { LgTabItemComponent } from './tab-item/tab-item.component';
import { LgTabsComponent } from './tabs.component';

@NgModule({
  declarations: [
    LgTabsComponent,
    LgTabItemComponent,
    LgTabItemHeadingComponent,
    LgTabItemContentComponent
  ],
  exports: [
    LgTabsComponent,
    LgTabItemComponent,
    LgTabItemHeadingComponent,
    LgTabItemContentComponent
  ],
  imports: [CommonModule, LgFocusModule, LgSeparatorModule, LgHeadingModule]
})
export class LgTabsModule {}
