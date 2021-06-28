import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgCarouselComponent } from './carousel.component';
import { LgCarouselItemComponent } from './carousel-item/carousel-item.component';
import { LgAutoplayComponent } from './auto-play/auto-play.component';
import { LgHeadingModule } from '../heading';
import {
  LgIconModule,
  LgIconRegistry,
  lgIconChevronLeft,
  lgIconChevronRight,
  lgIconPlay,
  lgIconPause,
} from '../icon';

const components = [LgCarouselItemComponent, LgCarouselComponent, LgAutoplayComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, LgHeadingModule, LgIconModule],
  exports: [...components],
})
export class LgCarouselModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([
      lgIconChevronLeft,
      lgIconChevronRight,
      lgIconPlay,
      lgIconPause,
    ]);
  }
}
