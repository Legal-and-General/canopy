---
name: canopy-grid
description: Best practices for the Canopy Grid directives. Trigger when building responsive multi-column layouts, applying column spans, or offsetting columns in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/grid/docs/guide.mdx
---

# Canopy Grid — Best Practices

This skill provides usage guidance and input reference for the Canopy grid directives from `@legal-and-general/canopy`.

Apply this skill whenever you use `lgContainer`, `lgRow`, or `lgCol`.

---

## Import

```ts
import {
  LgGridContainerDirective,
  LgGridRowDirective,
  LgGridColDirective,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

The grid uses a 12-column layout. Apply the three directives to any HTML element or Canopy component.

```html
<div lgContainer>
  <div lgRow>
    <div [lgCol]="12" [lgColMd]="6">Column 1</div>
    <div [lgCol]="12" [lgColMd]="6">Column 2</div>
  </div>
</div>
```

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `lgContainer` | — | — | Applies the grid container. |
| `lgRow` | — | — | Applies the row wrapper. |
| `lgCol` | `1–12` | — | Number of columns (all screen sizes). |
| `lgColMd` | `1–12` | — | Number of columns at medium screen size and above. |
| `lgColLg` | `1–12` | — | Number of columns at large screen size and above. |
| `lgColOffset` | `0–11` | — | Column offset (all screen sizes). |
| `lgColMdOffset` | `0–11` | — | Column offset at medium screen size and above. |
| `lgColLgOffset` | `0–11` | — | Column offset at large screen size and above. |

---

## Design Constraints

- Always stack three directives: `lgContainer` → `lgRow` → `lgCol`.
- Use `[lgCol]="12"` as the mobile-first default, then override at `lgColMd` or `lgColLg`.
- Combine with `lg-page` for full-page layouts.
