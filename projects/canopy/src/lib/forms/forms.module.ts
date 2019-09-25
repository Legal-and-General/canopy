import { NgModule } from '@angular/core';

import { LgCheckboxModule } from './checkbox/checkbox.module';
import { LgInputModule } from './input/input.module';
import { LgLabelModule } from './label/label.module';
import { LgRadioModule } from './radio/radio.module';

@NgModule({
  exports: [LgCheckboxModule, LgInputModule, LgLabelModule, LgRadioModule]
})
export class LgFormsModule {}
