import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-top-area',
  templateUrl: './card-top-area.component.html',
  styleUrls: ['./card-top-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardTopAreaComponent {
  @HostBinding('class.lg-card-top-area') class = true;
}
