---
name: canopy-pictogram
description: Best practices for the Canopy Pictogram component, optional statuses and fill behaviour. Trigger when using lg-pictogram, LgPictogramComponent, or adding illustrative pictograms in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/pictogram/docs/guide.mdx
---

# Canopy Pictogram — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-pictogram` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `lg-pictogram` or `LgPictogramComponent`.

> See also: the `icon` skill for UI icons (UI icons are smaller, functional; pictograms are larger, illustrative).
> See also: the `notice` skill for automatic pictogram status and fill inside a notice.

---

## Import

```ts
import { LgPictogramComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<!-- Default size, no fill -->
<lg-pictogram name="sun"></lg-pictogram>

<!-- With fill enabled (self-service applications only) -->
<lg-pictogram name="sun" [hasFill]="true"></lg-pictogram>

<!-- With an optional status -->
<lg-pictogram name="confirm" [hasFill]="true" status="success"></lg-pictogram>

<!-- With a specific size -->
<lg-pictogram name="sun" size="md"></lg-pictogram>
```

---

## Sizes

Always use one of these predefined sizes to ensure outlines look crisp:

| Size token | rem | px |
| --- | --- | --- |
| `--content-pictogram-size-md` | 5 | 80 |
| `--content-pictogram-size-lg` | 7.5 | 120 |
| `--content-pictogram-size-xl` | 10 | 160 |

The `size` input accepts: `md`, `lg`, `xl`.

The guide's sizing table lists 80px, 120px and 160px, while its Don't section
says not to use pictograms below 160px. This guidance conflicts; confirm the
minimum with your design-system team before using a size below 160px.

---

## Fill Behaviour

By default pictograms render without fill (outlines only). Use `[hasFill]="true"` to make the fill colour visible on neutral backgrounds. Only enable fill in self-service applications — do not set `[hasFill]="true"` in highly-branded scenarios such as the Dotcom CMS.

### Optional status

Set `status` only when the pictogram supports a status message:

| Status | Use for |
| --- | --- |
| `info` | Information |
| `success` | A successful action or outcome |
| `warning` | A warning or interrupted service |
| `error` | An error preventing progress |

Enable `hasFill` to show the status fill; while `hasFill` is false, the
pictogram remains unfilled even when a status is set. Status does not change the
outline. When status is unset, `hasFill` uses the theme's default fill. Treat
`undefined` as the unset default, not an additional status value.

Inside `lg-notice`, set the status on the notice instead. The notice forwards its
status and enables pictogram fill automatically. Pictograms remain unfilled
inside subtle or bold Content Areas.

### Pictogram names

Use `notification` instead of `bell`, and `notification-confirm` instead of
`notification-bell`; the artwork is unchanged.
Use the catalogue names `pounds-decrease`, `pounds-confirmation`, `pounds-warning`
and `coins` for the new financial pictograms.

---

## Inputs

| Input | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `string` | `undefined` | Yes | The name of the pictogram. |
| `size` | `PictogramSize` | `'md'` | No | The size of the pictogram (see sizes table). |
| `hasFill` | `boolean` | `false` | No | Applies the fill colour. Only use in self-service applications. |
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `undefined` | No | Sets the pictogram status. |

---

## Dos and Don'ts

### Do

1. **Do** scale pictograms according to the sizing chart above.
2. **Do** use pictograms to support messages, empty states, or end-of-journey screens.
3. **Do** enable `[hasFill]="true"` when using a pictogram in a self-service application to make the fill visible on neutral backgrounds.

### Don't

1. **Don't** use a pictogram in place of a UI icon.
2. **Don't** use pictograms below 32px — use UI icons instead.
3. **Don't** set `[hasFill]="true"` in highly-branded scenarios such as the Dotcom CMS.
