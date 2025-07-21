import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation, OnInit,
} from '@angular/core';

import { HeadingLevel } from '../../heading';
import { LgHeadingComponent } from '../../heading';

@Component({
  selector: 'lg-card-subheading',
  templateUrl: './card-subheading.component.html',
  styleUrls: [ './card-subheading.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-card-subheading',
  },
  imports: [ LgHeadingComponent ],
})
export class LgCardSubheadingComponent implements OnInit {
  @Input() headingLevel: HeadingLevel;

  ngOnInit(): void {
    if (!this.headingLevel) {

      console.error('headingLevel must be set');
    }
  }
}
