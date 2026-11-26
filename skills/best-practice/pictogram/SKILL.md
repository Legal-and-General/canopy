---
name: canopy-pictogram
description: Best practices for the Canopy Pictogram component, including sizes, status fills and colour overrides. Trigger when using lg-pictogram, LgPictogramComponent, or adding illustrative pictograms in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/pictogram/docs/guide.mdx
---

# Canopy Pictogram — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-pictogram` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `lg-pictogram` or `LgPictogramComponent`.

> See also: the `icon` skill for UI icons (UI icons are smaller, functional; pictograms are larger, illustrative).

---

## Import

```ts
import { LgPictogramComponent } from '@legal-and-general/canopy';
```

Add `LgPictogramComponent` to your standalone component's `imports` array.

---

## Basic Usage

```html
<!-- Default size, no fill -->
<lg-pictogram name="coins"></lg-pictogram>

<!-- With fill enabled (self-service applications only) -->
<lg-pictogram name="coins" [hasFill]="true"></lg-pictogram>

<!-- With an optional status fill (self-service applications only) -->
<lg-pictogram name="confirm" [hasFill]="true" status="success"></lg-pictogram>

<!-- With a specific size -->
<lg-pictogram name="coins" size="sm"></lg-pictogram>
```

---

## Sizes

Use the predefined `size` options `sm`, `md`, `lg`, `xl` and `xxl` to keep outlines clean and crisp. The default is `sm`.

Let the installed design tokens determine their dimensions; do not hard-code pixel or rem equivalents.

---

## Fill Behaviour

By default pictograms render without fill (outlines only). Use `[hasFill]="true"` to make the fill colour visible on neutral backgrounds. Only enable fill in self-service applications — do not set `[hasFill]="true"` in highly-branded scenarios such as the Dotcom CMS.

### Optional status

Use `status` to reflect the accompanying message:

| Status | Use for | Fill colour |
|--------|---------|-------------|
| `info` | Information | Blue |
| `success` | A successful action or outcome | Green |
| `warning` | A warning or interrupted service | Yellow |
| `error` | An error preventing progress | Red |

Set `[hasFill]="true"` to show the status fill. Without it, `status` leaves the pictogram unfilled. Status changes the fill only, not the outline.

Omit `status` for the theme's default fill. To clear a bound status, set it to `undefined`; the theme's default fill returns if `hasFill` remains `true`. These fill rules apply when no explicit `colour` is set.

### Explicit colour override

Use `colour` only when you intentionally want to override **both fill and outline** with the same CSS colour value:

```html
<lg-pictogram name="coins" colour="var(--colour-green-400)"></lg-pictogram>
```

An explicit `colour` takes precedence over the status fill and applies even when `hasFill` is `false`. It is not a fill-only setting. Clear it with an empty string to restore the normal theme, status and `hasFill` behaviour.

---

## Pictogram Names

Use `notification` and `notification-confirm` for notification artwork. Replace existing `bell` and `notification-bell` names respectively; the previous names are no longer available.

Use the additional catalogue names `coins`, `pounds-confirmation`, `pounds-decrease` and `pounds-warning` where their artwork supports your message. Choosing a name does not set `status` or enable `hasFill`.

```html
<lg-pictogram name="notification"></lg-pictogram>
<lg-pictogram name="notification-confirm" [hasFill]="true" status="success"></lg-pictogram>
<lg-pictogram name="coins"></lg-pictogram>
<lg-pictogram name="pounds-confirmation"></lg-pictogram>
<lg-pictogram name="pounds-decrease"></lg-pictogram>
<lg-pictogram name="pounds-warning"></lg-pictogram>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `name` | `PictogramName` | `undefined` | Yes | Supply a supported pictogram catalogue name. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `'sm'` | No | The predefined size of the pictogram. |
| `hasFill` | `boolean` | `false` | No | Applies the fill colour. Only use in self-service applications. |
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `undefined` | No | Sets the status fill when `hasFill` is `true`; leaves the outline unchanged. Clear with `undefined`. |
| `colour` | `string` | Unset | No | Explicit CSS colour value for both fill and outline, e.g. `var(--colour-green-400)`. Overrides status and applies regardless of `hasFill`. Clear with `''`. |

---

## Dos and Don'ts

### Do

1. **Do** use the predefined size options so outlines remain clean and crisp.
2. **Do** use pictograms to support messages, empty states, or end-of-journey screens.
3. **Do** enable `[hasFill]="true"` when using a pictogram in a self-service application to make the fill visible on neutral backgrounds.

### Don't

1. **Don't** use a pictogram in place of a UI icon.
2. **Don't** shrink pictograms to UI-icon dimensions — use UI icons for small, functional imagery instead.
3. **Don't** set `[hasFill]="true"` in highly-branded scenarios such as the Dotcom CMS.

---

## Accessibility

Keep the message or outcome available in accompanying text: `lg-pictogram` is hidden from assistive technology with `aria-hidden="true"`. Do not rely on the illustration or its status colour alone to convey meaning.
