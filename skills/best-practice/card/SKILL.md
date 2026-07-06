---
name: canopy-card
description: Best practices for the Canopy Card component. Trigger when using lg-card, LgCardComponent, or any card sub-components (including promotion cards) in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/card/docs/promotions/guide.mdx
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
  LgCardHeroImageComponent,
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

### Promo Card

Use the `promo` variant to display promotional content with a hero image or pictogram. Promo cards should have consistent content length across multiple cards for better visual alignment.

#### Hero image and pictogram layout

The `lg-card-hero-img` element is always placed first in the DOM (before `lg-card-header` and `lg-card-content`). Its position is controlled by orientation:

- **Vertical** (default): hero image or pictogram sits at the **top** of the card.
- **Horizontal**: hero image or pictogram moves to the **right** of the card body.

On the `default` variant in horizontal layout, a pictogram is absolutely positioned on the right of the card body and card content automatically receives extra right padding to prevent text overlap.

#### Promotion Card with Hero Image

```html
<lg-card
  lgMarginBottom="6"
  lgPadding="none"
  variant="promo"
  [lgOrientation]="{ sm: 'vertical', md: 'horizontal', lg: 'horizontal' }">
  <lg-card-hero-img [cover]="true" [src]="imageUrl"></lg-card-hero-img>
  <lg-card-content>
    <h3 lgMarginBottom="2" class="lg-font--expressive">{{ title }}</h3>
    <p lgMarginBottom="6">{{ description }}</p>
    <a href="#">{{ linkText }}</a>
  </lg-card-content>
</lg-card>
```

#### Promotion Card with Pictogram

Use a pictogram instead of an image for promotional content:

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
    <p lgMarginBottom="6">{{ description }}</p>
    <a href="#">{{ linkText }}</a>
  </lg-card-content>
</lg-card>
```


#### Promotion Layout: Single Card

```html
<div lgContainer>
  <div lgRow>
    <div lgColSm="12">
      <lg-card
        lgMarginBottom="6"
        lgPadding="none"
        variant="promo"
        [lgOrientation]="{ sm: 'vertical', md: 'horizontal', lg: 'horizontal' }">
        <lg-card-hero-img [cover]="true" [src]="imageUrl"></lg-card-hero-img>
        <lg-card-content>
          <h3 lgMarginBottom="2" class="lg-font--expressive">{{ title }}</h3>
          <p lgMarginBottom="6">{{ description }}</p>
          <a href="#">{{ linkText }}</a>
        </lg-card-content>
      </lg-card>
    </div>
  </div>
