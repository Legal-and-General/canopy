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

## 1. form switch: replace removed `lg-switch` with radio buttons or a segment control

**What changed:** The `lg-switch` selector has been removed from Canopy. Replace
all usages with either an inline radio button pattern (`lg-radio-group` /
`lg-radio-button`) for binary choices between two explicit options, or a segment
control (`lg-segmented-control`) for segmented-state selection.

**Search for** (in `*.html` files):
```
lg-switch
```

**Replace with:**

- For binary yes/no or on/off choices, use `lg-radio-group` with inline radio
  buttons.
- For segmented-state selection (e.g. switching between two labelled states),
  use `lg-segmented-control`.
- Review each usage in context to decide which pattern better matches the
  original intent.

**Before:**
```html
<lg-switch formControlName="confirm" value="yes">Do you agree?</lg-switch>
```

**After (binary choice — radio buttons):**
```html
<lg-radio-group formControlName="confirm">
  <lg-radio-button value="yes">Yes</lg-radio-button>
  <lg-radio-button value="no">No</lg-radio-button>
</lg-radio-group>
```

**After (segmented selection — segment control):**
```html
<lg-segmented-control formControlName="confirm">
  ...
</lg-segmented-control>
```

> **Automated?** No — searching for `lg-switch` is mechanical, but choosing
> between `lg-radio-group` and `lg-segmented-control` requires reviewing the
> intent of each form switch in context.

---

## 2. quick action: replace removed `[lg-quick-action]` with a button or link

**What changed:** The `[lg-quick-action]` directive/component has been removed
from Canopy. Replace all usages with a standard Canopy button (`lg-button`) for
actions or a Canopy link (`lg-link`) for navigation, based on the intent of each
quick action.

**Search for** (in `*.html` files):
```
lg-quick-action
```

**Replace with:**

- Use `<button lg-button>` for actions that perform an operation (e.g. editing
  details, submitting data).
- Use `<a lg-link>` for navigation to another page or route.
- Retain any `<lg-icon>` child elements — they are supported inside both buttons
  and links.

**Before:**
```html
<button lg-quick-action>
  <lg-icon name="edit"></lg-icon>
  Edit details
</button>
```

**After (action — button):**
```html
<button lg-button type="button">
  <lg-icon name="edit"></lg-icon>
  Edit details
</button>
```

**Before:**
```html
<a lg-quick-action href="/details">
  <lg-icon name="edit"></lg-icon>
  View details
</a>
```

**After (navigation — link):**
```html
<a lg-link href="/details">
  <lg-icon name="edit"></lg-icon>
  View details
</a>
```

> **Automated?** No — searching for `lg-quick-action` is mechanical, but
> choosing between `lg-button` and `lg-link` requires reviewing the intent of
> each quick action in context.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section
   above and check whether the pattern matched all occurrences (for example in
   template `.html` files across multiple components).
