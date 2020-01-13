import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgCheckmarkComponent } from './checkmark.component';

@NgModule({
  declarations: [LgCheckmarkComponent],
  exports: [LgCheckmarkComponent],
  imports: [CommonModule],
  entryComponents: [LgCheckmarkComponent]
})
export class LgCheckboxModule {}
