import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lg-card-content-inner-data-points',
  templateUrl: './card-content-inner-data-points.component.html',
  styleUrls: [ './card-content-inner-data-points.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgCardContentInnerDataPointsComponent {
  @HostBinding('class.lg-card-content-inner-data-points') class = true;
}
