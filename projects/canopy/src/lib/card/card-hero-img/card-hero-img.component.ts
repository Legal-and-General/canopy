import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-hero-img',
  templateUrl: './card-hero-img.component.html',
  styleUrls: [ './card-hero-img.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
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
