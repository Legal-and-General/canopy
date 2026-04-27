---
name: canopy-separator
description: Best practices for the Canopy Separator component. Trigger when visually dividing content sections or grouping items in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/separator/docs/guide.mdx
---

# Canopy Separator — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-separator` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgSeparatorComponent` or `lg-separator`.

---

## Import

```ts
import { LgSeparatorComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-separator></lg-separator>
```

With a dotted style:

```html
<lg-separator variant="dotted"></lg-separator>
```

With a semantic `separator` role for accessibility:

```html
<lg-separator [hasRole]="true"></lg-separator>
```

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'solid' \| 'dotted'` | `'solid'` | Visual style of the separator. |
| `hasRole` | `boolean` | `false` | When `true`, adds `role="separator"` to the element. |

---

## Dos and Don'ts

### Do

1. **Do** use a separator to group related items, such as within a list.
2. **Do** use a separator to divide content into clear, manageable sections.

---

## Design Constraints

- The separator can be positioned at full or partial width.
- This component is pending brand modernisation.
