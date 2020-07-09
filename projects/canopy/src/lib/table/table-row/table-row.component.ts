import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  ViewEncapsulation,
  Input,
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
  @Input() isHidden = false;

  @HostBinding('class') class = 'lg-table-row';

  @HostBinding('class.lg-table-row--hidden')
  get hideActiveClass() {
    return this.isHidden;
  }

  @HostBinding('attr.id')
  get id() {
    return this.ariaId;
  }

  @HostBinding('attr.aria-hidden')
  get ariaHidden() {
    return this.isHidden ? true : null;
  }

  @HostBinding('attr.aria-labelledby')
  get labelledBy() {
    return this.ariaLabelledBy;
  }

  @ContentChildren(LgTableCellComponent) bodyCells: QueryList<LgTableCellComponent>;

  @ContentChildren(LgTableHeadCellComponent) headCells: QueryList<
    LgTableHeadCellComponent
  >;

  isDetailRow = false;

  ariaLabelledBy: string = null;

  ariaId: string = null;

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
