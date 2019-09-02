import { NgModule } from '@angular/core';

import { LgLabelModule } from './label/label.module';
import { LgRadioModule } from './radio/radio.module';

@NgModule({
  exports: [LgLabelModule, LgRadioModule]
})
export class LgFormsModule {}
