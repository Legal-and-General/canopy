---
name: canopy-v44-migration
description: Apply the Canopy v43→v44 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v44, upgrade @legal-and-general/canopy from v43, or fix errors after upgrading to v44.
license: MIT
metadata:
  version: '44.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v44.0.0
---

# Canopy v43 → v44 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. Page background: replace `--page-bg-color` overrides

**What changed:** Page templates now use body background tokens. The default
background uses `--body-default-background-colour`; the branded variant uses
`--body-regal-background-colour`. The old `--page-bg-color` override no longer
affects the page. Pages also have a `100dvh` minimum height and additional bottom
content spacing.

**Search for** (in `*.scss`, `*.css`, and other stylesheet entry points):
```
--page-bg-color
```

Also check page templates and styles for:
```
lg-page
```

**Replace with:**

- Remove `--page-bg-color` overrides.
- If the page should use the branded background, set `variant="branded"` on
  `<lg-page>`.
- For a custom background, style `.lg-page` directly with the desired value.
- Review the `100dvh` minimum height and additional bottom spacing if the page
  is used in a constrained layout.

**Before:**
```html
<lg-page>
  ...
</lg-page>
```
```scss
.lg-page {
  --page-bg-color: var(--my-page-background);
}
```

**After (branded background):**
```html
<lg-page variant="branded">
  ...
</lg-page>
```

**After (custom background):**
```scss
.lg-page {
  background: var(--my-page-background);
}
```

> **Automated?** No — update any obsolete overrides, choose the intended
> background, and check page sizing and spacing in constrained layouts.

---

## 2. Breadcrumb background: remove custom background styling

**What changed:** Breadcrumb backgrounds are now forced to transparent, so a
custom background style on `.lg-breadcrumb` will no longer take effect.

**Search for** (in `*.scss`, `*.css`, and other stylesheet entry points):
```
.lg-breadcrumb
```

Also check templates and inline styles for:
```
lg-breadcrumb
```

**Replace with:**

- Remove custom background declarations for `.lg-breadcrumb`; the component's
  background is transparent.
- Review any layouts that relied on a non-transparent breadcrumb background.

**Before:**
```scss
.lg-breadcrumb {
  background: var(--my-breadcrumb-background);
}
```

**After:**
```scss
/* No breadcrumb background override; it remains transparent. */
```

> **Automated?** No — remove obsolete background styling and review layouts
> that relied on it.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to the page or breadcrumb changes above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors or visual issues remain, re-read the relevant section and check
   every page background override, constrained page layout, and breadcrumb
   background style.
