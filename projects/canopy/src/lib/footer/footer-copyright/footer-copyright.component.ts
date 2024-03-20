import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-footer-copyright',
  templateUrl: './footer-copyright.component.html',
  styleUrls: [ 'footer-copyright.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-copyright',
  },
  standalone: true,
})
export class LgFooterCopyrightComponent {}
