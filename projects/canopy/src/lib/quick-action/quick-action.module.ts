import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgQuickActionComponent } from './quick-action.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgQuickActionComponent],
  exports: [LgQuickActionComponent],
})
export class LgQuickActionModule {}
