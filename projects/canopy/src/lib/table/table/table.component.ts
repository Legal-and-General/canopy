import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  OnDestroy,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LgTableHeadComponent } from '../table-head/table-head.component';
import { LgTableRowComponent } from '../table-row/table-row.component';

@Component({
  selector: 'lg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgTableComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class') class = 'lg-table';

  @HostBinding('attr.role') role = 'table';

  @ContentChildren(LgTableRowComponent) rows: QueryList<LgTableRowComponent>;

  headerRow: LgTableRowComponent;

  bodyRows: LgTableRowComponent[];

  private subscription: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.subscription = this.rows.changes.subscribe(() => {
      this.handleRows();
    });

    this.handleRows();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

      this.rows
        .filter(row => row.headCells.length === 0)
        .forEach(row => {
          row.cells.forEach(({ label }, i) => {
            label.nativeElement.innerHTML = headContent[i];
          });
        });
    }
  }
}
