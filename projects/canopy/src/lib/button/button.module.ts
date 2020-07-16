import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgMarginModule } from '../spacing/margin/margin.module';
import { LgSpinnerModule } from '../spinner/spinner.module';
import { LgButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule, LgSpinnerModule, LgMarginModule],
  declarations: [LgButtonComponent],
  exports: [LgButtonComponent],
})
export class LgButtonModule {}
