---
name: canopy-shadow
description: Removal notice for the Canopy Shadow directive. Trigger whenever lgShadow, LgShadowDirective, hasHoverState, or related imports appear in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/shadow/docs/guide.mdx
---

# Canopy Shadow Directive — REMOVED

> **`LgShadowDirective` was removed from Canopy's public API in v30** as part of brand modernisation.
> Any code that still references it will fail at compile time.

---

## What to Remove

Remove the following imports:

```ts
// Remove:
import { LgShadowDirective } from '@legal-and-general/canopy';
```

Remove any `lgShadow` directive attributes from your templates:

```html
<!-- Remove: -->
<div [lgShadow]="true"></div>
<div [lgShadow]="true" [hasHoverState]="true"></div>
```

---

## Don't

1. **Don't** use `lgShadow` in new feature work.
2. **Don't** add `LgShadowDirective` to any new standalone component's `imports` array.
