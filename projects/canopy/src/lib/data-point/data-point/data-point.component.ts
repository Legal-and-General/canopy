import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import type { DataPointVariant } from '../data-point.interface';

@Component({
  selector: 'lg-data-point',
  templateUrl: './data-point.component.html',
  styleUrls: [ './data-point.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgDataPointComponent {
  @HostBinding('class.lg-data-point') class = true;

  @HostBinding('class.lg-data-point--card-principle')
  get isCardPrinciple() {
    return this.variant === 'card-principle';
  }

  @HostBinding('attr.role')
  get role() {
    return this.isListItem
      ? 'listitem'
      : null;
  }

  @Input() isListItem: boolean;
  @Input() variant: DataPointVariant = 'default';
}
