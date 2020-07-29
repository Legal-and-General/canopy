import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgTableBodyComponent } from '../table-body/table-body.component';
import { LgTableHeadComponent } from '../table-head/table-head.component';
import { TableColumn } from '../table.interface';

@Component({
  selector: '[lg-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableComponent implements AfterViewChecked {
  @HostBinding('class') class = 'lg-table';

  @ContentChildren(LgTableHeadComponent) tableHead: QueryList<LgTableHeadComponent>;

  @ContentChildren(LgTableBodyComponent) tableBody: QueryList<LgTableBodyComponent>;

  columns = new Map<number, TableColumn>();

  ngAfterViewChecked() {
    this.handleRows();
  }

  private handleRows() {
    if (this.tableHead.length && this.tableBody.length) {
      const headCells = this.tableHead.first.headRows.first.headCells;
      headCells.forEach((cell, cellIndex) => {
        this.columns.set(cellIndex, {
          align: cell.align,
          label: cell.element.nativeElement.innerHTML,
        });
      });

      this.tableBody.first.rows.forEach(row => {
        row.bodyCells.forEach((cell, cellIndex) => {
          cell.align = this.columns.get(cellIndex).align;
          cell.label.nativeElement.innerHTML = this.columns.get(cellIndex).label;
        });
      });
    }
  }
}
