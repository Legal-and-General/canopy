---
name: canopy-v35-migration
description: Apply the Canopy v34→v35 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v35, upgrade @legal-and-general/canopy from v34, or fix errors after upgrading to v35.
license: MIT
metadata:
  version: '35.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v35.0.0
---

# Canopy v34 → v35 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. pictogram: replace removed `sm` and `xxl` size values

**What changed:** The `PictogramSize` type no longer includes `'sm'` or `'xxl'`.
The supported sizes are now `'md' | 'lg' | 'xl'`. The default size has also
changed from `'sm'` to `'md'`.

**Search for** (in `*.html` and `*.ts` files):
```html
size="sm"
size="xxl"
[size]="'sm'"
[size]="'xxl'"
```
```ts
'sm'
'xxl'
PictogramSize
```

**Replace with:**

- Replace `size="sm"` or `[size]="'sm'"` with `size="md"` or `[size]="'md'"`.
- Replace `size="xxl"` or `[size]="'xxl'"` with `size="xl"` or `[size]="'xl'"`.
  Review each usage in context — `xl` is the largest available size.
- If a `size` input is omitted it will now default to `'md'` rather than `'sm'`,
  so an explicit `size="sm"` removal without a replacement results in a larger
  pictogram. Ensure this is acceptable in the design.

**Before:**
```html
<lg-pictogram name="sun" size="sm"></lg-pictogram>
<lg-pictogram name="sun" size="xxl"></lg-pictogram>
```

**After:**
```html
<lg-pictogram name="sun" size="md"></lg-pictogram>
<lg-pictogram name="sun" size="xl"></lg-pictogram>
```

> **Automated?** Partly — renaming `sm` → `md` and `xxl` → `xl` is mechanical,
> but review each instance to confirm the new size is visually appropriate for
> the layout.

---

## 2. pictogram: replace removed pictogram size CSS custom properties

**What changed:** The pictogram size tokens have been renamed and their values
changed to align with the new brand scale. The old `--lg-pictogram-*` tokens
no longer exist.

| Removed token        | Replacement token             |
|----------------------|-------------------------------|
| `--lg-pictogram-sm`  | *(removed; no equivalent)*    |
| `--lg-pictogram-md`  | `--content-pictogram-size-md` |
| `--lg-pictogram-lg`  | `--content-pictogram-size-lg` |
| `--lg-pictogram-xl`  | `--content-pictogram-size-xl` |
| `--lg-pictogram-xxl` | *(removed; no equivalent)*    |

Note: the pixel values have also changed. For example `--content-pictogram-size-md`
is `2rem` (32 px), `--content-pictogram-size-lg` is `5rem` (80 px), and
`--content-pictogram-size-xl` is `10rem` (160 px).

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in `*.html`
files):
```css
--lg-pictogram-sm
--lg-pictogram-md
--lg-pictogram-lg
--lg-pictogram-xl
--lg-pictogram-xxl
```

**Replace with:**

- Remove or replace overrides using the table above.
- `--lg-pictogram-sm` and `--lg-pictogram-xxl` have no equivalent; remove them
  and adjust component sizes to the nearest supported value.

**Before:**
```scss
.app-hero {
  --lg-pictogram-xl: 20rem;
}
```

**After:**
```scss
.app-hero {
  --content-pictogram-size-xl: 20rem;
}
```

> **Automated?** Partly — direct token renaming is mechanical, but you must
> manually assess each `sm`/`xxl` override since there is no direct replacement.

---

## 3. header: replace the renamed `--header-bg-color` CSS custom property

**What changed:** The `--header-bg-color` token has been renamed to
`--header-container-background-colour` (British spelling, more descriptive name).

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in `*.html`
files):
```css
--header-bg-color
```

**Replace with:**
```css
--header-container-background-colour
```

**Before:**
```scss
:root {
  --header-bg-color: var(--colour-brand-primary);
}
```

**After:**
```scss
:root {
  --header-container-background-colour: var(--colour-brand-primary);
}
```

> **Automated?** Yes — a find-and-replace across all stylesheets is sufficient.

---

## 4. header-logo: replace removed logo sizing CSS custom properties

