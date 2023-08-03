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
  @Input() coverImageUrl: string;
  @Input() imageSrc: string;
  @Input() imageAlt = 'card-hero-img';
  @HostBinding('class') get class(): string {
    if (this.coverImageUrl || this.imageSrc) {
      return 'lg-card-hero-img';
    }

    return 'lg-card-hero-icon';
  }
}
