import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lg-promo-card-footer',
  templateUrl: './promo-card-footer.component.html',
  styleUrls: [ './promo-card-footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgPromoCardFooterComponent {
  @HostBinding('class.lg-promo-card-footer') class = true;
}
