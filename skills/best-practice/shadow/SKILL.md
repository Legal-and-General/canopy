---
name: canopy-shadow
description: Deprecation and migration guidance for Canopy shadow usage. Trigger whenever lgShadow, LgShadowDirective, or legacy shadow imports appear in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/shadow/docs/guide.mdx
---

# Canopy Shadow Directive - DEPRECATED AND REMOVED

> `LgShadowDirective` (`lgShadow`) was deprecated in Canopy v28 and removed in a later major release.
> Do not use this directive in new work, and remove it during upgrades.

---

## Current Status

1. `lgShadow` was marked deprecated in v28.
2. `LgShadowDirective` is no longer part of the current public API.
3. Legacy templates that still use `lgShadow` must be migrated before upgrading to majors where it is removed.

---

## When Shadow Is Acceptable vs Not

### Acceptable (temporary only)

1. Keep existing `lgShadow` usage only in applications pinned to versions where the directive still exists, while a migration is planned.
2. Keep usage only long enough to complete a controlled upgrade.

### Not acceptable

1. Do not add `lgShadow` in any new feature work.
2. Do not import `LgShadowDirective` in standalone component `imports` or NgModules.
3. Do not re-create broad decorative shadows across generic containers; Canopy uses a flat visual language and limits shadow usage to specific patterns.

---

## What to Remove

Remove legacy imports:

```ts
// Remove:
import { LgShadowDirective } from '@legal-and-general/canopy';
```

Remove directive usage from templates:

```html
<!-- Remove lgShadow -->
<div lgShadow>
  Content
</div>
```

---

## Replacement Patterns

Use one of these migration patterns, depending on intent.

### 1. Use an existing Canopy component with built-in elevation

If the element is effectively a card-like surface, migrate to `lg-card` rather than applying ad hoc shadow.

```html
<!-- Before -->
<div lgShadow class="summary-panel">
  Summary content
</div>

<!-- After -->
<lg-card>
  <lg-card-content>
    Summary content
  </lg-card-content>
</lg-card>
```

### 2. Remove non-essential shadow entirely

If the shadow is decorative only, remove it and keep spacing/borders for structure.

```html
<!-- Before -->
<section lgShadow class="info-block">...</section>

<!-- After -->
<section class="info-block">...</section>
```

### 3. Use a local class for rare, justified elevation

If elevation is still required for a specific journey, use a local class with Canopy tokens instead of a directive.

```html
<div class="app-elevation-surface">...</div>
```

```scss
.app-elevation-surface {
  box-shadow: var(--drop-shadow);
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: var(--drop-shadow-hover);
  }
}
```

Keep this pattern tightly scoped and avoid applying it globally.

---

## Known Pitfalls

1. Leaving stale imports causes build failures once `LgShadowDirective` is removed.
2. Removing shadow without checking hierarchy can make click targets and sections harder to distinguish.
3. Replacing all removed shadows with custom CSS can conflict with Canopy's flat design principles.
4. Applying hover shadow to non-interactive elements creates misleading affordance.

---

## Testing and Verification Checklist

1. Search for all legacy usage in templates and TypeScript:

```bash
grep -R -nE 'lgShadow|LgShadowDirective' src
```

2. Confirm all imports of `LgShadowDirective` are removed.
3. Confirm all `lgShadow` template usage is removed or replaced.
4. Run your consumer project build and ensure there are no template or TypeScript errors.
5. Run your consumer project tests.
6. Perform visual checks on pages where shadow was removed:
   - verify layout hierarchy still reads clearly,
   - verify interactive states still look interactive,
   - verify no accidental overuse of custom shadows.

---

## Do and Don't

### Do

1. **Do** prefer Canopy components that already encode intended elevation patterns.
2. **Do** treat shadow removal as a UX review task, not only a mechanical find-and-replace.
3. **Do** keep any unavoidable custom shadow styles local and minimal.

### Don't

1. **Don't** add new `lgShadow` usage.
2. **Don't** reintroduce global utility shadow classes as a replacement for the removed directive.
3. **Don't** use shadow where spacing, borders, or typography can communicate hierarchy more clearly.