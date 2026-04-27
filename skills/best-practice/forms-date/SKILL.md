---
name: canopy-forms-date
description: Best practices for the Canopy Date Input component. Trigger when capturing or validating date values in a form in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/date/docs/guide.mdx
---

# Canopy Date Input — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-date-field` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgDateFieldComponent`.

---

## Import

```ts
import { LgDateFieldComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

Use Angular reactive forms. Always include a `#validationForm="ngForm"` reference and a submit button inside the same `<form>`.

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()" #validationForm="ngForm">
  <lg-date-field formControlName="dateOfBirth">
    Date of birth
    @if (isControlInvalid(dateOfBirth, validationForm)) {
      <lg-validation>
        @if (dateOfBirth.hasError('invalidField')) {
          Enter a valid {{ dateOfBirth.errors.invalidField }}
        }
        @if (dateOfBirth.hasError('requiredField')) {
          Date of birth must include a {{ dateOfBirth.errors.requiredField }}
        }
        @if (dateOfBirth.hasError('invalidDate')) {
          Enter a valid date of birth
        }
        @if (dateOfBirth.hasError('required')) {
          Enter a date of birth
        }
      </lg-validation>
    }
  </lg-date-field>
  <button type="submit">Submit</button>
</form>
```

---

## Using in a Child Component

When `lg-date-field` is in a child component with its own form group, inject `ControlContainer` and use `formGroupName`:

```ts
@Component({
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ChildComponent {}
```

```html
<ng-container formGroupName="childGroup">
  <lg-date-field formControlName="date">Date of birth</lg-date-field>
</ng-container>
```

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `dateId` | `string` | auto-generated | `id` for the day input. |
| `monthId` | `string` | auto-generated | `id` for the month input. |
| `yearId` | `string` | auto-generated | `id` for the year input. |
| `ariaDescribedBy` | `string` | `null` | ID of an element that describes the field. Always uses the hint component. |
| `focus` | `boolean` | `null` | Sets focus on the fieldset. |

---

## Validation Error Priority

The component surfaces only the most significant error at a time:

| Priority | Error key | Example message |
|----------|-----------|-----------------|
| 1 | `invalidField` | Enter a valid month |
| 1 | `invalidFields` | Enter a valid month and year |
| 2 | `requiredField` | Date of birth must include a day |
| 2 | `requiredFields` | Date of birth must include a day and month |
| 3 | `invalidDate` | Enter a valid date of birth |
| 4 | `futureDate` | Date must be in the past |
| 5 | `required` | Enter a date of birth |

Once the user fixes the first error, the next will surface automatically.

---

## Design Constraints

- The output value is a valid ISO 8601 date string: `YYYY-MM-DD`.
- The component automatically adds an `lg-hint` — do not add a second one.
- A `#validationForm="ngForm"` reference and a submit button must be present in the same `<form>` for validation to work correctly.
