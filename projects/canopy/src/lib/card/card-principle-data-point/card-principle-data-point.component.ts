import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-principle-data-point',
  templateUrl: './card-principle-data-point.component.html',
  styleUrls: ['./card-principle-data-point.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardPrincipleDataPointComponent {
  @HostBinding('class.lg-card-principle-data-point') class = true;
}
