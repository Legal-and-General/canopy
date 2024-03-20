import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: [ './modal-footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-modal-footer',
  },
  standalone: true,
})
export class LgModalFooterComponent {}
