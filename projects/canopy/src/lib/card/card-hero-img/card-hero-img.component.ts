import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { LgCardHeroImgAspectRatio } from './card-hero-img.interface';

@Component({
  selector: 'lg-card-hero-img',
  templateUrl: './card-hero-img.component.html',
  styleUrls: [ './card-hero-img.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [],
})
export class LgCardHeroImageComponent {
  @Input() cover = false;
  @Input() src?: string;
  @Input() alt = '';
  @Input() aspectRatio?: LgCardHeroImgAspectRatio;

  @HostBinding('style.aspect-ratio')
  get hostAspectRatio(): string | null {
    return this.aspectRatio && this.src
      ? this.aspectRatio.replace(':', ' / ')
      : null;
  }

  @HostBinding('class') get class(): string {
    return this.src
      ? 'lg-card-hero-img__img'
      : 'lg-card-hero-img__icon';
  }
}
