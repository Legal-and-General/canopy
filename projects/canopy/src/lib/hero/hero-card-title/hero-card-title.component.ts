import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';
import { LgHeadingComponent } from '../../heading';

@Component({
  selector: 'lg-hero-card-title',
  templateUrl: './hero-card-title.component.html',
  styleUrls: [ './hero-card-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ LgHeadingComponent ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgHeroCardTitleComponent {
  @HostBinding('class.lg-hero-card-title') class = true;

  @Input() headingLevel: HeadingLevel;
}
