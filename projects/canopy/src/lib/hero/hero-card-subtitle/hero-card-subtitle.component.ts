import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lg-hero-card-subtitle',
  templateUrl: './hero-card-subtitle.component.html',
  styleUrls: [ './hero-card-subtitle.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgHeroCardSubtitleComponent {
  @HostBinding('class.lg-hero-card-subtitle') class = true;
}
