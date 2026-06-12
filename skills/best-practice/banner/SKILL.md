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
  <p>We're currently experiencing some issues with our service.</p>
  <a href="/status">View service status</a>
</lg-banner>
```

---

## Optional Link Below Content

You can project an optional link beneath the main banner content. This is useful for providing a call to action or further information, and matches the inline message pattern for consistency.

```html
<lg-banner status="generic">
  <p>
    This is a banner message. Here is some <a href="#">link text</a> or a
    <button lg-button priority="link">button link</button>.
  </p>
  <a *ngIf="showLink" href="#">{{ linkText }}</a>
</lg-banner>
```

The link will appear below the main content when rendered. Use `@if` (Angular 17+) or `*ngIf` to conditionally show it.

---

## Statuses

| Status | When to use | Default icon |
|--------|-------------|--------------|
| `generic` | Neutral informational banner. | `globe` |
| `info` | Informational message. | `information-filled` |
| `success` | Successful outcome notice. | `checkmark-spot-filled` |
| `warning` | Caution or disrupted service notice. | `warning-filled` |
| `error` | Error or failure notice. | `crossmark-spot-filled` |

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | `'generic' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'generic'` | Applies colour treatment and ARIA role if applicable. |
| `showIcon` | `boolean` | `true` | Displays the status icon selected automatically by status. |
| `icon` | `IconName` | `'globe'` (generic) / `'information-filled'` (info) | Optional custom icon for `generic` and `info`. `success`, `warning`, and `error` always use fixed icons. |
| `showLink` | `boolean` | `false` | Whether to show an optional link below the main content. |
| `linkText` | `string` | — | The text for the optional link shown beneath the content. |

---

## ARIA Role

`role="alert"` is automatically added for `success`, `warning`, and `error` statuses. No role is applied for `generic` and `info`.

---

## Custom Icon (generic and info only)

Override the default icon for `generic` or `info` status:

```html
<lg-banner status="generic" [icon]="'calendar'">
  Your appointment is confirmed.
</lg-banner>
```

---

---

## Dos and Don'ts

### Do

1. **Do** keep the message succinct.
2. **Do** position the banner directly beneath the site header and above all other page content.
3. **Do** use the optional link pattern (projecting an `<a>` after the main content) to provide a call to action or further information.
4. **Do** wrap main content in a `<p>` tag when also projecting a link below it.

### Don't

1. **Don't** project `<lg-icon>` inside the banner — use the `[icon]` input instead.
2. **Don't** use a banner as a feedback mechanism for user actions — use an inline message, pop-up notification, or modal instead.
3. **Don't** use `warning` status for non-warning purposes.
4. **Don't** show more than one banner message at a time.

---

## Design Constraints

- The banner is full-width; do not constrain it to a column or card.
