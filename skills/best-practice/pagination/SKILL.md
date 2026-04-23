---
name: pagination
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
  (pageChanged)="onPageChanged($event)"
>
</lg-pagination>
```

**Component:**

```ts
import { PageData } from '@legal-and-general/canopy';

export class MyListComponent implements OnInit {
  allItems: Item[] = [];
  pagedItems: Item[] = [];
  itemsPerPage = 10;

  ngOnInit(): void {
    this.allItems = this.dataService.getData();
    this.pagedItems = this.getPagedData(0, this.itemsPerPage - 1);
  }

  onPageChanged(pageData: PageData): void {
    this.pagedItems = this.getPagedData(pageData.startIndex, pageData.endIndex);
  }

  private getPagedData(startIndex: number, endIndex: number): Item[] {
    return this.allItems.slice(startIndex, endIndex + 1);
  }
}
```

> Use `Array.prototype.slice`, **not** `splice`. `slice(startIndex, endIndex + 1)` returns items up to and including `endIndex`.

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
- The results label ("Showing x–y of n results") positions itself automatically — right of buttons when space permits, below otherwise.
- On mobile, a maximum of 4 page buttons are shown before overflow occurs. Your data handling must account for this.
- This component is pending brand modernisation and additional features (overflow button, page jumper) are still in development.
