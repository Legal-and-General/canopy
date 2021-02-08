import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgShowAtDirective } from './show-at.directive';
@NgModule({
  imports: [CommonModule],
  declarations: [LgShowAtDirective],
  exports: [LgShowAtDirective],
})
export class LgShowAtModule {}
