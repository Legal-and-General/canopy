import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Output,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgTableCellComponent } from '../table-cell/table-cell.component';
import { LgTableHeadCellComponent } from '../table-head-cell/table-head-cell.component';

@Component({
  selector: '[lg-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableRowComponent {
  @Output() toggleDetail = new EventEmitter();

  @HostBinding('class') class = 'lg-table-row';

  @ContentChildren(LgTableCellComponent) bodyCells: QueryList<LgTableCellComponent>;

  @ContentChildren(LgTableHeadCellComponent) headCells: QueryList<
    LgTableHeadCellComponent
  >;

  set isHeadRow(isHeadRow: boolean) {
    this._isHeadRow = isHeadRow;

    this.cd.detectChanges();
  }

  get isHeadRow() {
    return this._isHeadRow;
  }

  private _isHeadRow = false;

  constructor(private cd: ChangeDetectorRef) {}
}
