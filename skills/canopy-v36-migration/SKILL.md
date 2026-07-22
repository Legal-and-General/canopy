---
name: canopy-v36-migration
description: Apply the Canopy v35→v36 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v36, upgrade @legal-and-general/canopy from v35, or fix errors after upgrading to v36.
license: MIT
metadata:
  version: '36.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v36.0.0
---

# Canopy v35 → v36 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. header/styles: remove deleted SCSS variables file and update CSS custom properties

**What changed:** The SCSS variables file
`styles/variables/components/_header.scss` (distributed as
`@legal-and-general/canopy/styles/variables/components/header`) has been
deleted. All CSS custom properties it defined have been removed or replaced by
new design tokens supplied by the `@legal-and-general/canopy-design-tokens`
package (v1.22.0+).

**Search for** (in `*.scss` and `*.css` files):
```
@legal-and-general/canopy/styles/variables/components/header
```

Also search for each old custom property name listed in the table below and
replace it with its new name. Search for each pattern in `*.scss`, `*.css`,
and `*.html` files:

| Old custom property | Replacement |
|---|---|
| `--header-bg-color` | `--header-container-background-colour` |
| `--header-height` | `--header-container-max-height` |
| `--header-height-lg` | `--header-container-max-height` |
| `--header-logo-width` | Hard-coded value; no direct replacement — remove the override |
| `--header-logo-width-lg` | Hard-coded value; no direct replacement — remove the override |
| `--header-shadow-height` | Removed — header shadow is no longer rendered; delete the rule |
| `--header-shadow` | Removed — header shadow is no longer rendered; delete the rule |
| `--overlay-bg-color` | Removed — overlay replaced by `lg-primary-nav-mobile`; delete the rule |
| `--nav-item-border-radius` | `--header-button-border-radius` |
| `--nav-item-icon-height` | `--button-icon-width` |
| `--nav-item-color` | `--header-button-rest-colour` |
| `--nav-item-color-hover` | `--header-button-hover-colour` |
| `--nav-item-color-active` | `--header-button-active-colour` |
| `--nav-item-color-expanded` | Removed — delete the rule |
| `--nav-item-bg-color` | `--header-button-focus-background-colour` |
| `--nav-item-bg-color-hover` | Removed — delete the rule |
| `--nav-item-bg-color-active` | `--header-button-active-background-colour` |
| `--nav-item-bg-color-expanded` | Removed — delete the rule |
| `--nav-item-border-color` | Removed — delete the rule |
| `--nav-item-border-color-hover` | `--header-button-hover-hover-indicator` |
| `--nav-item-border-color-active` | Removed — delete the rule |
| `--nav-item-border-color-expanded` | Removed — delete the rule |
| `--nav-item-border-width` | Removed — delete the rule |
| `--nav-item-border-width-hover` | Removed — delete the rule |
| `--nav-item-border-width-active` | Removed — delete the rule |
| `--nav-item-border-width-expanded` | Removed — delete the rule |
| `--notification-badge-width` | `--notification-badge-min-width` |
| `--notification-badge-height` | Now sourced from design tokens; remove any override |
| `--primary-nav-item-color` | `--header-button-rest-colour` |
| `--primary-nav-item-color-hover` | `--header-button-hover-colour` |
| `--primary-nav-item-color-hover-lg` | Removed — delete the rule |
| `--primary-nav-item-color-active` | `--header-button-active-colour` |
| `--primary-nav-item-color-active-lg` | Removed — delete the rule |
| `--primary-nav-item-border-color` | Removed — delete the rule |
| `--primary-nav-item-border-color-hover` | `--header-button-hover-hover-indicator` |
| `--primary-nav-item-border-color-active` | Removed — delete the rule |

**Before:**
```scss
@use '@legal-and-general/canopy/styles/variables/components/header';

:root {
  --header-bg-color: #fff;
  --nav-item-color: #333;
}
```

