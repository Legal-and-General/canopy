import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'lg-hero-card-principle-data-point',
  templateUrl: './hero-card-principle-data-point.component.html',
  styleUrls: ['./hero-card-principle-data-point.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgHeroCardPrincipleDataPointComponent {
  @HostBinding('class.lg-hero-card-principle-data-point') class = true;
}
