---
name: canopy-forms-segment
description: Best practices for Canopy Segment in Reactive or Signal Forms. Trigger for single-choice selectors, question-and-answer journeys or lg-signal-segment-group.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/radio/docs/segment/guide.mdx
---

# Canopy Segment — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy segment control from `@legal-and-general/canopy`.

Apply this skill whenever you use segment selectors, including
`lg-signal-segment-group` and `lg-signal-segment-button`.

> Segment buttons are implemented as restyled radio buttons. Import the radio group and button components to use them.

---

## Import

```ts
import { LgRadioGroupComponent, LgRadioButtonComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

Use Angular Reactive Forms controls for production.

```html
<lg-segment-group formControlName="colour">
  Colour
  <lg-hint>Select one option</lg-hint>
  <lg-segment-button value="red">Red</lg-segment-button>
  <lg-segment-button value="blue">Blue</lg-segment-button>
  <lg-segment-button value="green">Green</lg-segment-button>
</lg-segment-group>
```

---

## Signal Forms (experimental opt-in)

Angular 21 Signal Forms are experimental and their API may change; consider the
risks before using them in production. Import `FormField` and `form` from
`@angular/forms/signals`, and `LgSignalRadioGroupComponent` and
`LgSignalRadioButtonComponent` from `@legal-and-general/canopy`. Add `FormField`
and both components to the standalone component's `imports`. Create `fields`
using `form()`, starting with no selection, and configure validation in its schema.

```html
<lg-signal-segment-group [formField]="fields.colour" [submitted]="submitted()" stack="md">
  Colour
  <lg-signal-segment-button value="red">Red</lg-signal-segment-button>
  <lg-signal-segment-button value="blue">Blue</lg-signal-segment-button>
</lg-signal-segment-group>
```

Track submission and clear it on reset. Use the same signal group and button
inputs as the radio variant; see `canopy-forms-radio` for the signal input
reference and `canopy-forms-validation` for error and submission guidance.

---

## Inputs

### LgRadioGroupComponent (used for segment)

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | auto-generated | HTML `id` attribute. |
| `name` | `string` | auto-generated | Sets `name` on all buttons in the group. |
| `value` | `boolean \| string` | `null` | Default selected value. |
| `focus` | `boolean` | `null` | Sets focus on the fieldset. |
| `stack` | `'md' \| 'lg'` | `false` | Stacks buttons vertically at the given breakpoint. |

### LgRadioButtonComponent (used for segment buttons)

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | auto-generated | No | HTML `id` attribute. |
| `name` | `string` | `null` | Yes | HTML `name` attribute. |
| `value` | `string` | `null` | Yes | HTML `value` attribute. |
| `ariaDescribedBy` | `string` | `null` | No | ID of describing element. |

---

## Dos and Don'ts

### Do

1. **Do** use when only one option can be selected from 2–5 choices and vertical space is limited.
2. **Do** use the vertical (`stack`) variant on mobile when horizontal space is insufficient.
3. **Do** keep labels short and concise to ensure they fit within the buttons without wrapping.

### Don't

1. **Don't** use when multiple items can be selected — use checkboxes instead.
2. **Don't** use when there are more than 5 options — use the select component instead.
3. **Don't** use for navigation — use tabs or a button group instead.

---

## Accessibility

- Always use `lg-segment-group` to group related segment buttons with a clear label.
- Use `lg-hint` to provide extra context where needed.
- Ensure all segment buttons have clear, descriptive labels.
- There must be clear colour contrast between selected and unselected states.
- Keyboard users use Tab to move into/out of the segment group, and arrow keys to navigate between options and select them (segment buttons are implemented as radios).
- Only one segment button can be selected at a time within a group.

---

## Design Constraints

- In the default state, nothing is pre-selected (unlike radio buttons, where one is always selected).
- There must be clear colour contrast between the selected and unselected states.
- Use `stack="md"` or `stack="lg"` to switch to a vertical layout below a given breakpoint.
- Minimum 2, maximum 5 segment buttons per group.