**After:**
```scss
/* Remove the @use import entirely — the file no longer exists */

:root {
  --header-container-background-colour: #fff;
  --header-button-rest-colour: #333;
}
```

> **Automated?** No — each property override must be reviewed individually
> using the table above.

---

## 2. notification-badge: rename colour CSS custom properties

**What changed:** The CSS custom properties `--notification-badge-color` and
`--notification-badge-bg-color` have been renamed to use British English
spelling: `--notification-badge-colour` and
`--notification-badge-background-colour` respectively.

**Search for** (in `*.scss`, `*.css`, and `*.html` files):
```
--notification-badge-color
```
```
--notification-badge-bg-color
```

**Replace with:**

- `--notification-badge-color` → `--notification-badge-colour`
- `--notification-badge-bg-color` → `--notification-badge-background-colour`

**Before:**
```css
:root {
  --notification-badge-color: white;
  --notification-badge-bg-color: red;
}
```

**After:**
```css
:root {
  --notification-badge-colour: white;
  --notification-badge-background-colour: red;
}
```

> **Automated?** Yes — these are straightforward string renames; a global
> find-and-replace across style files is sufficient.

---

## 3. pictogram: remove unsupported `size` values `'sm'` and `'xxl'`

**What changed:** The `PictogramSize` type no longer includes `'sm'` or
`'xxl'`. The default `size` has also changed from `'sm'` to `'md'`. Any
`<lg-pictogram>` that relied on the implicit default will now render at `'md'`
without a code change, but explicit `size="sm"` or `size="xxl"` bindings will
cause TypeScript or template compilation errors.

Valid sizes are now: `'md'`, `'lg'`, `'xl'`.

**Search for** (in `*.html` and `*.ts` files):
```
size="sm"
```
```
size="xxl"
```
```
PictogramSize
```

**Replace with:**

- `size="sm"` → `size="md"` (or omit to use the new default `'md'`)
- `size="xxl"` → `size="xl"`
- Update any TypeScript variables typed as `PictogramSize` that are assigned
  `'sm'` or `'xxl'`.

**Before:**
```html
<lg-pictogram name="example" size="sm"></lg-pictogram>
<lg-pictogram name="example" size="xxl"></lg-pictogram>
```

**After:**
```html
<lg-pictogram name="example" size="md"></lg-pictogram>
<lg-pictogram name="example" size="xl"></lg-pictogram>
```

> **Automated?** Partly — renaming `size="sm"` and `size="xxl"` is
> mechanical, but verify that the new size visually matches the intended design
> in each context.

---

## 4. header: remove `padding-top` offsets added for the former fixed header

**What changed:** `<lg-header>` is no longer `position: fixed`; it is now
`position: relative` and flows naturally in the document. Applications that
added `padding-top` or a top margin to the main content area to compensate for
the fixed header must remove those offsets.

**Search for** (in `*.scss` and `*.css` files):
```
/* offset for fixed header */
```

Also inspect your application's global styles and layout components for any
`padding-top` value that was introduced solely to push content below the fixed
header (commonly `4rem`, `5rem`, or `5.5rem` applied to `main`, `body`, or a
layout wrapper).

**Before:**
```css
main {
  padding-top: 5.5rem; /* offset for fixed header */
}
```

**After:** Remove the rule entirely — the header now occupies space in the
normal document flow.

> **Automated?** No — the offset values vary per application and must be
> identified and removed manually.

---

## 5. nav: remove references to the deleted `.lg-primary-nav-overlay` CSS class

**What changed:** The `.lg-primary-nav-overlay` element and CSS class have
been removed from `<lg-primary-nav>`. The mobile overlay is now rendered by
the new `.lg-primary-nav-mobile` section. Any custom styles targeting
`.lg-primary-nav-overlay` will silently have no effect; remove them to keep
your styles clean.

**Search for** (in `*.scss`, `*.css`, and `*.html` files):
```
lg-primary-nav-overlay
```

