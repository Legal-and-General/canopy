import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgSpinnerComponent } from './spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgSpinnerComponent],
  exports: [LgSpinnerComponent],
})
export class LgSpinnerModule {}
