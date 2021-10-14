import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgCamelCasePipe } from 'canopy/lib/pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [LgCamelCasePipe],
  exports: [LgCamelCasePipe],
})
export class LgCamelCasePipeModule {}
