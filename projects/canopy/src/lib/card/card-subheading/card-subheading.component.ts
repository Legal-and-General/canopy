import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
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
  standalone: true,
  imports: [ LgHeadingComponent ],
})
export class LgCardSubheadingComponent {
  @Input() headingLevel: HeadingLevel;

  ngOnInit(): void {
    if (!this.headingLevel) {
      // eslint-disable-next-line no-console
      console.error('headingLevel must be set');
    }
  }
}
