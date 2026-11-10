import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { randomUniqueId } from '../../utils';

@Component({
  selector: '[lg-label]',
  templateUrl: './label.component.html',
  styleUrls: [ './label.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class LgLabelComponent {
  @Input()
  @HostBinding('class.lg-label')
  class = true;

  @Input()
  @HostBinding('attr.id')
  id = `lg-label-${randomUniqueId()}`;

  @Input()
  @HostBinding('attr.for')
  for: string;
}
