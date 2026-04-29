---
name: canopy-v25-migration
description: Apply the Canopy v24→v25 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v25, upgrade @legal-and-general/canopy from v24, or fix errors after upgrading to v25.
license: MIT
metadata:
  version: '25.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v25.0.0
---

# Canopy v24 → v25 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. forms/input: remove obsolete CSS custom property references

**What changed:** As part of the form element brand update, three CSS custom properties that were previously defined in `:root` by the input component's variable file have been removed. Their values are now derived directly from updated design tokens consumed internally by the component.

**Search for** (in `*.css`, `*.scss`, and `*.html` files):
```
--input-line-height
```
```
--input-vertical-padding
```
```
--input-button-right-margin
```

**Replace with:** Remove any declaration or `var()` reference to these properties. No replacement value is required.

| Removed property | Notes |
|---|---|
| `--input-line-height` | Removed; line-height is now applied inline |
| `--input-vertical-padding` | Removed; padding is now driven by `--text-input-common-padding-y` |
| `--input-button-right-margin` | Removed |

> **Automated?** No — search for each removed property name and delete any declarations or `var()` usages that reference them.

---

## 2. forms/input: remove `_input.scss` partial import

**What changed:** The SCSS partial `_input.scss` has been removed from the distributed library. The styles it contained are now inlined within the component itself.

**Search for** (in `*.scss` files):
```
@legal-and-general/canopy/styles/forms/input/input
```

Also search for:
```
canopy/styles/forms/input
```

**Replace with:** Remove the `@use` statement entirely. No replacement import is needed.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/forms/input/input';
```

**After:** Remove the import entirely.

> **Automated?** No — locate and delete any `@use` or `@import` statements that reference the removed partial.

---

## 3. forms/select: remove obsolete CSS custom property references

**What changed:** Two CSS custom properties previously defined in `:root` by the select component's variable file have been removed. Icon sizing and padding are now handled internally using updated design tokens.

**Search for** (in `*.css`, `*.scss`, and `*.html` files):
```
--select-icon-width
```
```
--select-vertical-padding
```

**Replace with:** Remove any declaration or `var()` reference to these properties. No replacement value is required.

| Removed property | Notes |
|---|---|
| `--select-icon-width` | Removed; icon sizing is now handled internally |
| `--select-vertical-padding` | Removed; padding is now driven by `--text-input-common-padding-y` |

> **Automated?** No — search for each removed property name and delete any declarations or `var()` usages that reference them.

---

## 4. forms/select: remove `_select.scss` partial import

**What changed:** The SCSS partial `_select.scss` has been removed from the distributed library. The styles it contained are now inlined within the component itself.

**Search for** (in `*.scss` files):
```
@legal-and-general/canopy/styles/forms/select/select
```

Also search for:
```
canopy/styles/forms/select
```

**Replace with:** Remove the `@use` statement entirely. No replacement import is needed.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/forms/select/select';
```

**After:** Remove the import entirely.

> **Automated?** No — locate and delete any `@use` or `@import` statements that reference the removed partial.

---

## 5. card / content-area: rename border-radius CSS custom properties

**What changed:** Three CSS custom properties used to control the border-radius of card, content-area, and promo-card-image components have been renamed as part of the design token reorganisation.

**Search for** (in `*.css`, `*.scss`, and `*.html` files):
```
--container-border-radius-sm
```
```
--container-border-radius-md
```
```
--container-border-radius-lg
```

**Replace with:**

| Old property | New property |
|---|---|
| `--container-border-radius-sm` | `--container-common-border-radius-sm` |
| `--container-border-radius-md` | `--container-common-border-radius-md` |
| `--container-border-radius-lg` | `--container-common-border-radius-lg` |

**Before:**
```css
:root {
  --container-border-radius-sm: 0.5rem;
  --container-border-radius-md: 0.75rem;
  --container-border-radius-lg: 1rem;
}
```

**After:**
```css
:root {
  --container-common-border-radius-sm: 0.5rem;
  --container-common-border-radius-md: 0.75rem;
  --container-common-border-radius-lg: 1rem;
}
```

> **Automated?** No — apply each rename in your stylesheets wherever you override these properties.

---

## 6. radio-button: `size` input default changed from `'sm'` to `'lg'`

**What changed:** The default value of the `size` input on `LgRadioButtonComponent` has changed from `'sm'` to `'lg'`. Any `<lg-radio-button>` that does not explicitly set `size` will now render at the larger size. To preserve the previous appearance, add `size="sm"` explicitly.

**Search for** (in `*.html` files):
```
lg-radio-button
```

For each occurrence, check whether a `size` attribute is already present. If it is not, add `size="sm"` to restore the previous appearance. If the larger size is acceptable or desired, no change is needed.

**Before** (implicit default was `'sm'`):
```html
<lg-radio-button value="yes">Yes</lg-radio-button>
```

**After** (to restore the previous size):
```html
<lg-radio-button value="yes" size="sm">Yes</lg-radio-button>
```

> **Automated?** No — review each `<lg-radio-button>` element and decide whether to add `size="sm"` to preserve the previous appearance or to accept the new larger default.

---

## 7. toggle / checkbox: `size` input default changed from `'sm'` to `'lg'`

**What changed:** The default value of the `size` input on `LgToggleComponent` has changed from `'sm'` to `'lg'`. Any `<lg-toggle>`, `<lg-checkbox>`, or `<lg-filter-checkbox>` element that does not explicitly set `size` will now render at the larger size. To preserve the previous appearance, add `size="sm"` explicitly.

**Search for** (in `*.html` files):
```
lg-toggle
```
```
lg-checkbox
```
```
lg-filter-checkbox
```

For each occurrence, check whether a `size` attribute is already present. If it is not, add `size="sm"` to restore the previous appearance.

**Before** (implicit default was `'sm'`):
```html
<lg-toggle formControlName="agree">I agree</lg-toggle>
```

**After** (to restore the previous size):
```html
<lg-toggle formControlName="agree" size="sm">I agree</lg-toggle>
```

> **Automated?** No — review each toggle, checkbox, and filter-checkbox element and decide whether to add `size="sm"` to preserve the previous appearance or to accept the new larger default.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components).
