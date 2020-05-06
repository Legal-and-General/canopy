import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'lg-hero-card-data-point-value',
  templateUrl: './hero-card-data-point-value.component.html',
  styleUrls: ['./hero-card-data-point-value.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgHeroCardDataPointValueComponent {
  @HostBinding('class.lg-hero-card-data-point-value') class = true;
}
