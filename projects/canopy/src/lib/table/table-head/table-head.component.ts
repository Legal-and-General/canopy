import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgTableRowComponent } from '../table-row/table-row.component';

@Component({
  selector: '[lg-table-head]',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableHeadComponent implements AfterViewChecked {
  @HostBinding('class') class = 'lg-table-head';

  @ContentChildren(LgTableRowComponent) headRows: QueryList<LgTableRowComponent>;

  ngAfterViewChecked() {
    this.headRows.forEach(row => (row.isHeadRow = true));
  }
}
