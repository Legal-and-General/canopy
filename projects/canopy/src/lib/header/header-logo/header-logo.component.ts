import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: [ 'header-logo.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-header-logo',
  },
})
export class LgHeaderLogoComponent {
  @Input() alt = '';
  @Input() src: string;
  @Input() href: string;

  class: string;
}
