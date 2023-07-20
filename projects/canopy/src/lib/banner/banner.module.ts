import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgGridModule } from '../grid/grid.module';

import { LgBannerComponent } from './banner.component';

@NgModule({
  imports: [ CommonModule, LgGridModule ],
  declarations: [ LgBannerComponent ],
  exports: [ LgBannerComponent ],
})
export class LgBannerModule {}
