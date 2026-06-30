---
name: canopy-brand-icon
description: Removal notice for the Canopy Brand Icon component. Trigger whenever lg-brand-icon, LgBrandIconComponent, or brand icon imports appear in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/brand-icon/docs/guide.mdx
---

# Canopy Brand Icon — REMOVED

> **`LgBrandIconComponent` has been removed from Canopy's public API.**
> Do not use this component in new work, and remove any existing usage.

---

## What to Remove

Remove the following imports:

```ts
// Remove:
import { LgBrandIconComponent } from '@legal-and-general/canopy';
```

Remove any `<lg-brand-icon>` elements from your templates.

### What to replace it with

The Brand icon component has been replaced with the `lg-pictogram` component. See the [Canopy Pictogram skill](../pictogram/SKILL.md) for usage guidance.

---

## Don't

1. **Don't** use `<lg-brand-icon>` in any templates.
2. **Don't** add `LgBrandIconComponent` to any standalone component's `imports` array.



