---
name: canopy-promo-card
description: Best practices for the Canopy Promo Card component. Trigger when creating promotional content cards, product showcase cards, or feature highlight sections in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/promo-card/docs/guide.mdx
---

# Canopy Promo Card — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy promo card components from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgPromoCardComponent` or `lg-promo-card`.

---

## Import

```ts
import {
  LgPromoCardComponent,
  LgPromoCardListComponent,
  LgPromoCardListTitleComponent,
  LgPromoCardTitleComponent,
  LgPromoCardContentComponent,
  LgPromoCardFooterComponent,
  LgPromoCardImageComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-promo-card-list>
  <lg-promo-card-list-title [headingLevel]="2">Our products</lg-promo-card-list-title>

  <lg-promo-card variant="solid-white">
    <lg-promo-card-image imageUrl="/assets/product.jpg" alt="Product image">
    </lg-promo-card-image>
    <lg-promo-card-title [headingLevel]="3">Product name</lg-promo-card-title>
    <lg-promo-card-content>A short description of the product.</lg-promo-card-content>
    <lg-promo-card-footer>
      <a lg-button priority="primary">Find out more</a>
    </lg-promo-card-footer>
  </lg-promo-card>
</lg-promo-card-list>
```

Add an `lg-separator` between the list title and the first card as a visual divider:

```html
<lg-promo-card-list>
  <lg-promo-card-list-title [headingLevel]="2">Our products</lg-promo-card-list-title>
  <lg-separator></lg-separator>
  <lg-promo-card variant="solid-white">...</lg-promo-card>
  <lg-promo-card variant="solid-white">...</lg-promo-card>
</lg-promo-card-list>
```

---

## LgPromoCardComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `variant` | `'solid-white' \| 'solid-green' \| 'solid-yellow'` | `'solid-white'` | No | Background colour variant. |

## LgPromoCardTitleComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | n/a | Yes | Semantic heading level for the card title. |

## LgPromoCardImageComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `imageUrl` | `string` | n/a | Yes | URL of the card image. |
| `alt` | `string` | `''` | No | Alt text for the image. |

---

## Content Limits

To maintain consistent layout across cards, keep content within these limits:

| Content | Limit |
|---------|-------|
| Title | 33 characters |
| Content description | 140 characters |
| Button label | 20 characters |
| Image dimensions | 620 × 620 px |

---

## Dos and Don'ts

### Do

1. **Do** keep titles and descriptions concise — respect the character limits above.
2. **Do** use `headingLevel` to maintain a logical document heading hierarchy.
3. **Do** provide meaningful `alt` text for card images.
4. **Do** group promo cards inside `lg-promo-card-list` for consistent layout and spacing.

### Don't

1. **Don't** use promo cards for general page content — they are designed for promotional, product, or feature highlights.
2. **Don't** mix `solid-green` or `solid-yellow` cards with white-background page content without considering the visual hierarchy.

---

## Design Constraints

- All cards in a list should use the same `variant` for visual consistency.
- Use the `solid-green` or `solid-yellow` variant only when it is consistent with the surrounding page colour mode.
- Card images are expected to be square (620 × 620 px).
