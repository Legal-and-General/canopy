import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';
import { LgHeadingComponent } from '../../heading/heading.component';

@Component({
  selector: 'lg-hero-card-data-point-label',
  templateUrl: './hero-card-data-point-label.component.html',
  styleUrls: [ './hero-card-data-point-label.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ LgHeadingComponent ],
})
export class LgHeroCardDataPointLabelComponent {
  @HostBinding('class.lg-hero-card-data-point-label') class = true;

  @Input() headingLevel: HeadingLevel;
}
