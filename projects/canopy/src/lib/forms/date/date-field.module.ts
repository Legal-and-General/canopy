import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LgInputModule } from '../input/input.module';
import { LgLabelModule } from '../label/label.module';
import { LgDateFieldComponent } from './date-field.component';

@NgModule({
  imports: [ReactiveFormsModule, LgLabelModule, LgInputModule],
  declarations: [LgDateFieldComponent],
  exports: [LgDateFieldComponent],
  entryComponents: [LgDateFieldComponent]
})
export class LgDateFieldModule {}
