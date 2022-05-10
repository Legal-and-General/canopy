import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-card-principle-data-point-label',
  templateUrl: './card-principle-data-point-label.component.html',
  styleUrls: [ './card-principle-data-point-label.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardPrincipleDataPointLabelComponent {
  @HostBinding('class.lg-card-principle-data-point-label') class = true;
}
