---
name: canopy-forms-radio
description: Best practices for Canopy Radio in Reactive or Signal Forms. Trigger for single-choice radio groups, lg-radio-group or lg-signal-radio-group.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/radio/docs/radio/guide.mdx
---

# Canopy Radio — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy radio components from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgRadioGroupComponent`, `LgRadioButtonComponent`,
`LgSignalRadioGroupComponent` or `LgSignalRadioButtonComponent`.

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

Use Angular Reactive Forms controls for production.

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

## Signal Forms (experimental opt-in)

Angular 21 Signal Forms are experimental and their API may change; consider the
risks before using them in production. Import `FormField` and `form` from
`@angular/forms/signals`, and `LgSignalRadioGroupComponent` and
`LgSignalRadioButtonComponent` from `@legal-and-general/canopy`. Add `FormField`
and both components to the standalone component's `imports`. Create `fields`
using `form()` and configure validation in its schema.

```html
<lg-signal-radio-group [formField]="fields.contact" [submitted]="submitted()">
  How should we contact you?
  <lg-hint>Choose one option.</lg-hint>
  @if (showContactError()) { <lg-validation>Select a contact method.</lg-validation> }
  <lg-signal-radio-button value="email">Email</lg-signal-radio-button>
  <lg-signal-radio-button value="phone">Phone</lg-signal-radio-button>
</lg-signal-radio-group>
```

Track submission and pass it to the group; clear it when resetting the form.
For segments and single-selection filters use the signal selectors documented in
`canopy-forms-segment` and `canopy-forms-filter-buttons`. See
`canopy-forms-validation` for error and submission guidance.

| Signal group input | Type | Default | Description |
|---|---|---|---|
| `id`, `name` | `string` | auto-generated | Identify the group and its options. |
| `value` | `string \| boolean` | `''` | Selected value; normally managed by `formField`. |
| `inline` | `boolean` | `false` | Displays options inline. |
| `stack` | `RadioStackBreakpoint \| undefined` | `undefined` | Sets the responsive stacking breakpoint. |
| `submitted` | `boolean` | `false` | Enables error display after submission. |
| `ariaDescribedBy` | `string` | `''` | Additional describing element IDs. |

| Signal button input | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | auto-generated | Identifies the option. |
| `value` | `string \| boolean` | required | Value selected by this option. |
| `size` | `RadioSize` | `'lg'` | Size of the radio button. |
| `ariaDescribedBy` | `string` | `''` | Additional describing element IDs. |

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
2. **Do** use stacked radio buttons by default — they are easier to scan and work better with long labels.
3. **Do** keep radio groups to 2–5 options where possible. Avoid more than 7 unless you have strong evidence it's the best pattern.
4. **Do** write clear, descriptive labels. Use hint text when users need extra context to choose confidently.
5. **Do** use inline radio buttons sparingly — only for up to 3 short, closely related options.

### Don't

1. **Don't** use when multiple items can be selected — use checkboxes instead.
2. **Don't** use when the list has more than 5 options and space is limited — use the select component instead.
3. **Don't** use inline radio buttons for more than 3 options, or when labels wrap onto multiple lines — switch to stacked.

---

## When to Use vs Alternatives

- Use **Radio** for standard forms with deliberate single-choice selection.
- Use **Segment** for question-and-answer journeys where the user must make a conscious choice.
- Use **Select** when the list exceeds 5 options and space is limited.
