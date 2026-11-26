---
name: canopy-forms-date
description: Best practices for Canopy Date Input in Reactive or Signal Forms. Trigger when capturing or validating dates, using lg-date-field or lg-signal-date-field.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/date/docs/guide.mdx
---

# Canopy Date Input — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-date-field` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgDateFieldComponent` or
`LgSignalDateFieldComponent`.

---

## Import

```ts
import { LgDateFieldComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

Use Angular Reactive Forms controls for production. Always include a `#validationForm="ngForm"` reference and a submit button inside the same reactive `<form>`.

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

## Signal Forms (experimental opt-in)

Angular 21 Signal Forms are experimental and their API may change; consider the
risks before using them in production. Import `FormField`, `form`, `required`
and `apply` as needed from `@angular/forms/signals`, and
`LgSignalDateFieldComponent` and the date schemas from Canopy. Add `FormField`
and the component to the standalone component's `imports`. Initialise the date
field as an empty string, create `fields` using `form()`, and configure
`required(path.date)` in its schema when needed.

```html
<lg-signal-date-field [formField]="fields.date" [submitted]="submitted()">
  Date of birth
  @if (showDateError()) { <lg-validation>Enter a valid date of birth.</lg-validation> }
</lg-signal-date-field>
```

The field reports part-specific and calendar errors through `fields.date().errors()`.
An incomplete non-empty date is invalid immediately, before the active input
loses focus; error display still depends on interaction or submission. Pass
submission state to the field and clear it on reset. Use
`apply(path.date, lgPastDateSchema)` or `lgFutureDateSchema` for relative dates;
use `lgBeforeDateSchema(date)` or `lgAfterDateSchema(date)` for a fixed `Date`.
Before/after errors contain formatted `required` and `actual` dates. See
`canopy-forms-validation` for error and submission guidance.

Use `novalidate` on the form when using custom Signal Forms submission and
validation, so browser validation does not prevent the submit handler from running.

| Signal field input | Type | Default | Description |
|---|---|---|---|
| `dateId`, `monthId`, `yearId` | `string` | auto-generated | IDs for the date parts. |
| `name` | `string` | auto-generated | Name of the field. |
| `ariaDescribedBy` | `string` | `''` | Additional describing element IDs. |
| `submitted` | `boolean` | `false` | Enables error display after submission. |

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

- A valid date value is an ISO 8601 date string: `YYYY-MM-DD`. Validate signal
  fields before consuming their values; an incomplete date is invalid.
- The component automatically adds an `lg-hint` — do not add a second one.
- For Reactive Forms, a `#validationForm="ngForm"` reference and a submit button must be present in the same `<form>` for validation to work correctly.
