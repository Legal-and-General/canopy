import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../../heading';

@Component({
  selector: 'lg-promo-card-list-title',
  templateUrl: './promo-card-list-title.component.html',
  styleUrls: [ './promo-card-list-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgPromoCardListTitleComponent {
  @HostBinding('class.lg-promo-card-list-title') class = true;

  @Input() headingLevel: HeadingLevel;
}
