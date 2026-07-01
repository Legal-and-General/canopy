---
name: canopy-v34-migration
description: Apply the Canopy v33→v34 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v34, upgrade @legal-and-general/canopy from v33, or fix errors after upgrading to v34.
license: MIT
metadata:
  version: '34.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v34.0.0
---

# Canopy v33 → v34 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. breadcrumb: rename the `variant` values

**What changed:** The `variant` input on `<lg-breadcrumb>` now controls layout
rather than colour. The old colour-based values (`light`, `dark`) have been
replaced with layout-based values (`page`, `embedded`). The default has changed
from `dark` to `page`.

- Use `page` (default) for a full-width breadcrumb placed directly on a page,
  outside any component that already provides grid alignment.
- Use `embedded` when the breadcrumb is placed inside a component that already
  provides grid structure (for example, inside `<lg-hero-header>`).

**Search for** (in `*.html` and `*.ts` files):
```
variant="light"
variant="dark"
[variant]="'light'"
[variant]="'dark'"
BreadcrumbVariant.light
BreadcrumbVariant.dark
```

**Replace with:**

| Old value | New value | When to use |
|---|---|---|
| `light` | `embedded` | Inside a component that already provides grid structure (e.g. hero header) |
| `dark` | `page` | Full-page, top-level usage |

**Before:**
```html
<lg-breadcrumb variant="light" lgMarginBottom="none">
  ...
</lg-breadcrumb>
```

**After:**
```html
<lg-breadcrumb variant="embedded" lgMarginBottom="none">
  ...
</lg-breadcrumb>
```

**Before:**
```html
<lg-breadcrumb variant="dark">
  ...
</lg-breadcrumb>
```

**After:**
```html
<lg-breadcrumb variant="page">
  ...
</lg-breadcrumb>
```

**Before (TypeScript):**
```ts
import { BreadcrumbVariant } from '@legal-and-general/canopy';
component.variant = BreadcrumbVariant.dark;
```

**After (TypeScript):**
```ts
import { BreadcrumbVariant } from '@legal-and-general/canopy';
component.variant = BreadcrumbVariant.page;
```

> **Automated?** Yes — the rename is mechanical. Search for each old value and
> replace with the corresponding new value.

---

## 2. breadcrumb: remove manual `aria-current="page"` from the current page item

**What changed:** The breadcrumb component now automatically applies
`aria-current="page"` to the host element of the last `<lg-breadcrumb-item>`.
You no longer need to add `aria-current` manually to the inner link or span.
The current page item should contain plain text, not a link — the component
handles the accessible attribute itself.

**Search for** (in `*.html` files):
```
aria-current="page"
aria-current='page'
[attr.aria-current]
```
inside `<lg-breadcrumb-item>` elements.

**Replace with:**
- Remove `aria-current="page"` from any anchor or span inside
  `<lg-breadcrumb-item>`.
- If the item was a link (`<a href="...">`), replace it with plain text — the
  current page should not be navigable.

**Before:**
```html
<lg-breadcrumb-item>
  <a href="#" aria-current="page">Pension Annuity</a>
</lg-breadcrumb-item>
```

**After:**
```html
<lg-breadcrumb-item>
  Pension Annuity
</lg-breadcrumb-item>
```

> **Automated?** No — inspect each `<lg-breadcrumb-item>` that represents the
> current page, remove the `aria-current` attribute and the link wrapper.

---

## 3. breadcrumb: replace removed CSS custom properties

**What changed:** The colour CSS custom properties `--breadcrumb-light-color`
and `--breadcrumb-dark-color` have been removed. Breadcrumb links now use the
`--link-mono-*` token set for all interaction states.

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in
`*.html` files):
```
--breadcrumb-light-color
--breadcrumb-dark-color
```

**Replace with:**

| Removed CSS custom property | Replacement |
|---|---|
| `--breadcrumb-light-color` | `--link-mono-rest-colour` |
| `--breadcrumb-dark-color` | `--link-mono-rest-colour` |

**Before:**
```scss
.my-nav {
  --breadcrumb-dark-color: var(--colour-greyscale-900);
}
```

**After:**
```scss
.my-nav {
  --link-mono-rest-colour: var(--colour-greyscale-900);
}
```

> **Automated?** Yes — search and replace the token names directly.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section
   above and check whether the pattern matched all occurrences (for example in
   template `.html` files as well as `.ts` files).
