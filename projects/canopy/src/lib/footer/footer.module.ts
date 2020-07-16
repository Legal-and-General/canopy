import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgFooterComponent } from './footer.component';

@NgModule({
  declarations: [LgFooterComponent],
  exports: [LgFooterComponent],
  entryComponents: [LgFooterComponent],
  imports: [CommonModule],
})
export class LgFooterModule {}
