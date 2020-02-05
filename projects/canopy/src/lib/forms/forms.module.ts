import { NgModule } from '@angular/core';

import { LgHintModule } from './hint/hint.module';
import { LgInputModule } from './input/input.module';
import { LgLabelModule } from './label/label.module';
import { LgRadioModule } from './radio/radio.module';
import { LgSelectModule } from './select/select.module';
import { LgToggleModule } from './toggle/toggle.module';

@NgModule({
  exports: [
    LgToggleModule,
    LgHintModule,
    LgInputModule,
    LgLabelModule,
    LgRadioModule,
    LgSelectModule
  ]
})
export class LgFormsModule {}
