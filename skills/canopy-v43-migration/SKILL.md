---
name: canopy-v43-migration
description: Apply the Canopy v42→v43 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v43, upgrade @legal-and-general/canopy from v42, or fix errors after upgrading to v43.
license: MIT
metadata:
  version: '43.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v43.0.0
---

# Canopy v42 → v43 Migration

Canopy v43 redesigns cards for brand modernisation and removes the legacy Promo
Card API. When asked to apply this migration, work through each section below in
order. After completing all sections, follow the **Verification** steps at the end.

---

## 1. Promo Card API: migrate removed Promo Card components to Card

**What changed:** The legacy `PromoCard` components, exports, and styles have
been removed. Promotional content must use `lg-card` and its supported Card
content components.

**Search for** (in `*.ts` files, including imports and standalone `imports`
arrays, and in `*.html` files and inline templates):
```
PromoCard
```
```
promo-card
```
```
lg-promo-card
```

**Replace with:**

- Replace `LgPromoCard*` imports and standalone `imports` entries with the
  corresponding Card components.
-  - Replace `<lg-promo-card>` with `<lg-card variant="promo">`. Replace any
  `solid-white`, `solid-green`, or `solid-yellow` variant attributes or bound
  values with `promo`, and review the resulting appearance separately.
- Replace removed `PromoCardVariant` type references with `CardVariant` and
  update their assigned values to the supported Card variants.
- Use `<lg-card-hero-img>`, `<lg-card-header>`, `<lg-card-title>`,
  `<lg-card-content>`, and `<lg-card-footer>` for the relevant projected
  content. Place the hero image or pictogram before the Card body.
- Replace `<lg-promo-card-title>` with `<lg-card-title>` inside
  `<lg-card-header>`, preserving its content and `headingLevel` binding.
- Replace the Promo Card list wrapper with the existing grid components. Preserve
  each `<lg-promo-card-list-title>` as a heading with the same content and level
  outside the replacement grid. Replace the corresponding removed imports.
- Do not import the removed Promo Card SCSS or recreate its selectors.

**Before:**
```ts
import {
  LgPromoCardComponent,
  LgPromoCardContentComponent,
  LgPromoCardImageComponent,
} from '@legal-and-general/canopy';
```
```html
<lg-promo-card>
  <lg-promo-card-image imageUrl="care.jpg" />
  <lg-promo-card-content>Find care options</lg-promo-card-content>
</lg-promo-card>
```

**After:**
```ts
import {
  LgCardComponent,
  LgCardContentComponent,
  LgCardHeroImageComponent,
} from '@legal-and-general/canopy';
```
```html
<lg-card variant="promo">
  <lg-card-hero-img [src]="'care.jpg'" [cover]="true" />
  <lg-card-content>Find care options</lg-card-content>
</lg-card>
```

> **Automated?** No — update imports, selectors, projected content, and any
> surrounding grid layout manually. Review each card's content and accessibility.

---

## 2. Card variants: rename `promotion` and `navigation`

**What changed:** Card variant names have been shortened and clarified:
`promotion` is now `promo`, and `navigation` is now `interactive`.

**Search for** (in `*.html` files, inline templates in `*.ts` files, and
stylesheet selectors):
```
variant="promotion"
```
```
variant="navigation"
```
```
.lg-card--promotion
```
```
.lg-card--navigation
```

**Replace with:**
```
variant="promo"
variant="interactive"
.lg-card--promo
.lg-card--interactive
```

**Before:**
```html
<lg-card variant="promotion">Promotional content</lg-card>
<lg-card variant="navigation">Go to your account</lg-card>
```

**After:**
```html
<lg-card variant="promo">Promotional content</lg-card>
<lg-card variant="interactive">Go to your account</lg-card>
```

> **Automated?** No — update template attributes and any consumer CSS selectors,
> then review the resulting Card appearance.

---

## 3. Card styling tokens: remove legacy styles and use the new Card tokens

**What changed:** Legacy Card SCSS files and CSS custom properties have been
removed. The new Card API exposes tokens such as
`--card-background-colour`, `--card-colour`, `--card-border-colour`,
`--card-padding-x`, and `--card-padding-y`.

**Search for** (in `*.scss`, `*.css`, and other stylesheet entry points):
```
variables/components/card
```
```
_card.scss
```
```
--card-title-
```
```
--card-hero-image-
```
```
--card-navigation-
```
```
--card-active-
```
```
--card-background-color
```

**Replace with:**

- Remove direct `@import`, `@use`, or `@forward` references to deleted Card
  or Promo Card SCSS files.
- Remove overrides for legacy Card custom properties rather than recreating
  them under a legacy name.
- Where a replacement is appropriate, use the new tokens
  `--card-background-colour`, `--card-colour`, `--card-border-colour`,
  `--card-padding-x`, and `--card-padding-y`.
- Re-test bespoke Card theming; the release notes do not define a one-to-one
  replacement for every removed token.

**Before:**
```scss
@use '@legal-and-general/canopy/styles/variables/components/card';

.my-card {
  --card-title-border-color: #d8dde3;
  --card-hero-image-height: 12rem;
}
```

**After:**
```scss
.my-card {
  --card-border-colour: #d8dde3;
  --card-padding-y: 1rem;
}
```

> **Automated?** No — remove obsolete imports and overrides, and choose the
> appropriate new token for each styling requirement.

---

## 4. Card layout and orientation: update markup and remove reverse modifiers

**What changed:** Card content is now wrapped in `.lg-card__body`. Card footer
projection supports buttons, links, `lg-button-group`, and `lg-link-menu`.
Card layout and orientation styling have changed, and `reverse-vertical` and
`reverse-horizontal` modifiers are no longer styled for Cards.

**Search for** (in `*.html`, inline templates in `*.ts`, and Card styles):
```
reverse-vertical
```
```
reverse-horizontal
```
```
lg-card-footer
```
```
.lg-card__body
```

**Replace with:**

- Use only `vertical` or `horizontal` Card orientations through
  `[lgOrientation]`; do not use the reverse orientations for a Card.
- Update CSS selectors that assumed the old Card DOM structure. Target the new
  `.lg-card__body` wrapper where the content belongs.
- Put supported actions directly inside `<lg-card-footer>`; unsupported plain
  text or arbitrary content will not be projected.
- Review image and pictogram placement. `<lg-card-hero-img>` belongs before the
  Card body and its layout changes with the selected orientation.

**Before:**
```html
<lg-card [lgOrientation]="{ sm: 'reverse-vertical', md: 'reverse-horizontal' }">
  <lg-card-content>Details</lg-card-content>
  <lg-card-footer>Continue</lg-card-footer>
</lg-card>
```

**After:**
```html
<lg-card [lgOrientation]="{ sm: 'vertical', md: 'horizontal' }">
  <lg-card-content>Details</lg-card-content>
  <lg-card-footer>
    <button lg-button type="button">Continue</button>
  </lg-card-footer>
</lg-card>
```

> **Automated?** No — revise each Card's markup, actions, orientation, and
> consumer styles, then check the layout at the relevant breakpoints.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to Promo Card or Card APIs.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section and
   search all `.html`, inline `.ts` templates, standalone `imports` arrays, and
   stylesheet entry points for missed Promo Card, variant, token, or orientation
   identifiers.
