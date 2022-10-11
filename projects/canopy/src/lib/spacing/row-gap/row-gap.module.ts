import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgRowGapDirective } from './row-gap.directive';

@NgModule({
  declarations: [ LgRowGapDirective ],
  imports: [ CommonModule ],
  exports: [ LgRowGapDirective ],
})
export class LgRowGapModule {}
