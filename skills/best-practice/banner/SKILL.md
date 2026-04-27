---
name: canopy-banner
description: Best practices for the Canopy Banner Message component. Trigger when adding full-width page banners, site-wide notifications, or top-of-page warning messages in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/banner/docs/guide.mdx
---

# Canopy Banner Message — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-banner` component (`LgBannerComponent`) from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgBannerComponent` or `lg-banner`.

---

## Import

```ts
import { LgBannerComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

Place the banner beneath the header but before the hero or other page content.

```html
<lg-banner status="warning">
  <lg-icon name="warning"></lg-icon>
  We're currently experiencing some issues with our service.
</lg-banner>
```

---

## Statuses

| Status | When to use |
|--------|-------------|
| `generic` | Neutral informational banner. |
| `warning` | Caution or disrupted service notice. |

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | `'generic' \| 'warning'` | `'generic'` | Applies colour treatment and ARIA role. |

---

## Dos and Don'ts

### Do

1. **Do** keep the message succinct.
2. **Do** include a link to take an action or get more detailed information when appropriate.

### Don't

1. **Don't** use a banner as a feedback mechanism for user actions — use an inline message, pop-up notification, or modal instead.
2. **Don't** use `warning` status for non-warning purposes.
3. **Don't** show more than one banner message at a time.

---

## Design Constraints

- Position the banner directly beneath the site header and above all other page content.
- The banner is full-width; do not constrain it to a column or card.
