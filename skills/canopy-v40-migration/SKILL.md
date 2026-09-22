---
name: canopy-v40-migration
description: Apply the Canopy v39→v40 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v40, upgrade @legal-and-general/canopy from v39, or fix errors after upgrading to v40.
license: MIT
metadata:
  version: '40.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v40.0.0
---

# Canopy v39 → v40 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. notice: replace `LgPrimaryMessageComponent` and `<lg-primary-message>` with `LgNoticeComponent` and `<lg-notice>`

**What changed:** `LgPrimaryMessageComponent` and the `<lg-primary-message>`
selector have been removed. Use `LgNoticeComponent` and `<lg-notice>` instead.

**Search for** (in `*.ts` files, including inline templates, plus `*.html` and
`*.spec.ts` files):
```
LgPrimaryMessageComponent
```
```
<lg-primary-message
```
```
</lg-primary-message>
```

**Replace with:**

- Replace `LgPrimaryMessageComponent` with `LgNoticeComponent`.
- Replace `<lg-primary-message` with `<lg-notice`.
- Replace `</lg-primary-message>` with `</lg-notice>`.
- If the same file also uses Primary Message title or description child components,
  apply the replacements from section 2 in the same pass.

**Before:**
```ts
import { LgPrimaryMessageComponent } from '@legal-and-general/canopy';
```
```html
<lg-primary-message [hasRole]="true">
  <lg-pictogram name="calendar" [hasFill]="false"></lg-pictogram>
  <p>This is a message</p>
</lg-primary-message>
```

**After:**
```ts
import { LgNoticeComponent } from '@legal-and-general/canopy';
```
```html
<lg-notice [hasRole]="true">
  <lg-pictogram name="calendar" [hasFill]="false"></lg-pictogram>
  <p>This is a message</p>
</lg-notice>
```

> **Automated?** No — update both Angular imports and template markup anywhere the
> removed Primary Message component is used.

---

## 2. notice: replace Primary Message title and description child components and selectors with Notice equivalents

**What changed:** `LgPrimaryMessageTitleComponent` and
`LgPrimaryMessageDescriptionComponent`, together with their selectors, have been
removed. Use `LgNoticeTitleComponent`, `LgNoticeDescriptionComponent`,
`<lg-notice-title>`, and `<lg-notice-description>` instead.

**Search for** (in `*.ts` files, including inline templates, plus `*.html` and
`*.spec.ts` files):
```
LgPrimaryMessageTitleComponent
```
```
LgPrimaryMessageDescriptionComponent
```
```
lg-primary-message-title
```
```
lg-primary-message-description
```

**Replace with:**

- `LgPrimaryMessageTitleComponent` → `LgNoticeTitleComponent`
- `LgPrimaryMessageDescriptionComponent` → `LgNoticeDescriptionComponent`
- `lg-primary-message-title` → `lg-notice-title`
- `lg-primary-message-description` → `lg-notice-description`

If an existing Primary Message includes a call to action, you can also move that
content into the optional `lg-notice-action` wrapper to follow the new Notice
pattern.

**Before:**
```html
<lg-primary-message-title>This is a message</lg-primary-message-title>
<lg-primary-message-description>
  Supporting copy goes here.
</lg-primary-message-description>
```

**After:**
```html
<lg-notice-title>This is a message</lg-notice-title>
<lg-notice-description>
  Supporting copy goes here.
</lg-notice-description>
```

> **Automated?** No — replace every removed child component import and selector
> wherever it appears, then review any calls to action to decide whether to wrap them
> in `lg-notice-action`.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and
   test commands. Common script names include `build`, `compile`, `type-check`, `test`,
   and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or
   compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and
   check whether the pattern matched all occurrences (for example in template `.html`
   files as well as `.ts` files, or across multiple components).
