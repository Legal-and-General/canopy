---
name: canopy-v24-migration
description: Apply the Canopy v23→v24 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v24, upgrade @legal-and-general/canopy from v23, or fix errors after upgrading to v24.
license: MIT
metadata:
  version: '24.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v24.0.0
---

# Canopy v23 → v24 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. UI icons: replace removed icon names

**What changed:** As part of L&G's brand modernisation, the UI icon set has been completely refreshed. 152 icon SVG assets have been removed and 69 new icons have been added. Any `<lg-icon>` that references a removed name will display no icon and log a `console.error` at runtime.

**Search for** all icon usages (in `*.html` and `*.ts` files):
```
lg-icon
```

Also search for any string literals or variables that hold icon names:
```
name="
```
```
[name]="
```

For each usage, check the icon name against the rename table and removed-icons list below.

### Renamed icons

The following icons have been remapped. Apply each rename in your templates and TypeScript source:

| Old value                 | New value |
|---------------------------|---|
| `arrow-right-circle`      | `chevron-right-circle` |
| `at`                      | `email` |
| `bookmark`                | `bookmark-filled` |
| `chart-donut`             | `chart-pie` |
| `checkbox-mark`           | `checkmark-heavy` |
| `checkmark-spot`          | `checkmark-spot-outline` |
| `checkmark-spot-fill`     | `checkmark-spot-filled` |
| `chevron-down-filled`     | `chevron-down` |
| `chevron-down-slim`       | `chevron-down` |
| `chevron-left-slim`       | `chevron-left` |
| `chevron-right-slim`      | `chevron-right` |
| `chevron-up-filled`       | `chevron-up` |
| `chevron-up-slim`         | `chevron-up` |
| `close-spot`              | `close-spot-outline` |
| `couple`                  | `collaborate` |
| `delete`                  | `crossmark-spot-filled` |
| `desktop`                 | `desktop-computer` |
| `dislike-outline`         | `dislike` |
| `doc`                     | `docx` |
| `edit-note`               | `edit` |
| `error`                   | `error-outline` |
| `error-fill`              | `error-filled` |
| `event`                   | `calendar` |
| `exit`                    | `sign-out` |
| `exit-fill`               | `sign-out` |
| `favourite`               | `heart-outline` |
| `favourite-fill`          | `heart-filled` |
| `gif`                     | `image` |
| `group`                   | `family` |
| `hedging`                 | `funds` |
| `hedging-currency`        | `funds` |
| `home`                    | `home-outline` |
| `home-fill`               | `home-outline` |
| `idea`                    | `light-bulb` |
| `information`             | `information-outline` |
| `information-fill`        | `information-filled` |
| `junior-isa`              | `piggy-bank` |
| `list`                    | `list-bullet` |
| `list-bullets`            | `list-bullet` |
| `list-checked`            | `list-bullet` |
| `location`                | `location-pin` |
| `locked`                  | `locked-outline` |
| `locked-fill`             | `locked-outline` |
| `microphone-on`           | `microphone` |
| `misuse`                  | `prohibited` |
| `mobile`                  | `mobile-phone` |
| `need-help`               | `help` |
| `new-tab`                 | `open-in-new-window` |
| `notification-on`         | `notification` |
| `phone-on`                | `call` |
| `play-spot`               | `play-circle` |
| `png`                     | `image` |
| `presentation-file`       | `presentation` |
| `query`                   | `query-outline` |
| `query-fill`              | `query-filled` |
| `question-mark`           | `query-outline` |
| `pause-spot`              | `pause` |
| `radio-button-selected`   | `checkmark-spot-filled` |
| `radio-button-unselected` | `progress-to-do` |
| `recommend`               | `recommended-content` |
| `security`                | `protection` |
| `star`                    | `star-outline` |
| `star-fill`               | `star-filled` |
| `svg`                     | `image` |
| `subtract`                | `minus` |
| `twitter-x`               | `x` |
| `unlocked`                | `unlocked-outline` |
| `unlocked-fill`           | `unlocked-outline` |
| `users`                   | `family` |
| `view-mode-off`           | `view-off` |
| `view-mode-on`            | `view-on` |
| `warning`                 | `warning-outline` |
| `warning-fill`            | `warning-filled` |
| `zoom-in-fill`            | `zoom-in` |
| `zoom-out-fill`           | `zoom-out` |

### Icons removed with no direct equivalent

