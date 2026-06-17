---
name: canopy-v30-migration
description: Apply the Canopy v29→v30 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v30, upgrade @legal-and-general/canopy from v29, or fix errors after upgrading to v30.
license: MIT
metadata:
  version: '30.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v30.0.0
---

# Canopy v29 → v30 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. shadow: remove `LgShadowDirective` imports from Angular code

**What changed:** `LgShadowDirective` has been removed from the public API in v30. Any Angular import or `imports` array entry that still references it will fail after upgrading.

**Search for** (in `*.ts` files):
```ts
LgShadowDirective
```

**Replace with:**

- Remove `LgShadowDirective` from imports from `@legal-and-general/canopy`.
- Remove `LgShadowDirective` from standalone component `imports` arrays, NgModule `imports`, `exports`, or any other Angular metadata where it is still referenced.

**Before:**
```ts
import { LgCardComponent, LgShadowDirective } from '@legal-and-general/canopy';

@Component({
  standalone: true,
  imports: [LgCardComponent, LgShadowDirective],
})
export class ExampleComponent {}
```

**After:**
```ts
import { LgCardComponent } from '@legal-and-general/canopy';

@Component({
  standalone: true,
  imports: [LgCardComponent],
})
export class ExampleComponent {}
```

> **Automated?** Usually yes — remove the symbol everywhere it appears, then re-check any Angular metadata arrays that referenced it.

---

## 2. shadow: remove `lgShadow` and `[hasHoverState]` from templates

**What changed:** Template usage of `lgShadow` and `[hasHoverState]` is no longer supported in v30.

**Search for** (in `*.html` files):
```html
lgShadow
```
```html
hasHoverState
```

**Replace with:**

- Remove the `lgShadow` attribute from each element.
- Remove `[hasHoverState]` (or `hasHoverState`) from each element.
- Keep the surrounding component markup unchanged unless your application needs a separate visual redesign.

**Before:**
```html
<lg-card lgShadow [hasHoverState]="true">
  ...
</lg-card>
```

**After:**
```html
<lg-card>
  ...
</lg-card>
```

> **Automated?** Yes — remove both attributes wherever they are still present, then manually review affected UI journeys.

---

## 3. shadow: remove unsupported shadow utility classes and legacy shadow styling

**What changed:** The `.lg-shadow` and `.lg-shadow--hover` utility classes are no longer shipped. The release notes also recommend removing hardcoded `box-shadow` styling during this upgrade rather than recreating the old effect.

**Search for** (in `*.html`, `*.ts`, `*.scss`, and `*.css` files):
```text
lg-shadow
```
```text
lg-shadow--hover
```
```css
box-shadow
```
Use the `box-shadow` search to inspect shadow overrides that were only present to mimic the removed Canopy shadow behaviour.

**Replace with:**

- Remove `.lg-shadow` and `.lg-shadow--hover` class usage from templates, class bindings, and styles.
- Remove hardcoded shadow styling that only existed to reproduce the old Canopy shadow treatment.
- Re-test the affected UI and only introduce a new treatment if your product design explicitly requires it.

**Before:**
```html
<div class="lg-shadow lg-shadow--hover">...</div>
```

```scss
.promo-card {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 12%);
}
```

**After:**
```html
<div>...</div>
```
Delete the shadow-only CSS rule entirely if it has no other responsibilities.

> **Automated?** Partly — you can remove the unsupported class names automatically, but decide case by case whether any remaining visual emphasis should be redesigned rather than replaced with another shadow.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. Manually review the affected cards, hoverable containers, and other previously shadowed surfaces to confirm the updated visual hierarchy is still clear without the removed shadow APIs.
