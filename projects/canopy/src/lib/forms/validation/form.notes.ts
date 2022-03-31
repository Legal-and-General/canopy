export const notes = `
To provide a consistent approach to form validation.

## Usage
The rules to display the error states are incorporated into the individual Canopy
form components. When used in conjunction with standard [Angular form validation](https://angular.io/guide/form-validation)
the error styles will be displayed automatically.

Error messages need to be handled by the individual applications by utilising the
[Validation](/?path=/story/components-form-validation--component) component and
the LgErrorStateMatcher.

Import the module in your core component, e.g.:

~~~js
@NgModule({
  ...
  imports: [..., LgValidationModule]
})
~~~

In your component file set up the relevant validators :

~~~js
constructor(public fb: FormBuilder, private errorState: LgErrorStateMatcher) {
  this.form = this.fb.group({
    text: ['', [Validators.required, Validators.minLength(4)]]
  });
}

isControlInvalid(control: NgControl, form: FormGroupDirective) {
  return this.errorState.isControlInvalid(control, form);
}
~~~

In your HTML add the validation components with the appropriate structural
directives to determine if they should be visible. The error state matcher will
determine wether the form field is in an error state.

~~~html
<form
  [formGroup]="form"
  (ngSubmit)="onSubmit(form)"
  #userForm="ngForm">
  <lg-input-field>
    Text
    <input lgInput formControlName="username" />
    <lg-hint>This is a standard input field</lg-hint>
    <lg-validation *ngIf="isControlInvalid(text, userForm) && text.hasError('required')">
      Username is a required field
    </lg-validation>
    <lg-validation *ngIf="isControlInvalid(text, validationForm) && text.hasError('minlength')">
      Username needs to be at least 4 characters
    </lg-validation>
  </lg-input-field>
</form>
~~~
`;
