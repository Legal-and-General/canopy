import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeadingModule } from '../heading/heading.module';
import { LgHeroImgComponent } from './hero-img.component';
import { LgHeroImgCardComponent } from './hero-img-card/hero-img-card.component';
import { LgHeroImgCardTitleComponent } from './hero-img-card-title/hero-img-card-title.component';
import { LgHeroImgCardSubtitleComponent } from './hero-img-card-subtitle/hero-img-card-subtitle.component';

@NgModule({
  imports: [CommonModule, LgHeadingModule],
  declarations: [
    LgHeroImgComponent,
    LgHeroImgCardComponent,
    LgHeroImgCardTitleComponent,
    LgHeroImgCardSubtitleComponent,
  ],
  exports: [
    LgHeroImgComponent,
    LgHeroImgCardComponent,
    LgHeroImgCardTitleComponent,
    LgHeroImgCardSubtitleComponent,
  ],
})
export class LgHeroImgModule {}
