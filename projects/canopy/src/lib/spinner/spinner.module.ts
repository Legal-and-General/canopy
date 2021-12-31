import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgSrAlertMessageModule } from '../sr-alert-message/sr-alert-message.module';
import { LgSpinnerComponent } from './spinner.component';

@NgModule({
  imports: [CommonModule, LgSrAlertMessageModule],
  declarations: [LgSpinnerComponent],
  exports: [LgSpinnerComponent, LgSrAlertMessageModule],
})
export class LgSpinnerModule {}
