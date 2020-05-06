import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'lg-hero-card-data-point',
  templateUrl: './hero-card-data-point.component.html',
  styleUrls: ['./hero-card-data-point.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgHeroCardDataPointComponent {
  @HostBinding('class.lg-hero-card-data-point') class = true;

  @HostBinding('attr.role') role = 'listitem';
}
