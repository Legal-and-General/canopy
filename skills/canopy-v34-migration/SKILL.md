---
name: canopy-v34-migration
description: Apply the Canopy v33→v34 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v34, upgrade @legal-and-general/canopy from v33, or fix errors after upgrading to v34.
license: MIT
metadata:
  version: '34.3.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v34.3.0
---

# Canopy v33 → v34 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. breadcrumb: replace removed `variant` values with supported variants

**What changed:** The `light` and `dark` breadcrumb variants have been removed.
The supported variants are now `page` and `embedded`, and they are used
differently from the removed variants. Use `page` for full-page use within the
grid container, and use `embedded` when the breadcrumb sits within another
component. The default variant is now `page`, so explicit `variant="page"`
usage is optional in many cases.

**Search for** (in `*.html` and `*.ts` files):
```html
variant="light"
variant="dark"
[variant]="'light'"
[variant]="'dark'"
```
```ts
'light'
'dark'
```

**Replace with:**

- Do not apply a blind `light` → `embedded` or `dark` → `page` rename.
- Review each breadcrumb in context and choose the supported variant that fits
  its new layout:
  - use `page` for a page-level breadcrumb aligned to the grid;
  - use `embedded` for a breadcrumb placed inside another component.
- If a breadcrumb should use the default page styling, you may remove an
  explicit `variant="page"` after updating it.

**Before:**
```html
<lg-breadcrumb variant="light" lgMarginBottom="none">
  <lg-breadcrumb-item><a href="#">Home</a></lg-breadcrumb-item>
  <lg-breadcrumb-item><a href="#">Products</a></lg-breadcrumb-item>
  <lg-breadcrumb-item>
    <a href="#" aria-current="page">Pension Annuity</a>
  </lg-breadcrumb-item>
</lg-breadcrumb>

<lg-breadcrumb variant="dark">
  ...
</lg-breadcrumb>
```

**After (examples, with section 2 applied as well):**
```html
<lg-breadcrumb variant="embedded" lgMarginBottom="none">
  <lg-breadcrumb-item><a href="#">Home</a></lg-breadcrumb-item>
  <lg-breadcrumb-item><a href="#">Products</a></lg-breadcrumb-item>
  <lg-breadcrumb-item>Pension Annuity</lg-breadcrumb-item>
</lg-breadcrumb>

<lg-breadcrumb variant="page">
  ...
</lg-breadcrumb>
```

The final breadcrumb item is plain text in this example because v34 also
changes current-page handling; apply section 2 at the same time as the variant
update.

> **Automated?** Partly — searching for the removed values is mechanical, but
> choosing between `page` and `embedded` requires a layout review in each
> affected context.

---

## 2. breadcrumb: make the current page plain text and remove manual `aria-current`

**What changed:** `aria-current="page"` is now applied automatically to the
last `<lg-breadcrumb-item>` host. Consumers should remove manual
`aria-current="page"` from inner elements and render the current page as plain
text rather than a link.

**Search for** (in `*.html` files):
```html
aria-current="page"
<lg-breadcrumb-item><a
<lg-breadcrumb-item>
  <a
```

**Replace with:**

- Remove manual `aria-current="page"` from inner breadcrumb links.
- For the final breadcrumb item only, remove the `<a>` element and keep the
  current page text directly inside `<lg-breadcrumb-item>`.
- Keep earlier breadcrumb items as links unless your application deliberately
  uses a different navigation pattern.

**Before:**
```html
<lg-breadcrumb-item>
  <a href="#" aria-current="page">Current page</a>
</lg-breadcrumb-item>
```

**After:**
```html
<lg-breadcrumb-item>
  Current page
</lg-breadcrumb-item>
```

> **Automated?** Partly — removing `aria-current="page"` is mechanical, but you
> must manually confirm that only the final breadcrumb item is converted from a
> link to plain text.

---

## 3. styles/breadcrumb: remove deleted breadcrumb stylesheet imports

