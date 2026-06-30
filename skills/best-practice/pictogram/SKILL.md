---
name: canopy-pictogram
description: Best practices for the Canopy Pictogram component. Trigger when using lg-pictogram, LgPictogramComponent, or adding illustrative pictograms in an Angular project using Canopy.
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

---

## Basic Usage

```html
<!-- Default size, no fill -->
<lg-pictogram name="sun"></lg-pictogram>

<!-- With fill enabled (self-service applications only) -->
<lg-pictogram name="sun" [hasFill]="true"></lg-pictogram>

<!-- With a specific size -->
<lg-pictogram name="sun" size="sm"></lg-pictogram>
```

---

## Sizes

Always use one of these predefined sizes to ensure outlines look crisp:

| Size token | rem | px |
|-----------|-----|----|
| `--lg-pictogram-sm` | 10 | 160 |
| `--lg-pictogram-md` | 12.5 | 200 |
| `--lg-pictogram-lg` | 15 | 240 |
| `--lg-pictogram-xl` | 17.5 | 280 |
| `--lg-pictogram-xxl` | 20 | 320 |

The `size` input accepts: `sm`, `md`, `lg`, `xl`, `xxl`.

Pictograms should not be used below 160px.

---

## Fill Behaviour

By default pictograms render without fill (outlines only). Use `[hasFill]="true"` to make the fill colour visible on neutral backgrounds. Only enable fill in self-service applications — do not set `[hasFill]="true"` in highly-branded scenarios such as the Dotcom CMS.

To apply a custom fill colour, use the `colour` input with a CSS variable name:

```html
<lg-pictogram name="sun" colour="var(--colour-green-400)"></lg-pictogram>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `name` | `string` | `undefined` | Yes | The name of the pictogram. |
| `size` | `PictogramSize` | `'sm'` | No | The size of the pictogram (see sizes table). |
| `hasFill` | `boolean` | `false` | No | Applies the fill colour. Only use in self-service applications. |
| `colour` | `string` | `undefined` | No | CSS variable for the pictogram fill colour, e.g. `var(--colour-green-400)`. |

---

## Dos and Don'ts

### Do

1. **Do** scale pictograms according to the sizing chart — minimum 160px.
2. **Do** use pictograms to support messages, empty states, or end-of-journey screens.
3. **Do** enable `[hasFill]="true"` when using a pictogram in a self-service application to make the fill visible on neutral backgrounds.

### Don't

1. **Don't** use a pictogram in place of a UI icon.
2. **Don't** use pictograms below 160px — use UI icons instead.
3. **Don't** set `[hasFill]="true"` in highly-branded scenarios such as the Dotcom CMS.
