---
name: canopy-promotions
description: Best practices for Canopy Promotions patterns. Trigger when building promotional card layouts with lg-card, grid directives, and orientation rules in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/card/docs/promotions/guide.mdx
---

# Canopy Promotions — Best Practices

This skill provides usage guidance, layout patterns, and input reference for Canopy promotions built with `LgCardComponent` and related Canopy components.

Apply this skill whenever you build promotion sections that use `lg-card` with `variant="promo"`.

---

## Import

```ts
import {
  LgCardComponent,
  LgCardContentComponent,
  LgCardHeroImageComponent,
  LgPictogramComponent,
  LgSeparatorComponent,
  LgMarginDirective,
  LgPaddingDirective,
  LgOrientationDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
  LgGridColDirective,
} from '@legal-and-general/canopy';
```

Use `LgSeparatorComponent` only for the magazine layout variant.

---

## Basic Usage

### Promotion card with image

```html
<lg-card
  lgMarginBottom="6"
  lgPadding="none"
  variant="promo"
  [lgOrientation]="{ sm: 'vertical', md: 'horizontal', lg: 'horizontal' }">
  <lg-card-hero-img [cover]="true" [src]="imageUrl"></lg-card-hero-img>

  <lg-card-content>
    <h3 lgMarginBottom="2" class="lg-font--expressive">{{ title }}</h3>
    <p lgMarginBottom="6">{{ text }}</p>
    <a href="#">{{ buttonText }}</a>
  </lg-card-content>
</lg-card>
```

### Promotion card with pictogram

```html
<lg-card
  lgMarginBottom="6"
  variant="promo"
  [lgOrientation]="{ sm: 'vertical', md: 'horizontal', lg: 'horizontal' }">
  <lg-card-hero-img>
    <lg-pictogram [name]="iconName" size="lg" [hasFill]="false"></lg-pictogram>
  </lg-card-hero-img>

  <lg-card-content>
    <h3 lgMarginBottom="2" class="lg-font--expressive">{{ title }}</h3>
    <p lgMarginBottom="6">{{ text }}</p>
    <a href="#">{{ buttonText }}</a>
  </lg-card-content>
</lg-card>
```

---

## Supported Layout Patterns

Use Canopy Grid directives to build one of the documented layouts:

1. Stand-alone card
2. Two cards
3. Three cards
4. Magazine layout

For two-card and three-card desktop layouts, use vertical orientation on `lg`:

```html
[lgOrientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }"
```

For magazine layout, add dotted separators between grouped rows:

```html
<lg-separator variant="dotted" lgMarginTop="none"></lg-separator>
```

---

## Inputs

### LgCardComponent

- `variant` (`string`, default: `'default'`) — set to `promo` for promotion card patterns.

### LgCardHeroImageComponent

| Input   | Type      | Default | Required | Description                                                      |
| ------- | --------- | ------- | -------- | ---------------------------------------------------------------- |
| `cover` | `boolean` | `false` | No       | When `true`, renders `src` as a cover background image.          |
| `src`   | `string`  | n/a     | No       | Image URL for hero media.                                        |
| `alt`   | `string`  | `''`    | No       | Alternate text when rendering a normal image tag.                |

---

## Do

1. **Do** keep the promotional message succinct.
2. **Do** keep content length consistent across cards to preserve alignment.
3. **Do** use only documented promotions variants and layouts.

---

## Design Constraints

- Promotions are a pattern combining `lg-card` and grid layout rules; use documented patterns before creating bespoke structures.
- In cover-image mode (`[cover]="true"`), use large square images with the focal point centred to reduce problematic cropping across breakpoints.
- For non-cover images, prefer images close to a 3:2 ratio (for example, 600 × 400).
- The Promotions documentation is marked **Pending** and due for brand modernisation; avoid introducing additional bespoke pattern variants.

---

## Related Skills

- Use `canopy-card` for broader `LgCardComponent` usage beyond promotions.
- Use `canopy-promo-card` for the `LgPromoCardComponent` pattern.
