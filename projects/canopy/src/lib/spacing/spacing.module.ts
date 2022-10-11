import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgMarginModule } from './margin';
import { LgPaddingModule } from './padding';
import { LgRowGapModule } from './row-gap';

@NgModule({
  imports: [ CommonModule, LgMarginModule, LgPaddingModule, LgRowGapModule ],
  exports: [ LgMarginModule, LgPaddingModule, LgRowGapModule ],
})
export class LgSpacingModule {}
