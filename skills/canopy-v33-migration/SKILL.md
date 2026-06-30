---
name: canopy-v33-migration
description: Apply the Canopy v32→v33 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v33, upgrade @legal-and-general/canopy from v32, or fix errors after upgrading to v33.
license: MIT
metadata:
  version: '33.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v33.0.0
---

# Canopy v32 → v33 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. pictogram: replace `lg-brand-icon` APIs with `lg-pictogram`

**What changed:** `lg-brand-icon` has been replaced by `lg-pictogram`. The
`LgBrandIconComponent`, `LgBrandIconRegistry`, `BrandIconName`, and
`BrandIconSize` exports have been removed and replaced with
`LgPictogramComponent`, `LgPictogramRegistry`, `PictogramName`, and
`PictogramSize`.

**Search for** (in `*.html` and `*.ts` files):
```html
lg-brand-icon
```
```ts
LgBrandIconComponent
LgBrandIconRegistry
BrandIconName
BrandIconSize
```

**Replace with:**

- Replace `<lg-brand-icon>` with `<lg-pictogram>`.
- Update imports from the Canopy library to use `LgPictogramComponent`,
  `LgPictogramRegistry`, `PictogramName`, and `PictogramSize`.
- In `TestBed`, standalone component `imports`, NgModule metadata, and any
  other Angular arrays, replace `LgBrandIconComponent` with
  `LgPictogramComponent` and `LgBrandIconRegistry` with
  `LgPictogramRegistry`.

**Before:**
```ts
import {
  BrandIconName,
  BrandIconSize,
  LgBrandIconComponent,
  LgBrandIconRegistry,
} from '@legal-and-general/canopy';
```

```html
<lg-brand-icon name="sun" size="sm"></lg-brand-icon>
```

**After:**
```ts
import {
  LgPictogramComponent,
  LgPictogramRegistry,
  PictogramName,
  PictogramSize,
} from '@legal-and-general/canopy';
```

```html
<lg-pictogram name="sun" size="sm"></lg-pictogram>
```

> **Automated?** No — update selectors, imports, Angular metadata arrays, and
> renamed types together.

---

## 2. pictogram: remove legacy colour inputs

**What changed:** The `colour`, `halfToneColour`, and `outlinesColour` inputs
have been removed. Pictogram colouring is now theme-driven via CSS custom
properties. To enable the fill colour controlled by
`--content-pictogram-fill`, set `[hasFill]="true"` only where that behaviour is
wanted.

**Search for** (in `*.html` and `*.ts` files):
```html
colour
halfToneColour
outlinesColour
```

**Replace with:**

- Remove `colour`, `halfToneColour`, and `outlinesColour` inputs from
  `lg-pictogram` usage.
- If a self-service application needs the fill colour, set `[hasFill]="true"`.
- If no fill is needed, omit `hasFill` and keep the default theme-driven
  appearance.
- Do not set `hasFill` in highly branded scenarios such as Dotcom CMS unless
  the product team has explicitly approved it.

**Before:**
```html
<lg-brand-icon name="sun" [colour]="'--colour-green-400'"></lg-brand-icon>
```

**After:**
```html
<lg-pictogram name="sun" [hasFill]="true"></lg-pictogram>
```

```html
<lg-pictogram name="sun"></lg-pictogram>
```

> **Automated?** No — remove the deleted inputs everywhere, then decide case by
> case whether `hasFill` should be enabled.

---

## 3. pictogram: replace unsupported `xxs` and `xs` sizes

**What changed:** The `xxs` and `xs` sizes have been removed from the size API.
The supported sizes are now `sm`, `md`, `lg`, `xl`, and `xxl`.

**Search for** (in `*.html` and `*.ts` files):
```html
size="xxs"
size="xs"
```
```ts
'xxs'
'xs'
```

**Replace with:** Choose the closest supported size from the updated scale
below. There is no direct equivalent for `xxs` or `xs`; the smallest supported
size is now `sm`.

| Size | rem | px |
|---|---|---|
| `sm` | 10 | 160 |
| `md` | 12.5 | 200 |
| `lg` | 15 | 240 |
| `xl` | 17.5 | 280 |
| `xxl` | 20 | 320 |

**Before:**
```html
<lg-pictogram name="sun" size="xs"></lg-pictogram>
```

**After:**
```html
<lg-pictogram name="sun" size="sm"></lg-pictogram>
```

