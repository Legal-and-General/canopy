---
name: canopy-v21-migration
description: Apply the Canopy v20→v21 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v21, upgrade @legal-and-general/canopy from v20, or fix errors after upgrading to v21.
license: MIT
metadata:
  version: '21.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v21.0.0
---

# Canopy v20 → v21 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. Alert / Inline message / Banner / Details / Form Validation: replace `variant` input with `status`

**What changed:** The `variant` input has been removed from the `Alert`, `Inline message`, `Banner`, `Details`, and `Form Validation` components. It has been replaced by the new `lgStatus` directive, which accepts the same string values. This change aligns these components with a consistent status-signalling API across the library.

**Search for** (in `*.html` files):
```
variant="
```

**Replace with:**
```
status="
```

**Before:**
```html
<lg-alert variant="info">
  Content
</lg-alert>

<lg-banner variant="warning">
  Content
</lg-banner>

<lg-details variant="success">
  Content
</lg-details>
```

**After:**
```html
<lg-alert status="info">
  Content
</lg-alert>

<lg-banner status="warning">
  Content
</lg-banner>

<lg-details status="success">
  Content
</lg-details>
```

Also search for property bindings (in `*.html` files):
```
[variant]="
```

**Replace with:**
```
[status]="
```

Also search for any TypeScript component properties named `variant` that are passed to these components, and check that the binding is updated consistently.

> **Automated?** No — you will need to apply this change manually to each template file that uses these components.

---

## 2. `lgVariant` directive: replace with `lgColour` and `lgColourTheme`

**What changed:** The `lgVariant` directive has been removed entirely and replaced by two new directives: `lgColour` (sets a colour mode) and `lgColourTheme` (sets a colour theme). Any element that previously used `lgVariant` must now use `lgColour` and `lgColourTheme` together, following the mapping table below. Where possible, consider replacing `lgVariant` usages with one of the components that now use `lgStatus` instead (`Alert`, `Inline message`, `Banner`, `Details`, `Form Validation`).

**Search for** (in `*.html` files):
```
lgVariant
```

Use the following mapping table to determine the correct replacement values:

| `lgVariant` value | `lgColour` value | `lgColourTheme` value |
|---|---|---|
| `error` | `red` | `subtle` |
| `info` | `blue` | `subtle` |
| `warning` | `yellow` | `subtle` |
| `success` | `green` | `subtle` |
| `generic` | `blue` | `neutral-inverse` |

**Before:**
```html
<div lgVariant="error">
  Content
</div>
```

**After:**
```html
<div lgColour="red" lgColourTheme="subtle">
  Content
</div>
```

**Before:**
```html
<div lgVariant="generic">
  Content
</div>
```

**After:**
```html
<div lgColour="blue" lgColourTheme="neutral-inverse">
  Content
</div>
```

Also search `*.ts` files for any imports or references to `LgVariantDirective` or `lgVariant` and remove or replace them with `LgColourDirective` from the `lgColour` module.

> **Automated?** No — you will need to apply this change manually, consulting the mapping table above for each occurrence.

---

## 3. Link CSS variables: rename updated variables and remove deleted ones

**What changed:** Several CSS custom properties related to link colours have been renamed to follow the new colour-token naming convention. A larger set of status-specific and link-related variables has been removed entirely as they are no longer used by the library. Any direct references to these variables in your project's CSS or SCSS files must be updated or removed.

### Renamed variables

Search for each old variable name and replace it with the new one:

| Old variable | New variable |
|---|---|
| `--link-color` | `--link-primary-rest-colour` |
| `--link-hover-color` | `--link-primary-hover-colour` |
| `--link-visited-color` | `--link-primary-visited-colour` |
| `--link-active-color` | `--link-primary-active-colour` |
| `--link-focus-color` | `--link-primary-focus-colour` |

**Search for** (in `*.css` and `*.scss` files), one at a time:
```
--link-color
--link-hover-color
--link-visited-color
--link-active-color
--link-focus-color
```

### Removed variables

The following variables have been removed entirely. Search for any references to them in your CSS and SCSS files and remove the declarations or replace them with equivalent tokens from the design system:

```
--link-active-bg-color
--link-focus-bg-color

--generic-bg-color
--generic-color
--generic-link-color
--generic-link-hover-color
--generic-link-visited-color
--generic-link-active-color
--generic-link-active-bg-color
--generic-link-focus-color
--generic-link-focus-bg-color

--info-bg-color
--info-color
--info-link-color
--info-link-hover-color
--info-link-visited-color
--info-link-active-color
--info-link-active-bg-color
--info-link-focus-color
--info-link-focus-bg-color

--success-bg-color
--success-color
--success-link-color
--success-link-hover-color
--success-link-visited-color
--success-link-active-color
--success-link-active-bg-color
--success-link-focus-color
--success-link-focus-bg-color

--warning-bg-color
--warning-color
--warning-link-color
--warning-link-hover-color
--warning-link-visited-color
--warning-link-active-color
--warning-link-active-bg-color
--warning-link-focus-color
--warning-link-focus-bg-color

--error-bg-color
--error-color
--error-link-color
--error-link-hover-color
--error-link-visited-color
--error-link-active-color
--error-link-active-bg-color
--error-link-focus-color
--error-link-focus-bg-color
```

Refer to the [link component colour modes documentation](https://legal-and-general.github.io/canopy/?path=/docs/components-link-guide--docs#colour-modes) for the correct replacement tokens.

> **Automated?** No — you will need to search your CSS and SCSS files for each variable listed above and either rename or remove it.

---

## 4. SCSS imports: replace `styles/variants` path with new token paths

**What changed:** The SCSS module path `@legal-and-general/canopy/styles/variants` has been removed. It must be replaced with two new token paths that supersede it: one for status tokens and one for component themes.

**Search for** (in `*.scss` files and any global stylesheet configuration, e.g. `angular.json`):
```
@legal-and-general/canopy/styles/variants
```

**Replace with** (both lines are required):
```scss
@legal-and-general/canopy/styles/tokens/status.css
@legal-and-general/canopy/styles/tokens/component-themes.css
```

Also check `angular.json` for any `styles` array entries referencing this path, and update them to include both new paths.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/variants';
```

**After:**
```scss
@use '@legal-and-general/canopy/styles/tokens/status.css';
@use '@legal-and-general/canopy/styles/tokens/component-themes.css';
```

> **Automated?** No — you will need to apply this change manually to each SCSS file (and to `angular.json` if the path is referenced there).

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components and `angular.json`).
