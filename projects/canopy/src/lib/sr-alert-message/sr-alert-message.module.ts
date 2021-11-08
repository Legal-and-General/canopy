import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgSrAlertMessageDirective } from './sr-alert-message.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LgSrAlertMessageDirective],
  exports: [LgSrAlertMessageDirective],
})
export class LgSrAlertMessageModule {}
