import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgGridModule } from '../grid';

import { LgHeaderLogoComponent } from './header-logo/header-logo.component';
import { LgHeaderComponent } from './header.component';

@NgModule({
  declarations: [ LgHeaderComponent, LgHeaderLogoComponent ],
  exports: [ LgHeaderComponent, LgHeaderLogoComponent ],
  entryComponents: [ LgHeaderComponent ],
  imports: [ CommonModule, LgGridModule ],
})
export class LgHeaderModule {}
