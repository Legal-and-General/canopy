---
name: data-point
description: Best practices for the Canopy Data Point component. Trigger when displaying labelled data values, key-value pairs, or summary data lists in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/data-point/docs/guide.mdx
---

# Canopy Data Point — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-data-point` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgDataPointComponent`, `LgDataPointLabelComponent`, `LgDataPointValueComponent`, or `LgDataPointListComponent`.

---

## Import

```ts
import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointValueComponent,
  LgDataPointListComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

**Single data point:**

```html
<lg-data-point>
  <lg-data-point-label [headingLevel]="3">Annual increase</lg-data-point-label>
  <lg-data-point-value>Retail price index (RPI)</lg-data-point-value>
</lg-data-point>
```

**Data point list** — displays multiple data points horizontally:

```html
<lg-data-point-list>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="3">Name on account</lg-data-point-label>
    <lg-data-point-value>Joe Bloggs</lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="3">Account number</lg-data-point-label>
    <lg-data-point-value>***5678</lg-data-point-value>
  </lg-data-point>
</lg-data-point-list>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` (on `lg-data-point-label`) | `number` | n/a | Yes | Sets the semantic heading level (1–6). |

---

## Design Constraints

- When placed inside `lg-data-point-list`, each data point is displayed horizontally and given a `listitem` role automatically.
- `headingLevel` is required — always choose a level that reflects the correct document outline.
- Use with the `lgSkeleton` directive for loading states (see the `skeleton` skill).
