---
name: canopy-carousel
description: Deprecation notice for the Canopy Carousel component. Trigger whenever lg-carousel, LgCarouselComponent, LgCarouselItemComponent, or LgAutoplayComponent appear in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/carousel
---

# Canopy Carousel — DEPRECATED

> **`LgCarouselComponent` is deprecated and will be removed in a future version of Canopy.**
> Do not use this component in new work, and migrate away from it in existing code.

---

## Migration

Remove all usage of `lg-carousel`, `LgCarouselComponent`, `LgCarouselItemComponent`, and `LgAutoplayComponent`. No documented replacement is available.

---

## What to Remove

Remove the following imports from your `NgModule` or standalone component `imports` array:

```ts
// Remove these:
import {
  LgCarouselComponent,
  LgCarouselItemComponent,
} from '@legal-and-general/canopy';
```

Remove any `lg-carousel` and `lg-carousel-item` elements from your templates:

```html
<!-- Remove: -->
<lg-carousel [headingLevel]="2" description="Our highlights">
  <lg-carousel-item>...</lg-carousel-item>
  <lg-carousel-item>...</lg-carousel-item>
</lg-carousel>
```

---

## Don't

1. **Don't** use `lg-carousel` in new feature work.
2. **Don't** add `LgCarouselComponent` to any new standalone component's `imports` array.
