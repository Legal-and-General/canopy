import {
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgDataPointComponent } from '../../data-point';

@Component({
  selector: 'lg-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: [ './card-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgCardContentComponent {
  @HostBinding('class.lg-card-content') class = true;
  @ContentChildren(forwardRef(() => LgDataPointComponent), {
    descendants: true,
  })
  dataPoints: QueryList<LgDataPointComponent>;
  @HostBinding('class.lg-card-content--data-points') dataPointsClass() {
    return this.dataPoints.length;
  }
}
