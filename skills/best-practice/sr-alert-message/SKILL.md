---
name: canopy-sr-alert-message
description: Best practices for the Canopy Screen Reader Alert Message directive. Trigger when notifying screen reader users of dynamic content changes, loading completion, or status updates in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/sr-alert-message/docs/guide.mdx
---

# Canopy Screen Reader Alert Message — Best Practices

This skill provides usage guidance and input reference for the Canopy `lgSrAlertMessage` directive (`LgSrAlertMessageDirective`) from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgSrAlertMessageDirective` or `lgSrAlertMessage`.

---

## Import

```ts
import { LgSrAlertMessageDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

Apply the directive to a paragraph containing the message for screen readers. Pass a boolean binding: when it becomes `true` the message is read aloud and then hidden after a timeout.

```html
@if (!loaded) {
  <lg-spinner></lg-spinner>
}
<p [lgSrAlertMessage]="loaded">Loading complete</p>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `lgSrAlertMessage` | `boolean` | `null` | Yes | When `true`, the message is read by screen readers and hidden after `timer` ms. |
| `timer` | `number` | `8000` | No | Time in milliseconds before the message is hidden from screen readers. |

---

## When to Use

Use `lgSrAlertMessage` whenever content changes dynamically in a way that sighted users notice visually but screen reader users would not detect — for example:
- A spinner disappearing when data finishes loading.
- A success state appearing after a form submission.

---

## Design Constraints

- The `LgSpinnerComponent` documentation recommends always pairing a spinner with `lgSrAlertMessage` to announce when loading is complete.
- The element carrying the directive is visually hidden at all times; it exists solely for screen readers.
