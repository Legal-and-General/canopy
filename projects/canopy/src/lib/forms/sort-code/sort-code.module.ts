import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LgLabelModule } from '../label/label.module';
import { LgHintModule } from '../hint/hint.module';
import { LgInputModule } from '../input/input.module';
import { LgSortCodeComponent } from './sort-code.component';
import { LgMarginModule } from '../../spacing/margin';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LgInputModule,
    LgHintModule,
    LgLabelModule,
    LgMarginModule,
  ],
  declarations: [LgSortCodeComponent],
  exports: [LgSortCodeComponent],
})
export class LgSortCodeModule {}
