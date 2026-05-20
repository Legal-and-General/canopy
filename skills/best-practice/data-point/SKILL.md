---
name: canopy-data-point
description: Best practices for the Canopy Data Point component. Trigger when displaying labelled data values, key-value pairs, or summary data lists in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/data-point/docs/guide.mdx
---

# Canopy Data Point — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-data-point` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgDataPointComponent`, `LgDataPointLabelComponent`, `LgDataPointValueComponent`, `LgDataPointSecondaryLabelComponent`, or `LgDataPointListComponent`.

---

## Import

```ts
import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointValueComponent,
  LgDataPointSecondaryLabelComponent,
  LgDataPointListComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

**Single data point:**

```html
<lg-data-point>
  <lg-data-point-label [headingLevel]="3" [isBold]="true">Annual increase</lg-data-point-label>
  <lg-data-point-value size="sm">Retail price index (RPI)</lg-data-point-value>
</lg-data-point>
```

**With secondary label** — optional supplementary text (e.g. a date or qualifier) displayed below the value:

```html
<lg-data-point>
  <lg-data-point-label [headingLevel]="3" [isBold]="true">Annual increase</lg-data-point-label>
  <lg-data-point-value size="sm">Retail price index (RPI)</lg-data-point-value>
  <lg-data-point-secondary-label>as of 01 Jan 2026</lg-data-point-secondary-label>
</lg-data-point>
```

**Data point list** — groups up to four data points, arranged horizontally (default) or vertically:

```html
<lg-data-point-list orientation="horizontal">
  <lg-data-point>
    <lg-data-point-label [headingLevel]="3" [isBold]="true">Name on account</lg-data-point-label>
    <lg-data-point-value size="sm">Joe Bloggs</lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="3" [isBold]="true">Account number</lg-data-point-label>
    <lg-data-point-value size="sm">***5678</lg-data-point-value>
  </lg-data-point>
</lg-data-point-list>
```

---

## Inputs

### `lg-data-point`

| Input        | Type                            | Default     | Required | Description                                                                                     |
|--------------|---------------------------------|-------------|----------|-------------------------------------------------------------------------------------------------|
| `variant`    | `'default' \| 'card-principle'` | `'default'` | No       | Sets the visual variant of the data point.                                                      |
| `isListItem` | `boolean`                       | `false`     | No       | Applies `role="listitem"` — set automatically when inside `lg-data-point-list`.                 |

### `lg-data-point-label`

| Input          | Type      | Default | Required | Description                                                                                                  |
|----------------|-----------|---------|----------|--------------------------------------------------------------------------------------------------------------|
| `headingLevel` | `number`  | n/a     | Yes      | Sets the semantic heading level (1–6). Always choose a level that reflects the correct document outline.     |
| `isBold`       | `boolean` | `false` | No       | When `true`, renders label text at `font-weight: 700`; when `false`, uses `font-weight: 400`.                |

### `lg-data-point-value`

| Input    | Type                     | Default | Required | Description                                                                                   |
|----------|--------------------------|---------|----------|-----------------------------------------------------------------------------------------------|
| `size`   | `'sm' \| 'md' \| 'lg'`  | `'sm'`  | No       | Controls font size: `sm` = size 1, `md` = size 3, `lg` = size 5.                             |
| `isBold` | `boolean`                | `false` | No       | When `true`, renders value text at `font-weight: 700`; when `false`, uses `font-weight: 400`. |

### `lg-data-point-secondary-label`

No inputs. Project text content directly into the element. Used for supplementary information displayed below the value.

### `lg-data-point-list`

| Input         | Type                         | Default        | Required | Description                                                                                                                                      |
|---------------|------------------------------|----------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | No       | Sets how data points are arranged. Horizontal stacks on small breakpoints and switches to a row from `md`. Vertical stays as a column at all breakpoints. |

---

## Design Constraints

- A data point list supports **up to four** data points.
- `headingLevel` is required on `lg-data-point-label` — always choose a level that reflects the correct document outline.
- When placed inside `lg-data-point-list`, each data point is given a `listitem` role automatically.
- Use with the `lgSkeleton` directive for loading states (see the `skeleton` skill).
