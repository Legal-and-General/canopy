import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';
import { LgHeadingComponent } from '../../heading';
import { LgDataPointComponent } from '../data-point/data-point.component';

@Component({
  selector: 'lg-data-point-label',
  templateUrl: './data-point-label.component.html',
  styleUrls: [ './data-point-label.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ LgHeadingComponent ],
})
export class LgDataPointLabelComponent {
  private readonly dataPoint = inject(LgDataPointComponent, { optional: true });

  @HostBinding('class.lg-data-point-label') class = true;

  @HostBinding('class.lg-data-point-label--card-principle')
  get isCardPrinciple() {
    return this.dataPoint?.variant === 'card-principle';
  }

  @HostBinding('class.lg-data-point-label--bold')
  get boldClass() {
    return this.isBold;
  }

  @Input({ required: true }) headingLevel: HeadingLevel;
  @Input() isBold = false;
}
