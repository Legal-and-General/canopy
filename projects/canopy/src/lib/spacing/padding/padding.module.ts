import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgPaddingDirective } from './padding.directive';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ LgPaddingDirective ],
  exports: [ LgPaddingDirective ],
})
export class LgPaddingModule {}
