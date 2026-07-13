---
name: canopy-v34.2-migration
description: Apply the Canopy v34.1→v34.2 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v34.2, upgrade @legal-and-general/canopy to v34.2, or fix pagination build errors or style breakages after upgrading to v34.2.
license: MIT
metadata:
  version: '34.2.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v34.2.0
---

# Canopy v34.1 → v34.2 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. styles/pagination: remove deleted pagination stylesheet import

**What changed:** The pagination variables stylesheet
`projects/canopy/src/styles/variables/components/_pagination.scss` has been
deleted from the Canopy package. Its `@use` declaration was also removed from
the main `styles/variables.scss` barrel. Any project that imports this file
directly will fail to compile with a "file not found" or "module not found"
error.

**Search for** (in `*.scss` and `*.css` files):
```
@use '@legal-and-general/canopy/styles/variables/components/pagination'
@import '@legal-and-general/canopy/styles/variables/components/pagination'
```

**Replace with:**

- Remove the import line entirely.
- There is no direct replacement for this stylesheet — the tokens it defined
  have been removed and superseded by a new set of semantic design tokens
  (see section 2).
- If the import was the only declaration in a file, delete the empty file or
  remove its reference from any barrel stylesheet.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/variables/components/pagination';

.app-pagination-wrapper {
  margin-top: var(--space-4);
}
```

**After:**
```scss
.app-pagination-wrapper {
  margin-top: var(--space-4);
}
```

> **Automated?** Yes — locate and remove the deleted import wherever it
> appears. No replacement import is required.

---

## 2. pagination: replace removed CSS custom property tokens

**What changed:** The six legacy pagination CSS custom properties that were
previously defined in the deleted stylesheet have been removed. They have been
replaced by a new set of semantic design tokens that follow the Canopy brand
modernisation naming convention (British-spelling `colour` suffix, state-based
naming).

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in
`*.html` files):
```
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
| `--pagination-button-prevnext-hover-border-color` | `--pagination-page-focus-border-colour` |
| `--pagination-button-prevnext-hover-color` | `--pagination-page-hover-colour` |

- Note that `--pagination-button-prevnext-hover-border-color` and
  `--pagination-button-prevnext-hover-color` previously styled both border and
  text on the previous/next buttons during hover. In the new token set, focus
  border and hover text are separate tokens; review any override to confirm
  the visual result is correct.

**Before:**
```scss
.app-pagination {
  --pagination-button-hover-bg-color: var(--colour-greyscale-800);
  --pagination-button-hover-color: var(--colour-greyscale-0);
  --pagination-button-active-bg-color: var(--colour-blue-500);
  --pagination-button-active-color: var(--colour-greyscale-0);
  --pagination-button-prevnext-hover-border-color: var(--colour-greyscale-1000);
  --pagination-button-prevnext-hover-color: var(--colour-greyscale-1000);
}
```

**After:**
```scss
.app-pagination {
  --pagination-page-hover-background-colour: var(--colour-greyscale-800);
  --pagination-page-hover-colour: var(--colour-greyscale-0);
  --pagination-page-active-background-colour: var(--colour-blue-500);
  --pagination-page-active-colour: var(--colour-greyscale-0);
  --pagination-page-focus-border-colour: var(--colour-greyscale-1000);
}
```

> **Automated?** Partly — the token rename is mechanical using the table above,
> but review any custom theme overrides to confirm the new tokens produce the
> intended visual result, particularly for `--pagination-button-prevnext-*`
> which split into separate colour and border tokens in v34.2.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no stylesheet
   compilation errors related to the deleted pagination import or the removed
   CSS custom properties listed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section
   above and check whether the pattern matched all occurrences (for example in
   both `*.scss` files and inline `style=""` attributes in `*.html` templates,
   as well as any global theme override files).
