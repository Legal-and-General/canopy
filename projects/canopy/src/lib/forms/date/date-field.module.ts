import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LgInputModule } from '../input/input.module';
import { LgLabelModule } from '../label/label.module';
import { LgValidationModule } from '../validation/validation.module';
import { LgMarginModule } from '../../spacing/margin/margin.module';
import { LgFocusModule } from '../../focus/focus.module';

import { LgDateFieldComponent } from './date-field.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LgLabelModule,
    LgInputModule,
    LgValidationModule,
    LgMarginModule,
    LgFocusModule,
  ],
  declarations: [ LgDateFieldComponent ],
  exports: [ LgDateFieldComponent ],
})
export class LgDateFieldModule {}
