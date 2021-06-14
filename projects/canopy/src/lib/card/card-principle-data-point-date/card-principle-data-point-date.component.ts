import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-principle-data-point-date',
  templateUrl: './card-principle-data-point-date.component.html',
  styleUrls: ['./card-principle-data-point-date.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardPrincipleDataPointDateComponent {
  @HostBinding('class.lg-card-principle-data-point-date') class = true;
}
