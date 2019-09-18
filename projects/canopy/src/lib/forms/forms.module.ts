import { NgModule } from '@angular/core';

import { LgCheckboxModule } from './checkbox/checkbox.module';
import { LgLabelModule } from './label/label.module';
import { LgRadioModule } from './radio/radio.module';

@NgModule({
  exports: [LgCheckboxModule, LgLabelModule, LgRadioModule]
})
export class LgFormsModule {}
