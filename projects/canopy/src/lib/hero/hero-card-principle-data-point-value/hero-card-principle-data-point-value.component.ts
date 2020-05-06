import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'lg-hero-card-principle-data-point-value',
  templateUrl: './hero-card-principle-data-point-value.component.html',
  styleUrls: ['./hero-card-principle-data-point-value.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgHeroCardPrincipleDataPointValueComponent {
  @HostBinding('class.lg-hero-card-principle-data-point-value') class = true;
}
