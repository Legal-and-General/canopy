---
name: canopy-hero
description: Best practices for the Canopy Hero component. Trigger when adding a page hero banner, product details hero, or conversational hero section in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/hero/docs/guide.mdx
---

# Canopy Hero — Best Practices

This skill provides usage guidance for the Canopy `lg-hero` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgHeroComponent` or `lg-hero`.

---

## Import

```ts
import {
  LgHeroComponent,
  LgHeroHeaderComponent,
  LgHeroContentComponent,
  LgHeroCardComponent,
  LgHeroCardHeaderComponent,
  LgHeroCardTitleComponent,
  LgHeroCardSubtitleComponent,
  LgHeroCardContentComponent,
  LgHeroCardFooterComponent,
  LgHeroCardDataPointListComponent,
  LgHeroCardDataPointComponent,
  LgHeroCardDataPointLabelComponent,
  LgHeroCardDataPointValueComponent,
  LgHeroCardPrincipleDataPointComponent,
  LgHeroCardPrincipleDataPointLabelComponent,
  LgHeroCardPrincipleDataPointValueComponent,
  LgHeroCardNotificationComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage (Conversational)

```html
<lg-hero [overlap]="overlap">
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="1">Welcome back</lg-hero-card-title>
            </lg-hero-card-header>
            <lg-hero-card-content>
              <p>Your account summary.</p>
            </lg-hero-card-content>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
</lg-hero>
```

---

### Breadcrumb inside `lg-hero-header`

Use `variant="embedded"` when the breadcrumb is inside a hero header that is already wrapped with grid directives (`lgContainer`, `lgRow`, `lgCol`), so the breadcrumb must not apply its own container alignment.

The `.lg-hero-header` component automatically overrides the `--link-mono-*` colour tokens so breadcrumb links render in white (`--colour-greyscale-0`) without any additional consumer styling required.

```html
<lg-hero-header>
  <div lgContainer>
    <div lgRow>
      <div [lgCol]="12">
        <lg-breadcrumb variant="embedded">
          <lg-breadcrumb-item>
            <a href="#"><lg-icon name="home-outline"></lg-icon> Home</a>
          </lg-breadcrumb-item>
          <lg-breadcrumb-item>
            <a href="#">Products</a>
          </lg-breadcrumb-item>
          <lg-breadcrumb-item>
            Pension Annuity
          </lg-breadcrumb-item>
        </lg-breadcrumb>
      </div>
    </div>
  </div>
</lg-hero-header>
```

> ❌ Do not use `variant="page"` inside `lg-hero-header` — it will double up on container alignment.  
> ❌ Do not manually override breadcrumb link colours inside the hero — this is handled automatically.

---

## Product Details Layout

```html
<lg-hero [overlap]="2">
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="2">Pension annuity</lg-hero-card-title>
              <lg-hero-card-subtitle>Payroll Reference P23456</lg-hero-card-subtitle>
              <lg-hero-card-principle-data-point>
                <lg-hero-card-principle-data-point-label [headingLevel]="3">Last payment</lg-hero-card-principle-data-point-label>
                <lg-hero-card-principle-data-point-value>£230.20</lg-hero-card-principle-data-point-value>
              </lg-hero-card-principle-data-point>
            </lg-hero-card-header>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
</lg-hero>
```

---

## LgHeroComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `overlap` | `number` | — | Amount (in rem) that the page content overlaps the hero. |

---

## Design Constraints

- Always wrap hero card content with the grid directives (`lgContainer`, `lgRow`, `lgCol`).
- The hero renders against a dark blue background — use `variant="light"` on any breadcrumb inside the hero.
- This component is pending brand modernisation.

