---
name: canopy-quick-action
description: Removal notice for the Canopy Quick Action directive. Trigger whenever lg-quick-action, LgQuickActionComponent, or related imports appear in an Angular project using Canopy.
license: MIT
metadata:
  category: removed
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/quick-action/docs/guide.mdx
---

# Canopy Quick Action - REMOVED

> **`LgQuickActionComponent` and the `lg-quick-action` directive have been removed from Canopy's public API.**
> Replace quick actions with supported button or link patterns.

---

## What to Remove

Remove quick action imports:

```ts
// Remove:
import { LgQuickActionComponent } from '@legal-and-general/canopy';
```

Remove quick action template usage:

```html
<!-- Remove: -->
<button lg-quick-action>
  <lg-icon name="information-filled" />
  Find out more
</button>
```

---

## What to Replace It With

1. Action in context: use `lg-button` with `priority="link"`.
2. Navigation between pages/routes: use the Link component.
3. Primary/secondary actions: use standard button priorities.

```html
<!-- Recommended replacement for contextual actions -->
<button lg-button type="button" priority="link">
  <lg-icon name="information-filled" />
  Find out more
</button>
```

> See also: [button](../button/SKILL.md), [link](../link/SKILL.md).

---

## Don't

1. **Don't** use `lg-quick-action` in new templates.
2. **Don't** import `LgQuickActionComponent` in standalone component imports.
3. **Don't** recreate quick action styling with ad-hoc CSS; use existing button/link patterns.
