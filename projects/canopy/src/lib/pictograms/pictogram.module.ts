import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgPictogramComponent } from './pictogram.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgPictogramComponent],
  exports: [LgPictogramComponent],
})
export class LgPictogramModule {}
