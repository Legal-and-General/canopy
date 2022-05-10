import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeadingModule } from '../heading/heading.module';

import { LgDataPointLabelComponent } from './data-point-label/data-point-label.component';
import { LgDataPointListComponent } from './data-point-list/data-point-list.component';
import { LgDataPointValueComponent } from './data-point-value/data-point-value.component';
import { LgDataPointComponent } from './data-point/data-point.component';

@NgModule({
  declarations: [
    LgDataPointListComponent,
    LgDataPointComponent,
    LgDataPointValueComponent,
    LgDataPointLabelComponent,
  ],
  exports: [
    LgDataPointListComponent,
    LgDataPointComponent,
    LgDataPointValueComponent,
    LgDataPointLabelComponent,
  ],
  imports: [ CommonModule, LgHeadingModule ],
})
export class LgDataPointModule {}
