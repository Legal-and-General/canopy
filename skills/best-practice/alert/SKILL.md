---
name: canopy-alert
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

| Status | When to use | Example |
|--------|-------------|----------|
| `generic` | Basic message; no semantic role assigned. Icon is customisable. | `<lg-alert status="generic">Check out our new feature</lg-alert>` |
| `info` | Calmly highlight information; no action required. | This product comes with a free umbrella. |
| `success` | Confirm a completed action; no further user action needed. | Your umbrella has been dispatched successfully. |
| `warning` | Elevated alert; interrupted service or something that may affect the user's holding. | We can't get details of your umbrella right now. |
| `error` | Error that stops the user completing their journey; include steps to resolve. | You must confirm the terms and conditions before proceeding. |

The `alert` ARIA role is automatically applied for `warning`, `error`, and `success` statuses, sending an accessible event to assistive technologies.

---

## Customising Icons

For `generic` and `info` statuses, you can provide a custom icon via the `icon` input. All other statuses use fixed icons that cannot be overridden.

```html
<lg-alert status="generic" [icon]="'help'">
  This is helpful information.
</lg-alert>
```

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | `'generic' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'generic'` | Applies status treatment and ARIA role if applicable. |
| `showIcon` | `boolean` | `true` | Whether the icon should display. |
| `icon` | `IconName` | `undefined` | Custom icon to display for generic or info statuses. Other statuses use fixed icons. |

---

## Dos and Don'ts

### Do

1. **Do** display inline messages in a timely manner so users can resolve issues immediately.
2. **Do** keep the message succinct.
3. **Do** include a link to take an action or get more detailed information when appropriate.
4. **Do** place the inline message close to the element it relates to so users understand the context.

### Don't

1. **Don't** use inline messages when space is not an issue — consider using Primary Message with Pictogram instead.
2. **Don't** overload the page with multiple inline messages simultaneously.
3. **Don't** use error status without providing clear steps to resolve the issue.
4. **Don't** use inline messages to hide important information; place them where users will see them in context.

---

## Accessibility

- `warning`, `error`, and `success` statuses automatically add `role="alert"`, which triggers an accessible alert event in assistive technologies.
- `info` and `generic` statuses do not receive an ARIA role by default.
- To suppress the role on any status, pass `[role]="'none'`.
- Always include meaningful, actionable text in error messages — explain the problem and how to fix it.
- Error messages should include a link to detailed help or next steps when appropriate.
