import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-bottom-area',
  templateUrl: './card-bottom-area.component.html',
  styleUrls: ['./card-bottom-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardBottomAreaComponent {
  @HostBinding('class.lg-card-bottom-area') class = true;
}
