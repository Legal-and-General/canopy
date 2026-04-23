---
name: forms-checkbox
description: Best practices for the Canopy Checkbox and Checkbox Group components. Trigger when adding multi-selection checkboxes, agreement confirmation, or grouped checkbox controls in a form in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/toggle/docs/checkbox/guide.mdx
---

# Canopy Checkbox — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for Canopy checkbox components from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgToggleComponent` (as `lg-checkbox`) or `LgCheckboxGroupComponent`.

---

## Import

```ts
import { LgToggleComponent } from '@legal-and-general/canopy';
```

For grouped checkboxes:

```ts
import { LgCheckboxGroupComponent, LgToggleComponent } from '@legal-and-general/canopy';
```

---

## Single Checkbox

```html
<lg-checkbox formControlName="agreed" value="yes">
  I agree to the terms and conditions
</lg-checkbox>
```

---

## Checkbox Group

Use `lg-checkbox-group` when presenting two or more related options.

```html
<lg-checkbox-group formControlName="colours">
  Select your colours
  <lg-hint>Choose all that apply</lg-hint>
  <lg-toggle value="red">Red</lg-toggle>
  <lg-toggle value="blue">Blue</lg-toggle>
  <lg-toggle value="green">Green</lg-toggle>
</lg-checkbox-group>
```

---

## LgToggleComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | auto-generated | No | HTML `id` attribute. |
| `name` | `string` | `null` | Yes | HTML `name` attribute. |
| `value` | `string` | `null` | Yes | HTML `value` attribute. |
| `focus` | `boolean` | `null` | No | Sets focus on the checkbox. |
| `size` | `'sm' \| 'lg'` | `'sm'` | No | Size of the checkbox. |
| `ariaDescribedBy` | `string` | `null` | No | ID of element that describes the checkbox. |

## LgToggleComponent Outputs

| Output | Type | Description |
|--------|------|-------------|
| `blur` | `EventEmitter<Event>` | Emitted on blur. |

## LgCheckboxGroupComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | auto-generated | HTML `id` attribute. |
| `name` | `string` | auto-generated | Sets `name` on all checkboxes in the group. |
| `inline` | `boolean` | `false` | Displays checkboxes inline. |
| `focus` | `boolean` | `null` | Sets focus on the fieldset. |

---

## Dos and Don'ts

### Do

1. **Do** use to confirm a response (e.g. agreement to terms).
2. **Do** use to allow the user to choose from multiple options.

### Don't

1. **Don't** use negative labels.
2. **Don't** use as part of a dark pattern.
3. **Don't** use when a single exclusive response is required — use radio buttons instead.