</div>
```

#### Promotion Layout: Two Cards

```html
<div lgContainer>
  <div lgRow>
    <div lgColSm="12" lgColLg="6">
      <lg-card
        lgMarginBottom="6"
        lgPadding="none"
        variant="promo"
        [lgOrientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
        <lg-card-hero-img [cover]="true" [src]="imageUrl"></lg-card-hero-img>
        <lg-card-content>
          <h3 lgMarginBottom="2" class="lg-font--expressive">{{ title }}</h3>
          <p lgMarginBottom="6">{{ description }}</p>
          <a href="#">{{ linkText }}</a>
        </lg-card-content>
      </lg-card>
    </div>
    <div lgColSm="12" lgColLg="6">
      <!-- Second card with same structure -->
    </div>
  </div>
</div>
```

#### Promotion Layout: Three Cards

```html
<div lgContainer>
  <div lgRow>
    <div lgColSm="12" lgColLg="4">
      <lg-card
        lgMarginBottom="6"
        lgPadding="none"
        variant="promo"
        [lgOrientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
        <lg-card-hero-img [cover]="true" [src]="imageUrl"></lg-card-hero-img>
        <lg-card-content>
          <h3 lgMarginBottom="2" class="lg-font--expressive">{{ title }}</h3>
          <p lgMarginBottom="6">{{ description }}</p>
          <a href="#">{{ linkText }}</a>
        </lg-card-content>
      </lg-card>
    </div>
    <!-- Repeat for remaining cards -->
  </div>
</div>
```

#### Promotion Layout: Magazine (Mixed Image and Pictogram)

For magazine-style layouts with a separator, combine image and pictogram promotions:

```html
<div lgContainer>
  <div lgRow>
    <div lgCol="12">
      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>
    </div>
    <!-- Three cards with images -->
    <div lgColSm="12" lgColLg="4">
      <!-- Card with hero image -->
    </div>
    <!-- Continue with 2 more image cards -->
  </div>
  <div lgRow>
    <div lgCol="12">
      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>
    </div>
    <!-- Two cards with pictograms -->
    <div lgColSm="12" lgColLg="6">
      <lg-card
        lgMarginBottom="6"
        variant="promo"
        [lgOrientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
        <lg-card-hero-img>
          <lg-pictogram [name]="iconName" size="lg" [hasFill]="false"></lg-pictogram>
        </lg-card-hero-img>
        <lg-card-content>
          <h3 lgMarginBottom="2" class="lg-font--expressive">{{ title }}</h3>
          <p lgMarginBottom="6">{{ description }}</p>
          <a href="#">{{ linkText }}</a>
        </lg-card-content>
      </lg-card>
    </div>
  </div>
</div>
```

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

Use `LgCardNavigationTitleComponent` inside `lg-card-header` with the `interactive` variant. The link target and icon are automatically determined from the `link` input:

```html
<lg-card variant="interactive">
  <lg-card-header>
    <lg-card-navigation-title
      [headingLevel]="3"
      title="Go to next page"
      link="/next-page">
    </lg-card-navigation-title>
  </lg-card-header>
  <lg-card-content>
    <p>Card body text.</p>
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

Wrap multiple cards in an element with the `lg-card-group` attribute inside a `lgCol="12"` column:

```html
<div lgContainer>
  <div lgRow>
    <div [lgCol]="12">
      <aside lg-card-group>
        <lg-card>...</lg-card>
        <lg-card>...</lg-card>
      </aside>
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

| Input       | Type          | Default       | Description                                                            |
|-------------|---------------|---------------|------------------------------------------------------------------------|
| `variant`   | `CardVariant` | `'default'`   | The card variant — `'default'`, `'promo'`, or `'interactive'`.         |

---

## Dos and Don'ts

### Do

1. **Do** ensure that content relates to a single idea or concept.
2. **Do** summarise content and provide links to expanded content on child pages.
3. **Do** use when each card will contain different types of content.
4. **Do** place cards directly on the page background.
5. **Do** create layouts that make the hierarchy of the page clearly understood.
6. **Do** keep promotional message content succinct — follow content guidelines (title max 33 chars, description max 140 chars, link max 20 chars).
---
name: canopy-card
description: Best practices for the Canopy Card component. Trigger when using lg-card, LgCardComponent, or related card sub-components in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/card/docs/card/guide.mdx
---

# Canopy Card — Best Practices

This skill provides usage guidance, variants, and API reference for Canopy cards from `@legal-and-general/canopy`.

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
  LgCardHeroImageComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-card>
  <lg-card-content>
    {{ cardContent }} <a href="#">Test link</a>.
  </lg-card-content>
</lg-card>
```

---

## Variants

`LgCardComponent` supports `variant="default" | "promo" | "interactive"`.

- `default`: standard content card.
- `promo`: promotional styling (typically with hero image or pictogram).
- `interactive`: navigation-card behaviour with hover/focus/active treatment.

### Interactive variant behaviour

If `LgCardNavigationTitleComponent` is projected into the card, the card sets itself to interactive behaviour automatically. You can still set `variant="interactive"` explicitly for clarity.

```html
<lg-card variant="interactive">
  <lg-card-header>
    <lg-card-navigation-title
      [headingLevel]="2"
      title="Internal link title"
      link="/foo"
    ></lg-card-navigation-title>
  </lg-card-header>
  <lg-card-content>
    {{ cardContent }}
  </lg-card-content>
</lg-card>
```

---

## Orientation and media

Use `LgOrientationDirective` on `lg-card` when using `lg-card-hero-img`.

```html
<lg-card [variant]="'promo'" [lgOrientation]="{ sm: 'vertical', md: 'horizontal', lg: 'horizontal' }">
  <lg-card-hero-img [cover]="true" [src]="imgUrl" [alt]="altText"></lg-card-hero-img>
  <lg-card-content>...</lg-card-content>
</lg-card>
```

Card documentation and stories currently cover `vertical` and `horizontal` orientation values.

- `vertical`: media sits above content.
- `horizontal`: media moves to the right-hand side.

`LgOrientationDirective` also defines `reverse-horizontal` and `reverse-vertical` values in its shared type, but card-specific styles are currently implemented for `vertical`/`horizontal`. Do not assume reverse card layout behaviour unless you have validated and styled it for your use case.

---

## Common card patterns

### Product card

Use `LgCardContentInnerDataPointsComponent` and data-point components for prominent values.

```html
<lg-card>
  <lg-card-content>
    <lg-card-content-inner-data-points>
      <lg-data-point variant="card">...</lg-data-point>
    </lg-card-content-inner-data-points>
  </lg-card-content>
</lg-card>
```

### Card group

Wrap two or more cards with the `lg-card-group` attribute and place the wrapper in an `lgCol="12"` container.

```html
<div lgCol="12">
  <aside lg-card-group>
    <lg-card>...</lg-card>
    <lg-card>...</lg-card>
  </aside>
</div>
```

### Show more card

Pair `LgCardToggableContentComponent` with `lgButtonToggle`.

```html
<lg-card>
  <lg-card-content>
    <p>Always-visible content.</p>
    <lg-card-toggable-content>
      <p>Toggle content.</p>
    </lg-card-toggable-content>
    <button lg-button lgButtonToggle type="button" priority="link"
            (toggleActive)="toggleActive($event)">
      Show more
    </button>
  </lg-card-content>
</lg-card>
```

---

## Inputs and outputs

### LgCardComponent inputs

| Input | Type | Default | Description |
|---|---|---|---|
| `variant` | `CardVariant` | `'default'` | Card variant: `'default'`, `'promo'`, `'interactive'`. |

### LgCardHeroImageComponent inputs

| Input | Type | Default | Description |
|---|---|---|---|
| `cover` | `boolean` | `false` | If `true`, image uses cover behaviour. |
| `src` | `string` | `undefined` | Image URL. Leave empty when projecting a pictogram instead. |
| `alt` | `string` | `''` | Alt text for image content. |

### LgCardTitleComponent inputs

| Input | Type | Default | Required | Description |
|---|---|---|---|---|
| `headingLevel` | `number` | n/a | Yes | Semantic heading level (`1`–`6`). |

### LgCardSubheadingComponent inputs

| Input | Type | Default | Required | Description |
|---|---|---|---|---|
| `headingLevel` | `number` | n/a | Yes | Semantic heading level (`1`–`6`). |

### LgCardNavigationTitleComponent inputs

| Input | Type | Default | Required | Description |
|---|---|---|---|---|
| `headingLevel` | `number` | n/a | Yes | Semantic heading level (`1`–`6`). |
| `title` | `string` | `''` | Yes | Navigation title text. |
| `link` | `string` | `''` | Yes | Internal or external destination URL. |
| `queryParams` | `Params` | `null` | No | Query parameters for internal links. |
| `queryParamsHandling` | `QueryParamsHandling` | `null` | No | Query param merge/replace strategy for internal links. |

### LgCardNavigationTitleComponent outputs

| Output | Type | Description |
|---|---|---|
| `linkClickedEvent` | `EventEmitter<void>` | Emits when the navigation link is clicked. |

---

## Dos and Don'ts

### Do

1. **Do** keep each card focused on one topic.
2. **Do** summarise content and link to fuller detail on child pages.
3. **Do** place cards directly on the page background.
4. **Do** use `LgCardNavigationTitleComponent` for interactive navigation cards.
5. **Do** keep heading levels semantic; visual styling remains consistent.

### Don't

1. **Don't** overload a card with multiple subjects.
2. **Don't** use cards as a replacement for full pages.
3. **Don't** nest cards inside cards.
4. **Don't** build cluttered card layouts that hide hierarchy.
5. **Don't** assume reverse orientation behaviour on cards without explicit validation.

