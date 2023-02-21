import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

export interface PageData {
  pageNumber: number;
  startIndex: number;
  endIndex: number;
}

let nextUniqueId = 0;

@Component({
  selector: 'lg-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgPagionationComponent implements OnChanges {
  private _itemsPerPage = 10;
  private _totalItems = 0;
  private _currentPage = 1;
  private startIndex = 1;
  private endIndex = this._itemsPerPage - 1;

  @HostBinding('class') class = 'lg-pagination';
  @HostBinding('role') role = 'navigation';
  @HostBinding('attr.aria-label') ariaLabel = 'Pagination Navigation';
  @HostBinding('id') @Input() id = `lg-pagination-${nextUniqueId++}`;
  @Input()
  get totalItems() {
    return this._totalItems;
  }
  set totalItems(value: number) {
    this._totalItems = value < 0
      ? 0
      : value;
  }

  @Input()
  get itemsPerPage() {
    return this._itemsPerPage;
  }
  set itemsPerPage(value: number) {
    this._itemsPerPage = value < 1
      ? 1
      : value;
  }

  @Input()
  get currentPage() {
    return this._currentPage;
  }
  set currentPage(value: number) {
    this._currentPage = value < 1
      ? 1
      : value > this.numPages
        ? this.numPages
        : value;
  }

  @Output() pageChanged = new EventEmitter<PageData>();

  get numPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages() {
    return [ ...Array(this.numPages).keys() ].map(x => x + 1);
  }

  get label() {
    return `Showing ${this.startIndex + 1}-${this.endIndex + 1} of ${
      this.totalItems
    } results`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemsPerPage']) {
      this.goTo(this.currentPage, changes['itemsPerPage'].firstChange);
    }

    if (changes['totalItems']) {
      this.goTo(1, changes['totalItems'].firstChange);
    }

    if (changes['currentPage']) {
      this.goTo(
        changes['currentPage'].currentValue as number,
        changes['currentPage'].firstChange,
      );
    }
  }

  protected previous(): void {
    this.goTo(this.currentPage - 1);
  }

  protected next(): void {
    this.goTo(this.currentPage + 1);
  }

  protected goTo(pageNumber: number, silent = false): void {
    if (pageNumber < 1 || pageNumber > this.numPages) {
      return;
    }

    this.currentPage = pageNumber;

    this.startIndex = this.currentPage * this.itemsPerPage - this.itemsPerPage;

    this.endIndex = this.startIndex + this.itemsPerPage - 1;

    if (this.endIndex > this.totalItems) {
      this.endIndex = this.totalItems - 1;
    }

    if (!silent) {
      this.pageChanged.emit({
        pageNumber,
        startIndex: this.startIndex,
        endIndex: this.endIndex,
      });
    }
  }
}
