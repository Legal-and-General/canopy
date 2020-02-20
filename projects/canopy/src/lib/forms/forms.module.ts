import { NgModule } from '@angular/core';

import { LgDateFieldModule } from './date/date-field.module';
import { LgHintModule } from './hint/hint.module';
import { LgInputModule } from './input/input.module';
import { LgLabelModule } from './label/label.module';
import { LgRadioModule } from './radio/radio.module';
import { LgSelectModule } from './select/select.module';
import { LgToggleModule } from './toggle/toggle.module';

@NgModule({
  exports: [
    LgDateFieldModule,
    LgHintModule,
    LgInputModule,
    LgLabelModule,
    LgRadioModule,
    LgSelectModule,
    LgToggleModule
  ]
})
export class LgFormsModule {}
