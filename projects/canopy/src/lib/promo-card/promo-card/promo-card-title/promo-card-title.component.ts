import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-promo-card-title',
  templateUrl: './promo-card-title.component.html',
  styleUrls: [ './promo-card-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgPromoCardTitleComponent {
  @HostBinding('class.lg-promo-card-title') class = true;

  @Input() headingLevel: string;
}
