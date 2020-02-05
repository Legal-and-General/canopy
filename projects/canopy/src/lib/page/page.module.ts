import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgPageComponent } from './page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgPageComponent],
  exports: [LgPageComponent]
})
export class LgPageModule {}