**What changed:** The logo sizing tokens have been renamed from width-based to
max-height/height-based properties to reflect the new brand constraints.

| Removed token                  | Replacement token                          |
|--------------------------------|--------------------------------------------|
| `--header-logo-width`          | `--header-logo-primary-max-height-sm`      |
| `--header-logo-width-lg`       | `--header-logo-primary-max-height-lg`      |
| `--header-second-logo-width`   | `--header-logo-secondary-height-sm`        |
| `--header-second-logo-width-lg`| `--header-logo-secondary-max-width-lg` and `--header-logo-secondary-height-lg` |

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in `*.html`
files):
```css
--header-logo-width
--header-logo-width-lg
--header-second-logo-width
--header-second-logo-width-lg
```

**Replace with:** Use the replacements from the table above. Note that
`--header-second-logo-width-lg` now maps to two tokens — update both if you
were overriding the secondary logo width at the desktop breakpoint.

**Before:**
```scss
:root {
  --header-logo-width: 8rem;
  --header-logo-width-lg: 12rem;
}
```

**After:**
```scss
:root {
  --header-logo-primary-max-height-sm: 8rem;
  --header-logo-primary-max-height-lg: 12rem;
}
```

> **Automated?** Partly — renaming is mechanical, but the `--header-second-logo-width-lg`
> split into two tokens requires a manual decision about which token to override.

---

## 5. notification-badge: replace renamed CSS custom properties

**What changed:** The notification badge CSS custom properties have been renamed
for consistency with British-spelling conventions, and the `--notification-badge-width`
token has been removed in favour of `min-width` and `height` tokens.

| Removed token                   | Replacement token                         |
|---------------------------------|-------------------------------------------|
| `--notification-badge-bg-color` | `--notification-badge-background-colour`  |
| `--notification-badge-color`    | `--notification-badge-colour`             |
| `--notification-badge-width`    | `--notification-badge-min-width` (and `--notification-badge-height`) |

Additional new tokens are available:
`--notification-badge-padding` and `--notification-badge-border-radius`.

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in `*.html`
files):
```css
--notification-badge-bg-color
--notification-badge-color
--notification-badge-width
```

**Replace with:**

| Removed token                   | Replacement                              |
|---------------------------------|------------------------------------------|
| `--notification-badge-bg-color` | `--notification-badge-background-colour` |
| `--notification-badge-color`    | `--notification-badge-colour`            |
| `--notification-badge-width`    | `--notification-badge-min-width`         |

**Before:**
```scss
:root {
  --notification-badge-bg-color: var(--colour-brand-primary);
  --notification-badge-color: var(--colour-neutral-0);
  --notification-badge-width: 2rem;
}
```

**After:**
```scss
:root {
  --notification-badge-background-colour: var(--colour-brand-primary);
  --notification-badge-colour: var(--colour-neutral-0);
  --notification-badge-min-width: 2rem;
}
```

> **Automated?** Yes — find-and-replace the renamed properties. Review any
> `--notification-badge-width` override to confirm that `--notification-badge-min-width`
> is the correct semantic replacement for your context.

---

## 6. nav: add mobile item directives to primary nav and account menu items

**What changed:** The `lg-primary-nav` template now renders a mobile dropdown
(at viewports below the `lg` breakpoint) and a desktop list (at `lg` and above)
as two separate slots. Mobile navigation items must be explicitly marked with the
`lgPrimaryNavMobileItem` or `lgAccountMenuMobileItem` attribute directives so that
they are projected into the correct mobile link-menu.

Without these directives, items will only display at the desktop breakpoint inside
the `<ul lgShowAt="lg">` list.

**New exports** (add to your imports where you use `lg-primary-nav` or
`lg-account-menu`):
- `LgPrimaryNavMobileItemDirective` — selector `[lgPrimaryNavMobileItem]`
- `LgAccountMenuMobileItemDirective` — selector `[lgAccountMenuMobileItem]`

**Search for** (in `*.html` files):
```html
<lg-primary-nav
<lg-primary-nav-list-item
<lg-account-menu-list-item
```

**Replace with:**

