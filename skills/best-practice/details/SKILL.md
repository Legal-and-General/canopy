---
name: canopy-details
description: Best practices for the Canopy Details component. Trigger when adding a single collapsible section, an FAQ-style disclosure, or a status-coloured details panel in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/details/docs/guide.mdx
---

# Canopy Details — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-details` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgDetailsComponent`, `LgDetailsPanelHeadingComponent`, `lg-details`, or `lg-details-panel-heading`.

---

## Import

```ts
import {
  LgDetailsComponent,
  LgDetailsPanelHeadingComponent,
} from '@legal-and-general/canopy';
```

Add both components to your module imports or a standalone component's `imports` array.

---

## Basic Usage

```html
<lg-details>
  <lg-details-panel-heading [headingLevel]="3">
    How do I change my payment details?
  </lg-details-panel-heading>
  Give us a call on 0800 123 4567 and we'll be happy to help you change your payment
  details.
</lg-details>
```

---

## Statuses

Use `generic` for most cases. Use other statuses sparingly when you need the panel itself to communicate severity or emphasis.

| Status | When to use |
|--------|-------------|
| `generic` | Default. Neutral disclosure. |
| `info` | Highlight informational context. |
| `warning` | Warn about something that may affect the user. |
| `error` | Signal an error in context. |
| `success` | Confirm a successful outcome. |

`warning`, `error`, and `success` automatically add `role="alert"`. This causes assistive technologies to announce the content as an alert when it appears, so only use those statuses when that behaviour is appropriate.

For icons:

- `generic` and `info` can use a custom `icon`.
- `success`, `warning`, and `error` always use fixed status icons.

**Information status with a custom icon:**

```html
<lg-details status="info" icon="information-filled">
  <lg-details-panel-heading [headingLevel]="3">
    You have triggered the Money Purchase Annual Allowance (MPAA)
  </lg-details-panel-heading>
  You have flexibly accessed benefits from a pension, which may or may not be held with
  Legal & General.
</lg-details>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `isActive` | `boolean` | `false` | No | Whether the panel is expanded. |
| `status` | `'generic' \| 'info' \| 'warning' \| 'error' \| 'success'` | `'generic'` | No | Applies status treatment and ARIA role if applicable. |
| `showIcon` | `boolean` | `true` | No | Whether to show the status icon. |
| `icon` | `IconName` | `'globe'` | No | Custom icon for `generic` and `info` statuses only. |

## LgDetailsPanelHeadingComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | n/a | Yes | Semantic heading level for the button label. |

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| `opened` | `EventEmitter<void>` | Emitted when the panel opens. |
| `closed` | `EventEmitter<void>` | Emitted when the panel closes. |

---

## Dos and Don'ts

### Do

1. **Do** use Details to hide secondary information that helps some users but is not essential for everyone to see immediately.
2. **Do** keep the heading short and descriptive so users can decide quickly whether to expand it.
3. **Do** match the width of the Details panel to the content it sits with so it feels like part of the same reading flow.
4. **Do** keep the content small and simple. Links and simple imagery are acceptable, but the component is intended for brief supporting content.

### Don't

1. **Don't** use Details for large amounts of content or rich media such as audio or video.
2. **Don't** hide key information that is important or relevant to most users. Put that content on the page instead.
3. **Don't** use a Details panel to gate a required action such as confirming terms and conditions before a user can continue. <!-- from documentation image -->
4. **Don't** stack multiple coloured status variants together as a substitute for clearer page structure. Use status treatments sparingly, and default to `generic`. <!-- from documentation image -->

---

## Accessibility

- Use a meaningful `headingLevel` that fits the surrounding page outline.
- Expect `warning`, `error`, and `success` to announce as alerts because those statuses apply `role="alert"` automatically.
- Keep the heading text descriptive enough to work as the accessible name of the toggle button.

---

## Design Constraints

- Use Details for a single collapsible section. If you need to hide multiple related sections, prefer Accordion.
- Keep content collapsed by default.
- Match the panel width to nearby content rather than stretching it beyond the layout it belongs to.
- Use the `generic` status unless a stronger message treatment is genuinely needed.

---

## When to Use vs Alternatives

- Use **Details** for a single collapsible section containing a small amount of supporting content.
- Use **Accordion** when you need to hide large amounts of content or organise multiple related sections.
