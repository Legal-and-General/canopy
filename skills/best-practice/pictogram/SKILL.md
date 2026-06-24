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
<!-- Default size and colour -->
<lg-pictogram name="sun"></lg-pictogram>

<!-- With a specific size -->
<lg-pictogram name="sun" size="sm"></lg-pictogram>

<!-- With an explicit theme -->
<lg-pictogram name="sun" theme="subtle"></lg-pictogram>
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

## Theme Behaviour

Pictograms use Canopy colour themes and default to the blue colour mode.

- Set `theme` directly on `lg-pictogram` when you want an explicit pictogram theme.
- If no `theme` is set on `lg-pictogram`, it inherits from a themed parent container.
- An explicit `theme` on `lg-pictogram` overrides inherited parent theme styles.

For `bold` and `subtle` themes, pictograms render in an outline-led style.

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `name` | `string` | `undefined` | Yes | The name of the pictogram. |
| `size` | `PictogramSize` | `'sm'` | No | The size of the icon (see sizes table). |
| `theme` | `ColourTheme` | `'neutral'` | No | Tonal theme for the pictogram (`neutral`, `neutral-inverse`, `bold`, `subtle`). |

---

## Dos and Don'ts

### Do

1. **Do** scale pictograms according to the sizing chart — minimum 160px.
2. **Do** use pictograms to support messages, empty states, or end-of-journey screens.
3. **Do** use `theme` when the pictogram needs to differ from an inherited parent theme.

### Don't

1. **Don't** use a pictogram in place of a UI icon.
2. **Don't** use pictograms below 160px — use UI icons instead.
