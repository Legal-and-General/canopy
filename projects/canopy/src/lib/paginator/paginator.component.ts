import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  InjectionToken,
  Input,
  Optional,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import {
  lgIconChevronLeft,
  lgIconChevronRight,
  lgIconGotoFirst,
  lgIconGotoLast
} from '../icon/icons.interface';

/**
 * Event raised when the page index is updated
 */
export interface PaginationEvent {
  /**
   * The selected page index.
   */
  pageIndex: number;

  /**
   * The selected page size.
   */
  pageSize: number;

  /**
   * The previously selected page index.
   */
  previousIndex: number;
}

/**
 * New paginator default options.
 */
export interface PaginationOptions {
  /**
   * The page size.
   */
  pageSize?: number;

  /**
   * The list of page sizes.
   */
  pageSizes?: Array<number>;

  /**
   * Flag to hide the page size selector.
   */
  hidePageSize?: boolean;

  /**
   * Flag to show the first and last page buttons.
   */
  showFirstLastButtons?: boolean;
}

/**
 * Injection token for setting default paginator options.
 */
export const LG_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken<PaginationOptions>(
  'LG_PAGINATOR_DEFAULT_OPTIONS',
);

let nextId = 0;

/**
 * A pagination component used to control the number of items shown in a page context.
 *
 * @example
 * <lg-paginator [length]="tableItems.length" (page)="handleSelectPage($event)"></lg-paginator>
 */
@Component({
  selector: 'lg-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgPaginatorComponent {
  /**
   * Zero based index for the currently selected page.
   */
  @Input()
  get pageIndex(): number {
    return this._pageIndex;
  }
  set pageIndex(index: number) {
    this._pageIndex = index;
    this.setState();
  }
  private _pageIndex = 0;

  /**
   * The number of items shown per page.
   */
  @Input()
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(size: number) {
    this._pageSize = size;
    this.pageIndex = 0;
    this.setState();
  }
  private _pageSize = 10;

  /**
   * The total length of items available.
   */
  @Input()
  get length(): number {
    return this._length;
  }
  set length(length: number) {
    this._length = length;
    this.pageIndex = 0;
    this.setState();
  }
  private _length: number;

  /**
   * The list of available page sizes to select.
   */
  @Input() pageSizes = [10, 20, 50, 100];

  /**
   * Flag to determine if the page size selection field should be shown.
   */
  @Input() hidePageSize = false;

  /**
   * Flag to determine if the first and last page controls should be shown.
   */
  @Input() showFirstLastButtons = false;

  /**
   * Output that emits a pagination event when the selected page index changes.
   */
  @Output() readonly page = new EventEmitter<PaginationEvent>();

  /**
   * The id attribute of the component host element.
   */
  @HostBinding('id')
  id = `lg-paginator-${nextId++}`;

  /**
   * The lg-paginator class name added to the host element.
   */
  @HostBinding('class.lg-paginator')
  class = true;

  currentPageStart = 1;
  currentPageEnd = 1;

  prevIcon = lgIconChevronLeft.name;
  nextIcon = lgIconChevronRight.name;
  firstIcon = lgIconGotoFirst.name;
  lastIcon = lgIconGotoLast.name;

  /**
   * Creates the paginator from any defined default options.
   *
   * @param cdr injected change detector ref
   * @param defaults default paginator options
   */
  constructor(
    private cdr: ChangeDetectorRef,
    @Optional() @Inject(LG_PAGINATOR_DEFAULT_OPTIONS) defaults?: PaginationOptions,
  ) {
    if (defaults) {
      const { pageSize, pageSizes, hidePageSize, showFirstLastButtons } = defaults;

      if (pageSize) {
        this.pageSize = pageSize;
      }

      if (pageSizes) {
        this.pageSizes = pageSizes;
      }

      if (hidePageSize) {
        this.hidePageSize = hidePageSize;
      }

      if (showFirstLastButtons) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
  }

  /**
   * Event handler for page size selection change.
   *
   * @param size the selected page size
   */
  handleSelectPageSize(size: string) {
    this.pageSize = parseInt(size, 10);
    this.setPageIndex(0);
  }

  /**
   * Event handler for navigation to the next page.
   */
  handleNextPage() {
    this.setPageIndex(this.pageIndex + 1);
  }

  /**
   * Event handler for navigation to the previous page.
   */
  handlePrevPage() {
    this.setPageIndex(this.pageIndex - 1);
  }

  /**
   * Event handler for the show first page button. Sets the page index to 0
   */
  handleShowFirstPage() {
    this.setPageIndex(0);
  }

  /**
   * Event handler for the show last page button. Sets the page index to that of the last
   * page of results.
   */
  handleShowLastPage() {
    const totalPages = this.length / this.pageSize;
    const index = this.length % this.pageSize ? Math.floor(totalPages) : totalPages - 1;

    this.setPageIndex(index);
  }

  /**
   * Sets the component state based on the page index and size before marking the
   * component to be checked for change detection.
   */
  private setState() {
    const startIndex = this.pageIndex * this.pageSize;
    const start = startIndex + 1;
    const end = startIndex + this.pageSize;

    this.currentPageStart = start;
    this.currentPageEnd = end > this.length ? this.length : end;

    this.cdr.markForCheck();
  }

  /**
   * Sets the page index and emits the page event.
   *
   * @param index the new page index
   */
  private setPageIndex(index: number) {
    this.page.emit({
      pageIndex: index,
      pageSize: this.pageSize,
      previousIndex: this.pageIndex,
    });
    this.pageIndex = index;
  }
}
