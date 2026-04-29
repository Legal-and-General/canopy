import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: [ 'footer-nav.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-nav',
    role: 'navigation',
    'aria-label': 'Footer links',
  },
  standalone: true,
})
export class LgFooterNavComponent {}
