import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
  AfterContentChecked,
  ContentChild,
} from '@angular/core';

import { LgTableBodyComponent } from '../table-body/table-body.component';
import { LgTableHeadComponent } from '../table-head/table-head.component';
import { TableColumn } from '../table.interface';

let nextUniqueId = 0;

@Component({
  selector: '[lg-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableComponent implements AfterContentChecked {
  @HostBinding('class') class = 'lg-table';

  @ContentChild(LgTableHeadComponent, { static: false }) tableHead: LgTableHeadComponent;

  @ContentChild(LgTableBodyComponent, { static: false }) tableBody: LgTableBodyComponent;

  @HostBinding('class.lg-table--expandable')
  get expandableClass() {
    return this.isExpandable;
  }

  isExpandable = false;

  id = nextUniqueId++;

  columns = new Map<number, TableColumn>();

  ngAfterContentChecked() {
    if (this.tableHead && this.tableBody) {
      this.tableBody.rows.forEach((row) =>
        row.bodyCells.forEach((cell) => {
          if (cell.expandableDetail) {
            row.isDetailRow = true;
          }
        }),
      );
      this.isExpandable = this.tableBody.rows.some((row) => row.isDetailRow);

      this.handleHeadCells();

      this.handleDetailRows();

      this.handleBodyRows();
    }
  }

  private handleHeadCells() {
    const headCells = this.tableHead.headRow.headCells;
    headCells.forEach((cell, cellIndex) => {
      this.columns.set(cellIndex, {
        align: cell.align,
        label: cell.element.nativeElement.innerHTML,
        showLabel: cell.showLabel,
      });
    });
  }

  private handleDetailRows() {
    this.tableBody.rows
      .filter((row) => row.isDetailRow)
      .forEach((detailRow, index) => {
        detailRow.ariaId = `lg-table-${this.id}-detail-row-${index}`;
        detailRow.ariaLabelledBy = `lg-table-${this.id}-toggle-row-${index}`;
      });
  }

  private handleBodyRows() {
    this.tableBody.rows
      .filter((row) => !row.isDetailRow)
      .forEach((row, index) => {
        row.bodyCells
          .filter((cell) => !cell.expandableDetail)
          .forEach((cell, cellIndex) => {
            const { align, showLabel, label } = this.columns.get(cellIndex);

            cell.align = align;
            cell.showLabel = showLabel;
            cell.label.nativeElement.innerHTML = label;
            cell.tableId = this.id;
          });

        let toggleContext = '';

        row.bodyCells.forEach((cell, cellIndex) => {
          if (cellIndex === 1) {
            // assume column index 0 is for the toggle
            toggleContext = cell.content.nativeElement.innerHTML;
          }
        });

        row.bodyCells
          .filter((cell) => !!cell.toggle)
          .forEach((cell) => {
            cell.toggle.tableId = this.id;
            cell.toggle.rowId = index;
            cell.toggle.context = toggleContext;
          });
      });
  }
}
