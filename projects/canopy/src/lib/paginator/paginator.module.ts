import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LgButtonModule, LgIconModule, LgSelectModule } from '@legal-and-general/canopy';

import { LgPaginatorComponent } from './paginator.component';

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
export class LgPaginatorModule {}
