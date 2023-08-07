import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgOrientationDirective } from './orientation.directive';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ LgOrientationDirective ],
  exports: [ LgOrientationDirective ],
})
export class LgOrientationModule {}
