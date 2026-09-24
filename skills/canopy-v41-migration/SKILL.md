---
name: canopy-v41-migration
description: Apply the Canopy v40→v41 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v41, upgrade @legal-and-general/canopy from v40, or fix errors after upgrading to v41.
license: MIT
metadata:
  version: '41.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v41.0.0
---

# Canopy v40 → v41 Migration

When asked to apply this migration, first check whether the consumer project imports
Canopy's internal Table SCSS variables directly or overrides the removed legacy Table
CSS custom properties. If neither is present, no code migration is required for v41;
proceed to the **Verification** steps after confirming the project is a standard Table
consumer.

After completing all sections below, follow the **Verification** steps at the end.

---

## 1. table styles: remove direct imports of the deleted internal Table variables stylesheet

**What changed:** Canopy v41 removed the internal Table variables stylesheet at
`projects/canopy/src/styles/variables/components/_table.scss`. Consumers must stop
importing that internal file directly.

**Search for** (in `*.scss` and `*.css` files):
```scss
@use '@legal-and-general/canopy/styles/variables/components/table'
@import '@legal-and-general/canopy/styles/variables/components/table'
@use '@legal-and-general/canopy/styles/variables/components/_table'
@import '@legal-and-general/canopy/styles/variables/components/_table'
@use '@legal-and-general/canopy/styles/variables/components/table.scss'
@import '@legal-and-general/canopy/styles/variables/components/table.scss'
```

**Replace with:**

- Remove any direct import of the deleted Table variables file.
- Do not replace it with another internal Canopy Table variables import; the release
  notes do not define a replacement file.
- If the stylesheet only imported the file for side effects, delete the import and keep
  the rest of the stylesheet unchanged.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/variables/components/table';

.app-table-wrapper {
  overflow-x: auto;
}
```

**After:**
```scss
.app-table-wrapper {
  overflow-x: auto;
}
```

> **Automated?** Yes — remove the deleted import wherever it appears, then re-test any
> stylesheet that depended on those internal Table variables.

---

## 2. table styles: remove overrides of deleted legacy Table CSS custom properties

**What changed:** Canopy v41 removed these legacy Table CSS custom properties as part
of the Table brand modernisation:
>
> - `--table-stripe-color`
> - `--table-header-border-width`
> - `--table-header-border-color`
> - `--table-row-border-color`
> - `--table-toggle-width`

If your application overrides any of these properties, those overrides must be removed
or replaced as part of the migration.

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in `*.html`
files):
```css
--table-stripe-color
--table-header-border-width
--table-header-border-color
--table-row-border-color
--table-toggle-width
```

**Replace with:**

- Remove every override of the deleted properties listed above.
- Do not invent a blind 1-to-1 token rename. The release notes do not define direct
  replacement property names for these legacy styling hooks.
- After removing the overrides, re-test any bespoke Table theming against the new
  brand-modernised Table styling and reintroduce only styling that is supported by the
  current public Canopy API.

**Before:**
```scss
.app-table-theme {
  --table-stripe-color: var(--colour-neutral-100);
  --table-header-border-width: 2px;
  --table-header-border-color: var(--colour-neutral-500);
}
```

**After:**
```scss
.app-table-theme {
  /* Removed deleted legacy Table custom property overrides. Re-test the table styling
     against the v41 defaults before adding any new supported theming. */
}
```

> **Automated?** Partly — removing the deleted overrides is mechanical, but deciding
> whether replacement theming is still needed requires a manual visual review.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and
   test commands. Common script names include `build`, `compile`, `type-check`, `test`,
   and `test:ci` — use whichever are present.
2. If sections 1 and 2 produced no matches, treat the project as a standard Table
   consumer: no code migration is required for v41, but still ask the user to run their
   build command and visually check any pages that use `lg-table`.
3. If sections 1 or 2 did produce matches, ask the user to run their build command and
   confirm there are no stylesheet compilation errors related to the removed Table
   styling hooks.
4. Ask the user to run their test command and confirm the test suite passes.
5. If the project applies bespoke Table theming, ask the user to re-check those tables
   visually and confirm the new v41 appearance is acceptable after the deleted imports
   and overrides are removed.
