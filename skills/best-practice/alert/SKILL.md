---
name: alert
description: Best practices for the Canopy Inline Message (Alert) component. Trigger when adding inline messages, status alerts, info/warning/error/success notifications, or feedback messages in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/alert/docs/guide.mdx
---

# Canopy Inline Message (Alert) — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-alert` component (`LgAlertComponent`) from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgAlertComponent` or `lg-alert`.

---

## Import

```ts
import { LgAlertComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-alert status="info" [showIcon]="true">
  This product comes with a free umbrella.
  Here is some <a href="#">link text</a>.
</lg-alert>
```

---

## Statuses

| Status | When to use |
|--------|-------------|
| `generic` | Basic message; no semantic role assigned. Icon is customisable. |
| `info` | Calmly highlight information; no action required. |
| `success` | Confirm a completed action; no further user action needed. |
| `warning` | Elevated alert; interrupted service or something that may affect the user's holding. |
| `error` | Error that stops the user completing their journey; include steps to resolve. |

The `alert` ARIA role is automatically applied for `warning`, `error`, and `success` statuses, sending an accessible event to assistive technologies.

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | `'generic' \| 'info' \| 'warning' \| 'error' \| 'success'` | `'generic'` | Applies colour treatment and ARIA role. |
| `showIcon` | `boolean` | `true` | Whether to show the status icon (applies to `warning`, `error`, `success`, `info`). |
| `role` | `string` | auto | Override the ARIA role, or pass `'none'` to suppress it. |

---

## Dos and Don'ts

### Do

1. **Do** display inline messages in a timely manner so users can resolve issues immediately.
2. **Do** keep the message succinct.
3. **Do** include a link to take an action or get more detailed information when appropriate.
4. **Do** place the inline message close to the element it relates to so users understand the context.

### Don't

1. **Don't** use inline messages when space is not an issue — consider using Primary Message with Brand Icon instead.
2. **Don't** overload the page with multiple inline messages simultaneously.

---

## Accessibility

- `warning`, `error`, and `success` statuses automatically add `role="alert"`, which triggers an accessible alert event in assistive technologies.
- To suppress the role, pass `[role]="'none'"`.
- Always include meaningful, actionable text in error messages — explain the problem and how to fix it.
