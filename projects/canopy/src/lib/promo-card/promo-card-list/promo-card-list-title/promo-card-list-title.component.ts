import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../../heading';
import { LgHeadingComponent } from '../../../heading/heading.component';

@Component({
  selector: 'lg-promo-card-list-title',
  templateUrl: './promo-card-list-title.component.html',
  styleUrls: [ './promo-card-list-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ LgHeadingComponent ],
})
export class LgPromoCardListTitleComponent {
  @HostBinding('class.lg-promo-card-list-title') class = true;

  @Input() headingLevel: HeadingLevel;
}