For each `<lg-primary-nav-list-item>` that should also appear in the mobile
dropdown, add a corresponding `<lg-link-menu-item lgPrimaryNavMobileItem>` sibling
inside `<lg-primary-nav>`. For account menu items that should appear in the mobile
dropdown, add corresponding `<lg-link-menu-item lgAccountMenuMobileItem>` elements.

**Before:**
```html
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>

  <lg-primary-nav>
    <lg-primary-nav-list-item>
      <a href="/dashboard" lgPrimaryNavItem>Dashboard</a>
    </lg-primary-nav-list-item>
    <lg-primary-nav-list-item>
      <a href="/products" lgPrimaryNavItem>Products</a>
    </lg-primary-nav-list-item>
  </lg-primary-nav>

  <lg-account-menu>
    <lg-account-menu-list-item>
      <a href="/profile" lgAccountMenuItem>My profile</a>
    </lg-account-menu-list-item>
  </lg-account-menu>
</header>
```

**After:**
```html
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>

  <lg-primary-nav>
    <!-- Desktop items (visible at lg+) -->
    <lg-primary-nav-list-item>
      <a href="/dashboard" lgPrimaryNavItem>Dashboard</a>
    </lg-primary-nav-list-item>
    <lg-primary-nav-list-item>
      <a href="/products" lgPrimaryNavItem>Products</a>
    </lg-primary-nav-list-item>

    <!-- Mobile items (visible below lg, projected into the mobile dropdown) -->
    <lg-link-menu-item lgPrimaryNavMobileItem>
      <a href="/dashboard">
        <lg-link-menu-item-text>Dashboard</lg-link-menu-item-text>
      </a>
    </lg-link-menu-item>
    <lg-link-menu-item lgPrimaryNavMobileItem>
      <a href="/products">
        <lg-link-menu-item-text>Products</lg-link-menu-item-text>
      </a>
    </lg-link-menu-item>

    <!-- Mobile account items (projected into the mobile account dropdown) -->
    <lg-link-menu-item lgAccountMenuMobileItem>
      <a href="/profile">
        <lg-link-menu-item-text>My profile</lg-link-menu-item-text>
      </a>
    </lg-link-menu-item>
  </lg-primary-nav>

  <lg-account-menu>
    <lg-account-menu-list-item>
      <a href="/profile" lgAccountMenuItem>My profile</a>
    </lg-account-menu-list-item>
  </lg-account-menu>
</header>
```

Import the new directives in your component or module:
```ts
import {
  LgPrimaryNavMobileItemDirective,
  LgAccountMenuMobileItemDirective,
} from '@legal-and-general/canopy';
```

> **Automated?** No — this requires manually duplicating each nav item as a
> `lg-link-menu-item` with the appropriate mobile directive. Review the updated
> header documentation in Storybook for complete usage examples.

---

## 7. styles: review `lg-colour` mixin usage affected by `!important` removal

**What changed:** The `lg-colour` mixin no longer applies `!important` to the
`background-color` or `color` declarations. Applications that relied on
`!important` cascade behaviour to override these values may see style changes.

**Search for** (in `*.scss` files):
```scss
@include lg-colour
@include mixins.lg-colour
```

**Replace with:**

- If your component or theme layer previously needed to override the `background-color`
  or `color` set by `lg-colour`, the override may now work without needing to add
  its own `!important`. Review each usage and remove any redundant `!important`
  from your own overrides.
- If you were relying on `lg-colour`'s `!important` to force a specific colour
  against higher-specificity rules, you may now need to add `!important` to your
  own override rule or increase selector specificity.

> **Automated?** No — this requires a visual or test review of each place the
> `lg-colour` mixin is applied.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. Visually inspect the header on mobile (below the `lg` breakpoint) to confirm
   that mobile navigation items are present in the dropdown and that account menu
   items appear in the correct section.
5. Visually inspect any pictogram usage to confirm the new default `md` size is
   acceptable, and that `lg`/`xl` replacements for former `xxl` usage look correct.
6. If errors remain after applying all changes, re-read the relevant section above
   and check whether the pattern matched all occurrences (for example in template
   `.html` files as well as theme stylesheets).
