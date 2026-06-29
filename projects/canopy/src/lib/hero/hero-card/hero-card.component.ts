import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lg-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: [ './hero-card.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgHeroCardComponent {
  @HostBinding('class.lg-hero-card') class = true;
}
