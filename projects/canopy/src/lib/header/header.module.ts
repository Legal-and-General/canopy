import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeaderComponent } from './header.component';

@NgModule({
  declarations: [LgHeaderComponent],
  exports: [LgHeaderComponent],
  entryComponents: [LgHeaderComponent],
  imports: [CommonModule],
})
export class LgHeaderModule {}
