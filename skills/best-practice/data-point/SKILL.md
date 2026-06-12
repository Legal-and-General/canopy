---
name: canopy-data-point
description: Best practices for the Canopy Data Point component. Trigger when displaying labelled data values, key-value pairs, or summary data lists in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/data-point/docs/guide.mdx
---

# Canopy Data Point — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-data-point` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgDataPointComponent`, `LgDataPointLabelComponent`, `LgDataPointValueComponent`, `LgDataPointSecondaryLabelComponent`, `LgDataPointAddOnComponent`, or `LgDataPointGroupComponent`.

---

## Import

```ts
import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointValueComponent,
  LgDataPointSecondaryLabelComponent,
  LgDataPointAddOnComponent,
  LgDataPointGroupComponent,
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

**With add-on** — optional link or inline content displayed below the secondary label (or value if no secondary label is present):

```html
<lg-data-point>
  <lg-data-point-label [headingLevel]="3" [isBold]="true">Annual increase</lg-data-point-label>
  <lg-data-point-value size="sm">Retail price index (RPI)</lg-data-point-value>
  <lg-data-point-secondary-label>as of 01 Jan 2026</lg-data-point-secondary-label>
  <lg-data-point-add-on><a href="#">View details</a></lg-data-point-add-on>
</lg-data-point>
```

**Data point group** — groups up to four data points, arranged horizontally (default) or vertically:

```html
<lg-data-point-group orientation="horizontal">
  <lg-data-point>
    <lg-data-point-label [headingLevel]="3" [isBold]="true">Name on account</lg-data-point-label>
    <lg-data-point-value size="sm">Joe Bloggs</lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="3" [isBold]="true">Account number</lg-data-point-label>
    <lg-data-point-value size="sm">***5678</lg-data-point-value>
  </lg-data-point>
</lg-data-point-group>
```

---

## Inputs

### `lg-data-point`

| Input        | Type                            | Default     | Required | Description                                                                                     |
|--------------|---------------------------------|-------------|----------|-------------------------------------------------------------------------------------------------|
| `variant`    | `'form' \| 'card' \| 'card-principle'` | `'form'` | No       | Sets the visual variant. Use `'form'` for form journey and content contexts; use `'card'` for a data point inside a card content area; use `'card-principle'` for a prominent hero data point (e.g. a key financial value) in a product card. |
| `isListItem` | `boolean`                       | `false`     | No       | Applies `role="listitem"` — set automatically by `lg-data-point-group` when two or more data points are present. |

### `lg-data-point-label`

| Input          | Type      | Default | Required | Description                                                                                                  |
|----------------|-----------|---------|----------|--------------------------------------------------------------------------------------------------------------|
| `headingLevel` | `number`  | n/a     | Yes      | Sets the semantic heading level (1–6). Always choose a level that reflects the correct document outline.     |
| `isBold`       | `boolean` | `false` | No       | When `true`, renders label text at `font-weight: 700`; when `false`, uses `font-weight: 400`.                |

### `lg-data-point-value`

| Input    | Type                     | Default | Required | Description                                                                                   |
|----------|--------------------------|---------|----------|-----------------------------------------------------------------------------------------------|
| `size`   | `'sm' \| 'md' \| 'lg'`  | `'sm'`  | No       | Controls font size: `sm` = size 1, `md` = size 3, `lg` = size 5. In the `card` variant, `sm` is bold (`font-weight-700`) and `md`/`lg` are regular (`font-weight-400`). In the form variant, the value is never bold. |

### `lg-data-point-secondary-label`

No inputs. Project text content directly into the element. Used for supplementary information displayed below the value.

### `lg-data-point-add-on`

No inputs. Project any inline content (typically an anchor element) directly into the element. Rendered below the secondary label, or below the value if no secondary label is present.

### `lg-data-point-group`

| Input         | Type                         | Default        | Required | Description                                                                                                                                      |
|---------------|------------------------------|----------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | No       | Sets how data points are arranged. Horizontal stacks on small breakpoints and switches to a row from `md`. Vertical stays as a column at all breakpoints. |

---

## Design Constraints

- A data point group supports **up to four** data points.
- `headingLevel` is required on `lg-data-point-label` — always choose a level that reflects the correct document outline.
- When placed inside `lg-data-point-group` with two or more data points, `role="list"` is applied to the wrapper and `role="listitem"` is applied to each data point automatically. With only one data point, neither role is applied — a single-item list is not meaningful to screen reader users.
- Use with the `lgSkeleton` directive for loading states (see the `skeleton` skill).
