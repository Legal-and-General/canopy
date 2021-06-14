export const notes = `
# Form Validation

## Purpose
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
  imports: [LgValidationModule]
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

## Using only the SCSS files

Generate the markup as show in the example below, you will need to ensure the aria
attributes are correctly labelled.

### Examples:

## Input field
For a select field replace the input field with a select option.

~~~html
<div class="lg-input-field">
  <label class="lg-label" for="lg-input-1">
    Username
  </label>
  <div id="lg-hint-1" class="lg-hint">
    Please enter a username
  </div>
  <input
    name="username"
    class="lg-input lg-input--error" aria-invalid="true" name="lg-input-2" id="lg-input-1" aria-describedby="lg-hint-1 lg-validation-1">
  <div class="lg-validation--error lg-validation" id="lg-validation-1">
    Text is a required field
  </div>
</div>
~~~

## Radio group

~~~html
<div class="lg-radio-group lg-radio-group--error">
  <fieldset aria-describedby="lg-hint-2 lg-validation-2">
    <legend class="lg-label" id="lg-label-2">
      Color
    </legend>
    <div id="lg-hint-2" class="lg-hint">
      Choose a colour
    </div>
    <div value="yellow" class="lg-radio-button lg-radio-button--error">
      <input class="lg-radio-button__input" type="radio" id="lg-radio-button-1" name="lg-radio-group-1" value="yellow">
      <label class="lg-radio-button__label" for="lg-radio-button-1">Yellow</label>
    </div>
    <div value="red" class="lg-radio-button lg-radio-button--error">
      <input class="lg-radio-button__input" type="radio" id="lg-radio-button-2" name="lg-radio-group-1" value="red">
      <label class="lg-radio-button__label" for="lg-radio-button-2">Red</label>
    </div>
    <div class="lg-validation--error lg-validation" id="lg-validation-2">
      Please select a colour
    </div>
  </fieldset>
</div>
~~~
`;
