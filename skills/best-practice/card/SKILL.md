---
name: canopy-card
description: Best practices for the Canopy Card component. Trigger when using lg-card, LgCardComponent, or any card sub-components in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/card/docs/card/guide.mdx
---

# Canopy Card — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-card` component from `@legal-and-general/canopy`.

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

## Card Templates

### Product Card

Use `LgCardPrincipleDataPointComponent`, `LgCardPrincipleDataPointLabelComponent`, and `LgCardPrincipleDataPointValueComponent` to display data points inside a card.

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

Use `LgCardNavigationTitleComponent` for cards that act as navigation links. The link's `target` attribute and icon are automatically determined from the `link` input.

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

### LgCardComponent

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'default' \| 'promotion'` | `'default'` | Card variant. |

### LgCardTitleComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | n/a | Yes | Heading level. |

### LgCardNavigationTitleComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | n/a | Yes | Heading level. |
| `title` | `string` | `''` | Yes | Title text. |
| `link` | `string` | `''` | Yes | URL or route path. |
| `queryParams` | `Params` | `null` | No | Query params for internal links. |
| `queryParamsHandling` | `QueryParamsHandling` | `null` | No | Query params handling strategy. |

### LgCardSubheadingComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | n/a | Yes | Heading level. |

---

## Dos and Don'ts

### Do

1. **Do** ensure card content relates to a single idea or concept.
2. **Do** summarise content and provide links to expanded content on child pages.
3. **Do** use when each card will contain different types of content.
4. **Do** place cards directly on the page background.
5. **Do** create layouts that make the page hierarchy clearly understood.

### Don't

1. **Don't** overfill or cover more than one subject within a card.
2. **Don't** use cards as a replacement for full pages.
3. **Don't** place cards on top of other cards.
4. **Don't** build complex, cluttered layouts that make the structure difficult to understand.
