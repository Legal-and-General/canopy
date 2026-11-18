---
name: canopy-v45-migration
description: Apply the Canopy v44→v45 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v45, upgrade @legal-and-general/canopy from v44, or fix errors after upgrading to v45.
license: MIT
metadata:
  version: '45.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v45.0.0
---

# Canopy v44 → v45 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. Accordion styles: replace legacy CSS property overrides

**What changed:** Overrides of legacy accordion CSS properties no longer control
the component's appearance. The release notes do not list the affected property
names or replacement properties, so check the v45 accordion documentation and
styles before changing each override.

**Search for** (in `*.scss`, `*.css`, and other stylesheet entry points):
```
accordion
```

Inspect matching stylesheets for CSS property overrides that customise the
accordion's appearance. The release notes do not identify the legacy property
names.

**Replace with:**

- Identify custom properties or styles that override the accordion's appearance.
- Check the Canopy v45 accordion documentation for supported styling options.
- Remove obsolete overrides or update them to supported options. Do not assume
  that an old property has a direct replacement.
- Leave unrelated accordion references unchanged.

**Before:**
```scss
/* Existing project-specific legacy accordion CSS property override(s). */
```

**After:**
```scss
/* No obsolete accordion property overrides. */
```

> **Automated?** No — review and update any legacy accordion CSS property
> overrides manually.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to the accordion.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors or visual issues remain, re-read the accordion section and check
   all stylesheet entry points for legacy overrides. Confirm each styling change
   against the Canopy v45 accordion documentation.
