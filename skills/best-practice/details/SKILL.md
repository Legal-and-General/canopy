---
name: details
description: Best practices for the Canopy Details component. Trigger when adding a single collapsible section, an expandable FAQ item, or a status-coloured disclosure in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/details/docs/guide.mdx
---

# Canopy Details — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-details` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgDetailsComponent` or `lg-details`.

---

## Import

```ts
import { LgDetailsComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-details [headingLevel]="3">
  What is a Money Purchase Annual Allowance?
  <p>Content revealed when expanded.</p>
</lg-details>
```

---

## Statuses

The Details component can be styled to match inline message colours. Use sparingly — `generic` is appropriate for most situations.

| Status | When to use |
|--------|-------------|
| `generic` | Default. Neutral disclosure. |
| `info` | Highlight informational context. |
| `warning` | Warn about something that may affect the user. |
| `error` | Signal an error in context. |
| `success` | Confirm a successful outcome. |

`warning`, `error`, and `success` statuses automatically add `role="alert"`.

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | n/a | Yes | Semantic heading level. |
| `isActive` | `boolean` | `false` | No | Whether the panel is expanded. |
| `status` | `'generic' \| 'info' \| 'warning' \| 'error' \| 'success'` | `'generic'` | No | Colour treatment and ARIA role. |
| `showIcon` | `boolean` | `true` | No | Whether to show the status icon. |

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| `opened` | `EventEmitter<void>` | Emitted when the panel opens. |
| `closed` | `EventEmitter<void>` | Emitted when the panel closes. |

---

## Dos and Don'ts

### Do

1. **Do** use to hide secondary information from view.
2. **Do** keep the label as short and descriptive as possible.
3. **Do** match the width of the Details component to the content it sits with.

### Don't

1. **Don't** use for large amounts of content — use the Accordion component instead.
2. **Don't** use to hide key information that all users need.
3. **Don't** overuse colour status variations — `generic` is suitable for most cases.

---

## When to Use vs Alternatives

- Use **Details** for a single collapsible section of small content.
- Use **Accordion** when there are multiple related sections.
