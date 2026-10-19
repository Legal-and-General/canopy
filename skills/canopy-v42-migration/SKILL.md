---
name: canopy-v42-migration
description: Apply the Canopy v41→v42 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v42, upgrade @legal-and-general/canopy from v41, or fix errors after upgrading to v42.
license: MIT
metadata:
  version: '42.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v42.0.0
---

# Canopy v41 → v42 Migration

Canopy v42 redesigns the Hero pattern for brand modernisation. When asked to apply
this migration, work through each section below in order. After completing all
sections, follow the **Verification** steps at the end.

---

## 1. hero API: remove the deleted `overlap` input

**What changed:** The `overlap` input has been removed from the Hero API. Hero
layouts must no longer bind or pass this input.

**Search for** (in `*.ts` files, including inline templates, and `*.html` files):
```
[overlap]
```
```
overlap=
```
```
overlap:
```

**Replace with:**

- Remove `[overlap]`, `overlap`, or `[overlap]="..."` from `<lg-hero>` and any
  other Hero markup.
- Rework the surrounding layout if it depended on overlap positioning; there is
  no replacement input in v42.

**Before:**
```html
<lg-hero [overlap]="2">
  <lg-hero-content>...</lg-hero-content>
</lg-hero>
```

**After:**
```html
<lg-hero>
  <lg-hero-content>...</lg-hero-content>
</lg-hero>
```

> **Automated?** No — remove the binding mechanically, then review the layout
> wherever the former overlap behaviour was relied upon.

---

## 2. hero variant: use `variant="child"` for conversational UI heroes

**What changed:** The Hero component now supports the `child` variant for
conversational UI. Use it when a hero represents a child or conversational
journey rather than a standard page hero.

**Search for** (in `*.html` files and inline templates in `*.ts` files):
```
<lg-hero
```

**Replace with:**

- Add `variant="child"` to conversational UI heroes.
- Leave standard page and product heroes on the default variant.
- If a hero still contains `[overlap]`, apply section 1 first.

**Before:**
```html
<lg-hero>
  <lg-hero-content>
    <lg-hero-card>...</lg-hero-card>
  </lg-hero-content>
</lg-hero>
```

**After:**
```html
<lg-hero variant="child">
  <lg-hero-content>
    <lg-hero-card>...</lg-hero-card>
  </lg-hero-content>
</lg-hero>
```

> **Automated?** No — identify conversational UI heroes and add the variant
> manually. Do not add it to every Hero instance.

---

## 3. hero notification and principle data points: use shared components

**What changed:** Hero-specific notification and principle data-point components
have been removed. Notifications now use the shared Alert component. Principle
values now use the shared Data Point components.

**Search for** (in `*.ts` files, including imports and standalone `imports`
arrays, plus `*.html` files and inline templates):
```
LgHeroCardNotificationComponent
```
```
lg-hero-card-notification
```
```
HeroCardPrincipleDataPoint
```
```
hero-card-principle-data-point
```

Also search for Hero-specific principle data-point labels and values, such as:
```
hero-card-principle-data-point-label
```
```
hero-card-principle-data-point-value
```

**Replace with:**

- Replace `LgHeroCardNotificationComponent` and
  `<lg-hero-card-notification>` with `LgAlertComponent` and
  `<lg-alert status="info">`.
- Remove any manually supplied notification icon; the shared Alert supplies the
  information icon.
- Replace the Hero-specific principle wrapper with
  `<lg-data-point variant="card-principle">`.
- Replace its label and value children with `<lg-data-point-label
  [headingLevel]="...">` and `<lg-data-point-value size="lg">`.
- Replace removed imports and entries in standalone component `imports` arrays
  with `LgAlertComponent`, `LgDataPointComponent`,
  `LgDataPointLabelComponent`, and `LgDataPointValueComponent`.

**Before:**
```ts
import {
  LgHeroCardNotificationComponent,
  LgHeroCardPrincipleDataPointComponent,
} from '@legal-and-general/canopy';
```
```html
<lg-hero-card-notification>
  <lg-icon name="info"></lg-icon>
  <p>Your payments have been suspended.</p>
</lg-hero-card-notification>

<lg-hero-card-principle-data-point>
  <lg-hero-card-principle-data-point-label>Last payment</lg-hero-card-principle-data-point-label>
  <lg-hero-card-principle-data-point-value>£230.20</lg-hero-card-principle-data-point-value>
</lg-hero-card-principle-data-point>
```

