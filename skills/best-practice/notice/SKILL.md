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

> See also: the `pictogram` skill for standalone pictogram status and fill behaviour.

---

## Import

```ts
import {
  LgButtonComponent,
  LgNoticeActionComponent,
  LgNoticeComponent,
  LgNoticeTitleComponent,
  LgNoticeDescriptionComponent,
  LgPictogramComponent,
  LgMarginDirective,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-notice status="success">
  <lg-pictogram name="globe"></lg-pictogram>
  <lg-notice-title>This is a message with pictogram</lg-notice-title>
  <lg-notice-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    <a href="#">eiusmod tempor</a> incididunt ut labore et dolore magna aliqua.
  </lg-notice-description>
  <lg-notice-action type="button">
    <button lg-button priority="primary" lgMarginBottom="none" type="button">
      Continue
    </button>
  </lg-notice-action>
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
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Sets the notice status. Explicit `success`, `warning`, and `error` statuses apply `role="alert"`; `info` does not add an ARIA role. |
| `hasRole` | `boolean` | `true` | When `status` is omitted, controls the default `role="alert"`; set to `false` to remove the role. |

When `status` is provided, it determines the role and takes precedence over
`hasRole`. When `status` is omitted, `hasRole` retains control of the default role.

### Pictogram status and fill

Set `status` on the notice to `info`, `success`, `warning` or `error` to
communicate the type of message. The notice
automatically passes its status to the projected pictogram and enables its fill;
do not add a separate status binding or `[hasFill]="true"` to the pictogram.
When notice status is omitted or cleared, the pictogram receives `info`.

Pictograms remain unfilled inside subtle or bold Content Areas.

---

## Dos and Don'ts

### Do

1. **Do** use when there is no other functionality or content on the page.
2. **Do** use when space is not limited.
3. **Do** choose an appropriate pictogram from the pictogram catalogue to reinforce the message.
4. **Do** set the notice's `status` to apply the matching pictogram treatment automatically.
5. **Do** add a button as a call to action at the end of a journey to guide users to the next step.

### Don't

1. **Don't** use on a page that contains other content (e.g. a form) — it should be the only content in its container.
2. **Don't** use for form validation — use inline messages (`lg-alert`) instead.

---

## Design Constraints

- A notice must be the only content in its container.
- A notice can sit inside a Content Area when it is the only content in that area. The Content Area provides the surrounding colour mode and theme, while the Notice provides the message content.
- Multiple `lg-notice-description` components are allowed for additional paragraphs.
- Wrap an optional action in `lg-notice-action`; match its `type` to the projected link, button or button group.
