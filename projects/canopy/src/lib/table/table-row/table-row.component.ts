import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgTableCellComponent } from '../table-cell/table-cell.component';
import { LgTableHeadCellComponent } from '../table-head-cell/table-head-cell.component';
import { TableRowVariant } from '../table.interface';

@Component({
  selector: '[lg-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: [ './table-row.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgTableRowComponent {
  private cd = inject(ChangeDetectorRef);
  private hostElement = inject(ElementRef);
  private renderer = inject(Renderer2);

  private _isHeadRow = false;
  set isHeadRow(isHeadRow: boolean) {
    this._isHeadRow = isHeadRow;

    this.cd.detectChanges();
  }
  get isHeadRow() {
    return this._isHeadRow;
  }

  private _isFootRow = false;
  set isFootRow(isFootRow: boolean) {
    this._isFootRow = isFootRow;
    this.cd.detectChanges();
  }
  get isFootRow() {
    return this._isFootRow;
  }

  private _isStripedEvenRow = false;
  set isStripedEvenRow(isStripedEvenRow: boolean) {
    this._isStripedEvenRow = isStripedEvenRow;

    this.setStripedEvenRowClasses();
  }
  get isStripedEvenRow() {
    return this._isStripedEvenRow;
  }

  private _rowVariant: TableRowVariant | null = null;
  @Input()
  set rowVariant(rowVariant: TableRowVariant | null) {
    this._rowVariant = rowVariant;

    this.setStripedEvenRowClasses();
  }
  get rowVariant() {
    return this._rowVariant;
  }

  isDetailRow = false;
  ariaLabelledBy: string | null = null;
  ariaId: string | null = null;
  @Input() isHidden = false;

  @HostBinding('class') class = 'lg-table-row';

  @HostBinding('class.lg-table-row--hidden')
  get hideActiveClass() {
    return this.isHidden;
  }

  @HostBinding('class.lg-table-row--error')
  get isError() {
    return this.rowVariant === 'error';
  }

  @HostBinding('class.lg-status-error')
  get hasErrorStatus() {
    return this.isError;
  }

  @HostBinding('class.lg-theme-neutral-inverse')
  get hasErrorTheme() {
    return this.isError;
  }

  @HostBinding('class.lg-theme-subtle')
  get hasSelectedTheme() {
    return this.isSelected;
  }

  @HostBinding('class.lg-table-row--selected')
  get isSelected() {
    return this.rowVariant === 'selected';
  }

  @HostBinding('class.lg-table-row--footer')
  get isFooter() {
    return this.isFootRow;
  }

  @HostBinding('class.lg-mode-blue')
  get isBlueMode() {
    return this.isSelected;
  }

  @HostBinding('attr.id')
  get id() {
    return this.ariaId;
  }

  @HostBinding('attr.aria-hidden')
  get ariaHidden() {
    return this.isHidden
      ? true
      : null;
  }

  @HostBinding('attr.aria-labelledby')
  get labelledBy() {
    return this.ariaLabelledBy;
  }

  @ContentChildren(LgTableCellComponent) bodyCells: QueryList<LgTableCellComponent> =
    new QueryList();

  @ContentChildren(LgTableHeadCellComponent)
  headCells: QueryList<LgTableHeadCellComponent> = new QueryList();

  @ContentChild(LgTableCellComponent, { static: true })
  tableCellComponent: LgTableCellComponent | undefined;

  @HostBinding('class.lg-table-row__toggle--active')
  get isToggledActive(): boolean {
    return !!this.tableCellComponent?.toggleClass?.isActive;
  }

  @HostBinding('class.lg-table-row__toggle')
  get hasToggle(): boolean {
    return !!this.tableCellComponent?.toggleClass;
  }

  private setStripedEvenRowClasses() {
    const shouldUseBlueMode = this.isStripedEvenRow && !this.isError;

    if (this.isStripedEvenRow) {
      this.renderer.addClass(this.hostElement.nativeElement, 'lg-theme-neutral-inverse');
    } else {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        'lg-theme-neutral-inverse',
      );
    }

    if (shouldUseBlueMode) {
      this.renderer.addClass(this.hostElement.nativeElement, 'lg-mode-blue');
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, 'lg-mode-blue');
    }
  }
}
