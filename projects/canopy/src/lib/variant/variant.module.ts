import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgVariantDirective } from './variant.directive';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ LgVariantDirective ],
  exports: [ LgVariantDirective ],
})
export class LgVariantModule {}
