import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
  AfterContentChecked,
  ContentChild,
} from '@angular/core';

import { LgTableRowComponent } from '../table-row/table-row.component';

@Component({
  selector: '[lg-table-head]',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableHeadComponent implements AfterContentChecked {
  @HostBinding('class') class = 'lg-table-head';

  @ContentChild(LgTableRowComponent, { static: false }) headRow: LgTableRowComponent;

  ngAfterContentChecked() {
    if (this.headRow) {
      this.headRow.isHeadRow = true;
    }
  }
}
