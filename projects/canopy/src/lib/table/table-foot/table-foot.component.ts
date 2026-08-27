import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
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

  @ContentChild(LgTableRowComponent, { static: false }) footRow: LgTableRowComponent;

  ngAfterContentChecked() {
    if (this.footRow) {
      this.footRow.isFootRow = true;
    }
  }
}
