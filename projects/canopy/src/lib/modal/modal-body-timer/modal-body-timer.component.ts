import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-modal-body-timer',
  templateUrl: './modal-body-timer.component.html',
  styleUrls: ['./modal-body-timer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgModalBodyTimerComponent implements OnInit {
  @Input() timer: number;
  formattedTime: string | number;

  @HostBinding('class.lg-modal-body__timer') class = true;

  ngOnInit() {
    this.formattedTime = `${Math.floor(this.timer / 60)}:${(
      '0' +
      (this.timer % 60)
    ).slice(-2)}`;
  }
}
