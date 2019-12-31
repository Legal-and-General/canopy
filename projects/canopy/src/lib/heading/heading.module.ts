import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeadingComponent } from './heading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgHeadingComponent],
  exports: [LgHeadingComponent]
})
export class LgHeadingModule {}
