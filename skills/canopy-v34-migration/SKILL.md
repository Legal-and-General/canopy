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

## 1. breadcrumb: rename `BreadcrumbVariant` enum values in TypeScript

**What changed:** The `BreadcrumbVariant` enum has been renamed as part of the Brand Modernisation update. The values now represent _layout_ contexts rather than colour themes.

| Old value | New value |
|---|---|
| `BreadcrumbVariant.light` | `BreadcrumbVariant.embedded` |
| `BreadcrumbVariant.dark` | `BreadcrumbVariant.page` |

**Search for** (in `*.ts` files):
```ts
BreadcrumbVariant.light
BreadcrumbVariant.dark
```

**Replace with:**

- `BreadcrumbVariant.light` → `BreadcrumbVariant.embedded`
  (Use `embedded` when the breadcrumb was previously on a dark/hero background — it is now placed _inside_ another component that provides its own container and colour context.)
- `BreadcrumbVariant.dark` → `BreadcrumbVariant.page`
  (Use `page` when the breadcrumb sits directly on a standard page background. This is now the default, so you may remove the binding entirely.)

**Before:**
```ts
import { BreadcrumbVariant } from '@legal-and-general/canopy';

variant = BreadcrumbVariant.dark; // default usage on a standard page
heroVariant = BreadcrumbVariant.light; // usage inside hero header
```

**After:**
```ts
import { BreadcrumbVariant } from '@legal-and-general/canopy';

variant = BreadcrumbVariant.page; // or remove — page is now the default
heroVariant = BreadcrumbVariant.embedded; // usage inside hero header
```

> **Automated?** Yes — search and replace the two symbol names throughout `*.ts` files.

---

## 2. breadcrumb: update `variant` attribute in templates

**What changed:** The `variant` attribute on `<lg-breadcrumb>` now accepts `"page"` or `"embedded"` instead of `"light"` or `"dark"`. The default is now `"page"`.

**Search for** (in `*.html` and `*.ts` template strings):
```html
variant="light"
variant="dark"
[variant]="'light'"
[variant]="'dark'"
```

**Replace with:**

- `variant="light"` → `variant="embedded"`
  (Typically applies when `<lg-breadcrumb>` is inside `<lg-hero-header>`, `<lg-card-header>`, or any other component that already provides its own layout container.)
- `variant="dark"` → `variant="page"` (or remove the attribute entirely — `page` is now the default)

**Before:**
```html
<!-- inside a hero header -->
<lg-breadcrumb variant="light" lgMarginBottom="none">
  ...
</lg-breadcrumb>

<!-- standard page usage -->
<lg-breadcrumb variant="dark">
  ...
</lg-breadcrumb>
```

**After:**
```html
<!-- inside a hero header -->
<lg-breadcrumb variant="embedded" lgMarginBottom="none">
  ...
</lg-breadcrumb>

<!-- standard page usage — variant="page" is the default, so the attribute can be omitted -->
<lg-breadcrumb>
  ...
</lg-breadcrumb>
```

> **Automated?** Yes — search and replace across all template files.

---

## 3. breadcrumb: remove references to deleted CSS custom properties

**What changed:** The CSS custom properties `--breadcrumb-light-color` and `--breadcrumb-dark-color` have been removed. Breadcrumb link colours are now driven by the `--link-mono-*` design token set, which updates automatically with colour mode.

**Search for** (in `*.scss`, `*.css`, `*.ts`, and `*.html` files):
```text
--breadcrumb-light-color
--breadcrumb-dark-color
```

**Replace with:**

- Remove any usage or overrides of `--breadcrumb-light-color` and `--breadcrumb-dark-color`.
- If you were overriding these tokens to customise breadcrumb link colours, migrate to overriding `--link-mono-rest-colour` (and related `--link-mono-*` tokens) instead.

**Before:**
```scss
.my-hero {
  --breadcrumb-light-color: #ffffff;
}
```

