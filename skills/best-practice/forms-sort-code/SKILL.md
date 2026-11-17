---
name: canopy-forms-sort-code
description: Best practices for Canopy Sort Code in Reactive or Signal Forms. Trigger for UK bank sort codes, lgSortCode or lgSignalSortCode.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/sort-code/docs/guide.mdx
---

# Canopy Sort Code — Best Practices

This skill provides usage guidance for the Canopy `lgSortCode` directive from `@legal-and-general/canopy`.

Apply this skill whenever you capture or validate a UK bank sort code.

---

## Import

```ts
import {
  LgSortCodeDirective,
  LgInputFieldComponent,
  LgInputDirective,
  LgHintComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

Use Angular Reactive Forms controls for production. Both `lgInput` and `lgSortCode` must be present on the same `<input>` element. Always include the exact hint text shown below.

```html
<lg-input-field>
  Sort code
  <lg-hint>Must be 6 digits long, for example 00-00-00</lg-hint>
  <input lgInput lgSortCode formControlName="sortCode" />
</lg-input-field>
```

---

## Reactive Forms validation

The `lgSortCode` directive automatically applies `required` and `pattern` validators. The pattern validator accepts:

- `000000` — six contiguous digits
- `00 00 00` — digits separated by spaces
- `00-00-00` — digits separated by hyphens

On blur, the value is auto-formatted to `00-00-00`.

For displaying validation error messages, use the `LgValidationComponent` — see the `forms-validation` skill.

---

## Signal Forms (experimental opt-in)

Angular 21 Signal Forms are experimental and their API may change; consider the
risks before using them in production. Import `FormField`, `apply` and `form`
from `@angular/forms/signals`; import `LgSignalInputFieldComponent`,
`LgSignalInputDirective`, `LgSignalSortCodeDirective`, `LgHintComponent` and
`lgSortCodeSchema` from `@legal-and-general/canopy`. Add `FormField` and the
components and directives to the standalone component's `imports`.

Initialise `sortCode` to `''` and apply the required schema when creating the form:

```ts
readonly fields = form(this.model, path => {
  apply(path.sortCode, lgSortCodeSchema);
});
```

```html
<lg-signal-input-field [submitted]="submitted()">
  Sort code
  <lg-hint>Must be 6 digits long, for example 00-00-00</lg-hint>
  <input lgSignalInput lgSignalSortCode [formField]="fields.sortCode" />
</lg-signal-input-field>
```

Unlike the reactive directive, the signal directive cannot add rules to an
already-created form. Omitting `lgSortCodeSchema` causes a configuration error.
The schema requires a value and accepts the same six-digit formats listed above;
valid values are formatted on blur. Track submission and clear it on reset.
See `canopy-forms-validation` for error and submission guidance.

---

## Design Constraints

- Always copy the exact hint text: "Must be 6 digits long, for example 00-00-00".
- Use with Reactive Forms for production, or the experimental Signal Forms
  variant only as an informed opt-in.
