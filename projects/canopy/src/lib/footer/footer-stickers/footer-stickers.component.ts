import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-footer-stickers',
  templateUrl: './footer-stickers.component.html',
  styleUrls: [ './footer-stickers.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-stickers',
  },
  standalone: true,
})
export class LgFooterStickersComponent {}
