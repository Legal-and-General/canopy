import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-principle-data-point-value',
  templateUrl: './card-principle-data-point-value.component.html',
  styleUrls: ['./card-principle-data-point-value.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardPrincipleDataPointValueComponent {
  @HostBinding('class.lg-card-principle-data-point-value') class = true;
}
