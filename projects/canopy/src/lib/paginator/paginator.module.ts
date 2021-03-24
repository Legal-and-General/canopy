import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LgPaginatorComponent } from './paginator.component';
import { LgButtonModule } from '../button/button.module';
import { LgSelectModule } from '../forms/select/select.module';
import {
  lgIconChevronLeft,
  lgIconChevronRight,
  lgIconGotoFirst,
  lgIconGotoLast,
  LgIconModule,
  LgIconRegistry,
} from '../icon/index';

@NgModule({
  declarations: [LgPaginatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    LgButtonModule,
    LgSelectModule,
    LgIconModule,
  ],
  exports: [LgPaginatorComponent],
})
export class LgPaginatorModule {

  constructor(lgIconRegistry: LgIconRegistry) {
    lgIconRegistry.registerIcons([
      lgIconChevronLeft,
      lgIconChevronRight,
      lgIconGotoFirst,
      lgIconGotoLast,
    ]);
  }
}
