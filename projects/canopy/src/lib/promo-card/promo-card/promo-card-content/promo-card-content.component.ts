import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lg-promo-card-content',
  templateUrl: './promo-card-content.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgPromoCardContentComponent {
  @HostBinding('class.lg-promo-card-content') class = true;
}
