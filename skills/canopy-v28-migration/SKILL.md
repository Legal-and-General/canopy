---
name: canopy-v28-migration
description: Apply the Canopy v27→v28 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v28, upgrade @legal-and-general/canopy from v27, or fix errors after upgrading to v28.
license: MIT
metadata:
  version: '28.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v28.0.0
---

# Canopy v27 → v28 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. alert: `generic` status now renders a `globe` icon by default

**What changed:** The `generic` status variant of `<lg-alert>` previously rendered no icon. It now renders a `globe` icon by default. If your design intentionally shows no icon for a `generic` alert, you must explicitly opt out.

**Search for** (in `*.html` files):
```
lg-alert
```
Then inspect each occurrence where `status="generic"` is set (or where `status` is bound to a value that may be `"generic"` at runtime).

**Replace with:** If you need to suppress the icon for a `generic` alert, add the `[showIcon]="false"` input. If the default `globe` icon is acceptable, no change is required.

**Before:**
```html
<!-- Rendered with no icon under v27 -->
<lg-alert status="generic">
  Your session will expire in 5 minutes.
</lg-alert>
```

**After (icon suppressed):**
```html
<lg-alert status="generic" [showIcon]="false">
  Your session will expire in 5 minutes.
</lg-alert>
```

**After (default globe icon accepted — no change needed):**
```html
<lg-alert status="generic">
  Your session will expire in 5 minutes.
</lg-alert>
```

> **Automated?** No — review each `<lg-alert status="generic">` (and any dynamic bindings where `status` may resolve to `"generic"`) and decide whether the new `globe` icon is appropriate for the context.

---

## 2. inline-message: layout now uses dedicated component design tokens

**What changed:** The internal layout of `<lg-inline-message>` previously relied on global spacing utilities (`--space-4`, `--component-margin`). It now uses dedicated component-level design tokens. If your project overrides these global variables specifically to adjust inline-message spacing, those overrides will no longer have any effect and must be migrated to the new tokens.

The new design tokens form the complete customisation surface for the component. The padding and gap tokens are the direct replacements for the global utilities that were previously used; the colour and border-radius tokens were not overridable before and are now explicitly supported:

| Token | Controls |
|---|---|
| `--inline-message-padding-y` | Top and bottom padding _(replaces `--space-4`)_ |
| `--inline-message-padding-x` | Left and right padding _(replaces `--space-4`)_ |
| `--inline-message-gap` | Gap between icon and text content _(replaces `--component-margin`)_ |
| `--inline-message-border-radius` | Border radius of the component |
| `--inline-message-text-colour` | Text colour |
| `--inline-message-icon-colour` | Icon colour |

**Search for** (in `*.scss`, `*.css`, and `*.ts` files):
```
--space-4
```
```
--component-margin
```
Then check whether the override is scoped to `lg-inline-message` or an ancestor that was intended to target only inline-message layout.

**Replace with:** Replace any inline-message-targeted overrides of `--space-4` or `--component-margin` with the equivalent new token(s).

**Before:**
```scss
lg-inline-message {
  --space-4: 1.5rem;
  --component-margin: 0.5rem;
}
```

**After:**
```scss
lg-inline-message {
  --inline-message-padding-y: 1.5rem;
  --inline-message-padding-x: 1.5rem;
  --inline-message-gap: 0.5rem;
}
```

> **Automated?** No — review all SCSS/CSS overrides of `--space-4` and `--component-margin` scoped to `lg-inline-message` and replace them with the appropriate new tokens from the table above.

---

## 3. inline-message: heading elements inside `lg-alert` are now bold

**What changed:** Heading elements (`h1`–`h6`) projected inside `<lg-alert>` (which is the underlying host element for `<lg-inline-message>`) previously rendered with `font-weight: var(--font-weight-500)` (medium). They now use `font-weight: var(--font-weight-700)` (bold). This is a visual change only — no template or TypeScript changes are required unless your project overrides the heading font weight for this component.

**Search for** (in `*.scss`, `*.css`, and `*.ts` files):
```
lg-alert
```
```
lg-inline-message
```
Then check whether any of these selectors contain a `font-weight` override targeting `h1`–`h6` children that was intended to compensate for the previous medium weight.

**Replace with:** Remove any `font-weight` overrides on headings inside `lg-alert` or `lg-inline-message` that are no longer needed now that bold is the default. If your design requires medium weight, add an explicit override:

**Before (compensating override that is now redundant):**
```scss
lg-inline-message {
  h2 {
    font-weight: var(--font-weight-700); // workaround — was not applied by default
  }
}
```

**After (remove the override — bold is now the default):**
```scss
// No override needed
```

**Or, to restore medium weight explicitly:**
```scss
lg-inline-message {
  h2 {
    font-weight: var(--font-weight-500);
  }
}
```

> **Automated?** No — check SCSS/CSS for any `font-weight` overrides on heading elements scoped to `lg-alert` or `lg-inline-message` and remove or adjust them as required.

---

## 4. shadow: `lgShadow` directive is deprecated

**What changed:** The `lgShadow` directive has been deprecated as part of the brand modernisation effort and will be removed in a future major release. No immediate code change is required in v28, but you should plan to remove usages to avoid a breaking change in a future upgrade.

**Search for** (in `*.html` and `*.ts` files):
```
lgShadow
```
```
LgShadowDirective
```
```
LgShadowModule
```

**Replace with:** Remove the `lgShadow` attribute from host elements. If the shadow effect is still required by your design, implement it using a CSS `box-shadow` rule directly in your component styles.

**Before:**
```html
<div lgShadow>
  <lg-card>...</lg-card>
</div>
```

**After (directive removed):**
```html
<div>
  <lg-card>...</lg-card>
</div>
```

**Or (shadow retained via custom CSS):**
```html
<div class="my-shadow-wrapper">
  <lg-card>...</lg-card>
</div>
```
```scss
.my-shadow-wrapper {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}
```

Also remove any `LgShadowModule` or `LgShadowDirective` imports from your `NgModule` declarations or standalone component `imports` arrays:

**Before:**
```ts
import { LgShadowModule } from '@legal-and-general/canopy';

@NgModule({
  imports: [LgShadowModule],
})
export class MyModule {}
```

**After:**
```ts
@NgModule({
  imports: [],
})
export class MyModule {}
```

> **Automated?** No — search for `lgShadow`, `LgShadowDirective`, and `LgShadowModule` across your codebase and remove or replace each occurrence as described above. This is not yet a hard error in v28 but will become one in a future major release.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components).
