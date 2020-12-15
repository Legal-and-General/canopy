import { NgModule } from '@angular/core';

import { LgDateFieldModule } from './date/date-field.module';
import { LgHintModule } from './hint/hint.module';
import { LgInputModule } from './input/input.module';
import { LgLabelModule } from './label/label.module';
import { LgRadioModule } from './radio/radio.module';
import { LgSelectModule } from './select/select.module';
import { LgSortCodeModule } from './sort-code/sort-code.module';
import { LgToggleModule } from './toggle/toggle.module';
import { LgValidationModule } from './validation/validation.module';
import { LgCheckboxGroupModule } from './checkbox-group';

@NgModule({
  exports: [
    LgCheckboxGroupModule,
    LgDateFieldModule,
    LgValidationModule,
    LgHintModule,
    LgInputModule,
    LgLabelModule,
    LgRadioModule,
    LgSelectModule,
    LgSortCodeModule,
    LgToggleModule,
  ],
})
export class LgFormsModule {}
