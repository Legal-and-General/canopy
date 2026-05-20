import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgDataPointComponent } from '../data-point/data-point.component';
import type { DataPointOrientation } from '../data-point.interface';

@Component({
  selector: 'lg-data-point-list',
  templateUrl: './data-point-list.component.html',
  styleUrls: [ './data-point-list.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgDataPointListComponent implements AfterContentInit {
  @HostBinding('class.lg-data-point-list') class = true;
  @HostBinding('class.lg-data-point-list--horizontal')
  get isHorizontal() {
    return this.orientation === 'horizontal';
  }

  @HostBinding('class.lg-data-point-list--vertical')
  get isVertical() {
    return this.orientation === 'vertical';
  }

  @HostBinding('attr.role')
  get role() {
    return this.dataPoints?.length > 1
      ? 'list'
      : null;
  }

  @ContentChildren(forwardRef(() => LgDataPointComponent), {
    descendants: true,
  })
  dataPoints: QueryList<LgDataPointComponent>;

  @Input() orientation: DataPointOrientation = 'horizontal';

  ngAfterContentInit() {
    if (this.dataPoints.length > 4) {
      console.error(
        `LgDataPointListComponent: a maximum of 4 data points are allowed, but ${this.dataPoints.length} were provided.`,
      );
    }

    if (this.dataPoints.length > 1) {
      this.dataPoints.forEach(dataPoint => {
        dataPoint.isListItem = true;
      });
    }
  }
}
