---
name: canopy-forms-input
description: Best practices for the Canopy Text Input component. Trigger when adding text input fields, single-line form inputs, prefixes, suffixes, or input buttons in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/input/docs/guide.mdx
---

# Canopy Text Input — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-input-field` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgInputFieldComponent` or the `lgInput` directive.

---

## Import

```ts
import { LgInputFieldComponent, LgInputDirective } from '@legal-and-general/canopy';
```

For hints and validation:

```ts
import { LgHintComponent, LgValidationComponent } from '@legal-and-general/canopy';
```

For the prefix, suffix and button examples, also import the directives and components you use:

```ts
import {
  LgPrefixDirective,
  LgSuffixDirective,
  LgInputFieldExternalButtonDirective,
  LgButtonComponent,
  LgIconComponent,
} from '@legal-and-general/canopy';
```

Add these to your standalone component's `imports` array alongside `ReactiveFormsModule` from `@angular/forms`.

---

## Basic Usage

Use Angular reactive forms. The `lgInput` directive goes on the `<input>` element inside `lg-input-field`.

```html
<lg-input-field>
  Name
  <lg-hint>Please enter your full name</lg-hint>
  <input lgInput formControlName="name" />
</lg-input-field>
```

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
    Search
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

## Disabled State

Control disabled state through the reactive form, not a separate template binding on the input or its buttons:

```ts
import { FormControl } from '@angular/forms';

query = new FormControl({ value: '', disabled: true });

// Enable or disable later through the same control.
this.query.enable();
this.query.disable();
```

Use this control with `[formControl]="query"` or register it in the form group used by `formControlName="query"`. An initially disabled control stays disabled. Add-on and external Canopy buttons inside `lg-input-field` automatically follow the control's initial state and subsequent status changes; do not manage their disabled state independently.

Avoid adding `pointer-events: none` to the input wrapper or text prefixes/suffixes. Canopy limits pointer-event suppression inside the disabled input border to buttons.

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
5. **Do** place labels above inputs and use hint text for format requirements so guidance remains available while typing.
6. **Do** choose the appropriate native input type (for example, `type="tel"` for telephone numbers) to trigger the right mobile keyboard.

### Don't

1. **Don't** truncate label text.
2. **Don't** use a text input when a predefined response is required — use the select component instead.
3. **Don't** use a text input for simple yes/no responses — use checkboxes or radio buttons instead.
4. **Don't** use placeholder text as a replacement for a label.
5. **Don't** add clear buttons to short fields such as names or postcodes; reserve them for long or frequently edited values to avoid accidental deletion.