**What changed:** The breadcrumb stylesheet variables file has been removed.
`projects/canopy/src/styles/variables/components/_breadcrumb.scss` is no longer
shipped, and `styles/variables.scss` no longer imports it.

**Search for** (in `*.scss` and `*.css` files):
```scss
@use '@legal-and-general/canopy/styles/variables/components/breadcrumb'
@import '@legal-and-general/canopy/styles/variables/components/breadcrumb'
```

**Replace with:**

- Remove any breadcrumb-specific import from Canopy styles.
- If the file only existed to import breadcrumb variables, delete the import
  line and keep the rest of the stylesheet unchanged.
- Do not replace it with another breadcrumb component import; the file has been
  removed from the library.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/variables/components/breadcrumb';

.app-breadcrumb {
  margin-bottom: 0;
}
```

**After:**
```scss
.app-breadcrumb {
  margin-bottom: 0;
}
```

> **Automated?** Yes — remove the deleted import wherever it appears, then
> re-check any stylesheet that referenced it.

---

## 4. breadcrumb: replace removed breadcrumb colour tokens

**What changed:** The legacy `--breadcrumb-light-color` and
`--breadcrumb-dark-color` tokens have been removed. Search using those removed
American-spelling token names exactly as written, then replace them with the
current British-spelling `--link-mono-rest-colour` and related
`--link-mono-*` tokens from the new breadcrumb implementation.

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in
`*.html` files):
```css
--breadcrumb-light-color
--breadcrumb-dark-color
```

**Replace with:**

| Removed token | Replacement |
|---|---|
| `--breadcrumb-light-color` | `--link-mono-rest-colour` or the relevant `--link-mono-*` token for the state you are styling |
| `--breadcrumb-dark-color` | `--link-mono-rest-colour` or the relevant `--link-mono-*` token for the state you are styling |

- Remove references to the deleted breadcrumb colour tokens.
- Search for the removed American-spelling `color` token names, then replace
  them with the current British-spelling `colour` tokens.
- Update each override to the matching `--link-mono-*` token used by your theme
  layer for the same breadcrumb state.

**Before:**
```scss
.app-breadcrumb {
  --breadcrumb-dark-color: var(--colour-neutral-0);
}
```

**After:**
```scss
.app-breadcrumb {
  --link-mono-rest-colour: var(--colour-neutral-0);
}
```

> **Automated?** Partly — direct token replacement is straightforward, but
> manually review any custom hover, focus, or active states to ensure they use
> the appropriate related `--link-mono-*` tokens.

---

## 5. pagination: replace removed pagination style tokens

**What changed:** (v34.2.0) The pagination component was updated and its old
`--pagination-button-*` custom properties were removed in favour of a new set
of `--pagination-page-*` and related tokens. There is not a strict 1:1
replacement for every previous variable, so overrides need to be rechecked
against the new token model, including hover, focus, and active states.

**Search for** (in `*.scss` and `*.css` files, and inline `style=""`
attributes in `*.html` files):
```css
--pagination-button-hover-bg-color
--pagination-button-hover-color
--pagination-button-active-bg-color
--pagination-button-active-color
--pagination-button-prevnext-hover-border-color
--pagination-button-prevnext-hover-color
```

**Replace with:**

| Removed token | Replacement |
|---|---|
| `--pagination-button-hover-bg-color` | `--pagination-page-hover-background-colour` |
| `--pagination-button-hover-color` | `--pagination-page-hover-colour` |
| `--pagination-button-active-bg-color` | `--pagination-page-active-background-colour` |
| `--pagination-button-active-color` | `--pagination-page-active-colour` |
| `--pagination-button-prevnext-hover-border-color` | `--pagination-page-hover-hover-indicator-colour` (review against your hover state) |
| `--pagination-button-prevnext-hover-color` | `--pagination-page-hover-colour` (review against your hover state) |

Additional tokens are available on the new pagination component for states
that did not previously have an equivalent override, including
`--pagination-horizontal-gap`, `--pagination-vertical-gap`,
`--pagination-page-common-hover-indicator-width`,
`--pagination-page-rest-background-colour`, `--pagination-page-rest-colour`,
`--pagination-page-rest-hover-indicator-colour`,
`--pagination-page-active-hover-indicator-colour`,
`--pagination-page-focus-background-colour`,
`--pagination-page-focus-border-colour`,
`--pagination-page-focus-border-width`, `--pagination-page-focus-colour`,
`--pagination-page-focus-hover-indicator-colour`,
`--pagination-page-disabled-background-colour`,
`--pagination-page-disabled-colour`, and
`--pagination-page-disabled-hover-indicator-colour`.

**Before:**
```scss
:root {
  --pagination-button-hover-bg-color: var(--colour-neutral-95);
  --pagination-button-active-bg-color: var(--colour-brand-primary);
}
```

**After:**
```scss
:root {
  --pagination-page-hover-background-colour: var(--colour-neutral-95);
  --pagination-page-active-background-colour: var(--colour-brand-primary);
}
```

> **Automated?** Partly — renaming known removed tokens is mechanical, but you
> must manually review hover, focus, active, and disabled states because the
> new token model does not map 1:1 to the old one.

---

## 6. pagination: remove deleted pagination variables partial import

**What changed:** (v34.2.0) The pagination SCSS variables partial has been
deleted. Any direct import of it must be removed; customise the new
pagination tokens (see section 5) in your theme layer instead.

**Search for** (in `*.scss` files):
```scss
@use '@legal-and-general/canopy/styles/variables/components/pagination'
@import '@legal-and-general/canopy/styles/variables/components/pagination'
```

**Replace with:**

- Remove the import line entirely.
- Move any pagination customisation to overrides of the supported tokens
  listed in section 5.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/variables/components/pagination';
```

