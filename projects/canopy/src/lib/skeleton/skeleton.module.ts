import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgSkeletonDirective } from './skeleton.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LgSkeletonDirective],
  exports: [LgSkeletonDirective],
})
export class LgSkeletonModule {}
