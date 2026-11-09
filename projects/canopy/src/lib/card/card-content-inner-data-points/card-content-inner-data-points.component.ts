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
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class LgCardContentInnerDataPointsComponent {
  @HostBinding('class.lg-card-content-inner-data-points') class = true;
}
