import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-modal-body-timer',
  templateUrl: './modal-body-timer.component.html',
  styleUrls: ['./modal-body-timer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgModalBodyTimerComponent {
  @Input() timer: string;

  @HostBinding('class.lg-modal-body__timer') class = true;
}
