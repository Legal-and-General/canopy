---
name: canopy-v29-migration
description: Apply the Canopy v28→v29 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v29, upgrade @legal-and-general/canopy from v28, or fix errors after upgrading to v29.
license: MIT
metadata:
  version: '29.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v29.0.0
---

# Canopy v28 → v29 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. data-point: replace `<lg-data-point-list>` with `<lg-data-point-group>`

**What changed:** `LgDataPointListComponent` and the `<lg-data-point-list>` selector have been removed from the public API. Use `LgDataPointGroupComponent` and `<lg-data-point-group>` instead.

**Search for** (in `*.html` and `*.ts` files):
```html
<lg-data-point-list
```
```html
</lg-data-point-list>
```
```ts
LgDataPointListComponent
```

**Replace with:**

- Replace `<lg-data-point-list>` with `<lg-data-point-group>`.
- Update imports from `LgDataPointListComponent` to `LgDataPointGroupComponent`.
- Use `orientation="horizontal"` where you need the migrated markup to preserve the previous horizontal list layout.

**Before:**
```html
<lg-data-point-list>
  <lg-data-point>...</lg-data-point>
  <lg-data-point>...</lg-data-point>
</lg-data-point-list>
```

**After:**
```html
<lg-data-point-group orientation="horizontal">
  <lg-data-point>...</lg-data-point>
  <lg-data-point>...</lg-data-point>
</lg-data-point-group>
```

**Import update example:**
```ts
import { LgDataPointGroupComponent } from '@legal-and-general/canopy';
```

> **Automated?** No — update both template selectors and any Angular imports that still reference the removed list component.

---

## 2. card / data-point: replace removed card principle data-point components

**What changed:** `LgCardPrincipleDataPointComponent`, `LgCardPrincipleDataPointLabelComponent`, `LgCardPrincipleDataPointValueComponent`, and `LgCardPrincipleDataPointDateComponent` (and their selectors) have been removed. Migrate to `lg-data-point` with `variant="card-principle"` and the current data-point subcomponents.

**Search for** (in `*.html` and `*.ts` files):
```html
<lg-card-principle-data-point
```
```html
<lg-card-principle-data-point-label
```
```html
<lg-card-principle-data-point-value
```
```html
<lg-card-principle-data-point-date
```
```ts
LgCardPrincipleDataPointComponent
LgCardPrincipleDataPointLabelComponent
LgCardPrincipleDataPointValueComponent
LgCardPrincipleDataPointDateComponent
```

**Replace with:**

- Replace the wrapper with `<lg-data-point variant="card-principle">`.
- Replace `<lg-card-principle-data-point-label>` with `<lg-data-point-label [headingLevel]="...">`.
- Replace `<lg-card-principle-data-point-value>` with `<lg-data-point-value size="lg">`.
- Replace `<lg-card-principle-data-point-date>` with `<lg-data-point-secondary-label>`.
- Update imports to the current data-point components from `@legal-and-general/canopy`.

**Before:**
```html
<lg-card-principle-data-point>
  <lg-card-principle-data-point-label>...</lg-card-principle-data-point-label>
  <lg-card-principle-data-point-value>...</lg-card-principle-data-point-value>
  <lg-card-principle-data-point-date>...</lg-card-principle-data-point-date>
</lg-card-principle-data-point>
```

**After:**
```html
<lg-data-point variant="card-principle">
  <lg-data-point-label [headingLevel]="5">...</lg-data-point-label>
  <lg-data-point-value size="lg">...</lg-data-point-value>
  <lg-data-point-secondary-label>...</lg-data-point-secondary-label>
</lg-data-point>
```

> **Automated?** No — replace the removed selectors and component imports manually, then verify the migrated card principle layout still matches your design.

---

## 3. styles/data-point: remove direct imports of the deleted data-point variables partial

**What changed:** `projects/canopy/src/styles/variables/components/_data-point.scss` has been removed, and `projects/canopy/src/styles/variables.scss` no longer imports it. Any app stylesheet that imports the deleted partial will fail after upgrading.

**Search for** (in `*.scss` files):
```scss
@use '@legal-and-general/canopy/styles/variables/components/data-point'
```
```scss
@import '@legal-and-general/canopy/styles/variables/components/data-point'
```
```scss
variables/components/data-point
```

**Replace with:** Remove the direct import of the deleted data-point partial. If the stylesheet still needs Canopy styling support, keep only supported imports that your app already uses.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/variables/components/data-point';
@use './product-card-theme';
```

**After:**
```scss
@use './product-card-theme';
```

> **Automated?** No — remove each direct import of the deleted partial and re-test any stylesheet that previously depended on it.

---

## 4. styles/card tokens: remove deleted card principle and legacy data-point colour tokens

**What changed:** The following card principle data-point CSS custom properties have been removed: `--card-principle-data-point-label-color`, `--card-principle-data-point-date-color`, and `--card-principle-data-point-value-color`. The release notes also state that removed legacy `--data-point-*-color` tokens must be deleted.

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in `*.html` files):
```scss
--card-principle-data-point-label-color
```
```scss
--card-principle-data-point-date-color
```
```scss
--card-principle-data-point-value-color
```
```scss
--data-point-
```
Use the last search as a prefix search to find legacy `--data-point-*-color` overrides.

**Replace with:** Remove references to the deleted tokens and migrate any required colour overrides manually to the current data-point/card token set used by your application's theme layer. For example, inspect the theme rules your app already uses for `lg-data-point` or `variant="card-principle"` and reuse those current tokens instead of the deleted legacy overrides. The release notes do not provide a 1:1 rename table for these removed tokens, so you must use your application's existing theme documentation or token layer to choose suitable replacements.

**Before:**
```scss
.product-card {
  --card-principle-data-point-label-color: var(--colour-text-secondary);
  --card-principle-data-point-date-color: var(--colour-text-secondary);
  --card-principle-data-point-value-color: var(--colour-text-primary);
}
```

**After:**
```scss
.product-card {
  /* Removed deleted card principle data-point token overrides.
     Reapply any required colours using your app's current theme tokens. */
}
```

> **Automated?** No — delete the removed token overrides first, then review the affected UI and reapply any necessary colours using the current theme API in your project.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components).
