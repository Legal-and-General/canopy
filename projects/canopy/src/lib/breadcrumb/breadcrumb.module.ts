import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import * as iconSet from '../icon/icons.interface';

import { LgBreadcrumbItemEllipsisComponent } from './breadcrumb-item-ellipsis/breadcrumb-item-ellipsis.component';
import { LgBreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { LgBreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [
    LgBreadcrumbComponent,
    LgBreadcrumbItemComponent,
    LgBreadcrumbItemEllipsisComponent,
  ],
  exports: [
    LgBreadcrumbComponent,
    LgBreadcrumbItemComponent,
    LgBreadcrumbItemEllipsisComponent,
  ],
  imports: [ CommonModule, LgIconModule ],
})
export class LgBreadcrumbModule {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([
      iconSet.lgIconHome,
      iconSet.lgIconCaretLeft,
      iconSet.lgIconCaretRight,
      iconSet.lgIconOverflowHorizontal,
    ]);
  }
}
