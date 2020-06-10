import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'lg-data-point-value',
  templateUrl: './data-point-value.component.html',
  styleUrls: ['./data-point-value.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgDataPointValueComponent {
  @HostBinding('class.lg-data-point-value') class = true;
}
