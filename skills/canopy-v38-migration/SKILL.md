---
name: canopy-v38-migration
description: Apply the Canopy v37→v38 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v38, upgrade @legal-and-general/canopy from v37, or fix errors after upgrading to v38.
license: MIT
metadata:
  version: '38.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v38.0.0
---

# Canopy v37 → v38 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. carousel: remove deleted `LgCarouselComponent` and related components

**What changed:** The `LgCarouselComponent` (selector `lg-carousel`),
`LgCarouselItemComponent` (selector `lg-carousel-item`), and internal
`LgAutoplayComponent` (selector `lg-auto-play`) have been removed from the
library entirely. The carousel pattern is no longer part of the Canopy design
system. Use cards (`LgCardComponent`) or other content-grouping patterns as a
replacement.

**Search for** (in `*.html`, `*.ts`, and `*.scss` files):
```
lg-carousel
```
```
lg-carousel-item
```
```
LgCarouselComponent
```
```
LgCarouselItemComponent
```

**Replace with:**

- Remove all `<lg-carousel>` and `<lg-carousel-item>` elements from your
  templates.
- Remove any imports of `LgCarouselComponent` or `LgCarouselItemComponent`
  from `@legal-and-general/canopy` in your `*.ts` files.
- Replace carousel usage with `<lg-card>` components or another suitable
  layout pattern. Each former carousel item typically maps to an individual
  card.

**Before:**
```html
<lg-carousel description="Example carousel" [headingLevel]="4" [slideDuration]="600" [loopMode]="true">
  <lg-carousel-item>
    <h3>Item 1</h3>
    <p>Content for item 1.</p>
  </lg-carousel-item>
  <lg-carousel-item>
    <h3>Item 2</h3>
    <p>Content for item 2.</p>
  </lg-carousel-item>
</lg-carousel>
```
```ts
import { LgCarouselComponent, LgCarouselItemComponent } from '@legal-and-general/canopy';

@Component({
  imports: [ LgCarouselComponent, LgCarouselItemComponent ],
})
```

**After:**
```html
<!-- Replace with cards or another layout pattern -->
<lg-card>
  <lg-card-content>
    <h3>Item 1</h3>
    <p>Content for item 1.</p>
  </lg-card-content>
</lg-card>
<lg-card>
  <lg-card-content>
    <h3>Item 2</h3>
    <p>Content for item 2.</p>
  </lg-card-content>
</lg-card>
```
```ts
import { LgCardComponent, LgCardContentComponent } from '@legal-and-general/canopy';

@Component({
  imports: [ LgCardComponent, LgCardContentComponent ],
})
```

> **Automated?** No — the replacement structure depends on the content and
> layout intent of each carousel usage. Review each occurrence and choose the
> pattern that best fits the original design.

---

## 2. hero-img: remove deleted `LgHeroImgComponent` and related components

**What changed:** The `LgHeroImgComponent` (selector `lg-hero-img`),
`LgHeroImgCardComponent` (selector `lg-hero-img-card`),
`LgHeroImgCardTitleComponent` (selector `lg-hero-img-card-title`), and
`LgHeroImgCardSubtitleComponent` (selector `lg-hero-img-card-subtitle`) have
all been removed from the library. The hero image pattern is no longer part of
the Canopy design system. Use `LgHeroComponent` (selector `lg-hero`) as the
supported hero pattern instead.

**Search for** (in `*.html` and `*.ts` files):
```
lg-hero-img
```
```
lg-hero-img-card
```
```
lg-hero-img-card-title
```
```
lg-hero-img-card-subtitle
```
```
LgHeroImgComponent
```
```
LgHeroImgCardComponent
```
```
LgHeroImgCardTitleComponent
```
```
LgHeroImgCardSubtitleComponent
```

**Replace with:**

- Remove all `<lg-hero-img>`, `<lg-hero-img-card>`, `<lg-hero-img-card-title>`,
  and `<lg-hero-img-card-subtitle>` elements from your templates.
- Remove any imports of the above component classes from
  `@legal-and-general/canopy` in your `*.ts` files.
- Replace with `<lg-hero>` from `LgHeroComponent` if you need a hero banner
  section. See the `canopy-hero` best practice skill for full usage guidance.

**Before:**
```html
<lg-hero-img [imageUrl]="imageUrl" [overlap]="2">
  <div lgContainer>
    <div lgRow>
      <div [lgCol]="12" [lgColLg]="6">
        <lg-hero-img-card>
          <lg-hero-img-card-title [headingLevel]="1">Page title</lg-hero-img-card-title>
          <lg-hero-img-card-subtitle [headingLevel]="2">Subtitle</lg-hero-img-card-subtitle>
        </lg-hero-img-card>
      </div>
    </div>
  </div>
</lg-hero-img>
```
```ts
import {
  LgHeroImgComponent,
  LgHeroImgCardComponent,
  LgHeroImgCardTitleComponent,
  LgHeroImgCardSubtitleComponent,
} from '@legal-and-general/canopy';

@Component({
  imports: [
    LgHeroImgComponent,
    LgHeroImgCardComponent,
    LgHeroImgCardTitleComponent,
    LgHeroImgCardSubtitleComponent,
  ],
})
```

> **Note:** `lg-hero-img-card-subtitle` accepted a `headingLevel` input to
> control the rendered heading element. The replacement `lg-hero-card-subtitle`
> does **not** accept a `headingLevel` input — it renders as a styled paragraph.
> Remove the `[headingLevel]` binding when migrating subtitle content.

**After:**
```html
<!-- Use lg-hero as the supported hero pattern -->
<lg-hero [overlap]="2">
  <lg-hero-header>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <!-- Optional: breadcrumb or other header content -->
        </div>
      </div>
    </div>
  </lg-hero-header>
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="1">Page title</lg-hero-card-title>
              <lg-hero-card-subtitle>Subtitle</lg-hero-card-subtitle>
            </lg-hero-card-header>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
</lg-hero>
```
```ts
import {
  LgHeroComponent,
  LgHeroHeaderComponent,
  LgHeroContentComponent,
  LgHeroCardComponent,
  LgHeroCardHeaderComponent,
  LgHeroCardTitleComponent,
  LgHeroCardSubtitleComponent,
} from '@legal-and-general/canopy';

@Component({
  imports: [
    LgHeroComponent,
    LgHeroHeaderComponent,
    LgHeroContentComponent,
    LgHeroCardComponent,
    LgHeroCardHeaderComponent,
    LgHeroCardTitleComponent,
    LgHeroCardSubtitleComponent,
  ],
})
```

> **Automated?** No — the migration from `lg-hero-img` to `lg-hero` requires
> reviewing the content structure and adapting it to the `lg-hero` slots. Refer
> to the `canopy-hero` best practice skill for the full component API and
> dos/don'ts.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section
   above and check whether the pattern matched all occurrences (for example in
   template `.html` files as well as `.ts` files, or across multiple
   components).
