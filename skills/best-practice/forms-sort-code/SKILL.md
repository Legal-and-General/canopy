---
name: canopy-forms-sort-code
description: Best practices for the Canopy Sort Code directive. Trigger when capturing and validating UK bank sort codes in a form in an Angular project using Canopy.
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

Both `lgInput` and `lgSortCode` must be present on the same `<input>` element. Always include the exact hint text shown below.

```html
<lg-input-field>
  Sort code
  <lg-hint>Must be 6 digits long, for example 00-00-00</lg-hint>
  <input lgInput lgSortCode formControlName="sortCode" />
</lg-input-field>
```

---

## Validation

The `lgSortCode` directive automatically applies `required` and `pattern` validators. The pattern validator accepts:

- `000000` — six contiguous digits
- `00 00 00` — digits separated by spaces
- `00-00-00` — digits separated by hyphens

On blur, the value is auto-formatted to `00-00-00`.

For displaying validation error messages, use the `LgValidationComponent` — see the `forms-validation` skill.

---

## Design Constraints

- Always copy the exact hint text: "Must be 6 digits long, for example 00-00-00".
- Use with Angular reactive forms.
