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

## 1. carousel: remove the deleted `LgCarouselComponent` and related components

**What changed:** `LgCarouselComponent`, `LgCarouselItemComponent`, and `LgAutoplayComponent`
have been permanently removed from `@legal-and-general/canopy`. These components were
deprecated in an earlier release and are no longer available. There is no direct
Canopy replacement — teams should replace carousels with a sequence of `LgCardComponent`
instances or another layout that surfaces the same content without auto-rotating slides.

**Search for** (in `*.ts` files):
```
LgCarouselComponent
```
```
LgCarouselItemComponent
```
```
LgAutoplayComponent
```

**Search for** (in `*.html` files):
```
lg-carousel
```
```
lg-carousel-item
```

**Search for** (in `*.scss` and `*.css` files):
```
--carousel-bullet-color
```
```
--carousel-active-bullet-color
```
```
--carousel-nav-background-color
```

**Replace with:**

- Remove every `import` of `LgCarouselComponent`, `LgCarouselItemComponent`, and
  `LgAutoplayComponent` from `@legal-and-general/canopy` in `*.ts` files.
- Remove these identifiers from the standalone component `imports` array.
- Remove all `<lg-carousel>` and `<lg-carousel-item>` elements from templates. Consider
  replacing the content with a sequence of `<lg-card>` components or a static grid
  layout, preserving the content that was previously in each `<lg-carousel-item>`.
- Remove any custom CSS overrides that reference `--carousel-bullet-color`,
  `--carousel-active-bullet-color`, or `--carousel-nav-background-color`.

**Before:**
```ts
import { LgCarouselComponent, LgCarouselItemComponent } from '@legal-and-general/canopy';

@Component({
  imports: [ LgCarouselComponent, LgCarouselItemComponent ],
})
export class MyComponent {}
```
```html
<lg-carousel [headingLevel]="2" description="Our highlights" [autoPlay]="true" [autoPlayDelay]="3000">
  <lg-carousel-item>
    <p>Slide one content</p>
  </lg-carousel-item>
  <lg-carousel-item>
    <p>Slide two content</p>
  </lg-carousel-item>
</lg-carousel>
```

**After:**
```ts
import { LgCardComponent, LgCardContentComponent } from '@legal-and-general/canopy';

@Component({
  imports: [ LgCardComponent, LgCardContentComponent ],
})
export class MyComponent {}
```
```html
<!-- Replace the carousel with a grid of cards or another static layout -->
<div lgContainer>
  <div lgRow>
    <div [lgCol]="12" [lgColMd]="6">
      <lg-card>
        <lg-card-content>
          <p>Slide one content</p>
        </lg-card-content>
      </lg-card>
    </div>
    <div [lgCol]="12" [lgColMd]="6">
      <lg-card>
        <lg-card-content>
          <p>Slide two content</p>
        </lg-card-content>
      </lg-card>
    </div>
  </div>
</div>
```

> **Automated?** No — removing the component and imports is mechanical, but choosing a
> suitable replacement layout requires a design decision for each usage. Replace the
> content of each `<lg-carousel-item>` in the most appropriate alternative structure for
> the context.

---

## 2. hero-img: remove the deleted `LgHeroImgComponent` and related components

**What changed:** `LgHeroImgComponent`, `LgHeroImgCardComponent`,
`LgHeroImgCardTitleComponent`, and `LgHeroImgCardSubtitleComponent` have been permanently
removed from `@legal-and-general/canopy`. These components were deprecated in an earlier
release. Use `LgHeroComponent` (`lg-hero`) from the same library as the supported
replacement for image-led hero sections.

**Search for** (in `*.ts` files):
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

**Search for** (in `*.html` files):
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

**Search for** (in `*.scss` and `*.css` files):
```
--hero-img-bg-color-rgb
```
```
--hero-img-color
```
```
.lg-hero-img
```

**Replace with:**

- Remove every `import` of `LgHeroImgComponent`, `LgHeroImgCardComponent`,
  `LgHeroImgCardTitleComponent`, and `LgHeroImgCardSubtitleComponent` from
  `@legal-and-general/canopy` in `*.ts` files.
- Remove these identifiers from the standalone component `imports` array.
- Replace `<lg-hero-img>` templates with `<lg-hero>` using the hero component's
  `[overlap]` input (same behaviour). Move card content into `<lg-hero-card>` /
  `<lg-hero-card-content>`, titles into `<lg-hero-card-title>`, and subtitles into
  `<lg-hero-card-subtitle>`. Apply a background image via CSS on the host or a
  wrapping element rather than via the `imageUrl` input.
- Remove any custom CSS overrides that reference `--hero-img-bg-color-rgb`,
  `--hero-img-color`, or `.lg-hero-img`.

**Before:**
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
export class MyComponent {}
```
```html
<lg-hero-img imageUrl="/assets/hero-bg.jpg" [overlap]="2">
  <div lgContainer>
    <div lgRow>
      <div [lgCol]="12" [lgColMd]="6">
        <lg-hero-img-card>
          <lg-hero-img-card-title [headingLevel]="1">
            Protect what matters most
          </lg-hero-img-card-title>
          <lg-hero-img-card-subtitle [headingLevel]="2">
            Life insurance
          </lg-hero-img-card-subtitle>
          <p>Explore our options.</p>
        </lg-hero-img-card>
      </div>
    </div>
  </div>
</lg-hero-img>
```

**After:**
```ts
import {
  LgHeroComponent,
  LgHeroContentComponent,
  LgHeroCardComponent,
  LgHeroCardHeaderComponent,
  LgHeroCardContentComponent,
  LgHeroCardTitleComponent,
  LgHeroCardSubtitleComponent,
} from '@legal-and-general/canopy';

@Component({
  imports: [
    LgHeroComponent,
    LgHeroContentComponent,
    LgHeroCardComponent,
    LgHeroCardHeaderComponent,
    LgHeroCardContentComponent,
    LgHeroCardTitleComponent,
    LgHeroCardSubtitleComponent,
  ],
})
export class MyComponent {}
```
```html
<!-- Apply the background image via CSS on the host element or a wrapper class -->
<lg-hero [overlap]="2" class="my-hero-with-bg">
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12" [lgColMd]="6">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="1">
                Protect what matters most
              </lg-hero-card-title>
            </lg-hero-card-header>
            <lg-hero-card-content>
              <lg-hero-card-subtitle [headingLevel]="2">
                Life insurance
              </lg-hero-card-subtitle>
              <p>Explore our options.</p>
            </lg-hero-card-content>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
</lg-hero>
```
```scss
// In your component stylesheet: replicate the background image
.my-hero-with-bg {
  background-image: url('/assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

> **Automated?** No — the component tree structure differs between `lg-hero-img` and
> `lg-hero`. Each usage requires manual restructuring of the template and a judgement
> call about how card titles, subtitles, and body content map onto the hero card slots.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and
   test commands. Common script names include `build`, `compile`, `type-check`, `test`,
   and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or
   compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and
   check whether the pattern matched all occurrences (for example in template `.html`
   files as well as `.ts` files, or across multiple components).
