import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgTableRowComponent } from '../table-row/table-row.component';

@Component({
  selector: '[lg-table-foot]',
  templateUrl: './table-foot.component.html',
  styleUrls: [ './table-foot.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgTableFootComponent implements AfterContentChecked {
  @HostBinding('class') class = 'lg-table-foot';

  @ContentChildren(LgTableRowComponent) footRows!: QueryList<LgTableRowComponent>;

  ngAfterContentChecked() {
    this.footRows?.forEach(row => {
      row.isFootRow = true;
    });
  }
}
