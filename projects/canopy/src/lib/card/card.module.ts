import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardComponent } from './card.component';

import { LgSeparatorModule } from '../separator/separator.module';
import { LgCardHeaderComponent } from './card-header/card-header.component';

@NgModule({
  imports: [CommonModule, LgSeparatorModule],
  declarations: [
    LgCardComponent,
    LgCardHeaderComponent,
    LgCardContentComponent
  ],
  exports: [LgCardComponent, LgCardHeaderComponent, LgCardContentComponent]
})
export class LgCardModule {}
