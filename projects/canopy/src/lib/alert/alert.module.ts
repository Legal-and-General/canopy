import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgAlertComponent } from './alert.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgAlertComponent],
  exports: [LgAlertComponent]
})
export class LgAlertModule {}