**After:**
```scss
.my-hero {
  --link-mono-rest-colour: #ffffff;
  --link-mono-hover-colour: #ffffff;
  --link-mono-visited-colour: #ffffff;
  --link-mono-active-colour: #ffffff;
  --link-mono-focus-colour: #ffffff;
}
```

> **Note:** If you are using `<lg-hero-header>`, the breadcrumb link colours are now overridden to white automatically by the component — no manual colour overrides are needed.

> **Automated?** Yes — remove all occurrences of the deleted property names.

---

## 4. breadcrumb: remove `variant` property access on child components

**What changed:** The `variant` getter/setter has been removed from both `LgBreadcrumbItemComponent` and `LgBreadcrumbItemEllipsisComponent`. The variant is now managed exclusively on the parent `<lg-breadcrumb>` component via CSS class bindings.

**Search for** (in `*.ts` files):
```ts
LgBreadcrumbItemComponent
LgBreadcrumbItemEllipsisComponent
```
Then check for any `.variant` property access on instances of these classes.

**Replace with:**

- Remove any code that sets or reads `breadcrumbItem.variant` or `ellipsisItem.variant`.
- Set the variant on the parent `<lg-breadcrumb>` element using the `[variant]` input instead.

**Before:**
```ts
@ViewChild(LgBreadcrumbItemComponent) item: LgBreadcrumbItemComponent;

ngAfterViewInit() {
  this.item.variant = BreadcrumbVariant.light;
}
```

**After:**
```html
<lg-breadcrumb [variant]="myVariant">
  <lg-breadcrumb-item>...</lg-breadcrumb-item>
</lg-breadcrumb>
```

> **Automated?** Usually yes — these properties were internal implementation details, so direct access would have been unusual.

---

## 5. breadcrumb: remove custom styles targeting removed CSS modifier classes

**What changed:** The per-item CSS modifier classes `lg-breadcrumb-item--light`, `lg-breadcrumb-item--dark`, `lg-breadcrumb-item-ellipsis--light`, and `lg-breadcrumb-item-ellipsis--dark` are no longer applied. Colour is now controlled by the `--link-mono-*` tokens.

**Search for** (in `*.scss`, `*.css`, `*.ts`, and `*.html` files):
```text
lg-breadcrumb-item--light
lg-breadcrumb-item--dark
lg-breadcrumb-item-ellipsis--light
lg-breadcrumb-item-ellipsis--dark
```

**Replace with:**

- Remove all selectors and class bindings that reference these modifier classes.
- Migrate any colour overrides to the `--link-mono-*` token set on the `<lg-breadcrumb>` host element.

> **Automated?** Yes — remove all occurrences.

---

## 6. breadcrumb: update current-page item markup

**What changed:** The last breadcrumb item (current page) should now use plain text or `<span aria-current="page">` — never an `<a>` element. Any usage of `<a href="#" aria-current="page">` should be updated.

**Search for** (in `*.html` and `*.ts` template strings):
```html
aria-current="page"
```

**Replace with:**

- Remove `aria-current="page"` from any `<a>` element inside an `<lg-breadcrumb-item>`.
- Replace the `<a>` with a `<span aria-current="page">` (or plain text) for the current page label.

**Before:**
```html
<lg-breadcrumb-item>
  <a href="#" aria-current="page">Pension Annuity</a>
</lg-breadcrumb-item>
```

**After:**
```html
<lg-breadcrumb-item>
  <span aria-current="page">Pension Annuity</span>
</lg-breadcrumb-item>
```

> **Automated?** Yes — update each occurrence in breadcrumb templates.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript compilation errors related to `BreadcrumbVariant` or breadcrumb component APIs.
3. Ask the user to run their test command and confirm the test suite passes.
4. Manually review each breadcrumb instance in the application:
   - Breadcrumbs on standard pages should use the `page` variant (or no `variant` attribute) and display the bottom border separator spanning full viewport width.
   - Breadcrumbs inside hero headers and card headers should use the `embedded` variant and render without the container alignment styles.
   - The current page label (last item) should be non-interactive plain text or a `<span aria-current="page">`, not a link.
   - Link colours should adapt automatically to colour mode without any manual overrides.
