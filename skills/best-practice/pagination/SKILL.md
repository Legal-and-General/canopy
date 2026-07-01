---
name: canopy-pagination
description: Best practices for the Canopy Pagination component. Trigger when paginating lists, controlling paged datasets, or adding page navigation controls in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/pagination/docs/guide.mdx
---

# Canopy Pagination — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-pagination` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgPaginationComponent` or `lg-pagination`.

---

## Import

```ts
import { LgPaginationComponent, PageData } from '@legal-and-general/canopy';
```

---

## Basic Usage

**Template:**

```html
<lg-pagination
  [totalItems]="allItems.length"
  [itemsPerPage]="itemsPerPage"
  [currentPage]="currentPage"
  (pageChanged)="onPageChanged($event)"
/>
```

**Component:**

```ts
import { PageData } from '@legal-and-general/canopy';

export class MyListComponent implements OnInit {
  allItems: Item[] = [];
  pagedItems: Item[] = [];
  itemsPerPage = 10;
  currentPage = 1;

  ngOnInit(): void {
    this.allItems = this.dataService.getData();
    this.pagedItems = this.getPagedData(0, this.itemsPerPage - 1);
  }

  onPageChanged(pageData: PageData): void {
    this.currentPage = pageData.pageNumber;
    this.pagedItems = this.getPagedData(pageData.startIndex, pageData.endIndex);
  }

  private getPagedData(startIndex: number, endIndex: number): Item[] {
    return this.allItems.slice(startIndex, endIndex + 1);
  }
}
```

> Use `Array.prototype.slice`, **not** `splice`. `slice(startIndex, endIndex + 1)` returns items up to and including `endIndex`.

> If you previously used `pageData.page`, update handlers to use `pageData.pageNumber`.

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `totalItems` | `number` | `0` | No | Total number of items in the dataset. |
| `itemsPerPage` | `number` | `10` | No | Number of items shown per page. |
| `currentPage` | `number` | `1` | No | The current page. Controlled internally but can be set programmatically. |
| `id` | `string` | auto-generated | No | HTML `id` attribute. |

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| `pageChanged` | `EventEmitter<PageData>` | Emitted when the page changes. Use to update displayed data. |

### PageData interface

```ts
interface PageData {
  pageNumber: number; // Requested page number (1-based)
  startIndex: number; // Zero-based start index
  endIndex: number;   // Inclusive end index
}
```

---

## Design Constraints

- The component **hides itself automatically** when `totalItems <= itemsPerPage` (i.e. there is only one page).
- Desktop and tablet controls show previous/next plus page buttons, capped to a maximum of 9 controls in total (including ellipses). The first page, last page, current page, and nearby neighbours are preserved.
- Mobile controls use a sliding window of 3 page buttons with no ellipses.
- The results label ("Showing x-y of n results") is rendered in an `aria-live` region, with the range and total emphasised using semantic `<strong>` text.
