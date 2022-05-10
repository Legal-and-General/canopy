import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';

@Component({
  selector: 'lg-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: [ './card-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardTitleComponent {
  @HostBinding('class.lg-card-title') class = true;

  @Input() headingLevel: HeadingLevel;
}
