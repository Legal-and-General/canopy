---
name: hero-img
description: Best practices for the Canopy Hero Image component. Trigger when adding a hero banner with a background image, hero card overlay, or image-led hero section in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/hero-img/docs/guide.mdx
---

# Canopy Hero Image — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-hero-img` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgHeroImgComponent` or `lg-hero-img`.

---

## Import

```ts
import {
  LgHeroImgComponent,
  LgHeroImgCardComponent,
  LgHeroImgCardTitleComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

Always wrap the card content with grid directives.

```html
<lg-hero-img imageUrl="/assets/hero-background.jpg" [overlap]="2">
  <div lgContainer>
    <div lgRow>
      <div [lgCol]="12" [lgColMd]="6">
        <lg-hero-img-card>
          <lg-hero-img-card-title [headingLevel]="1">
            Protect what matters most
          </lg-hero-img-card-title>
          <p>Explore our life insurance options.</p>
          <a lg-button priority="primary" href="/products">Get started</a>
        </lg-hero-img-card>
      </div>
    </div>
  </div>
</lg-hero-img>
```

---

## LgHeroImgComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `imageUrl` | `string` | — | Yes | Background image URL. |
| `overlap` | `number` | `2` | No | Amount (in rem) that page content overlaps the hero. |

## LgHeroImgCardTitleComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `1–6` | — | Yes | Semantic heading level for the hero title. |

---

## Design Constraints

- Wrap `lg-hero-img-card` with grid directives to control the card's column width.
- This component is pending brand modernisation.
