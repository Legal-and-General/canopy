import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-footer-logo',
  templateUrl: './footer-logo.component.html',
  styleUrls: [ 'footer-logo.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-logo',
  },
})
export class LgFooterLogoComponent {
  @Input() alt = '';
  @Input() src: string;

  class: 'lg-footer-logo__img' | 'lg-footer-logo__second-img';
}
