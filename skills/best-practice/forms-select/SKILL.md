---
name: canopy-forms-select
description: Best practices for Canopy Select in Reactive or Signal Forms. Trigger for dropdowns, option pickers, lgSelect or lgSignalSelect.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/select/docs/guide.mdx
---

# Canopy Select — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-select-field` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgSelectFieldComponent`, `LgSelectDirective`,
`LgSignalSelectFieldComponent` or `LgSignalSelectDirective`.

---

## Import

```ts
import { LgSelectFieldComponent, LgSelectDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

Use Angular Reactive Forms controls for production. The `lgSelect` directive goes on the `<select>` element inside `lg-select-field`.

```html
<lg-select-field formControlName="colour">
  Colour
  <lg-hint>Choose your preferred colour</lg-hint>
  <select lgSelect>
    <option value="">Select</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
  </select>
</lg-select-field>
```

---

## Signal Forms (experimental opt-in)

Angular 21 Signal Forms are experimental and their API may change; consider the
risks before using them in production. Import `FormField` and `form` from
`@angular/forms/signals`, and `LgSignalSelectFieldComponent` and
`LgSignalSelectDirective` from `@legal-and-general/canopy`. Add `FormField` and
the Canopy component and directive to the standalone component's `imports`.
Create `fields` using `form()` and configure the required rule in its schema.

```html
<lg-signal-select-field [submitted]="submitted()">
  Colour
  <lg-hint>Select your preferred colour.</lg-hint>
  @if (showColourError()) { <lg-validation>Select a colour.</lg-validation> }
  <select lgSignalSelect [formField]="fields.colour">
    <option value="">Select a colour</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
  </select>
</lg-signal-select-field>
```

Track submission and pass it to the field to show errors for pristine fields
after submission; clear it when resetting. See `canopy-forms-validation` for
validation and submission guidance.

| Signal field input | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | auto-generated | Connects the select and label. |
| `block` | `boolean` | `false` | Makes the select full-width on small screens. |
| `submitted` | `boolean` | `false` | Enables error display after submission. |

---

## LgSelectDirective Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | auto-generated | HTML `id` attribute. |
| `name` | `string` | auto-generated, matches `id` | HTML `name` attribute. Auto-generated if not provided; defaults to match `id`. |

## LgSelectFieldComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | auto-generated | Propagates to the select `id` and label `for`. |
| `block` | `boolean` | `false` | Makes the select full-width on small screens. |

---

## Accessibility

- Always provide label text inside `lg-select-field` as projected content — the component renders the associated `<label>` element automatically.
- Use `lg-hint` to provide extra context where needed.
- Provide a meaningful default option or empty value ("Select" or "Choose an option").
- Ensure option text is clear and descriptive.
- Keyboard users must be able to open the select with Space/Enter and navigate options with arrow keys.
- List options in a predictable order (alphabetical, chronological, most frequently used).

---

## Dos and Don'ts

### Do

1. **Do** use a select when the preset option list is long (more than five options) and space is limited.
2. **Do** list options in a predictable format: alphabetical, chronological, or most frequently used.

### Don't

1. **Don't** use a select when typing may be faster, such as for date of birth or postcode — use text input instead.
2. **Don't** use a select to present a single selection — use a checkbox instead.
3. **Don't** use a select for a very large number of options — consider an autocomplete approach instead.
4. **Don't** capitalise option text — use sentence case for easy reading.
