import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import type { HeadingLevel } from '../../heading';
import { LgHeadingComponent } from '../../heading/heading.component';

@Component({
  selector: 'lg-hero-card-title',
  templateUrl: './hero-card-title.component.html',
  styleUrls: [ './hero-card-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [ LgHeadingComponent ],
})
export class LgHeroCardTitleComponent {
  @HostBinding('class.lg-hero-card-title') class = true;

  @Input() headingLevel: HeadingLevel;
}
