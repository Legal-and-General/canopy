import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgModalBodyComponent {
  @HostBinding('class.lg-modal-body') class = true;
  @HostBinding('id') id: string;
}
