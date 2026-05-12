---
name: canopy-v26-migration
description: Apply the Canopy v25→v26 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v26, upgrade @legal-and-general/canopy from v25, or fix errors after upgrading to v26.
license: MIT
metadata:
  version: '26.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v26.0.0
---

# Canopy v25 → v26 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. footer: remove `FooterNavVariant` type import

**What changed:** The `FooterNavVariant` TypeScript type (`'primary' | 'secondary'`) has been removed from the public API. It was exported from the now-deleted `footer.interface.ts` file. The footer now has a single unified variant and this type is no longer needed.

**Search for** (in `*.ts` files):
```
FooterNavVariant
```

**Replace with:** Remove the import entirely. If `FooterNavVariant` is the only named import from `@legal-and-general/canopy` on that line, delete the whole import statement. If it appears alongside other named imports, remove only `FooterNavVariant` from the list. Also remove any variable declarations or type annotations that reference `FooterNavVariant`.

**Before:**
```ts
import { FooterNavVariant } from '@legal-and-general/canopy';
```

**After:** Remove the import entirely — the type is no longer part of the public API.

> **Automated?** No — locate every import of `FooterNavVariant` and delete it.

---

## 2. footer: remove `variant` input from `<lg-footer-nav>`

**What changed:** The `variant` input on `LgFooterNavComponent` has been removed. The footer no longer distinguishes between "primary" and "secondary" navigation groups. All footer links must now be placed inside a single `<lg-footer-nav>` element with no `variant` attribute. If your footer previously used two separate `<lg-footer-nav>` blocks, merge them into one.

Three new optional child components are also now available for the updated brand layout:

- `<lg-footer-footnote>` — for disclaimer or introductory text at the top of the footer, separated by a border line.
- `<lg-footer-social>` — for up to 8 social media icon links.
- `<lg-footer-stickers>` — for award badges, certifications, or co-branding partner logos.

**Search for** (in `*.html` files):
```
variant="primary"
```
```
variant="secondary"
```

Also search for:
```
[variant]="
```

**Replace with:** Remove the `variant` attribute. If two separate `<lg-footer-nav>` blocks exist, merge their `<lg-footer-nav-item>` children into a single `<lg-footer-nav>`.

**Before:**
```html
<footer lg-footer>
  <lg-footer-nav variant="primary">
    <lg-footer-nav-item><a href="/account">My account</a></lg-footer-nav-item>
    <lg-footer-nav-item><a href="/contact">Contact us</a></lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-nav variant="secondary">
    <lg-footer-nav-item><a href="/privacy">Privacy policy</a></lg-footer-nav-item>
    <lg-footer-nav-item><a href="/terms">Terms &amp; conditions</a></lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-logo src="assets/logo.svg" alt="Company"></lg-footer-logo>
  <lg-footer-copyright>© Company 2024</lg-footer-copyright>
</footer>
```

**After:**
```html
<footer lg-footer>
  <lg-footer-nav>
    <lg-footer-nav-item><a href="/account">My account</a></lg-footer-nav-item>
    <lg-footer-nav-item><a href="/contact">Contact us</a></lg-footer-nav-item>
    <lg-footer-nav-item><a href="/privacy">Privacy policy</a></lg-footer-nav-item>
    <lg-footer-nav-item><a href="/terms">Terms &amp; conditions</a></lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-logo src="assets/logo.svg" alt="Company"></lg-footer-logo>
  <lg-footer-copyright>© Company 2024</lg-footer-copyright>
</footer>
```

If you wish to use the new optional components, also update your `imports` array:

```ts
import {
  LgFooterNavComponent,
  LgFooterNavItemComponent,
  LgFooterLogoComponent,
  LgFooterCopyrightComponent,
  LgFooterFootnoteComponent,
  LgFooterSocialComponent,
  LgFooterStickersComponent,
} from '@legal-and-general/canopy';
```

> **Automated?** No — merge multiple `<lg-footer-nav>` blocks into one and remove all `variant` attributes.

---

## 3. footer: remove variant-specific CSS classes

