import { Component, Input, ViewEncapsulation } from '@angular/core';

import { HeadingLevel } from './heading.interface';

@Component({
  selector: 'lg-heading',
  templateUrl: './heading.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LgHeadingComponent {
  @Input() level: HeadingLevel;
}
