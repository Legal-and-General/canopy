---
name: primary-message
description: Best practices for the Canopy Primary Message component. Trigger when adding full-page confirmation messages, empty states, error pages, or success completion screens in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/primary-message/docs/guide.mdx
---

# Canopy Primary Message — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-primary-message` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgPrimaryMessageComponent` or `lg-primary-message`.

---

## Import

```ts
import {
  LgPrimaryMessageComponent,
  LgPrimaryMessageTitleComponent,
  LgPrimaryMessageDescriptionComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-primary-message>
  <lg-brand-icon name="calendar"></lg-brand-icon>
  <lg-primary-message-title>All done!</lg-primary-message-title>
  <lg-primary-message-description>
    Your application has been submitted successfully.
  </lg-primary-message-description>
  <lg-primary-message-description>
    <button lg-button priority="primary" lgMarginTop="4" type="button">
      Continue
    </button>
  </lg-primary-message-description>
</lg-primary-message>
```

---

## When to Use

| State | Example |
|-------|---------|
| Empty | "You have no transactions" |
| Error | "Cannot find the page you are looking for" |
| Information | "New feature intro guide" |
| Success | "All done! Your application is complete" |

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `hasRole` | `boolean` | `true` | When `false`, removes `role="alert"` from the component. |

---

## Dos and Don'ts

### Do

1. **Do** use when there is no other functionality or content on the page.
2. **Do** use when space is not limited.
3. **Do** choose an appropriate brand icon from the brand icon catalogue to reinforce the message.
4. **Do** tint the brand icon to match the status — for example `--colour-green-400` for a success state.
5. **Do** add a button as a call to action at the end of a journey to guide users to the next step.

### Don't

1. **Don't** use on a page that contains other content (e.g. a form) — it should be the only content in its container.
2. **Don't** use for form validation — use inline messages (`lg-alert`) instead.

---

## Design Constraints

- A primary message must be the only content in its container.
- Multiple `lg-primary-message-description` components are allowed for additional paragraphs or actions.
