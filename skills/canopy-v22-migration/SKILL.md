---
name: canopy-v22-migration
description: Apply the Canopy v21→v22 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v22, upgrade @legal-and-general/canopy from v21, or fix errors after upgrading to v22.
license: MIT
metadata:
  version: '22.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v22.0.0
---

# Canopy v21 → v22 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. Button: rename `variant` input to `priority` and update TypeScript type

**What changed:** The `@Input() variant` on `LgButtonComponent` has been renamed to `@Input() priority`, and the exported TypeScript type `ButtonVariant` has been replaced by `ButtonPriority`. This aligns the button API with the design system's priority-based naming.

**Search for** (in `*.html` files) — **only replace occurrences on elements that also carry the `lg-button` directive**:
```
variant="
```

**Replace with:**
```
priority="
```

> ⚠️ Other Canopy components (e.g. `lg-spinner`) also use a `variant` input. Do **not** replace `variant` on non-button elements.

Also search for property bindings (in `*.html` files) — again, only on `lg-button` elements:
```
[variant]="
```

**Replace with:**
```
[priority]="
```

**Search for** (in `*.ts` files):
```
ButtonVariant
```

**Replace with:**
```
ButtonPriority
```

Also update any import statements:

**Before:**
```ts
import { ButtonVariant } from '@legal-and-general/canopy';
myVariant: ButtonVariant = 'primary-dark';
```

**After:**
```ts
import { ButtonPriority } from '@legal-and-general/canopy';
myPriority: ButtonPriority = 'primary';
```

**Before (template):**
```html
<button lg-button [variant]="'primary-dark'">Click me</button>
```

**After (template):**
```html
<button lg-button [priority]="'primary'">Click me</button>
```

> **Automated?** No — you will need to apply this change manually to each template and TypeScript file that references `variant` on a button element or imports `ButtonVariant`.

---

## 2. Button: update priority string values

**What changed:** The priority values have been consolidated. `primary-dark` and `secondary-dark` have been renamed to `primary` and `secondary`. `primary-light` and `secondary-light` have been removed — use `primary` and `secondary` respectively. The values `link` and `add-on` are unchanged.

**Search for** (in `*.html` and `*.ts` files), one at a time:
```
primary-dark
secondary-dark
primary-light
secondary-light
```

Use the following mapping table to determine the correct replacement:

| Old value | New value |
|---|---|
| `primary-dark` | `primary` |
| `secondary-dark` | `secondary` |
| `primary-light` | `primary` |
| `secondary-light` | `secondary` |

> ⚠️ `primary-light` and `secondary-light` have no distinct equivalent — use `primary` and `secondary` respectively.

**Before:**
```html
<button lg-button [priority]="'primary-dark'">Click me</button>
<button lg-button [priority]="'secondary-light'">Cancel</button>
```

**After:**
```html
<button lg-button [priority]="'primary'">Click me</button>
<button lg-button [priority]="'secondary'">Cancel</button>
```

> **Automated?** No — you will need to replace each occurrence manually, consulting the mapping table above.

---

## 3. Button: replace `iconPosition` input with `backIcon`

**What changed:** `@Input() iconPosition` and the `ButtonIconPosition` type have been removed. The icon now appears on the right by default. To position an icon on the left (e.g. a back/previous button), use the new `@Input() backIcon: boolean`. Remove any `iconPosition="right"` bindings entirely — right is now the default and requires no input.

**Search for** (in `*.html` files):
```
iconPosition
```

Apply the following rules for each occurrence found:

- If `iconPosition="right"` or `[iconPosition]="'right'"` — remove the binding entirely (right is now the default).
- If `iconPosition="left"` or `[iconPosition]="'left'"` — replace with `[backIcon]="true"`.

**Search for** (in `*.ts` files):
```
ButtonIconPosition
```

Remove `ButtonIconPosition` from any TypeScript imports.

**Before:**
```html
<button lg-button iconPosition="left">
  <lg-icon name="arrow-left"></lg-icon>
  Back
</button>
```

**After:**
```html
<button lg-button [backIcon]="true">
  Back
</button>
```

**Before:**
```html
<button lg-button iconPosition="right">
  Next
  <lg-icon name="arrow-right"></lg-icon>
</button>
```

**After:**
```html
<button lg-button>
  Next
  <lg-icon name="arrow-right"></lg-icon>
</button>
```

> **Automated?** No — you will need to apply these changes manually for each occurrence.

---

## 4. Button: remove `size` input

**What changed:** `@Input() size` and the `ButtonSize` type have been removed. The small button size (`size="sm"`) is no longer supported by Canopy. Remove all `[size]` bindings from your button elements and remove `ButtonSize` from any TypeScript imports.

**Search for** (in `*.html` files) — **only remove occurrences on elements that also carry the `lg-button` directive**:
```
size="sm"
```

Remove the attribute entirely.

> ⚠️ Many other Canopy components (e.g. `lg-spinner`, `lg-radio`) also use a `size` input. Do **not** remove `size` from non-button elements.

Also search for property bindings (in `*.html` files) — again, only on `lg-button` elements:
```
[size]="
```

Remove these bindings entirely.

> ⚠️ As above — ensure you only remove `[size]` bindings on `lg-button` elements.

**Search for** (in `*.ts` files):
```
ButtonSize
```

Remove `ButtonSize` from any TypeScript imports.

**Before:**
```html
<button lg-button size="sm">Click me</button>
```

**After:**
```html
<button lg-button>Click me</button>
```

> **Automated?** No — you will need to remove each occurrence manually.

---

## 5. Button/CSS: rename or remove CSS modifier classes

**What changed:** The CSS modifier classes applied by the button component have been renamed in line with the new priority values. If your application applies these classes directly or targets them in custom CSS or SCSS, update them using the table below.

