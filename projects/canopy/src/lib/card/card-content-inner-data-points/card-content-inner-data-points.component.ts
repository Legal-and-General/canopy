import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-card-content-inner-data-points',
  templateUrl: './card-content-inner-data-points.component.html',
  styleUrls: [ './card-content-inner-data-points.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgCardContentInnerDataPointsComponent {
  @HostBinding('class.lg-card-content-inner-data-points') class = true;
}