**After:**
```ts
import {
  LgAlertComponent,
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointValueComponent,
} from '@legal-and-general/canopy';
```
```html
<lg-alert status="info">
  <p>Your payments have been suspended.</p>
</lg-alert>

<lg-data-point variant="card-principle">
  <lg-data-point-label [headingLevel]="3">Last payment</lg-data-point-label>
  <lg-data-point-value size="lg">£230.20</lg-data-point-value>
</lg-data-point>
```

> **Automated?** No — update imports, standalone component metadata, selectors,
> and the structure of each Hero usage. Review heading levels and notification
> content while migrating.

---

## 4. hero secondary data points: use the shared data-point group

**What changed:** Hero-specific secondary data-point components have been
removed. Use the shared Data Point Group and Data Point components instead.

**Search for** (in `*.ts` files, including imports and standalone `imports`
arrays, plus `*.html` files and inline templates):
```
HeroCardDataPoint
```
```
hero-card-data-point
```
```
hero-card-data-point-list
```

Also search for the associated Hero-specific data-point label and value
selectors, and for imports whose names begin with `LgHeroCard` and describe a
data point.

**Replace with:**

- Use `<lg-data-point-group orientation="horizontal">` inside
  `<lg-hero-card-content>`.
- Put each item in `<lg-data-point>`.
- Use `<lg-data-point-label [headingLevel]="...">` and
  `<lg-data-point-value size="md">`.
- Use `<lg-data-point-secondary-label>` for supporting text beneath a value.
- Replace removed Hero-specific imports with
  `LgDataPointGroupComponent`, `LgDataPointComponent`,
  `LgDataPointLabelComponent`, `LgDataPointValueComponent`, and
  `LgDataPointSecondaryLabelComponent`.

**Before:**
```html
<lg-hero-card-data-point-list>
  <lg-hero-card-data-point>
    <lg-hero-card-data-point-label>Payment due</lg-hero-card-data-point-label>
    <lg-hero-card-data-point-value>15 Jan 2020</lg-hero-card-data-point-value>
  </lg-hero-card-data-point>
</lg-hero-card-data-point-list>
```

**After:**
```html
<lg-data-point-group orientation="horizontal">
  <lg-data-point>
    <lg-data-point-label [headingLevel]="3">Payment due</lg-data-point-label>
    <lg-data-point-value size="md">15 Jan 2020</lg-data-point-value>
  </lg-data-point>
</lg-data-point-group>
```

> **Automated?** No — migrate each Hero data-point structure manually and
> choose an appropriate heading level. Use the group for related secondary
> values and keep supporting text in the shared secondary-label component.

---

## 5. hero styling tokens: remove deleted tokens and rename data-point colour tokens

**What changed:** Hero CSS custom properties have been removed. The data-point
label colour token has also moved from the legacy label-and-hint token to the
shared data-point tokens.

**Search for** (in `*.scss`, `*.css`, and other stylesheet entry points):
```
--hero-
```
```
--label-and-hint-label-colour
```
```
--data-point-label-colour
```
```
--data-point-value-colour
```

**Replace with:**

- Remove overrides for deleted Hero-specific custom properties. Do not recreate
  them under a new name.
- Replace `--label-and-hint-label-colour` with
  `--data-point-label-colour` when it styles a data-point label.
- Replace it with `--data-point-value-colour` when it styles a data-point value.
- Re-test bespoke Hero styling because the release notes do not provide
  replacements for the deleted Hero tokens.

**Before:**
```scss
lg-hero {
  --hero-background-colour: #00205b;
  --label-and-hint-label-colour: #333333;
}
```

**After:**
```scss
/* Deleted Hero tokens must be removed. */
lg-data-point {
  --data-point-label-colour: #333333;
}
```

> **Automated?** No — remove obsolete overrides and choose the correct shared
> data-point token based on what the rule styles. Do not rename unrelated
> `label-and-hint` usage.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to Hero, Alert, or Data Point APIs.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section and
   search all `.html`, inline `.ts` templates, standalone `imports` arrays, and
   stylesheet entry points for missed Hero-specific identifiers.
