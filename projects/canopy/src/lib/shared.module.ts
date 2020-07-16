import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgSpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgSpinnerComponent],
  exports: [LgSpinnerComponent],
})
export class LgButtonModule {}
