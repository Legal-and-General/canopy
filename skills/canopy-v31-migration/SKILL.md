---
name: canopy-v31-migration
description: Apply the Canopy v30→v31 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v31, upgrade @legal-and-general/canopy from v30, or fix errors after upgrading to v31.
license: MIT
metadata:
  version: '31.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v31.0.0
---

# Canopy v30 → v31 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. breadcrumb: update `BreadcrumbVariant` enum values

**What changed:** The `BreadcrumbVariant` enum values have been renamed as part of the breadcrumb brand modernisation. `light` and `dark` (which described the colour scheme of the breadcrumb) have been replaced with `page` and `embedded` (which describe the layout context).

| Old value | New value | When to use |
|-----------|-----------|-------------|
| `BreadcrumbVariant.dark` | `BreadcrumbVariant.page` | Full-page breadcrumb, renders at the top of a page with a bottom border separator |
| `BreadcrumbVariant.light` | `BreadcrumbVariant.embedded` | Breadcrumb placed inside another component (e.g. hero header, content area, card) |

**Search for** (in `*.ts` files):
```ts
BreadcrumbVariant.light
```
```ts
BreadcrumbVariant.dark
```

**Replace with:**

- `BreadcrumbVariant.light` → `BreadcrumbVariant.embedded`
- `BreadcrumbVariant.dark` → `BreadcrumbVariant.page`

**Before:**
```ts
import { BreadcrumbVariant } from '@legal-and-general/canopy';

component.variant = BreadcrumbVariant.dark;
component.variant = BreadcrumbVariant.light;
```

**After:**
```ts
import { BreadcrumbVariant } from '@legal-and-general/canopy';

component.variant = BreadcrumbVariant.page;
component.variant = BreadcrumbVariant.embedded;
```

> **Automated?** Yes — a straightforward find-and-replace in TypeScript files.

---

## 2. breadcrumb: update `variant` attribute in templates

**What changed:** The string values accepted by the `variant` input on `<lg-breadcrumb>` have changed from `'light'`/`'dark'` to `'embedded'`/`'page'`. The default value has also changed from `'dark'` to `'page'`.

**Search for** (in `*.html` and `*.ts` files):
```html
variant="light"
```
```html
variant="dark"
```
```ts
variant: 'light'
```
```ts
variant: 'dark'
```

**Replace with:**

- `variant="light"` → `variant="embedded"`
- `variant="dark"` → `variant="page"` (or remove the attribute entirely, as `page` is the new default)

**Before:**
```html
<!-- On a dark or coloured background (e.g. inside a hero or content area) -->
<lg-breadcrumb variant="light" lgMarginBottom="none">
  ...
</lg-breadcrumb>

<!-- On a standard white/light page background -->
<lg-breadcrumb variant="dark">
  ...
</lg-breadcrumb>
```

**After:**
```html
<!-- Inside another component (e.g. hero, content area, card) -->
<lg-breadcrumb variant="embedded" lgMarginBottom="none">
  ...
</lg-breadcrumb>

<!-- Full-page breadcrumb (default) -->
<lg-breadcrumb variant="page">
  ...
</lg-breadcrumb>
```

> **Automated?** Yes — a straightforward find-and-replace in template and TypeScript files.

---

## 3. breadcrumb: remove links from current-page breadcrumb items

**What changed:** The last `<lg-breadcrumb-item>` (representing the current page) must no longer contain an `<a>` element. Previously, it was common to use `<a href="#" aria-current="page">`, but this is now incorrect. Replace it with plain text or a `<span aria-current="page">`.

**Search for** (in `*.html` files):
```html
aria-current="page"
```
Look for any `<a>` element with `aria-current="page"` inside `<lg-breadcrumb-item>`.

**Replace with:**

- Remove the `<a>` element and replace it with either plain text content or `<span aria-current="page">`.

**Before:**
```html
<lg-breadcrumb-item>
  <a href="#" aria-current="page">Pension Annuity</a>
</lg-breadcrumb-item>
```

**After:**
```html
<!-- Option A: plain text (simplest) -->
<lg-breadcrumb-item>
  Pension Annuity
</lg-breadcrumb-item>

<!-- Option B: span with aria-current for improved accessibility -->
<lg-breadcrumb-item>
  <span aria-current="page">Pension Annuity</span>
</lg-breadcrumb-item>
```

> **Automated?** Partly — use a find-and-replace to find `aria-current="page"` inside `<lg-breadcrumb-item>` blocks, then manually confirm the anchor wrapper is removed.

---

## 4. breadcrumb: remove overrides of deleted CSS colour tokens

**What changed:** The `--breadcrumb-light-color` and `--breadcrumb-dark-color` CSS custom properties have been removed. Breadcrumb links now use the `--link-mono-*` token set for all colour states.

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in `*.html` files):
```scss
--breadcrumb-light-color
```
```scss
--breadcrumb-dark-color
```

**Replace with:**

- Remove any overrides for these deleted tokens.
- If you were customising breadcrumb colours, use the `--link-mono-*` tokens instead:

| Deleted token | Equivalent new token |
|---|---|
| `--breadcrumb-light-color` | `--link-mono-rest-colour` (and related states below) |
| `--breadcrumb-dark-color` | `--link-mono-rest-colour` (and related states below) |

The full set of new tokens:

| Token | State |
|---|---|
| `--link-mono-rest-colour` | Default/rest |
| `--link-mono-hover-colour` | Hover |
| `--link-mono-active-colour` | Active/pressed |
| `--link-mono-visited-colour` | Visited |
| `--link-mono-focus-colour` | Focus-visible outline |

**Before:**
```scss
.my-component {
  --breadcrumb-dark-color: var(--colour-brand-primary);
}
```

**After:**
```scss
.my-component {
  --link-mono-rest-colour: var(--colour-brand-primary);
}
```

> **Automated?** No — delete the removed token overrides first, then review whether any colour customisation still needs to be reapplied using the new `--link-mono-*` tokens.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. Visually verify breadcrumb components in your application:
   - Full-page breadcrumbs (e.g. at the top of a page, below the header) should use `variant="page"`.
   - Breadcrumbs inside hero headers, content areas, or cards should use `variant="embedded"`.
   - The last breadcrumb item (current page) should render as text, not as a link.
