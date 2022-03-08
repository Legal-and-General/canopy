import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgHeroImgComponent {
  @HostBinding('class.lg-hero-img') class = true;

  @HostBinding('style.background-image') get backgroundImage() {
    return `url(${this.imageUrl})`;
  }

  @HostBinding('style.margin-bottom') get marginBottom() {
    return this.overlap ? `${this.overlap * -1}rem` : null;
  }

  @HostBinding('style.padding-bottom') get paddingBottom() {
    return this.overlap && this.overlap > 0 ? `${this.overlap}rem` : null;
  }

  @Input() overlap = 2;
  @Input() imageUrl: string;
}