**Search for** (in `*.css`, `*.scss`, and `*.html` files), one at a time:
```
lg-btn--primary-dark
lg-btn--secondary-dark
lg-btn--primary-light
lg-btn--secondary-light
```

Use the following mapping table to determine the correct replacement:

| Old CSS class | New CSS class |
|---|---|
| `.lg-btn--primary-dark` | `.lg-btn--primary` |
| `.lg-btn--secondary-dark` | `.lg-btn--secondary` |
| `.lg-btn--primary-light` | `.lg-btn--primary` |
| `.lg-btn--secondary-light` | `.lg-btn--secondary` |

**Before:**
```scss
.my-component .lg-btn--primary-dark {
  /* custom override */
}
```

**After:**
```scss
.my-component .lg-btn--primary {
  /* custom override */
}
```

> **Automated?** No — you will need to update each reference manually.

---

## 6. Button/CSS tokens: replace `--btn-*` custom properties with `--button-*` tokens

**What changed:** The legacy `--btn-*` CSS custom properties used for button theming have been superseded by new `--button-*` design tokens. If your application overrides any of the `--btn-*` tokens listed in the table below, update those overrides to use the corresponding `--button-*` tokens instead.

**Search for** (in `*.css` and `*.scss` files):
```
--btn-
```

Use the following mapping table to determine the correct replacement for each token found:

| Old token | New token |
|---|---|
| `--btn-border-radius` | `--button-border-radius` |
| `--btn-font-size` | `--font-size-1` |
| `--btn-min-width` | `--button-common-labelled-min-width` |
| `--btn-line-height` | `--line-height-1` |
| `--btn-vertical-padding` | `--button-common-labelled-padding-y` |
| `--btn-horizontal-padding` | `--button-common-labelled-padding-x` |
| `--btn-icon-only-padding` | `--button-common-icon-only-padding-y` **and** `--button-common-icon-only-padding-x` |
| `--btn-vertical-padding--sm` | *(removed — small size no longer supported)* |
| `--btn-horizontal-padding--sm` | *(removed — small size no longer supported)* |
| `--btn-icon-only-padding--sm` | *(removed — small size no longer supported)* |
| `--btn-disabled-bg-color` | `--button-{priority}-disabled-background-colour` |
| `--btn-disabled-border-color` | `--button-{priority}-disabled-border-colour` |
| `--btn-disabled-color` | `--button-{priority}-disabled-colour` |
| `--btn-primary-dark-bg-color` | `--button-primary-rest-background-colour` |
| `--btn-primary-dark-border-color` | `--button-primary-rest-border-colour` |
| `--btn-primary-dark-color` | `--button-primary-rest-colour` |
| `--btn-secondary-dark-bg-color` | `--button-secondary-rest-background-colour` |
| `--btn-secondary-dark-border-color` | `--button-secondary-rest-border-colour` |
| `--btn-secondary-dark-color` | `--button-secondary-rest-colour` |
| `--btn-primary-light-*` | *(removed — no equivalent)* |
| `--btn-secondary-light-*` | *(removed — no equivalent)* |

> ⚠️ **`--btn-icon-only-padding`** was a single shorthand. It must be replaced with **two separate tokens**: `--button-common-icon-only-padding-y` (vertical) and `--button-common-icon-only-padding-x` (horizontal). Set both to the value you previously used for the single shorthand.

> ⚠️ **`--btn-disabled-*` tokens** were previously priority-agnostic (one set shared across all button priorities). The new tokens are priority-specific. Replace `{priority}` in the new token name with the actual priority value for that button context (`primary`, `secondary`, `link`, or `add-on`). You may need to add separate overrides for each priority you use.

> ⚠️ `--btn-vertical-padding--sm`, `--btn-horizontal-padding--sm`, `--btn-icon-only-padding--sm`, `--btn-primary-light-*`, and `--btn-secondary-light-*` have been removed with no replacement — remove any overrides of these tokens entirely.

**Before:**
```scss
:root {
  --btn-border-radius: 4px;
  --btn-primary-dark-bg-color: #1a1a1a;
  --btn-icon-only-padding: 12px;
  --btn-disabled-bg-color: #e0e0e0;
}
```

**After:**
```scss
:root {
  --button-border-radius: 4px;
  --button-primary-rest-background-colour: #1a1a1a;
  --button-common-icon-only-padding-y: 12px;
  --button-common-icon-only-padding-x: 12px;
  /* Disabled overrides are now per-priority */
  --button-primary-disabled-background-colour: #e0e0e0;
  --button-secondary-disabled-background-colour: #e0e0e0;
}
```

> **Automated?** No — you will need to update each token reference manually, consulting the mapping table above.

---

## 7. Button/SCSS: remove direct imports of removed partial files

**What changed:** The SCSS partial files `_button-primary.scss`, `_button-secondary.scss`, `_button.scss`, and `_button-add-on.scss` have been removed from the distributed `styles/variables/components/button/` directory. If your application references these files directly via `@use` or `@import`, remove those statements.

**Search for** (in `*.scss` files and `angular.json`):
```
button-primary
```

Also search for:
```
button-secondary
```

Also search for:
```
@legal-and-general/canopy/styles/variables/components/button/button'
```

Also search for:
```
button-add-on
```

If any of these are found inside a path containing `@legal-and-general/canopy/styles/variables/components/button/`, remove that `@use` or `@import` statement entirely.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/variables/components/button/button-primary';
@use '@legal-and-general/canopy/styles/variables/components/button/button-secondary';
@use '@legal-and-general/canopy/styles/variables/components/button/button';
@use '@legal-and-general/canopy/styles/variables/components/button/button-add-on';
```

**After:** Remove these `@use` statements entirely.

> **Automated?** No — you will need to remove each occurrence manually.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components).
