import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgMarginDirective } from './margin.directive';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ LgMarginDirective ],
  exports: [ LgMarginDirective ],
})
export class LgMarginModule {}
