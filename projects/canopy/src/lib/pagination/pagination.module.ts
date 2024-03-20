import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { lgIconChevronLeft, lgIconChevronRight, LgIconRegistry } from '../icon';

import { LgPagionationComponent } from './pagination.component';

@NgModule({
  imports: [ CommonModule, LgPagionationComponent ],
  exports: [ LgPagionationComponent ],
})
export class LgPaginationModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconChevronLeft, lgIconChevronRight ]);
  }
}
