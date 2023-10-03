import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-modal-body-timer',
  templateUrl: './modal-body-timer.component.html',
  styleUrls: [ './modal-body-timer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-modal-body__timer',
  },
})
export class LgModalBodyTimerComponent {
  private _timer: number;
  formattedTime: string;

  @Input()
  set timer(seconds: number | string) {
    if (typeof seconds === 'string') {
      seconds = parseInt(seconds, 10);
    }

    this._timer = seconds;

    this.formattedTime = `${Math.floor(this._timer / 60)}:${(
      '0' + `${this._timer % 60}`
    ).slice(-2)}`;
  }
}