The following icon names have been removed entirely. Review the [icon catalogue](https://legal-and-general.github.io/canopy/?path=/story/foundations-ui-icon-catalog--standard-icons) and choose the closest alternative for each:

> `align-centre`, `align-left`, `align-right`, `business`, `camera`, `checkbox-checked`, `checkbox-empty`, `checkbox-indeterminate`, `cloud`, `code`, `count`, `csv`, `data`, `database`, `diagram`, `digg`, `document-subtract`, `document-tasks`, `drag-handle`, `drilldown`, `face-dissatisfied`, `face-dissatisfied-fill`, `face-happy`, `face-happy-fill`, `face-neutral`, `face-neutral-fill`, `face-satisfied`, `face-satisfied-fill`, `face-unhappy`, `face-unhappy-fill`, `folder-add`, `forum`, `gender-female`, `gender-male`, `github`, `hd`, `hdr`, `highlight`, `insert`, `landlord`, `like-fill`, `map`, `microphone-off`, `minimise`, `misuse-fill`, `module`, `move`, `notification-off`, `overlay`, `partnership`, `password`, `pet`, `phone-off`, `pop-up`, `reward`, `rss`, `scan`, `secure-messaging`, `share`, `skip-back`, `skip-forward`, `slack`, `star-half-fill`, `stop`, `tag`, `time-delay`, `twitter`, `unhappy`, `user-online`, `volume-down`, `volume-mute`, `volume-up`

### Newly added icons

The following icons are newly added in this release. Unlike the rename table above, these icons do not replace existing names, so you can use them immediately:

> `accidental-damage`, `balance`, `bookmark-filled`, `bullet-circle`, `bullet-dash`, `bullet-feature`, `bullet-square`, `care`, `checkmark-heavy`, `coffee`, `crossmark-spot-outline`, `docx`, `droplets`, `focus`, `furniture`, `heart-filled`, `heart-outline`, `offer`, `pagination-on`, `presentation`, `progress-doing`, `progress-to-do`, `protection`, `quotes-closed`, `quotes-open`, `request`, `spinner`, `step-1`, `step-2`, `step-3`, `switched-funds`, `unlocked-outline`, `withdrawal`, `xls`

**Before:**
```html
<lg-icon name="arrow-right-circle"></lg-icon>
<lg-icon name="exit-fill"></lg-icon>
<lg-icon name="twitter-x"></lg-icon>
```

**After:**
```html
<lg-icon name="chevron-right-circle"></lg-icon>
<lg-icon name="sign-out"></lg-icon>
<lg-icon name="x"></lg-icon>
```

> **Automated?** No — you will need to apply each rename manually, consulting the mapping table above. For icons with no direct equivalent, choose the closest alternative from the icon catalogue.

---

## 2. UI icons: update `IconName` TypeScript type references

**What changed:** The auto-generated `IconName` union type (exported from `@legal-and-general/canopy`) now reflects only the icons present in the new set. Any TypeScript source that references a removed icon name by string will produce a compile error.

**Search in `*.ts` files for both of the following:**

1. `IconName` usages, to find typed icon variables, inputs, and annotations, for example:
   ```
   IconName
   ```
2. Removed or renamed icon-name string literals, to find invalid values that now need updating, for example:
   ```
   'arrow-right-circle'
   'exit-fill'
   ```

After updating all icon names in your templates (section 1 above), run TypeScript compilation with `--noEmit` to catch any remaining type errors:

```bash
npx tsc --noEmit
```

Fix each reported error by replacing the removed icon name with the appropriate new name from the rename table in section 1.

**Before:**
```typescript
import { IconName } from '@legal-and-general/canopy';

const myIcon: IconName = 'arrow-right-circle';
```

**After:**
```typescript
import { IconName } from '@legal-and-general/canopy';

const myIcon: IconName = 'chevron-right-circle';
```

> **Automated?** No — you will need to update each TypeScript reference manually. TypeScript compilation errors will identify all remaining occurrences after templates have been updated.

---

## 3. LgIconComponent: handle new `console.error` for unknown icon names

**What changed:** `LgIconComponent` now logs the following error to the browser console when a requested icon name cannot be found in the registry:

```
[Canopy] Icon "<name>" cannot be found. Please check the icon catalog for the full list of available icons: https://legal-and-general.github.io/canopy/?path=/story/foundations-ui-icon-catalog--catalog
```

If your test suite asserts on the absence of `console.error` calls (e.g. via a spy on `console.error`), you may see test failures until all removed icon names have been replaced.

**Search for** (in `*.spec.ts` files):
```
console.error
```

Check whether any test is asserting that `console.error` was not called. If so, ensure all icon names used in that component's templates have been updated to valid names as per sections 1 and 2 above.

No action is required once all icon names have been updated correctly.

> **Automated?** No — ensure all icon names are updated (sections 1 and 2), then verify your test suite passes. No API change is required for this behaviour; it is purely observational.

---

## 4. LgIconComponent: internal icon name changes in Canopy components (no action required)

**What changed:** Several Canopy components (Alert, Details, Validation, Toggle, Carousel) have been updated internally to use the new icon names. These changes are applied automatically within the library.

| Old internal name | New internal name |
|---|---|
| `crossmark-spot-fill` | `crossmark-spot-filled` |
| `information-fill` | `information-filled` |
| `warning-fill` | `warning-filled` |
| `checkmark-spot-fill` | `checkmark-spot-filled` |
| `checkbox-mark` | `checkmark-heavy` |
| `pause-spot` | `pause` |
| `play-spot` | `play-circle` |

**No action is required** in your application's templates for these components.

> **Automated?** Yes — these changes are handled automatically inside Canopy; no action required.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components).
