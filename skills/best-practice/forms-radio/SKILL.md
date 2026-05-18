---
name: canopy-forms-radio
description: Best practices for the Canopy Radio component. Trigger when adding single-choice radio button groups to a form in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/radio/docs/radio/guide.mdx
---

# Canopy Radio — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy radio components from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgRadioGroupComponent` or `LgRadioButtonComponent`.

---

## Import

```ts
import {
  LgRadioGroupComponent,
  LgRadioButtonComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-radio-group formControlName="colour">
  Preferred colour
  <lg-hint>Choose one option</lg-hint>
  <lg-radio-button value="red">Red</lg-radio-button>
  <lg-radio-button value="blue">Blue</lg-radio-button>
  <lg-radio-button value="green">Green</lg-radio-button>
</lg-radio-group>
```

---

## LgRadioGroupComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | auto-generated | HTML `id` attribute. |
| `name` | `string` | auto-generated | Sets `name` on all buttons in the group. |
| `value` | `boolean \| string` | `null` | Default selected value. Must match a button's `value`. |
| `focus` | `boolean` | `null` | Sets focus on the fieldset. |
| `inline` | `boolean` | `false` | Displays buttons inline rather than stacked. |

## LgRadioButtonComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | auto-generated | No | HTML `id` attribute. |
| `name` | `string` | `null` | Yes | HTML `name` attribute. |
| `value` | `string` | `null` | Yes | HTML `value` attribute. |
| `size` | `RadioSize` | `'lg'` | No | Size of the radio button. |
| `ariaDescribedBy` | `string` | `null` | No | ID of the element that describes this radio button. |

## LgRadioButtonComponent Outputs

| Output | Type | Description |
|--------|------|-------------|
| `blur` | `EventEmitter<Event>` | Emitted on blur. |

---

## Accessibility

- Always use `lg-radio-group` to group related radio buttons with a clear label.
- Use `lg-hint` to provide extra context where needed.
- Ensure all radio buttons have clear, descriptive labels.
- Set `ariaDescribedBy` to link radio buttons to hint or validation messages.
- Keyboard users use Tab to move into/out of the radio group, and arrow keys to navigate between options and select them.
- Only one radio button can be selected at a time within a group.

---

## Dos and Don'ts

### Do

1. **Do** use when only one item can be selected from a list.
2. **Do** lay out options vertically, one choice per line.
3. **Do** limit to a maximum of 5 options; use a select for longer lists.

### Don't

1. **Don't** use when multiple items can be selected — use checkboxes instead.
2. **Don't** use when the list has more than 5 options and space is limited — use the select component instead.

---

## When to Use vs Alternatives

- Use **Radio** for standard forms with deliberate single-choice selection.
- Use **Segment** for question-and-answer journeys where the user must make a conscious choice.
- Use **Select** when the list exceeds 5 options and space is limited.