> **Automated?** No — replace each removed size with the closest supported size
> for that specific UI.

---

## 4. pictogram: rename removed `--brand-icon-*` CSS custom properties

**What changed:** The `--brand-icon-*` CSS custom properties have been removed.
Use the new `--content-pictogram-size-*` tokens instead. The
`--brand-icon-fill-primary` token has also been removed; use
`--content-pictogram-fill` or the `[hasFill]="true"` input instead.

**Search for** (in `*.scss`, `*.css`, and inline `style=""` attributes in
`*.html` files):
```css
--brand-icon-
```

**Replace with:**

| Removed CSS custom property | Replacement |
|---|---|
| `--brand-icon-xxs` | no direct equivalent — use `sm` |
| `--brand-icon-xs` | no direct equivalent — use `sm` |
| `--brand-icon-sm` | `--content-pictogram-size-sm` |
| `--brand-icon-md` | `--content-pictogram-size-md` |
| `--brand-icon-lg` | `--content-pictogram-size-lg` |
| `--brand-icon-xl` | `--content-pictogram-size-xl` |
| `--brand-icon-xxl` | `--content-pictogram-size-xxl` |
| `--brand-icon-fill-primary` | `--content-pictogram-fill` or `[hasFill]="true"` |

**Before:**
```scss
.hero-pictogram {
  --brand-icon-sm: 10rem;
  --brand-icon-fill-primary: var(--colour-green-500);
}
```

**After:**
```scss
.hero-pictogram {
  --content-pictogram-size-sm: 10rem;
  --content-pictogram-fill: var(--colour-green-500);
}
```

> **Automated?** Partly — the direct token renames can be updated
> automatically, but review `xxs`/`xs` usages and fill behaviour manually.

---

## 5. pictogram: review all pictogram names against the new catalogue

**What changed:** The pictogram set has been significantly updated as part of
the L&G brand modernisation. The release notes state that 383 names from the
previous set have been removed and 127 new names have been added. The release
notes do not publish a 1:1 rename table for removed names, so any removed name
must be migrated manually to the closest supported pictogram from the new
catalogue.

**Search for** (in `*.html` and `*.ts` files):
```html
<lg-pictogram
name="
[name]=
```
```ts
PictogramName
BrandIconName
```

**Replace with:**

