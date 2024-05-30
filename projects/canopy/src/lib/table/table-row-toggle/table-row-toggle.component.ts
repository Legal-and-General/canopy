import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { NgClass } from '@angular/common';

import { lgIconChevronDown, LgIconComponent, LgIconRegistry } from '../../icon';

@Component({
  selector: 'lg-table-row-toggle',
  templateUrl: './table-row-toggle.component.html',
  styleUrls: [ './table-row-toggle.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ LgIconComponent, NgClass ],
})
export class LgTableRowToggleComponent {
  private _tableId: number;
  private _rowId: number;
  context = '';

  @Input() isActive = false;

  @HostBinding('class') class = 'lg-table-row-toggle';

  constructor(
    private cd: ChangeDetectorRef,
    private iconRegistry: LgIconRegistry,
  ) {
    this.iconRegistry.registerIcons([ lgIconChevronDown ]);
  }

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
    return this.isActive
      ? 'Collapse'
      : 'Expand';
  }
}
