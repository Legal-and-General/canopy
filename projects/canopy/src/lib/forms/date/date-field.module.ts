import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LgInputModule } from '../input/input.module';
import { LgLabelModule } from '../label/label.module';
import { LgValidationModule } from '../validation/validation.module';
import { LgDateFieldComponent } from './date-field.component';
import { LgMarginModule } from '../../spacing/margin/margin.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LgLabelModule,
    LgInputModule,
    LgValidationModule,
    LgMarginModule,
  ],
  declarations: [LgDateFieldComponent],
  exports: [LgDateFieldComponent],
  entryComponents: [LgDateFieldComponent],
})
export class LgDateFieldModule {}
