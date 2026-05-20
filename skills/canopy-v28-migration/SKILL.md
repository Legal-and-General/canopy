---
name: canopy-v28-migration
description: Apply the Canopy v27→v28 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v28, upgrade @legal-and-general/canopy from v27, or fix errors after upgrading to v28.
license: MIT
metadata:
  version: '28.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v28.0.0
---

# Canopy v27 → v28 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. alert: generic `<lg-alert>` now shows an icon by default

**What changed:** The generic status in `<lg-alert>` now renders a globe icon when `showIcon` is enabled (default behaviour). Previously generic alerts rendered with no icon.

**Search for** (in `*.html` files):
```
<lg-alert
```
```
status="generic"
```

**Replace with:** For each generic `<lg-alert>`, decide whether to keep the new default icon, suppress it, or provide a custom icon.

- To suppress the icon: add `[showIcon]="false"`.
- To use a custom icon (supported for generic and info): set `icon="..."`.

**Before:**
```html
<lg-alert status="generic">Your message</lg-alert>
```

**After:**
```html
<lg-alert status="generic" [showIcon]="false">Your message</lg-alert>
```

**Alternative after (custom icon):**
```html
<lg-alert status="generic" icon="search">Your message</lg-alert>
```

> **Automated?** No — review each generic `<lg-alert>` and choose the intended icon behaviour.

---

## 2. alert: `<lg-alert>` spacing overrides now use component tokens

**What changed:** `<lg-alert>` now uses component-level spacing tokens. Overrides using `--space-4` or `--component-margin` no longer affect alert spacing. The component's built-in `margin-bottom` has also been removed.

**Search for** (in `*.css`, `*.scss`, and `*.html` files):
```
--space-4
```
```
--component-margin
```
Then inspect overrides scoped to `<lg-alert>`.

**Replace with:** Move alert spacing customisation to the new tokens and add explicit layout spacing where needed.

| Old override | New approach |
|---|---|
| `--space-4` | `--inline-message-padding-y` and/or `--inline-message-padding-x` |
| `--component-margin` | explicit layout spacing (for example `margin-bottom` on your own wrapper/layout rule) |

**Before:**
```scss
.my-component lg-alert {
  --space-4: 1rem;
  --component-margin: 1rem;
}
```

**After:**
```scss
.my-component lg-alert {
  --inline-message-padding-y: 0.75rem;
  --inline-message-padding-x: 1rem;
  margin-bottom: 1rem;
}
```

> **Automated?** No — update style overrides targeting `<lg-alert>` and check layout spacing where alerts are stacked.

---

## 3. alert: heading styles inside `<lg-alert>` have changed

**What changed:** Headings (`h1`–`h6`) inside `<lg-alert>` now render at `font-weight: 700` (previously `500`) and include bottom margin spacing.

**Search for** (in `*.html`, `*.scss`, and `*.css` files):
```
<lg-alert
```
Then identify alerts that contain heading elements.

**Replace with:** No template API change is required. If the new heading styling is not suitable, apply a local style override in your app.

**Before:**
```html
<lg-alert status="info">
  <h3>Important update</h3>
  <p>Details for the user.</p>
</lg-alert>
```

**After (only if you need to override locally):**
```scss
.my-component lg-alert h3 {
  font-weight: 500;
  margin-bottom: 0;
}
```

> **Automated?** No — visually review `<lg-alert>` usages that contain headings and apply local overrides only where needed.

---

## 4. shadow: deprecate `[lgShadow]` usage

**What changed:** The `[lgShadow]` directive is deprecated in v28 and will be removed in a future major release.

**Search for** (in `*.html` and `*.ts` files):
```
lgShadow
```

**Replace with:** There is no mandatory code change in v28, but you should identify all `[lgShadow]` usages now and plan their removal before the next major where it is removed.

**Before:**
```html
<div lgShadow>
  Card content
</div>
```

**After (v28):**
```html
<div lgShadow>
  Card content
</div>
```

> **Automated?** No — audit `[lgShadow]` usage and schedule its replacement in your project before the next major version upgrade.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components).
