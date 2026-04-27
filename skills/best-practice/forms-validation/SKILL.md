---
name: canopy-forms-validation
description: Best practices for Canopy form validation. Trigger when displaying inline form errors, setting up error state matching, or implementing form-level validation in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/validation/docs/guide.mdx
---

# Canopy Form Validation — Best Practices

This skill provides usage guidance for form validation with `LgValidationComponent` and `LgErrorStateMatcher` from `@legal-and-general/canopy`.

Apply this skill whenever you display inline form errors in a Canopy form.

---

## Import

```ts
import {
  LgValidationComponent,
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
    Username
    <input lgInput formControlName="username" />
    @if (isControlInvalid(form.get('username'), userForm) && form.get('username').hasError('required')) {
      <lg-validation>Username is required</lg-validation>
    }
    @if (isControlInvalid(form.get('username'), userForm) && form.get('username').hasError('minlength')) {
      <lg-validation>Username must be at least 4 characters</lg-validation>
    }
  </lg-input-field>
  <button type="submit">Submit</button>
</form>
```

---

## LgValidationComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | `'generic' \| 'info' \| 'warning' \| 'error' \| 'success'` | `'error'` | Visual and semantic status. |
| `showIcon` | `boolean` | `true` | Whether to show the status icon. |

---

## Error Display Rules

1. All fields with errors are highlighted when the form is submitted.
2. Inline messages appear beneath each field describing how to fix the problem.
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
