import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';
import { LgHeadingComponent } from '../../heading';

@Component({
  selector: 'lg-content-area-title',
  templateUrl: './content-area-title.component.html',
  styleUrls: [ './content-area-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ LgHeadingComponent ],
})
export class LgContentAreaTitleComponent {
  @HostBinding('class.lg-content-area-title') class = true;

  @Input() headingLevel: HeadingLevel;
}
