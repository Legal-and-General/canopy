---
name: canopy-content-area
description: Best practices for the Canopy Content Area component. Trigger when structuring main page content sections, form journeys, or sub-pages in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/content-area/docs/guide.mdx
---

# Canopy Content Area — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-content-area` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgContentAreaComponent`.

---

## Import

```ts
import {
  LgContentAreaComponent,
  LgContentAreaHeaderComponent,
  LgContentAreaContentComponent,
  LgContentAreaFooterComponent,
  LgContentAreaTitleComponent,
} from '@legal-and-general/canopy';
```

---

## Variants

### Default

A flexible container for any page content.

```html
<lg-content-area>
  <lg-content-area-content>
    <p>Main content here.</p>
  </lg-content-area-content>
</lg-content-area>
```

### Child variant

For sub-pages or self-service product child pages, includes a header section for titles.

```html
<lg-content-area>
  <lg-content-area-header>
    <lg-content-area-title [headingLevel]="2">Section title</lg-content-area-title>
  </lg-content-area-header>
  <lg-content-area-content>
    <p>Content here.</p>
  </lg-content-area-content>
</lg-content-area>
```

Add expressive typography to the title:

```html
<lg-content-area-title [headingLevel]="2" class="lg-font--expressive">
  Section title
</lg-content-area-title>
```

### Form Journey variant

Always use this variant when guiding users through a form. Includes an optional header and breadcrumb, and a footer for action buttons.

```html
<lg-content-area variant="form-journey">
  <lg-content-area-header>
    <lg-content-area-title [headingLevel]="1">Your details</lg-content-area-title>
  </lg-content-area-header>
  <lg-content-area-content>
    <!-- form fields -->
  </lg-content-area-content>
  <lg-content-area-footer>
    <button lg-button priority="primary">Continue</button>
  </lg-content-area-footer>
</lg-content-area>
```

---

## LgContentAreaComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'default' \| 'form-journey'` | `'default'` | Layout variant. |

## LgContentAreaTitleComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `HeadingLevel` | — | Yes | Semantic heading level. |

---

## Dos and Don'ts

### Do

1. **Do** use content areas as parent-level containers for all main page content.
2. **Do** align content areas to the 12-column grid, spanning at least 4 columns on MD layouts and above.
3. **Do** use the form journey variant for all form-based flows.

### Don't

1. **Don't** nest content areas inside other content areas.
2. **Don't** place Cards inside a content area.
3. **Don't** use the default variant for form journeys — always use `variant="form-journey"`.
4. **Don't** use fewer than 4 columns for a content area on MD layouts and above.
