import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgDataPointComponent } from '../data-point/data-point.component';

@Component({
  selector: 'lg-data-point-list',
  templateUrl: './data-point-list.component.html',
  styleUrls: ['./data-point-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgDataPointListComponent implements AfterContentInit {
  @HostBinding('class.lg-data-point-list') class = true;
  @HostBinding('attr.role') attr = 'list';

  @ContentChildren(forwardRef(() => LgDataPointComponent), {
    descendants: true,
  })
  dataPoints: QueryList<LgDataPointComponent>;

  ngAfterContentInit() {
    this.dataPoints.forEach(dataPoint => {
      dataPoint.isListItem = true;
    });
  }
}
