import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: '[lg-label]',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgLabelComponent {
  @Input()
  @HostBinding('class')
  class = 'lg-label';

  @Input()
  @HostBinding('attr.id')
  id: string;

  @Input()
  @HostBinding('attr.for')
  for: string;
}
