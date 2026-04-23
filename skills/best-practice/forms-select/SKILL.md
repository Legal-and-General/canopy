---
name: forms-select
description: Best practices for the Canopy Select component. Trigger when adding dropdown form fields, single-selection lists, or option pickers in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/select/docs/guide.mdx
---

# Canopy Select — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-select-field` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgSelectFieldComponent` or `LgSelectDirective`.

---

## Import

```ts
import { LgSelectFieldComponent, LgSelectDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

Use Angular reactive forms. The `lgSelect` directive goes on the `<select>` element inside `lg-select-field`.

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

## LgSelectDirective Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | auto-generated | HTML `id` attribute. |
| `name` | `string` | auto-generated | HTML `name` attribute. |

## LgSelectFieldComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | auto-generated | Propagates to the select `id` and label `for`. |
| `block` | `boolean` | `false` | Makes the select full-width on small screens. |

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