**What changed:** The variant-specific CSS classes `.lg-footer-nav-item--primary`, `.lg-footer-nav-item--secondary`, `.lg-footer-nav__list--primary`, and `.lg-footer-nav__list--secondary` no longer exist in the compiled output. The list element now uses the single class `.lg-footer-nav__list`. If your application or test code targets any of these classes (e.g. in CSS overrides, Cypress selectors, or Playwright locators), update those references.

**Search for** (in `*.css`, `*.scss`, `*.ts`, `*.spec.ts`, and `*.e2e.ts` files):
```
lg-footer-nav-item--primary
```
```
lg-footer-nav-item--secondary
```
```
lg-footer-nav__list--primary
```
```
lg-footer-nav__list--secondary
```

**Replace with:**

| Removed class | Replacement |
|---|---|
| `.lg-footer-nav-item--primary` | `.lg-footer-nav-item` (no variant suffix) |
| `.lg-footer-nav-item--secondary` | `.lg-footer-nav-item` (no variant suffix) |
| `.lg-footer-nav__list--primary` | `.lg-footer-nav__list` |
| `.lg-footer-nav__list--secondary` | `.lg-footer-nav__list` |

> **Automated?** No — search for each removed class name in your stylesheets, templates, and test files and update accordingly.

---

## 4. footer: rename `--footer-bg-color` to `--footer-background-colour`

**What changed:** The CSS custom property used to override the footer background colour has been renamed from `--footer-bg-color` to `--footer-background-colour`, aligning with the Canopy British English naming convention.

**Search for** (in `*.css`, `*.scss`, and `*.html` files):
```
--footer-bg-color
```

**Replace with:**
```
--footer-background-colour
```

**Before:**
```css
:root {
  --footer-bg-color: #1a1a1a;
}
```

**After:**
```css
:root {
  --footer-background-colour: #1a1a1a;
}
```

> **Automated?** No — find and replace all occurrences of `--footer-bg-color` with `--footer-background-colour`.

---

## 5. footer: replace `--footer-logo-width` / `--footer-logo-width-lg` with `--footer-logo-size`

**What changed:** The two responsive logo-width custom properties — `--footer-logo-width` (mobile) and `--footer-logo-width-lg` (desktop breakpoint) — have been consolidated into a single `--footer-logo-size` property that applies at all breakpoints.

**Search for** (in `*.css`, `*.scss`, and `*.html` files):
```
--footer-logo-width
```

**Replace with:**

| Old property | New property |
|---|---|
| `--footer-logo-width` | `--footer-logo-size` |
| `--footer-logo-width-lg` | `--footer-logo-size` |

If you previously set different values for mobile and desktop, choose the value most appropriate for all breakpoints or accept the component default.

**Before:**
```css
:root {
  --footer-logo-width: 120px;
  --footer-logo-width-lg: 160px;
}
```

**After:**
```css
:root {
  --footer-logo-size: 120px;
}
```

> **Automated?** No — replace `--footer-logo-width` and `--footer-logo-width-lg` with `--footer-logo-size`, combining the two declarations into one.

---

## 6. footer: remove `--footer-text-color` override

**What changed:** The CSS custom property `--footer-text-color` has been removed. Footer navigation link colours are now driven by the `--link-mono-*` design token family, which is set centrally via the Canopy theme. If your application overrode `--footer-text-color`, remove that override and, if needed, override the appropriate `--link-mono-*` token instead.

**Search for** (in `*.css`, `*.scss`, and `*.html` files):
```
--footer-text-color
```

**Replace with:** Remove the declaration. If you need to customise footer link colours, use the `--link-mono-*` design tokens instead:

| Use case | Token |
|---|---|
| Default (rest) link colour | `--link-mono-rest-colour` |
| Hover link colour | `--link-mono-hover-colour` |
| Active link colour | `--link-mono-active-colour` |
| Visited link colour | `--link-mono-visited-colour` |

**Before:**
```css
:root {
  --footer-text-color: #ffffff;
}
```

**After** (if a custom colour is still required):
```css
:root {
  --link-mono-rest-colour: #ffffff;
}
```

> **Automated?** No — remove any `--footer-text-color` declarations. If you need to maintain a custom link colour in the footer, apply the appropriate `--link-mono-*` token override instead.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components).
