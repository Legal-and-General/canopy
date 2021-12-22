import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeaderComponent } from './header.component';
import { LgGridModule } from '../grid';

@NgModule({
  declarations: [LgHeaderComponent],
  exports: [LgHeaderComponent],
  entryComponents: [LgHeaderComponent],
  imports: [CommonModule, LgGridModule],
})
export class LgHeaderModule {}
