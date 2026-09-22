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

## 1. notice: rename `primary-message` APIs to `notice`

**What changed:** The primary message component family has been renamed to
notice as part of the v40 brand modernisation work. If your project still
uses the old `primary-message` selectors, imports, or local selector/class
references, rename them to the new `notice` equivalents.

**Search for** (in `*.ts`, `*.html`, `*.scss`, `*.css`, and `*.spec.ts`
files):
```
PrimaryMessage
```
```
lg-primary-message
```
```
.lg-primary-message
```

**Replace with:**

- In Angular imports and standalone `imports` arrays, replace the
  `PrimaryMessage` part of each Canopy symbol with `Notice` (for example
  `LgPrimaryMessageComponent` → `LgNoticeComponent`).
- In templates, replace `lg-primary-message` with `lg-notice`, and apply the
  same rename to related child selectors such as
  `lg-primary-message-title` → `lg-notice-title` and
  `lg-primary-message-description` → `lg-notice-description`.
- In local styles, tests, and snapshots, rename selector or class references
  from `.lg-primary-message` to `.lg-notice`.

**Before:**
```ts
import {
  LgPrimaryMessageComponent,
  LgPrimaryMessageDescriptionComponent,
  LgPrimaryMessageTitleComponent,
} from '@legal-and-general/canopy';

@Component({
  imports: [
    LgPrimaryMessageComponent,
    LgPrimaryMessageDescriptionComponent,
    LgPrimaryMessageTitleComponent,
  ],
})
export class ConfirmationPageComponent {}
```
```html
<lg-primary-message>
  <lg-pictogram name="calendar"></lg-pictogram>
  <lg-primary-message-title>All done!</lg-primary-message-title>
  <lg-primary-message-description>
    Your application has been submitted successfully.
  </lg-primary-message-description>
</lg-primary-message>
```

**After:**
```ts
import {
  LgNoticeComponent,
  LgNoticeDescriptionComponent,
  LgNoticeTitleComponent,
} from '@legal-and-general/canopy';

@Component({
  imports: [
    LgNoticeComponent,
    LgNoticeDescriptionComponent,
    LgNoticeTitleComponent,
  ],
})
export class ConfirmationPageComponent {}
```
```html
<lg-notice>
  <lg-pictogram name="calendar"></lg-pictogram>
  <lg-notice-title>All done!</lg-notice-title>
  <lg-notice-description>
    Your application has been submitted successfully.
  </lg-notice-description>
</lg-notice>
```

> **Automated?** No — the rename itself is mechanical, but you should review
> every match because the old `primary-message` name may also appear in local
> styles, tests, or snapshots that need corresponding updates.

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
   template `.html` files as well as `.ts` files, or across local styles and
   test snapshots).
