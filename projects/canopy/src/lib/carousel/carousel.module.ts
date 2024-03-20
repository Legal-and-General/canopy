import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LgIconRegistry,
  lgIconChevronLeft,
  lgIconChevronRight,
  lgIconPauseSpot,
  lgIconPlaySpot,
} from '../icon';

import { LgCarouselComponent } from './carousel.component';
import { LgCarouselItemComponent } from './carousel-item/carousel-item.component';
import { LgAutoplayComponent } from './auto-play/auto-play.component';

const components = [ LgCarouselItemComponent, LgCarouselComponent ];

@NgModule({
  imports: [ CommonModule, ...components, LgAutoplayComponent ],
  exports: [ ...components ],
})
export class LgCarouselModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([
      lgIconChevronLeft,
      lgIconChevronRight,
      lgIconPlaySpot,
      lgIconPauseSpot,
    ]);
  }
}
