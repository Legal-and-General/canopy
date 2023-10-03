import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: [ './modal-body.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-modal-body',
  },
})
export class LgModalBodyComponent {
  @HostBinding('id') id: string;
}
