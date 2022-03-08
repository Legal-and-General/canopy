import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
  Input,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';

@Component({
  selector: 'lg-hero-img-card-subtitle',
  templateUrl: './hero-img-card-subtitle.component.html',
  styleUrls: ['./hero-img-card-subtitle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgHeroImgCardSubtitleComponent {
  @HostBinding('class.lg-hero-img-card-subtitle') class = true;

  @Input() headingLevel: HeadingLevel;
}
