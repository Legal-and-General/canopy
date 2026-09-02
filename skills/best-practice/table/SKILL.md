---
name: table
description: Best practices for the Canopy Table component. Trigger when displaying tabular data, comparison tables, expandable detail rows, or structured data grids in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/table/docs/guide.mdx
---

# Canopy Table — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy table components from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgTableComponent` or the `lg-table` directive.

---

## Import

```ts
import {
  LgTableComponent,
  LgTableHeadComponent,
  LgTableBodyComponent,
  LgTableFootComponent,
  LgTableRowComponent,
  LgTableHeadCellComponent,
  LgTableCellComponent,
  LgTableRowToggleComponent,
  LgTableExpandedDetailComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<table lg-table>
  <thead lg-table-head>
    <tr lg-table-row>
      <th lg-table-head-cell>Author</th>
      <th lg-table-head-cell>Book</th>
      <th lg-table-head-cell>Published</th>
    </tr>
  </thead>
  <tbody lg-table-body>
    <tr lg-table-row>
      <td lg-table-cell>Orhan Pamuk</td>
      <td lg-table-cell>Strangeness in my Mind</td>
      <td lg-table-cell>2016</td>
    </tr>
    <tr lg-table-row>
      <td lg-table-cell>Albert Camus</td>
      <td lg-table-cell>The Plague</td>
      <td lg-table-cell>1947</td>
    </tr>
  </tbody>
  <tfoot lg-table-foot>
    <tr lg-table-row>
      <td lg-table-cell></td>
      <td lg-table-cell>Total books</td>
      <td lg-table-cell>2</td>
    </tr>
  </tfoot>
</table>
```

Use `lg-table-foot` on a `tfoot` when the table needs a summary or total row.

---

## Expandable Detail Rows

```html
<tr lg-table-row>
  <td>
    <lg-table-row-toggle (click)="toggle()" [isActive]="isOpen"></lg-table-row-toggle>
  </td>
  <td lg-table-cell>Row data</td>
</tr>
<tr lg-table-row [isHidden]="!isOpen">
  <td lg-table-cell>
    <lg-table-expanded-detail>Detail content</lg-table-expanded-detail>
  </td>
</tr>
```

---

## Long Copy Actions

When using tables with long copy, place contextual actions inside the cell using a link-priority button.

```html
<td lg-table-cell [showLabel]="false" [stack]="true">
  <p>Additional context</p>
  <button lg-button type="button" priority="link">
    <lg-icon name="information-filled" />
    Find out more
  </button>
</td>
```

---

## LgTableComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'striped' \| 'bordered'` | `'striped'` | Visual variant. |
| `showColumnsAt` | `'sm' \| 'md' \| 'lg'` | `'md'` | Minimum screen width at which column layout displays. |

## LgTableCellComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `stack` | `boolean` | `false` | On small screens, stacks label and content vertically instead of side by side. |
| `colspan` | `number` | `undefined` | Sets the `colspan` attribute. |

## LgTableHeadCellComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `align` | `'start' \| 'centre' \| 'end'` | `'start'` | Alignment option for the header and its respective column. |
| `showLabel` | `boolean` | `true` | Whether to show the label for this header in each row in non-column layout. |

## LgTableFootComponent

Use `LgTableFootComponent` through the `lg-table-foot` attribute on `tfoot` to mark footer rows for table footer styling.

---

## Dos and Don'ts

### Do

1. **Do** alternate row colours (use `variant="striped"`) to aid table scanning.
2. **Do** use table headers to establish information hierarchy and describe rows and columns.
3. **Do** right-align numeric data related to size (counts, percentages) for easy comparison; use a thousands separator.
4. **Do** consider the responsive mobile view — columns collapse to a 2-column layout on small screens.

### Don't

1. **Don't** use both horizontal and vertical lines to separate cells — use adequate padding instead.
2. **Don't** centre-align content vertically or horizontally.
3. **Don't** left-align numbers in comparison columns.

---

## Design Constraints

- Default alignment is left for text, dates, postcodes, and phone numbers.
- Numeric comparison columns must be right-aligned.
- Column headers align to match their column data.
- At mobile breakpoints the table switches to a 2-column layout (header | value) per row.
- Storybook may wrap the Standard table example in a card so mode and theme controls can demonstrate colour rendering; that wrapper is for the example presentation and is not required for table usage.

