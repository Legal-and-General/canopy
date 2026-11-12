---
name: canopy-forms-checkbox
description: Best practices for Canopy Checkbox in Reactive or Signal Forms. Trigger for multi-selection, agreement, checkbox groups or lg-signal-checkbox.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/toggle/docs/checkbox/guide.mdx
---

# Canopy Checkbox — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for Canopy checkbox components from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgToggleComponent` (as `lg-checkbox`),
`LgCheckboxGroupComponent` or the Signal Forms checkbox components.

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

Use Angular Reactive Forms controls for production.

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

## Signal Forms (experimental opt-in)

Angular 21 Signal Forms are experimental and their API may change; consider the
risks before using them in production. Import `FormField`, `form`, `apply` and
`required` as needed from `@angular/forms/signals`. Add `FormField` and the
appropriate Canopy components to the standalone component's `imports`.

For a single checkbox, import `LgSignalCheckboxComponent`, initialise `agreed`
to `false` and use `required(path.agreed)` in the form schema when agreement is
mandatory. Unlike the reactive toggle's configured string value or `null`, the
signal checkbox stores a boolean.

```html
<lg-signal-checkbox [formField]="fields.agreed" [submitted]="submitted()">
  I agree to the terms.
</lg-signal-checkbox>
```

For a group, import `LgSignalCheckboxGroupComponent`,
`LgSignalCheckboxOptionComponent` and `lgRequiredCheckboxGroup` from Canopy.
Initialise `colours` to an empty string array. Angular 21's `required()` alone
does not reject an empty array, so apply the group schema for a required group:

```ts
readonly fields = form(this.model, path => {
  apply(path.colours, lgRequiredCheckboxGroup);
});
```

```html
<lg-signal-checkbox-group [formField]="fields.colours" [submitted]="submitted()">
  Colours
  <lg-hint>Choose all that apply.</lg-hint>
  @if (showError()) { <lg-validation>Select at least one colour.</lg-validation> }
  <lg-signal-toggle value="red">Red</lg-signal-toggle>
  <lg-signal-toggle value="blue">Blue</lg-signal-toggle>
</lg-signal-checkbox-group>
```

Track submission and clear it on reset. See `canopy-forms-validation` for error
and submission guidance.

| Signal input | Type | Default | Applies to |
|---|---|---|---|
| `id`, `name` | `string` | auto-generated | Single checkbox and group. |
| `inline` | `boolean` | `false` | Group. |
| `submitted` | `boolean` | `false` | Single checkbox and group; enables error display after submission. |
| `ariaDescribedBy` | `string` | `''` | Single checkbox, group and option; additional describing element IDs. |
| `size` | `CheckboxSize` | `'lg'` | Single checkbox and option. |
| `value` | `string` | required | Group option. |
| `id` | `string` | auto-generated | Group option. |

---

## LgToggleComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | auto-generated | No | HTML `id` attribute. |
| `name` | `string` | `null` | Yes | HTML `name` attribute. |
| `value` | `string` | `null` | Yes | HTML `value` attribute. |
| `focus` | `boolean` | `null` | No | Sets focus on the checkbox. |
| `size` | `'sm' \| 'lg'` | `'lg'` | No | Size of the checkbox. |
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
| `value` | `Array<string>` | `null` | Sets the default checked checkboxes; must match the `value` of the toggle buttons. |
| `focus` | `boolean` | `null` | Sets focus on the fieldset. |
| `disabled` | `boolean` | `false` | Disables all inner checkboxes. |
| `inline` | `boolean` | `false` | Displays checkboxes inline. |
| `ariaDescribedBy` | `string` | `null` | ID of element that describes the checkboxes. |

---

## Accessibility

- Always group related checkboxes using `lg-checkbox-group` with a clear label.
- Use `lg-hint` to provide extra context where needed.
- Ensure all checkboxes have clear, descriptive labels.
- Set `ariaDescribedBy` to link checkboxes to hint or validation messages.
- Keyboard users must be able to tab through all checkboxes and toggle them with Space.

---

## Dos and Don'ts

### Do

1. **Do** always provide a clear, descriptive label for every checkbox.
2. **Do** use to allow the user to choose from multiple options.
3. **Do** use a single checkbox to capture acknowledgement or consent (e.g. "I agree to the terms and conditions").
4. **Do** use a checkbox to confirm an action has been completed (e.g. in a checklist).

### Don't

1. **Don't** rely on placeholder text or tooltips as a substitute for a label.
2. **Don't** use negative labels.
3. **Don't** use as part of a dark pattern.
4. **Don't** use when a single exclusive response is required — use radio buttons instead.
