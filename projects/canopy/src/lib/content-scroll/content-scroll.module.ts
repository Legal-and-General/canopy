import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgContentSrollComponent } from './content-scroll.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgContentSrollComponent],
  exports: [LgContentSrollComponent],
})
export class LgContentScrollModule {}
