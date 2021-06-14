import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import { HeadingLevel } from '../../heading';

@Component({
  selector: 'lg-hero-card-title',
  templateUrl: './hero-card-title.component.html',
  styleUrls: ['./hero-card-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgHeroCardTitleComponent {
  @HostBinding('class.lg-hero-card-title') class = true;

  @Input() headingLevel: HeadingLevel;
}
