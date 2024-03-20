import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-hero-img-card',
  templateUrl: './hero-img-card.component.html',
  styleUrls: [ './hero-img-card.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgHeroImgCardComponent {
  @HostBinding('class.lg-hero-img-card') class = true;
}
