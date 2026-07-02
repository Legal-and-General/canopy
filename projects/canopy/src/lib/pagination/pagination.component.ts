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

import { LgIconComponent } from '../icon';
import { randomUniqueId } from '../utils';

export interface PageData {
  pageNumber: number;
  startIndex: number;
  endIndex: number;
}

type PageControl = { type: 'page'; page: number } | { type: 'ellipsis' };

@Component({
  selector: 'lg-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ LgIconComponent ],
})
export class LgPaginationComponent implements OnChanges {
  private static readonly maxTotalControls = 9;

  private _itemsPerPage = 10;
  private _totalItems = 0;
  private _currentPage = 1;
  private startIndex = 1;
  private endIndex = this._itemsPerPage - 1;

  @HostBinding('class') class = 'lg-pagination';
  @HostBinding('attr.role') role = 'navigation';
  @HostBinding('attr.aria-label') ariaLabel = 'Pagination Navigation';
  @HostBinding('id') @Input() id = `lg-pagination-${randomUniqueId()}`;
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
    const maxPage = Math.max(1, this.numPages);

    this._currentPage = value < 1
      ? 1
      : value > maxPage
        ? maxPage
        : value;
  }

  @Output() pageChanged = new EventEmitter<PageData>();

  get numPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages() {
    return [ ...Array(this.numPages).keys() ].map(x => x + 1);
  }

  get hasItems(): boolean {
    return this.totalItems > 0;
  }

  get startItem() {
    return this.hasItems
      ? this.startIndex + 1
      : 0;
  }

  get endItem() {
    return this.hasItems
      ? Math.min(this.endIndex + 1, this.totalItems)
      : 0;
  }

  /**
   * Desktop controls: generate a list of controls (page numbers and ellipses)
   * preserving first, last, current and neighbours while keeping total controls
   * (including prev/next and ellipses) within 9.
   */
  get desktopControls(): Array<PageControl> {
    const total = this.numPages;
    const maxInnerControls = LgPaginationComponent.maxTotalControls - 2;

    if (total <= maxInnerControls) {
      return this.toPageControls(this.pages);
    }

    const first = 1;
    const last = total;
    const current = this.currentPage;
    const pageSet = new Set<number>([ first, last, current ]);

    for (const offset of [ -1, 1, -2, 2 ]) {
      const page = current + offset;

      if (page <= first || page >= last) {
        continue;
      }

      const nextSet = new Set(pageSet);

      nextSet.add(page);

      if (this.getControlCount(nextSet) <= maxInnerControls) {
        pageSet.add(page);
      }
    }

    return this.getControlsFromPages(pageSet);
  }

  /** Mobile controls: sliding window of 3 pages centered on current where possible */
  get mobileControls(): Array<PageControl> {
    const total = this.numPages;
    const mobileWindowSize = 3;

    if (total <= mobileWindowSize) {
      return this.toPageControls(this.pages);
    }

    const current = this.currentPage;
    let start = current - 1;

    if (start < 1) {
      start = 1;
    }

    if (start + mobileWindowSize - 1 > total) {
      start = total - (mobileWindowSize - 1);
    }

    return this.toPageControls(this.getSequentialPages(start, mobileWindowSize));
  }

  /** Tablet controls: sliding window of 5 pages centered on current where possible */
  get tabletControls(): Array<PageControl> {
    const total = this.numPages;
    const tabletWindowSize = 5;

    if (total <= tabletWindowSize) {
      return this.toPageControls(this.pages);
    }

    const current = this.currentPage;
    let start = current - 2;

    if (start < 1) {
      start = 1;
    }

    if (start + tabletWindowSize - 1 > total) {
      start = total - (tabletWindowSize - 1);
    }

    return this.toPageControls(this.getSequentialPages(start, tabletWindowSize));
  }

  get label() {
    return `Showing ${this.startItem}-${this.endItem} of ${this.totalItems} results`;
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

  private getControlCount(set: Set<number>): number {
    const sortedPages = this.getSortedPages(set);

    let ellipsisCount = 0;

    for (let i = 1; i < sortedPages.length; i++) {
      if (sortedPages[i] > sortedPages[i - 1] + 1) {
        ellipsisCount++;
      }
    }

    return sortedPages.length + ellipsisCount;
  }

  private getControlsFromPages(set: Set<number>): Array<PageControl> {
    const sortedPages = this.getSortedPages(set);
    const controls: Array<PageControl> = [];

    for (let i = 0; i < sortedPages.length; i++) {
      if (i > 0 && sortedPages[i] > sortedPages[i - 1] + 1) {
        controls.push({ type: 'ellipsis' });
      }

      controls.push({ type: 'page', page: sortedPages[i] });
    }

    return controls;
  }

  private getSortedPages(set: Set<number>): Array<number> {
    return Array.from(set).sort((a, b) => a - b);
  }

  private toPageControls(pages: Array<number>): Array<PageControl> {
    return pages.map(page => ({ type: 'page', page }));
  }

  private getSequentialPages(start: number, count: number): Array<number> {
    return Array.from({ length: count }, (_, index) => start + index);
  }

  protected previous(): void {
    this.goTo(this.currentPage - 1);
  }

  protected next(): void {
    this.goTo(this.currentPage + 1);
  }

  protected goTo(pageNumber: number, silent = false): void {
    if (this.numPages === 0) {
      const wasAlreadyResetState =
        this.currentPage === 1 && this.startIndex === 0 && this.endIndex === 0;

      this.currentPage = 1;
      this.startIndex = 0;
      this.endIndex = 0;

      if (!silent && !wasAlreadyResetState) {
        this.pageChanged.emit({
          pageNumber: 1,
          startIndex: this.startIndex,
          endIndex: this.endIndex,
        });
      }

      return;
    }

    const clampedPageNumber =
      pageNumber < 1
        ? 1
        : pageNumber > this.numPages
          ? this.numPages
          : pageNumber;

    this.currentPage = clampedPageNumber;

    this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.endIndex = Math.min(this.startIndex + this.itemsPerPage, this.totalItems) - 1;

    if (!silent) {
      this.pageChanged.emit({
        pageNumber: clampedPageNumber,
        startIndex: this.startIndex,
        endIndex: this.endIndex,
      });
    }
  }
}
