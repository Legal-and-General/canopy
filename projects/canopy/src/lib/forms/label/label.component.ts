import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: '[lg-label]',
  templateUrl: './label.component.html',
  styleUrls: [ './label.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgLabelComponent {
  @Input()
  @HostBinding('class.lg-label')
  class = true;

  @Input()
  @HostBinding('attr.id')
  id = `lg-label-${nextUniqueId++}`;

  @Input()
  @HostBinding('attr.for')
  for: string;
}
