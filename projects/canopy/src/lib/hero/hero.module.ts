import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeroComponent } from './hero.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgHeroComponent],
  exports: [LgHeroComponent]
})
export class LgHeroModule {}
