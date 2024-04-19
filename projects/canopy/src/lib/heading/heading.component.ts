import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

import type { HeadingLevel } from './heading.interface';

@Component({
  selector: 'lg-heading',
  templateUrl: './heading.component.html',
  styleUrls: [ 'heading.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'lg-heading',
  },
  standalone: true,
  imports: [ NgIf, NgTemplateOutlet ],
})
export class LgHeadingComponent {
  @Input() level: HeadingLevel;
}
