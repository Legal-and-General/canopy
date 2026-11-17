---
name: canopy-forms-input
description: Best practices for Canopy Text Input, including Reactive and Signal Forms. Trigger for text fields, prefixes, suffixes, input buttons, lgInput or lgSignalInput.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/input/docs/guide.mdx
---

# Canopy Text Input — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-input-field` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgInputFieldComponent`, `lgInput`,
`LgSignalInputFieldComponent` or `lgSignalInput`.

---

## Import

```ts
import { LgInputFieldComponent, LgInputDirective } from '@legal-and-general/canopy';
```

For hints and validation:

```ts
import { LgHintComponent, LgValidationComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

Use Angular Reactive Forms controls for production. The `lgInput` directive goes on the `<input>` element inside `lg-input-field`.

```html
<lg-input-field>
  Name
  <lg-hint>Please enter your full name</lg-hint>
  <input lgInput formControlName="name" />
</lg-input-field>
```

---

## Signal Forms (experimental opt-in)

Angular 21 Signal Forms are experimental and their API may change. Consider the
risks before using them in production; the Reactive Forms controls remain available.
Import `FormField` and `form` from `@angular/forms/signals`, and
`LgSignalInputFieldComponent` and `LgSignalInputDirective` from
`@legal-and-general/canopy`. Add `FormField` and both Canopy imports to the
standalone component's `imports`. Create `fields` with `form()` and configure
validation in its schema.

```html
<lg-signal-input-field [submitted]="submitted()">
  Name
  <lg-hint>Please enter your name</lg-hint>
  @if (showNameError()) { <lg-validation>Enter your name</lg-validation> }
  <input lgSignalInput [formField]="fields.name" />
</lg-signal-input-field>
```

Track submission in the form component, pass it to the field, and reset it when
resetting the form. Display validation when the field is invalid and either
both dirty and touched or submitted. On invalid submission, focus the first
invalid field with `focusBoundControl()`. The signal variant also supports
prefixes, suffixes, external buttons and a resizable `<textarea lgSignalInput>`.
See `canopy-forms-validation` for submission and validation guidance.

| Signal field input | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | auto-generated | Connects the input and label. |
| `block` | `boolean` | `false` | Makes the input full-width on small screens. |
| `showLabel` | `boolean` | `true` | Visually shows or hides the label. |
| `submitted` | `boolean` | `false` | Enables error display after submission. |

---

## Prefix and Suffix

```html
<!-- Currency prefix -->
<lg-input-field>
  Amount
  <input lgInput formControlName="amount" />
  <span lgPrefix>£</span>
</lg-input-field>

<!-- Percentage suffix -->
<lg-input-field>
  Rate
  <input lgInput formControlName="rate" />
  <span lgSuffix>%</span>
</lg-input-field>
```

---

## Button Suffix

Use the `lgSuffix` directive for buttons inside the input border (add-on variant).

```html
<!-- Icon-only add-on button -->
<lg-input-field>
  Search
  <input lgInput formControlName="query" />
  <button lg-button lgSuffix [iconButton]="true" priority="add-on">
    Clear
    <lg-icon name="close"></lg-icon>
  </button>
</lg-input-field>
```

---

## External Button

Use the `lgInputFieldExternalButton` directive for buttons outside the input border (e.g., search or submit).

```html
<lg-input-field>
  Search
  <input lgInput formControlName="query" />
  <button lg-button lgInputFieldExternalButton priority="primary">
  </button>
</lg-input-field>
```

You can combine multiple suffixes with an external button:

```html
<lg-input-field>
  Amount
  <input lgInput formControlName="amount" />
  <span lgSuffix>%</span>
  <button lg-button lgSuffix [iconButton]="true" priority="add-on">
    Clear
    <lg-icon name="close" />
  </button>
  <button lg-button lgInputFieldExternalButton priority="primary">
    Submit
  </button>
</lg-input-field>
```

---

## LgInputDirective Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | auto-generated | HTML `id` attribute. |
| `name` | `string` | auto-generated, matches `id` | HTML `name` attribute. Auto-generated if not provided; defaults to match `id`. |

## LgInputFieldComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | auto-generated | Propagates to the input `id` and label `for`. |
| `block` | `boolean` | `false` | Makes the input full-width on small screens. |
| `showLabel` | `boolean` | `true` | Visually shows or hides the label. |

---

## Dos and Don'ts

### Do

1. **Do** always include a label — never rely on placeholder text alone.
2. **Do** keep labels clear, concise, and relevant.
3. **Do** use prefix/suffix variants to clarify the input type (e.g. currency, percentage).
4. **Do** keep input widths relative to the expected length of the content.

### Don't

1. **Don't** truncate label text.
2. **Don't** use a text input when a predefined response is required — use the select component instead.
3. **Don't** use a text input for simple yes/no responses — use checkboxes or radio buttons instead.
4. **Don't** use placeholder text as a replacement for a label.
