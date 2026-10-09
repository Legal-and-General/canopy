---
name: canopy-hero
description: Use when building a Canopy page hero, conversational child hero, product-details hero, or hero cards with data points and breadcrumbs in an Angular application.
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
  LgDataPointComponent,
  LgDataPointGroupComponent,
  LgDataPointLabelComponent,
  LgDataPointSecondaryLabelComponent,
  LgDataPointValueComponent,
  LgAlertComponent,
  LgBreadcrumbComponent,
  LgBreadcrumbItemComponent,
  LgGridContainerDirective,
  LgGridRowDirective,
  LgGridColDirective,
  LgIconComponent,
  LgMarginDirective,
} from '@legal-and-general/canopy';
```

---

## Basic Usage (Conversational)

```html
<lg-hero variant="child">
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

Use `variant="page"` for breadcrumbs inside `lg-hero-header`, even when the header uses grid directives. Set `lgMarginBottom="none"` as in the hero examples, and let the active theme determine link colours.

```html
<lg-hero-header>
  <div lgContainer>
    <div lgRow>
      <div [lgCol]="12">
        <lg-breadcrumb variant="page" lgMarginBottom="none">
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

---

## Product Details Layout

```html
<lg-hero>
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="2">Pension annuity</lg-hero-card-title>
              <lg-hero-card-subtitle>Payroll Reference P23456</lg-hero-card-subtitle>
              <lg-alert status="info">
                <p>Your payments have been suspended, please <a href="#">contact us</a> to learn more.</p>
              </lg-alert>
              <lg-data-point variant="card-principle">
                <lg-data-point-label [headingLevel]="3">Last payment</lg-data-point-label>
                <lg-data-point-value size="lg">£230.20</lg-data-point-value>
              </lg-data-point>
            </lg-hero-card-header>
            <lg-hero-card-content>
              <lg-data-point-group orientation="horizontal">
                <lg-data-point>
                  <lg-data-point-label [headingLevel]="3">Payment due</lg-data-point-label>
                  <lg-data-point-value size="md">15 Jan 2020</lg-data-point-value>
                </lg-data-point>
                <lg-data-point>
                  <lg-data-point-label [headingLevel]="3">Payment frequency</lg-data-point-label>
                  <lg-data-point-value size="md">Monthly</lg-data-point-value>
                </lg-data-point>
                <lg-data-point>
                  <lg-data-point-label [headingLevel]="3">Tax code</lg-data-point-label>
                  <lg-data-point-value size="md">2T</lg-data-point-value>
                  <lg-data-point-secondary-label>Received on 12 Mar 2019</lg-data-point-secondary-label>
                </lg-data-point>
              </lg-data-point-group>
            </lg-hero-card-content>
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
| `variant` | `'default' \| 'child'` | `'default'` | Use `child` for a conversational UI hero; it removes the gap beneath the card header. |

---

## Design Constraints

- Use the shared data-point components for principle and secondary values. The hero-specific data-point wrappers, labels, values and list have been removed; do not import or use them.
- Use `variant="card-principle"` and a `size="lg"` value in the hero card header. Use a data-point group and `size="md"` values for secondary information, with `lg-data-point-secondary-label` for supporting text below a value.
- Use `LgAlertComponent` with `status="info"` for inline product messages in the hero card header. Its information icon is enabled by default; do not supply a separate icon. The hero card notification component has been removed.
- Always wrap hero card content with the grid directives (`lgContainer`, `lgRow`, `lgCol`).
- Use the page breadcrumb variant inside `lg-hero-header`; rely on the active theme for background and link colours rather than assuming a dark-blue hero or white links.

