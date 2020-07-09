import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation,
  ContentChild,
} from '@angular/core';

import { LgTableExpandedDetailComponent } from '../table-expanded-detail/table-expanded-detail.component';
import { AlignmentOptions } from '../table.interface';
import { LgTableRowToggleComponent } from '../table-row-toggle/table-row-toggle.component';

@Component({
  selector: '[lg-table-cell]',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableCellComponent {
  @HostBinding('class') class = 'lg-table-cell';

  @HostBinding('attr.colspan')
  get colspanAttr() {
    return typeof this.colspan !== undefined ? this.colspan : null;
  }

  @HostBinding('class.lg-table-cell--toggle-cell')
  get toggleClass() {
    return this.toggle;
  }

  @ViewChild('label', { static: true })
  label: ElementRef;

  @ViewChild('content', { static: true })
  content: ElementRef;

  @ContentChild(LgTableExpandedDetailComponent, { static: false })
  expandableDetail: LgTableExpandedDetailComponent;

  @ContentChild(LgTableRowToggleComponent, { static: false })
  toggle: LgTableRowToggleComponent;

  @Input() colspan: number;

  alignOptions = AlignmentOptions;

  set rowIndex(rowIndex: number) {
    this._rowIndex = rowIndex;
  }

  get rowIndex() {
    return this._rowIndex;
  }

  set tableId(tableId: number) {
    this._tableId = tableId;
  }

  get tableId() {
    return this._tableId;
  }

  set columnLabel(columnLabel: string) {
    this._columnLabel = columnLabel;

    this.cd.detectChanges();
  }

  get columnLabel() {
    return this._columnLabel;
  }

  set align(align: AlignmentOptions) {
    this._align = align;

    this.cd.detectChanges();
  }

  get align() {
    return this._align;
  }

  private _align: AlignmentOptions = AlignmentOptions.Start;

  private _columnLabel = '';

  private _rowIndex: number;

  private _tableId: number;

  constructor(private cd: ChangeDetectorRef) {}
}
