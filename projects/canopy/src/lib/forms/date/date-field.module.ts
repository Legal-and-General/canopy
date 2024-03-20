import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LgValidationModule } from '../validation/validation.module';

import { LgDateFieldComponent } from './date-field.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, LgValidationModule, LgDateFieldComponent ],
  exports: [ LgDateFieldComponent ],
})
export class LgDateFieldModule {}
