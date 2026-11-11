---
name: canopy-forms-filter-buttons
description: Best practices for Canopy Filter Buttons in Reactive or Signal Forms. Trigger for single or multiple selection filters, lg-signal-filter-group or lg-signal-filter-multiple-group.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/docs/filter-buttons/guide.mdx
---

# Canopy Filter Buttons — Best Practices

This skill provides usage guidance and dos and don'ts for Canopy filter buttons from `@legal-and-general/canopy`.

Apply this skill when building filter controls for data sets. Filter buttons are typically used inside a `lg-filter-container` — see also the `filter-container` skill.

---

## Import

For **single selection** (select one):

```ts
import { LgRadioGroupComponent, LgRadioButtonComponent } from '@legal-and-general/canopy';
```

For **multiple selection** (select multiple):

```ts
import { LgCheckboxGroupComponent, LgToggleComponent } from '@legal-and-general/canopy';
```

---

## Select One (Single Selection)

Use Angular Reactive Forms controls for production. Use the filter selectors of
the radio components to allow a single selection:

```html
<lg-filter-group formControlName="status">
  Status
  <lg-filter-button value="all">All</lg-filter-button>
  <lg-filter-button value="active">Active</lg-filter-button>
  <lg-filter-button value="closed">Closed</lg-filter-button>
</lg-filter-group>
```

---

## Select Multiple

Use checkbox group to allow multiple simultaneous selections:

```html
<lg-filter-multiple-group formControlName="types">
  Document type
  <lg-filter-checkbox value="statements">Statements</lg-filter-checkbox>
  <lg-filter-checkbox value="letters">Letters</lg-filter-checkbox>
  <lg-filter-checkbox value="reports">Reports</lg-filter-checkbox>
</lg-filter-multiple-group>
```

---

## Signal Forms (experimental opt-in)

Angular 21 Signal Forms are experimental and their API may change; consider the
risks before using them in production. Import `FormField` and `form` from
`@angular/forms/signals` and add `FormField` to the standalone component's
`imports`. Create `fields` using `form()` and configure validation in its schema.

For single selection import `LgSignalRadioGroupComponent` and
`LgSignalRadioButtonComponent` from Canopy:

```html
<lg-signal-filter-group [formField]="fields.status" [submitted]="submitted()">
  Status
  <lg-signal-filter-button value="active">Active</lg-signal-filter-button>
  <lg-signal-filter-button value="closed">Closed</lg-signal-filter-button>
</lg-signal-filter-group>
```

For multiple selection import `LgSignalCheckboxGroupComponent` and
`LgSignalCheckboxOptionComponent` from Canopy and initialise the field to a
string array:

```html
<lg-signal-filter-multiple-group [formField]="fields.types" [submitted]="submitted()">
  Document type
  <lg-signal-filter-checkbox value="statements">Statements</lg-signal-filter-checkbox>
  <lg-signal-filter-checkbox value="letters">Letters</lg-signal-filter-checkbox>
</lg-signal-filter-multiple-group>
```

Add the imported Canopy components to the standalone component's `imports`.
Track submission and clear it on reset. Use `lgRequiredCheckboxGroup` for a
required multiple-selection field; Angular 21's `required()` alone does not
reject an empty array. See `canopy-forms-radio` and `canopy-forms-checkbox`
for signal input references and `canopy-forms-validation` for error guidance.

---

## Dos and Don'ts

### Do

1. **Do** use the deselected state as the default for all filter buttons.
2. **Do** keep filter labels succinct.
3. **Do** choose the correct button type — Select One when only one filter can be active, Select Multiple when several can.
4. **Do** maintain 12 px horizontal space between buttons.

### Don't

1. **Don't** use filter buttons for more than 10 filter options — use radio buttons or checkboxes in a filter panel instead.
2. **Don't** centre or right-align the filter buttons.
3. **Don't** mix 'Select one' and 'Select multiple' filters in the same group.

---

## Inputs

### Select One — LgRadioGroupComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | auto-generated | No | HTML `id` attribute. |
| `name` | `string` | auto-generated | No | Sets `name` on all buttons in the group. |
| `value` | `boolean \| string` | `null` | No | Default selected value. |
| `focus` | `boolean` | `null` | No | Sets focus on the fieldset. |

### Select One — LgRadioButtonComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | auto-generated | No | HTML `id` attribute. |
| `name` | `string` | `null` | Yes | HTML `name` attribute. |
| `value` | `string` | `null` | Yes | HTML `value` attribute. |
| `ariaDescribedBy` | `string` | `null` | No | ID of the element that describes the radio button. |

### Select Multiple — LgCheckboxGroupComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | auto-generated | No | HTML `id` attribute. |
| `name` | `string` | auto-generated | No | Sets `name` on all toggles in the group. |
| `value` | `Array<string>` | `null` | No | Default checked values. |
| `focus` | `boolean` | `null` | No | Sets focus on the fieldset. |
| `disabled` | `boolean` | `false` | No | Disables all inner filter buttons. |
| `ariaDescribedBy` | `string` | `null` | No | ID of the element that describes the group. |

### Select Multiple — LgToggleComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | auto-generated | No | HTML `id` attribute. |
| `name` | `string` | auto-generated | No | HTML `name` attribute. |
| `value` | `string` | `null` | Yes | HTML `value` attribute. |
| `checked` | `boolean` | `false` | No | Default checked state. |
