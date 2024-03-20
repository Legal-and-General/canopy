import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'lg-card-hero-img',
  templateUrl: './card-hero-img.component.html',
  styleUrls: [ './card-hero-img.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [ NgIf ],
})
export class LgCardHeroImageComponent {
  @Input() cover = false;
  @Input() src: string;
  @Input() alt = '';
  @HostBinding('class') get class(): string {
    return this.src
      ? 'lg-card-hero-img__img'
      : 'lg-card-hero-img__icon';
  }
}
