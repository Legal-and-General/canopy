---
name: canopy-forms-validation
description: Best practices for Canopy form validation. Trigger when displaying inline form errors, setting up error state matching, or implementing form-level validation in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/validation/docs/guide.mdx
---

# Canopy Form Validation — Best Practices

This skill provides usage guidance for form validation with `LgValidationComponent`,
`LgValidationWrapperDirective`, and `LgErrorStateMatcher` from
`@legal-and-general/canopy`.

Apply this skill whenever you display inline form errors in a Canopy form.

---

## Import

```ts
import {
  LgValidationComponent,
  LgValidationWrapperDirective,
  LgErrorStateMatcher,
} from '@legal-and-general/canopy';
```

---

## Setup

Inject `LgErrorStateMatcher` and use it to determine when to show errors:

```ts
constructor(
  private fb: FormBuilder,
  private errorState: LgErrorStateMatcher,
) {
  this.form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
  });
}

isControlInvalid(control: AbstractControl, form: FormGroupDirective): boolean {
  return this.errorState.isControlInvalid(control, form);
}
```

---

## Template

Always add `#userForm="ngForm"` to the `<form>` element and ensure the submit button is inside the form.

```html
<form [formGroup]="form" (ngSubmit)="onSubmit(form)" #userForm="ngForm">
  <lg-input-field>
    Username @if (isControlInvalid(form.get('username'), userForm) &&
    form.get('username').hasError('required')) {
    <lg-validation>Username is required</lg-validation>
    } @if (isControlInvalid(form.get('username'), userForm) &&
    form.get('username').hasError('minlength')) {
    <lg-validation>Username must be at least 4 characters</lg-validation>
    }
    <input lgInput formControlName="username" />
  </lg-input-field>
  <button type="submit">Submit</button>
</form>
```

---

## Wrapped Validation

Form fields project `<lg-validation>` between the label and hint and the field. When a
custom component wraps validation, add `lgValidationWrapper` to that component so the
form field projects it into the validation slot and connects the field with
`aria-describedby`.

When the custom component projects `<lg-validation>` through `<ng-content>`, Canopy
finds the inner validation element and uses its ID automatically:

```html
<lg-input-field>
  Username
  <app-error-message lgValidationWrapper>
    <lg-validation>Enter a username</lg-validation>
  </app-error-message>
  <input lgInput formControlName="username" />
</lg-input-field>
```

When the custom component renders `<lg-validation>` in its own template, Canopy cannot
reach the inner element. It describes the field with the wrapper ID instead. Use a static
`id` or bind `lgValidationWrapperId` when an error summary needs a stable anchor target:

```html
<lg-input-field>
  Username
  <app-error-message
    lgValidationWrapper
    [lgValidationWrapperId]="'username-error'"
    [message]="errorMessage"
  />
  <input lgInput formControlName="username" />
</lg-input-field>
```

### Do

1. **Do** import `LgValidationWrapperDirective` in every standalone component that uses
   `lgValidationWrapper`; it supplies the wrapper ID for component-rendered validation.
2. **Do** assign a static `id` or bind `lgValidationWrapperId` when an error summary links
   to a message rendered by the wrapper.

### Don't

1. **Don't** bind `[id]` on a component that also has an `id` input. Use
   `[lgValidationWrapperId]` to avoid an input-name collision.

---

## LgValidationComponent Inputs

| Input      | Type                                                       | Default   | Description                      |
| ---------- | ---------------------------------------------------------- | --------- | -------------------------------- |
| `status`   | `'generic' \| 'info' \| 'warning' \| 'error' \| 'success'` | `'error'` | Visual and semantic status.      |
| `showIcon` | `boolean`                                                  | `true`    | Whether to show the status icon. |

---

## LgValidationWrapperDirective Inputs

| Input                   | Type     | Default                          | Description                                                                                    |
| ----------------------- | -------- | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| `lgValidationWrapperId` | `string` | `lg-validation-wrapper-<unique>` | Dynamic ID used to describe the field when the wrapper renders validation in its own template. |

---

## Error Display Rules

1. All fields with errors are highlighted when the form is submitted.
2. Inline messages appear above each field describing how to fix the problem.
3. The first field with an error automatically receives focus.

---

## Dynamic Validation (Inline)

Validation that fires while the user types is permitted only in specific contexts (e.g. password fields).

### Don't

1. **Don't** show inline validation on focus — don't make users feel they've made a mistake before they've typed anything.
2. **Don't** validate immediately after every keystroke — wait 500–1000 ms after the user stops typing.

---

## Accessibility

- Style error messages in red and use a warning icon to support colour-blind users.
- Use descriptive, human-readable error messages — tell users what to enter, not what went wrong technically.
