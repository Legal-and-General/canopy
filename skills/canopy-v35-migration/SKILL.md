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

## 1. forms: replace removed `lg-switch` usage

**What changed:** The `lg-switch` selector has been removed in v35. Any
template usage of `<lg-switch>` will fail after upgrading.

**Search for** (in `*.html` files):
```html
<lg-switch
</lg-switch>
```

**Replace with:**

- For binary choices where users pick one of two explicit options, use
  `lg-radio-group` with `lg-radio-button` (often inline).
- For segmented selection patterns, use the supported selectors
  `lg-segment-group` and `lg-segment-button`.
- Do **not** use `lg-segmented-control` because it is not a supported Canopy
  selector.
- Keep the same `formControlName` and option values where possible.

**Before:**
```html
<lg-switch formControlName="confirm" value="yes">Do you agree?</lg-switch>
```

**After (radio pattern):**
```html
<lg-radio-group formControlName="confirm" [inline]="true">
  <lg-radio-button value="yes">Yes</lg-radio-button>
  <lg-radio-button value="no">No</lg-radio-button>
</lg-radio-group>
```

**After (segment pattern):**
```html
<lg-segment-group formControlName="confirm">
  <lg-segment-button value="yes">Yes</lg-segment-button>
  <lg-segment-button value="no">No</lg-segment-button>
</lg-segment-group>
```

> **Automated?** No — replacing `lg-switch` requires choosing the correct
> interaction pattern for each form context.

---

## 2. quick-action: replace removed `[lg-quick-action]` usage

**What changed:** The `[lg-quick-action]` directive/component has been removed
in v35. Any usage in templates or imports will fail after upgrading.

**Search for** (in `*.html` and `*.ts` files):
```html
lg-quick-action
```
```ts
LgQuickActionComponent
```

**Replace with:**

- Replace action behaviour with standard Canopy buttons (for example
  `<button lg-button type="button">`).
- Replace navigation behaviour with standard Canopy links (for example
  `<a lg-link ...>`).
- Remove `LgQuickActionComponent` imports and any Angular metadata references.

**Before:**
```html
<button lg-quick-action>
  <lg-icon name="edit"></lg-icon>
  Edit details
</button>
```

```ts
import { LgQuickActionComponent } from '@legal-and-general/canopy';
```

**After (action):**
```html
<button lg-button type="button">
  <lg-icon name="edit"></lg-icon>
  Edit details
</button>
```

**After (navigation):**
```html
<a lg-link href="/details">
  <lg-icon name="edit"></lg-icon>
  View details
</a>
```

> **Automated?** Partly — finding/removing the old directive and imports is
> mechanical, but choosing button vs link intent requires manual review.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to `lg-switch` or `lg-quick-action`.
3. Ask the user to run their test command and confirm the test suite passes.
4. Re-check all migrated forms to confirm the replacement control (radio group
   vs segment group) still matches the intended interaction and accessibility.
