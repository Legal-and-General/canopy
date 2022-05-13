import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgGridModule } from '../grid';

import { LgHeaderComponent } from './header.component';

@NgModule({
  declarations: [ LgHeaderComponent ],
  exports: [ LgHeaderComponent ],
  entryComponents: [ LgHeaderComponent ],
  imports: [ CommonModule, LgGridModule ],
})
export class LgHeaderModule {}
