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
  selector: 'lg-data-point-label',
  templateUrl: './data-point-label.component.html',
  styleUrls: [ './data-point-label.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ LgHeadingComponent ],
})
export class LgDataPointLabelComponent {
  @HostBinding('class.lg-data-point-label') class = true;

  @Input() headingLevel: HeadingLevel;
}
