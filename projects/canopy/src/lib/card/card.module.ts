import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgCardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgCardComponent],
  exports: [LgCardComponent]
})
export class LgCardModule {}
