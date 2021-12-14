import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LgLabelModule } from '../label/label.module';
import { LgHintModule } from '../hint/hint.module';
import { LgInputModule } from '../input/input.module';
import { LgMarginModule } from '../../spacing/margin';
import { LgFocusModule } from '../../focus/focus.module';
import { LgSortCodeDirective } from './sort-code.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LgInputModule,
    LgHintModule,
    LgLabelModule,
    LgMarginModule,
    LgFocusModule,
  ],
  declarations: [LgSortCodeDirective],
  exports: [LgSortCodeDirective],
})
export class LgSortCodeModule {}
