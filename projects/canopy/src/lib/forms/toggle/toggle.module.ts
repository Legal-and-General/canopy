import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgToggleComponent } from './toggle.component';

@NgModule({
  declarations: [LgToggleComponent],
  exports: [LgToggleComponent],
  imports: [CommonModule],
  entryComponents: [LgToggleComponent]
})
export class LgToggleModule {}
