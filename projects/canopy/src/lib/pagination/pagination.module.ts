import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  lgIconChevronLeft,
  lgIconChevronRight,
  LgIconModule,
  LgIconRegistry,
} from '../icon';
import { LgMarginModule } from '../spacing';

import { LgPagionationComponent } from './pagination.component';

@NgModule({
  imports: [ CommonModule, LgIconModule, LgMarginModule ],
  declarations: [ LgPagionationComponent ],
  exports: [ LgPagionationComponent ],
})
export class LgPaginationModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconChevronLeft, lgIconChevronRight ]);
  }
}
