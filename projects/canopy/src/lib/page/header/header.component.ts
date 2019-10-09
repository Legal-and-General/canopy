import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: '[lg-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgHeaderComponent {
  @HostBinding('class') class = 'lg-header';

  @Input() logo: string;
  @Input() logoHeight = '3rem';
  @Input() logoAlt: string;
  @Input() logoHref: string;
}
