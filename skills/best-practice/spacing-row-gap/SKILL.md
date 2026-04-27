---
name: canopy-spacing-row-gap
description: Best practices for the Canopy Row Gap directive. Trigger when applying row-gap spacing to flex or grid containers using the Canopy spacing scale in an Angular project.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/spacing/row-gap/docs/guide.mdx
---

# Canopy Row Gap — Best Practices

This skill provides usage guidance and input reference for the Canopy `lgRowGap` directive from `@legal-and-general/canopy`.

Apply this skill whenever you apply `row-gap` to a flex or grid container.

> See also: `spacing-margin` and `spacing-padding` skills.

---

## Import

```ts
import { LgRowGapDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<!-- Apply spacing variant 8 as row-gap -->
<div lgRowGap="8"></div>

<!-- Apply default row-gap (variant 4) -->
<div lgRowGap></div>
```

Works well with the Canopy grid:

```html
<div lgContainer>
  <div lgRow lgRowGap="6">
    <div [lgCol]="12" [lgColMd]="6">Column 1</div>
    <div [lgCol]="12" [lgColMd]="6">Column 2</div>
  </div>
</div>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `lgRowGap` | `SpacingVariant` | `4` | Yes | The row-gap variant from the Canopy spacing scale. |

Available spacing variants: `'none'`, `1`–`12`.

---

## Design Constraints

- Use `lgRowGap` instead of custom CSS `row-gap` to stay consistent with the Canopy spacing scale.
- Works on any HTML element that supports the `row-gap` CSS property.