- Review every pictogram `name` used by the application.
- Keep names that are still supported.
- Replace any removed name with the closest supported pictogram from the
  [updated pictogram catalogue](https://legal-and-general.github.io/canopy/?path=/story/foundations-pictogram-catalog--standard-pictograms).
- If a name is not in the retained list below, do not assume it still exists —
  check the catalogue before keeping it.

**Retained names (no rename required):**
`accessible`, `active-fixed-income`, `aeroplane`, `annuity`, `calculator`,
`calendar`, `calendar-limited-time`, `call-centre-headset`, `car`, `care`,
`cash`, `cash-liquidity`, `cash-lump-sum`, `chat`, `checklist`, `claim`,
`clock`, `confirm`, `create-account`, `credit-card`, `currency-global`,
`currency-pounds`, `customer`, `decrease`, `denied`, `devices`, `diamond`,
`document-confirmation`, `document-warning`, `dollars`, `edit-profile`,
`evidence`, `eye`, `features`, `female`, `female-call-centre`,
`fixed-term-retirement-plan`, `flexible-income`, `flip`, `flip-flops`,
`form`, `fuel-pump`, `gavel`, `graph-point`, `handshake`, `hierarchy`,
`home`, `increase`, `information`, `investment-choices`, `jigsaw`,
`life-ring`, `location`, `lock-closed`, `locked`, `login`, `looking-ahead`,
`male`, `male-call-centre`, `message-sent`, `microphone`, `mobile-phone`,
`multi-asset`, `oil-pump`, `online-chat`, `options`, `org-chart`, `pencil`,
`pension-pot`, `pensions-and-retirement`, `people`, `people-search`,
`performance`, `piggy-bank`, `pipeline`, `play`, `post`, `pounds`,
`presentation`, `printed-material`, `private-markets`, `profile`,
`question`, `quote`, `refresh`, `reload`, `responsible-investing`,
`rewards`, `rosette`, `saving`, `scales`, `search`, `search-warning`,
`shopping-bags`, `shopping-basket`, `shopping-trolley`, `solutions`,
`spanner`, `star-rating`, `stethoscope`, `stopwatch`, `strategy`, `switch`,
`tape-measure`, `target`, `thumbs-down`, `thumbs-up`, `trophy`,
`video-guides`, `wallet`, `warning`, `wellbeing`, `wind-turbine`,
`workshop`, `yen`

**New names introduced in v33:**
`25-tax-free`, `announcement`, `app-download`, `apparel`, `bank`, `bell`,
`binoculars`, `bob-ai`, `bob-ai-chatbot`, `briefcase`, `building-factory`,
`building-office`, `bullseye`, `calendar-confirm`, `calendar-time`,
`cement`, `chart-pie`, `chemicals`, `comment`, `computer`,
`computer-secure`, `connections`, `consistent`, `cooling-towers`,
`credit-card-confirm`, `cuppa`, `decision`, `digital-customer-products`,
`digital-workplace`, `diversity`, `document`, `document-cancel`,
`document-time`, `electirc-charging`, `enhanced-returns`, `euro`,
`feature`, `firework`, `food`, `forestry`, `funds-decrease`,
`funds-increase`, `funds-pounds`, `funds-search`, `funds-switch`,
`gas-cannister`, `glass`, `globe`, `growth-off-target`,
`growth-on-target`, `handheld-scanner`, `hazard`, `index-funds`,
`infrastructure-cloud`, `instant-photo`, `instruction-confirm`,
`investment-goal`, `landfill-waste`, `launch`, `lightbulb`, `locations`,
`lock-open`, `lock-settings`, `logistics`, `logout`, `message`,
`message-unavailable`, `metal`, `mining`, `numeral-eight`,
`numeral-five`, `numeral-four`, `numeral-nine`, `numeral-one`,
`numeral-seven`, `numeral-six`, `numeral-three`, `numeral-two`,
`numeral-zero`, `offline`, `oil-drum`, `oil-gas-platform`, `online`,
`pension-pot-filled`, `people-settings`, `phone`, `pointer-click`,
`poster`, `pounds-increase`, `pounds-secure`, `property`, `protection`,
`protection-confirm`, `protection-pounds`, `pylon`, `research`,
`road-transport`, `search-confirm`, `search-zoom-in`, `search-zoom-out`,
`settings`, `sharper-focus`, `shipping`, `signal-mobile`,
`signal-mobile-disconnected`, `signal-wifi`,
`signal-wifi-disconnected`, `solar`, `sprout`, `sustainable-growth`,
`tag`, `tap-and-drag`, `team`, `tech`, `technical-services`,
`telescope`, `ticks`, `transactions`, `transactions-offline`,
`transactions-pounds`, `transactions-warning`, `trust`, `upload-bulk`,
`utilities`, `video-call`, `website`

**Before:**
```html
<lg-pictogram name="old-removed-name"></lg-pictogram>
```

**After:**
```html
<!-- Replace removed names with the closest supported name from the catalogue -->
<lg-pictogram name="supported-name"></lg-pictogram>
```

> **Automated?** No — this requires manual review because the release notes do
> not provide a 1:1 mapping for removed pictogram names.

---

## 6. primary-message: replace slotted `lg-brand-icon` content with `lg-pictogram`

**What changed:** `lg-primary-message` now accepts `lg-pictogram` in its
content slot instead of `lg-brand-icon`.

**Search for** (in `*.html` files):
```html
<lg-primary-message
<lg-brand-icon
```

**Replace with:**

- Inside `lg-primary-message`, replace any slotted `<lg-brand-icon>` usage with
  `<lg-pictogram>`.
- Keep the surrounding `lg-primary-message` structure unchanged unless the
  pictogram name or size also needs migrating under the sections above.

**Before:**
```html
<lg-primary-message>
  <lg-brand-icon name="calendar"></lg-brand-icon>
  <lg-primary-message-title>Title</lg-primary-message-title>
</lg-primary-message>
```

**After:**
```html
<lg-primary-message>
  <lg-pictogram name="calendar"></lg-pictogram>
  <lg-primary-message-title>Title</lg-primary-message-title>
</lg-primary-message>
```

> **Automated?** Yes — replace the slotted selector, then re-check the
> pictogram name, size, and fill behaviour using the sections above.

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
   template `.html` files as well as `.ts` files, or inside Angular test setup
   and theme stylesheets).
