---
name: canopy-card
description: Best practices for the Canopy Card component. Trigger when using lg-card, LgCardComponent, or any card sub-components (including promotion cards) in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/card/docs/guide.mdx
---

# Canopy Card — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-card` component and related patterns from `@legal-and-general/canopy`.

Apply this skill whenever you use `lg-card` or any `LgCard*` component.

---

## Import

```ts
import {
  LgCardComponent,
  LgCardContentComponent,
  LgCardHeaderComponent,
  LgCardFooterComponent,
  LgCardTitleComponent,
  LgCardSubtitleComponent,
  LgCardSubheadingComponent,
  LgCardNavigationTitleComponent,
  LgCardGroupComponent,
  LgCardToggableContentComponent,
  LgCardContentInnerDataPointsComponent,
} from '@legal-and-general/canopy';

import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointValueComponent,
  LgDataPointSecondaryLabelComponent,
  LgDataPointGroupComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-card>
  <lg-card-content>
    Your content here. <a href="#">Test link</a>.
  </lg-card-content>
</lg-card>
```

---

## Card with Title

```html
<lg-card>
  <lg-card-content>
    <lg-card-title [headingLevel]="2">Card Title</lg-card-title>
    <p>Card body text.</p>
  </lg-card-content>
</lg-card>
```

---

## Card Patterns

### Promotion Card

Use `LgDataPointComponent` with `variant="card-principle"` alongside `LgDataPointLabelComponent`, `LgDataPointValueComponent`, and optionally `LgDataPointSecondaryLabelComponent` to display a prominent principle data point inside a product card.

```html
<lg-card>
  <lg-card-content>
    <div lgRow>
      <div lgCol="12" lgColMd="6">
        <lg-card-title headingLevel="4">
          <a href="#">Card title</a>
        </lg-card-title>
        <lg-card-subtitle>Payroll Reference Number P23456</lg-card-subtitle>
      </div>
      <lg-data-point variant="card-principle" lgCol="12" lgColMd="6">
        <lg-data-point-label [headingLevel]="5" [isBold]="true">
          Last payment (after tax and deductions)
        </lg-data-point-label>
        <lg-data-point-value size="lg">
          £230.20
        </lg-data-point-value>
        <lg-data-point-secondary-label>
          as of 01 Jan 2020
        </lg-data-point-secondary-label>
      </lg-data-point>
    </div>
  </lg-card-content>
</lg-card>
```

> **Note:** `LgCardPrincipleDataPointComponent`, `LgCardPrincipleDataPointLabelComponent`, and `LgCardPrincipleDataPointValueComponent` have been removed from the library. Use `LgDataPointComponent` with `variant="card-principle"` for a prominent hero data point in a product card, or `variant="card"` for standard data points inside a card content area.

### Form Journey Card

Place the `<form>` element as a parent of `<lg-card>`. Form inputs go in `<lg-card-content>` and the submit button goes in `<lg-card-footer>`:

```html
<form (ngSubmit)="onSubmit()">
  <lg-card>
    <lg-card-content>
      <!-- form fields -->
    </lg-card-content>
    <lg-card-footer>
      <button lg-button type="submit" priority="primary">Submit</button>
    </lg-card-footer>
  </lg-card>
</form>
```

### Navigation Card

Use `LgCardNavigationTitleComponent` for cards that act as navigation links:

```html
<lg-card>
  <lg-card-content>
    <lg-card-navigation-title
      [headingLevel]="3"
      title="Go to next page"
      link="/next-page">
    </lg-card-navigation-title>
  </lg-card-content>
</lg-card>
```

### Card with Data Points

Wrap data-point components in `LgCardContentInnerDataPointsComponent` for correct layout:

```html
<lg-card>
  <lg-card-content>
    <lg-card-content-inner-data-points>
      <lg-data-point>...</lg-data-point>
    </lg-card-content-inner-data-points>
  </lg-card-content>
</lg-card>
```

### Card Group

Wrap multiple cards in `LgCardGroupComponent` inside a `lgCol="12"` column:

```html
<div lgContainer>
  <div lgRow>
    <div [lgCol]="12">
      <lg-card-group>
        <lg-card>...</lg-card>
        <lg-card>...</lg-card>
      </lg-card-group>
    </div>
  </div>
</div>
```

### Show More Card

Use `LgCardToggableContentComponent` with the `lgButtonToggle` directive:

```html
<lg-card>
  <lg-card-content>
    <p>Always visible content.</p>
    <lg-card-toggable-content [isActive]="isToggleActive">
      <p>Hidden content revealed on toggle.</p>
    </lg-card-toggable-content>
    <button lgButtonToggle (toggleActive)="toggleActive($event)">Show more</button>
  </lg-card-content>
</lg-card>
```

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `string` | `'default'` | The card variant — `default` or `promotion`. |

---

## Dos and Don'ts

### Do

1. **Do** ensure that content relates to a single idea or concept.
2. **Do** summarise content and provide links to expanded content on child pages.
3. **Do** use when each card will contain different types of content.
4. **Do** place cards directly on the page background.
5. **Do** create layouts that make the hierarchy of the page clearly understood.
6. **Do** keep promotional message content succinct — follow content guidelines (title max 33 chars, description max 140 chars, link max 20 chars).
7. **Do** use equal amounts of content across all promotion cards in a layout for consistent visual alignment.
8. **Do** use `size="sm"` when adding pictograms to promotion cards.
9. **Do** set `[hasHoverState]="true"` on promotion cards to provide interactive feedback.

### Don't

1. **Don't** overfill or cover more than one subject within a card.
2. **Don't** use cards as a replacement for standard pages.
3. **Don't** place cards on top of cards.
4. **Don't** use to build complex, cluttered layouts that obscure page structure.
5. **Don't** mix image and pictogram promotions within the same card layout section — group similar card types together for visual consistency.
6. **Don't** exceed the content guidelines for promotion cards (e.g. titles over 33 characters).

---

## Component Reference

### LgCardComponent
The main card container. Accepts projection of header, content, footer, and hero image components.

### LgCardContentComponent
The secondary layout section containing the card's main content and padding.

### LgCardContentInnerDataPoints
Tertiary layout section specifically for data points with correct spacing.

### LgCardTitleComponent
Main title container. Should be located inside `lg-card-content`.

Inputs: `headingLevel` (required, `1`–`6`)

### LgCardNavigationTitleComponent
Title and link container for navigation cards. Link target and icon are automatically determined.

Inputs: `headingLevel` (required), `title` (required), `link` (required), `queryParams`, `queryParamsHandling`

Outputs: `linkClickedEvent`

### LgCardHeaderComponent
Primary layout section for breadcrumbs or similar content.

### LgCardFooterComponent
Section for form buttons or actions.

### LgCardGroupComponent
Container to group 2+ cards with equal heights across breakpoints. Wrap in `lgCol="12"`.
