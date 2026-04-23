---
name: brand-icon
description: Best practices for the Canopy Brand Icon component. Trigger when using lg-brand-icon, LgBrandIconComponent, or adding illustrative brand icons in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/brand-icon/docs/guide.mdx
---

# Canopy Brand Icon — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-brand-icon` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `lg-brand-icon` or `LgBrandIconComponent`.

> See also: the `icon` skill for UI icons (UI icons are smaller, functional; brand icons are larger, illustrative).

---

## Import

```ts
import { LgBrandIconComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<!-- Default size and colour -->
<lg-brand-icon name="sun"></lg-brand-icon>

<!-- With a specific size -->
<lg-brand-icon name="sun" size="sm"></lg-brand-icon>

<!-- With custom colour -->
<lg-brand-icon name="sun" colour="--colour-green-400"></lg-brand-icon>

<!-- With halftone colour -->
<lg-brand-icon name="sun" halfToneColour="--colour-green-400"></lg-brand-icon>

<!-- With outlines colour -->
<lg-brand-icon name="sun" outlinesColour="--colour-green-400"></lg-brand-icon>
```

---

## Sizes

Always use one of these predefined sizes to ensure outlines and halftones look crisp:

| Size token | rem | px |
|-----------|-----|----|
| `--brand-icon-xxs` | 5 | 80 |
| `--brand-icon-xs` | 7.5 | 120 |
| `--brand-icon-sm` | 10 | 160 |
| `--brand-icon-md` | 12.5 | 200 |
| `--brand-icon-lg` | 15 | 240 |
| `--brand-icon-xl` | 17.5 | 280 |
| `--brand-icon-xxl` | 20 | 320 |

The `size` input accepts: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`.

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `name` | `string` | `undefined` | Yes | The name of the brand icon. |
| `size` | `BrandIconSize` | `'sm'` | No | The size of the icon (see sizes table). |
| `colour` | `string` | `undefined` | No | CSS variable for the icon fill colour, e.g. `--colour-green-400`. |
| `halfToneColour` | `string` | `undefined` | No | CSS variable for the halftone (dots) colour. |
| `outlinesColour` | `string` | `undefined` | No | CSS variable for the outlines colour. |

For colour inputs, pass only the CSS variable name without `var()`, e.g. `--colour-green-400`. Use `--colour-transparent` to hide a layer.

---

## Global Branding

To change the primary fill colour globally for all brand icons:

```scss
:root {
  --brand-icon-fill-primary: var(--colour-green-400);
}
```

---

## Dos and Don'ts

### Do

1. **Do** scale brand icons according to the sizing chart — minimum 80px.
2. **Do** use brand icons to support messages, empty states, or end-of-journey screens.

### Don't

1. **Don't** use a brand icon in place of a UI icon.
2. **Don't** use brand icons below 80px — use UI icons instead.