**Replace with:** Remove the rule entirely. If you need to style the mobile
panel, target `.lg-primary-nav-mobile` instead.

**Before:**
```css
.lg-primary-nav-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
```

**After:** Delete this rule. The mobile panel is now rendered as
`.lg-primary-nav-mobile` inside `<lg-primary-nav>`.

> **Automated?** Yes — finding and deleting `.lg-primary-nav-overlay`
> references is a straightforward global search-and-remove.

---

## 6. nav: migrate to content-projection-based mobile navigation

**What changed:** Mobile navigation now uses Angular content projection.
Items you want to appear in the mobile `<lg-link-menu>` must be decorated with
`[lgPrimaryNavMobileItem]` (for primary nav items) or
`[lgAccountMenuMobileItem]` (for account menu items). Import
`LgPrimaryNavMobileItemDirective` and `LgAccountMenuMobileItemDirective` from
`@legal-and-general/canopy`.

**Search for** (in `*.html` and `*.ts` files):
```html
<lg-primary-nav>
```
```html
<lg-account-menu>
```
```ts
LgPrimaryNavComponent
```

**Replace with:** Add desktop items inside `<lg-primary-nav-list-item>` and
add content-projected mobile items using `[lgPrimaryNavMobileItem]` on `<a>`
elements. For account menu mobile items, use `[lgAccountMenuMobileItem]`
similarly.

**Before:**
```html
<lg-primary-nav>
  <a class="lg-primary-nav-item" href="/home">Home</a>
</lg-primary-nav>
```

```ts
import { LgPrimaryNavComponent } from '@legal-and-general/canopy';
```

**After:**
```html
<lg-primary-nav>
  <!-- Desktop list item (visible at lg breakpoint and above) -->
  <lg-primary-nav-list-item>
    <a lgPrimaryNavItem href="/home">Home</a>
  </lg-primary-nav-list-item>

  <!-- Mobile link menu item (visible below lg breakpoint) -->
  <a lgPrimaryNavMobileItem href="/home">
    <lg-link-menu-item>
      <lg-link-menu-item-text>Home</lg-link-menu-item-text>
    </lg-link-menu-item>
  </a>
</lg-primary-nav>
```

For account menu mobile items:
```html
<lg-account-menu>
  <!-- existing desktop items -->
  <a lgAccountMenuMobileItem href="/my-account">
    <lg-link-menu-item>
      <lg-link-menu-item-text>My Account</lg-link-menu-item-text>
    </lg-link-menu-item>
  </a>
</lg-account-menu>
```

```ts
import {
  LgPrimaryNavComponent,
  LgPrimaryNavListItemComponent,
  LgPrimaryNavMobileItemDirective,
  LgAccountMenuMobileItemDirective,
} from '@legal-and-general/canopy';
```

> **Automated?** No — the correct mobile items and their labels must be
> determined per navigation structure.

---

## 7. styles/mixins: adjust specificity if you relied on `!important` from `lg-colour()`

**What changed:** The `lg-colour()` SCSS mixin no longer emits `!important` on
`background-color` and `color`. If your application uses this mixin directly
and relied on the `!important` to override conflicting styles, those overrides
may no longer take precedence.

**Search for** (in `*.scss` files):
```
lg-colour(
```

**Replace with:** Review each usage. If the previous behaviour relied on
`!important` to win a specificity conflict, increase the selector specificity
instead (for example, nest the rule or use a more specific selector).

**Before (compiled output):**
```css
background-color: var(--container-default-background-colour) !important;
color: var(--text-default-primary-colour) !important;
```

**After (compiled output):**
```css
background-color: var(--container-default-background-colour);
color: var(--text-default-primary-colour);
```

> **Automated?** No — each usage must be reviewed to determine whether a
> specificity adjustment is needed.

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
   template `.html` files as well as `.ts` files, or across multiple
   components).
