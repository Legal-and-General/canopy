---
name: canopy-v27-migration
description: Apply the Canopy v26→v27 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v27, upgrade @legal-and-general/canopy from v26, or fix errors after upgrading to v27.
license: MIT
metadata:
  version: '27.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v27.0.0
---

# Canopy v26 → v27 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. banner: replace projected `<lg-icon>` with banner inputs

**What changed:** `<lg-banner>` no longer uses projected `<lg-icon>` content for its leading status icon. You must now use banner inputs to control icon display.

**Search for** (in `*.html` files):
```
<lg-banner
```
Then inspect each banner for projected `<lg-icon>` children.

**Replace with:** Remove projected `<lg-icon>` from inside `<lg-banner>`. Use banner inputs instead:

- Use `[showIcon]="true"` when you want the status icon to display.
- Use `[icon]="'icon-name'"` only where custom icon overrides are supported (see section 2).

**Before:**
```html
<lg-banner status="warning">
  <lg-icon name="warning-outline"></lg-icon>
  Service disruption in your area.
</lg-banner>
```

**After:**
```html
<lg-banner status="warning" [showIcon]="true">
  Service disruption in your area.
</lg-banner>
```

> **Automated?** No — review each `<lg-banner>` and remove projected icon content.

---

## 2. banner: custom icon overrides now apply only to `generic` and `info`

**What changed:** Banner custom icon overrides no longer apply to `success`, `warning`, or `error`. These statuses now use fixed icons. Custom icons are only supported for `generic` and `info`.

**Search for** (in `*.html` and `*.ts` files):
```
<lg-banner
```
```
[icon]
```
```
icon=
```

**Replace with:**

- For `status="success"`, `status="warning"`, or `status="error"`: remove custom icon overrides (`[icon]`/`icon`) and any projected `<lg-icon>`.
- For custom icons, switch to `status="generic"` or `status="info"` where appropriate.

**Before:**
```html
<lg-banner status="warning">
  <lg-icon name="calendar"></lg-icon>
  Planned maintenance tonight.
</lg-banner>
```

**After:**
```html
<lg-banner status="warning">
  Planned maintenance tonight.
</lg-banner>
```

**Supported custom icon example:**
```html
<lg-banner status="info" [icon]="'calendar'">
  Planned maintenance tonight.
</lg-banner>
```

> **Automated?** No — inspect banner status values and remove unsupported icon overrides.

---

## 3. banner/accessibility: `role="alert"` no longer applies to `info` status

**What changed:** `role="alert"` is now applied only to `success`, `warning`, and `error` banners. `generic` and `info` banners no longer render with alert role semantics.

**Search for** (in `*.spec.ts`, `*.test.ts`, `*.cy.ts`, and `*.html` files):
```
role="alert"
```
```
toHaveAttribute('role', 'alert')
```
```
getAttribute('role')
```
Then identify assertions or selectors that assume `status="info"` banners have `role="alert"`.

**Replace with:** Update expectations so `info` banners do **not** require `role="alert"`. Keep `role="alert"` expectations for `success`, `warning`, and `error` statuses.

**Before:**
```ts
expect(infoBanner).toHaveAttribute('role', 'alert');
```

**After:**
```ts
expect(infoBanner).not.toHaveAttribute('role', 'alert');
```

> **Automated?** No — update any accessibility tests and selectors that depend on `info` banners having alert role semantics.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components).
