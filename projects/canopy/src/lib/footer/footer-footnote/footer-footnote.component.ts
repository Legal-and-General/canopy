import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-footer-footnote',
  templateUrl: './footer-footnote.component.html',
  styleUrls: [ './footer-footnote.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-footnote',
  },
  standalone: true,
})
export class LgFooterFootnoteComponent {}
