import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgGridColDirective } from './grid-col.directive';
import { LgGridContainerDirective } from './grid-container.directive';
import { LgGridRowDirective } from './grid-row.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LgGridContainerDirective, LgGridColDirective, LgGridRowDirective],
  exports: [LgGridContainerDirective, LgGridColDirective, LgGridRowDirective],
})
export class LgGridModule {}