**After:**
```scss
/* Remove the deleted import */
/* Override supported pagination tokens in your theme layer instead */
```

> **Automated?** Yes — remove the deleted import wherever it appears.

---

## 7. IDs: update tests and overrides that depend on generated ID formats

**What changed:** (v34.3.0) Auto-generated element IDs are now randomised
alphanumeric strings instead of sequential numbers, to avoid ID collisions
across apps on the same page. This affects components such as inputs,
toggles, table rows/cells, card toggleable content, details panel headings,
and filter container panels. Internal `uniqueId`/`tableId` properties on
`LgCardToggableContentComponent`, `LgDetailsPanelHeadingComponent`,
`LgFilterContainerPanelComponent`, `LgTableRowToggleComponent`, and
`LgTableCellComponent` changed type from `number` to `string`, but these are
internal, not public inputs or outputs.

**Search for** (in e2e/selector test files):
```
#lg-input-0
lg-toggle-1
```
(and any other selectors that assume sequential numeric suffixes on
Canopy-generated IDs)

**Replace with:**

- Update selector patterns that assume sequential numeric IDs (for example
  `#lg-input-0`, `lg-toggle-1`) to match the new alphanumeric format (for
  example `lg-input-[a-z0-9]{7}`).
- If your application uses Angular SSR with `provideClientHydration()`,
  override auto-generated IDs via the component's `id` input to ensure
  consistent values are rendered on both server and client.
- No action is required if your application does not assert on generated ID
  values and does not use `provideClientHydration()`.

**Before:**
```ts
cy.get('#lg-input-0').should('be.visible');
```

**After:**
```ts
cy.get('[id^="lg-input-"]').should('be.visible');
```

> **Automated?** No — searching for hardcoded sequential ID selectors is
> mechanical, but confirming whether SSR hydration is affected, and updating
> selectors to match the application's own test conventions, requires manual
> review.

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
   template `.html` files as well as theme stylesheets and inline breadcrumb
   styling).
