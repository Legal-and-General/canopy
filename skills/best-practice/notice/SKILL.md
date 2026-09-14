---
name: canopy-notice
description: Best practices for the Canopy Notice component. Trigger when adding full-page confirmation messages, empty states, error pages, or success completion screens in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/notice/docs/guide.mdx
---

# Canopy Notice - Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-notice` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgNoticeComponent` or `lg-notice`.

---

## Import

```ts
import {
  LgNoticeComponent,
  LgNoticeTitleComponent,
  LgNoticeDescriptionComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-notice>
  <lg-pictogram name="calendar"></lg-pictogram>
  <lg-notice-title>All done!</lg-notice-title>
  <lg-notice-description>
    Your application has been submitted successfully.
  </lg-notice-description>
  <lg-notice-description>
    <button lg-button priority="primary" lgMarginTop="4" type="button">
      Continue
    </button>
  </lg-notice-description>
</lg-notice>
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
| `status` | `'generic' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'generic'` | Sets the notice status. Explicit `success`, `warning`, and `error` statuses apply `role="alert"`; explicit `generic` and `info` statuses do not add an ARIA role. |
| `hasRole` | `boolean` | `true` | When `status` is omitted, controls the default `role="alert"`; set to `false` to remove the role. |

When `status` is provided, it determines the role and takes precedence over
`hasRole`. When `status` is omitted, `hasRole` retains control of the default role.

---

## Dos and Don'ts

### Do

1. **Do** use when there is no other functionality or content on the page.
2. **Do** use when space is not limited.
3. **Do** choose an appropriate pictogram from the pictogram catalogue to reinforce the message.
4. **Do** tint the pictogram to match the status — for example `--colour-green-400` for a success state.
5. **Do** add a button as a call to action at the end of a journey to guide users to the next step.

### Don't

1. **Don't** use on a page that contains other content (e.g. a form) — it should be the only content in its container.
2. **Don't** use for form validation — use inline messages (`lg-alert`) instead.

---

## Design Constraints

- A notice must be the only content in its container.
- Multiple `lg-notice-description` components are allowed for additional paragraphs or actions.
