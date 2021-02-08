import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHideAtDirective } from './hide-at.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LgHideAtDirective],
  exports: [LgHideAtDirective],
})
export class LgHideAtModule {}
