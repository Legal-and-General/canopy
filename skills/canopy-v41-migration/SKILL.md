---
name: canopy-v41-migration
description: Apply the Canopy v40→v41 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v41, upgrade @legal-and-general/canopy from v40, or fix errors after upgrading to v41.
license: MIT
metadata:
  version: '41.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v41.0.0
---

# Canopy v40 → v41 Migration

Most consumers do not need code changes for v41. The public Angular Table component API is unchanged.
Only apply the section below if the project imports Canopy's internal Table styling hooks directly or overrides the removed legacy Table CSS custom properties.

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. table styling: remove deleted internal Table SCSS imports and legacy Table custom property overrides

**What changed:** Canopy v41 removes the internal Table variables partial `projects/canopy/src/styles/variables/components/_table.scss` and the legacy Table CSS custom properties it exposed. Standard Angular Table usage is unaffected, but consumers that imported the internal SCSS file directly or overrode the removed custom properties must delete those styling hooks and re-test any bespoke theming.

**Search for** (in `*.scss`, `*.css`, and other stylesheet entry points such as `styles.scss` or theme partials):
```
projects/canopy/src/styles/variables/components/_table.scss
```
```
variables/components/table
```
```
--table-stripe-color
```
```
--table-header-border-width
```
```
--table-header-border-color
```
```
--table-row-border-color
```
```
--table-toggle-width
```

**Replace with:**

- Remove any direct `@import`, `@use`, or `@forward` that targets the deleted internal Table variables file.
- Remove overrides of these deleted custom properties:
  - `--table-stripe-color`
  - `--table-header-border-width`
  - `--table-header-border-color`
  - `--table-row-border-color`
  - `--table-toggle-width`
- If a ruleset exists only to override the deleted Table properties, delete the whole ruleset if it is no longer needed.
- Re-test any bespoke Table theming against the new brand-modernised styling, because there are no replacement variable names in the release notes.

**Before:**
```scss
@use '@legal-and-general/canopy/projects/canopy/src/styles/variables/components/table' as canopy-table;

lg-table {
  --table-stripe-color: #f7f9fb;
  --table-header-border-width: 0;
  --table-header-border-color: #d8dde3;
  --table-row-border-color: #d8dde3;
  --table-toggle-width: 3rem;
}
```

**After:**
```scss
/* Remove the deleted internal Table variables import. */

/* Remove legacy Table custom property overrides and re-test the table styling. */
```

> **Automated?** No — direct internal style imports and bespoke custom property overrides need manual review and removal, because the release notes do not provide replacement styling hooks.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (for example in global stylesheets, theme partials, or component `.scss` files).
