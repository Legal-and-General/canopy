import { NgModule } from '@angular/core';

import { LgCheckboxModule } from './checkbox/checkbox.module';
import { LgHintModule } from './hint/hint.module';
import { LgInputModule } from './input/input.module';
import { LgLabelModule } from './label/label.module';
import { LgRadioModule } from './radio/radio.module';
import { LgSelectModule } from './select/select.module';

@NgModule({
  exports: [
    LgCheckboxModule,
    LgHintModule,
    LgInputModule,
    LgLabelModule,
    LgRadioModule,
    LgSelectModule
  ]
})
export class LgFormsModule {}
