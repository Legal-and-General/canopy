---
name: quick-action
description: Best practices for the Canopy Quick Action component. Trigger when adding quick actions, contextual action buttons, or icon-with-label action elements in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/quick-action/docs/guide.mdx
---

# Canopy Quick Action — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-quick-action` directive from `@legal-and-general/canopy`.

Apply this skill whenever you use `lg-quick-action` or `LgQuickActionComponent`.

---

## Import

```ts
import { LgQuickActionComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

Quick actions combine an icon and a concise text label. Use as a `<button>` for actions or `<a>` for navigation.

```html
<!-- As a button -->
<button lg-quick-action>
  <lg-icon name="reload"></lg-icon>
  Load more
</button>

<!-- As a link -->
<a lg-quick-action href="/messages">
  <lg-icon name="message"></lg-icon>
  Send us a message
</a>
```

---

## When to Use

Use a Quick Action to increase the affordance of a specific function when a primary CTA would be too prominent. Typical use: allowing the user to change contextual data (e.g. "Edit bank details" within a bank details summary card).

**Do not use** Quick Actions to complete form journeys or to invite users to read more — use a Button or Link instead.

---

## Dos and Don'ts

### Do

1. **Do** use to indicate or spotlight specific functionality available in the current context.
2. **Do** use concise, descriptive labels that set the user's expectations — for example "Load more" or "Request name change".
3. **Do** limit to a maximum of three quick actions in a single view.

### Don't

1. **Don't** use in place of buttons or links — quick actions are for contextual functions, not primary or secondary page actions.
2. **Don't** use wordy labels. Quick action labels do not wrap, so the microcopy must fit within the container width.
3. **Don't** use quick actions for navigation to read-more or form-journey destinations — use a link or button instead. <!-- from documentation image: "Read on", "Click here to print your PDF", or lists of contact options are wrong uses -->

---

## Accessibility

- Always include a meaningful text label alongside the icon — never use an icon alone without a visible label.
