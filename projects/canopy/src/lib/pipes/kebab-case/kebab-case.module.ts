import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgKebabCasePipe } from 'canopy/lib/pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [LgKebabCasePipe],
  exports: [LgKebabCasePipe],
})
export class LgKebabCasePipeModule {}
