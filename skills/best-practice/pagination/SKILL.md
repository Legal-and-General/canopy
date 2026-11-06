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
| `totalItems` | `number` | `0` | No | Total number of items in the paged collection. |
| `itemsPerPage` | `number` | `10` | No | Maximum number of items shown per page. Values lower than `1` are clamped to `1`. |
| `currentPage` | `number` | `1` | No | Current page number. Values are clamped to the valid page range. |
| `id` | `string` | auto-generated | No | HTML `id` attribute, auto generated if not provided. |

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

## Dos and Don'ts

### Do

1. **Do** retain the current-page label, state and keyboard focus indicator so users can identify the page they are viewing.
2. **Do** use the component's `pageChanged` output to update displayed results, rather than adding navigation handlers to its internal buttons.

### Don't

1. **Don't** trigger navigation or reload results when the current page is activated; it represents the page already being viewed.
2. **Don't** override the current-page label with `Go to page N`, remove its `aria-current` or `aria-disabled` state, or remove it from the keyboard tab order.

---

## Accessibility

- Retain the component-managed current-page label `Page N`, `aria-current="page"` and `aria-disabled="true"`. The button remains keyboard-focusable so its page number and state can be announced.
- Expect activation of the current-page button to do nothing: it does not navigate or emit `pageChanged`.
- Let the component label other page buttons `Go to page N` and update labels and states automatically when another page is selected, across desktop, tablet and mobile layouts.

---

## Design Constraints

- The component **hides itself automatically** when `totalItems <= itemsPerPage` (i.e. there is only one page).
- Desktop controls (`lg` breakpoint and above) show previous/next plus up to 7 page buttons and ellipses combined, capped to a maximum of 9 controls in total. The first page, last page, current page, and nearby neighbours are preserved.
- Tablet controls (`md` breakpoint) show previous/next plus a sliding window of 5 consecutive page buttons with no ellipses. The results label is displayed inline.
- Mobile controls use a sliding window of 3 page buttons with no ellipses.
- The results label ("Showing x-y of n results") is rendered in an `aria-live` region, with the range and total emphasised using semantic `<strong>` text.
