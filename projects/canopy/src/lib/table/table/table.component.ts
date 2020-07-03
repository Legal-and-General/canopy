import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { LgTableHeadComponent } from '../table-head/table-head.component';
import { LgTableRowComponent } from '../table-row/table-row.component';

@Component({
  selector: 'lg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgTableComponent implements AfterViewChecked {
  @HostBinding('class') class = 'lg-table';

  @HostBinding('attr.role') role = 'table';

  @ContentChildren(LgTableRowComponent) rows: QueryList<LgTableRowComponent>;

  headerRow: LgTableRowComponent;

  bodyRows: LgTableRowComponent[];

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.handleRows();
  }

  private handleRows() {
    if (this.rows) {
      this.headerRow = this.rows.find(row => !!row.headCells.length);

      this.bodyRows = this.rows.filter(row => !row.headCells.length);

      this.updateLabels();

      this.cd.detectChanges();
    }
  }

  private updateLabels() {
    if (this.headerRow) {
      const headContent: string[] = this.headerRow.headCells.map(
        (cell: LgTableHeadComponent) => cell.element.nativeElement.innerHTML
      );

      const headCellList: LgTableHeadComponent[] = this.headerRow.headCells.toArray();

      this.rows
        .filter(row => row.headCells.length === 0)
        .forEach(row => {
          row.cells.forEach((cell, i) => {
            cell.align = headCellList[i].align;
            cell.label.nativeElement.innerHTML = headContent[i];
          });
        });
    }
  }
}
