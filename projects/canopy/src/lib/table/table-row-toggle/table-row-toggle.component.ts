import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'lg-table-row-toggle',
  templateUrl: './table-row-toggle.component.html',
  styleUrls: ['./table-row-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableRowToggleComponent {
  @HostBinding('class') class = 'lg-table-row-toggle';

  @Input() isActive = false;

  set tableId(tableId: number) {
    this._tableId = tableId;

    this.cd.detectChanges();
  }

  get tableId() {
    return this._tableId;
  }

  set rowId(rowId: number) {
    this._rowId = rowId;

    this.cd.detectChanges();
  }

  get rowId() {
    return this._rowId;
  }

  get controlsId() {
    return `lg-table-${this.tableId}-detail-row-${this.rowId}`;
  }

  get id() {
    return `lg-table-${this.tableId}-toggle-row-${this.rowId}`;
  }

  get labelText() {
    return this.isActive ? 'Collapse' : 'Expand';
  }

  context = '';

  private _tableId: number;

  private _rowId: number;

  constructor(private cd: ChangeDetectorRef) {}
}
