import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import type { HeadingLevel } from './heading.interface';

@Component({
  selector: 'lg-heading',
  templateUrl: './heading.component.html',
  styleUrls: [ 'heading.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'lg-heading',
  },
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ NgTemplateOutlet ],
})
export class LgHeadingComponent {
  @Input() level: HeadingLevel;
}
