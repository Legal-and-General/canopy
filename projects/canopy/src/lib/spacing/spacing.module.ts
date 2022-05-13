import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgMarginModule } from './margin/margin.module';
import { LgPaddingModule } from './padding/padding.module';

@NgModule({
  imports: [ CommonModule, LgMarginModule, LgPaddingModule ],
  exports: [ LgMarginModule, LgPaddingModule ],
})
export class LgSpacingModule {}
