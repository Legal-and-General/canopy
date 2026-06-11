---
name: canopy-shadow
description: Deprecation notice for the Canopy Shadow directive. Trigger whenever lgShadow, LgShadowDirective, or related imports appear in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/shadow/docs/guide.mdx
---

# Canopy Shadow Directive — DEPRECATED

> **`LgShadowDirective` is deprecated and will be removed in a future version of Canopy as part of brand modernisation.**
> Do not use this directive in new work, and migrate away from it in existing code.

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
