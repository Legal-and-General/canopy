export const notes = `
# Sort Code Directive

## Purpose
Provides a directive to apply formatting and specific validators to the input component for entering a sort code.

## Usage
Import the Sort Code Module into your application:

~~~js
@NgModule({
  ...
  imports: [LgSortCodeModule],
})
~~~

and in your HTML:

~~~html
<lg-input-field>
  Sort Code
  <lg-hint *ngIf="hint">Must be 6 digits long</lg-hint>
  <input lgInput lgSortCode formControlName="sortCode" />
</lg-input-field>
~~~

**Note: both the \`lgInput\` and \`lgSortCode\` directives have to be present on the input element.**

## Validators
The sort code directive automatically adds the \`required\` and \`pattern\` validators by default.
The \`pattern\` validator checks that the sort code value has the following patterns: \`000000\`, \`00 00 00\` or \`00-00-00\`.

## Format of the control value
On blur of the input we auto-format the value of the control to \`00-00-00\`.

-----------------------------------------------------

# Deprecated: Sort Code Component

## Purpose
**Please use the directive above instead.**

Provides a form component that can be used to capture a sort code in three individual input fields. The result, when used in a reactive form, is a concatenation of the three values into one string e.g. '204060'. The overall field is only valid if all three input fields are populated with 2 digits.

## Usage
Import the Sort Code Module into your application:

~~~js
@NgModule({
  ...
  imports: [LgSortCodeModule],
})
~~~

and in your HTML:

~~~html
<form [formGroup]="form" (ngSubmit)="..." #validationForm="ngForm">
  <lg-sort-code formControlName="sortCode">
    Sort Code
    <lg-hint id="hintId">Must be 6 digits long</lg-hint>
    <lg-validation id="errorId" *ngIf="isControlInvalid(sortCode, validationForm)">
      Your sort code should be a 6 digit number
    </lg-validation>
  </lg-sort-code>

  <button type="submit">Submit</button>
</form>
~~~

**Note: for the validation to work properly it's very important to include the \`ngForm\` on the form tag and for the submit button to be within the form.**

## Inputs

### LgSortCodeComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`value\`\` | Existing 6 digit sort code string that will prepopulate the three input fields appropriately | string | '' | No |
| \`\`disabled\`\` | Set the three inner input fields to disabled if \`\`true\`\` | boolean | \`\`false\`\` | No |
| \`\`focus\`\` | Set the focus on the fieldset | boolean | null | No |
| \`\`labelId\`\` | HTML ID attribute for the sort code fieldset label, auto generated if not provided | string | \`\`lg-input-sort-code-label-\${nextUniqueId}\`\` | No |
| \`\`ariaDescribedBy\`\` | HTML ID for the corresponding element that describes the sort code field, if not provided it will use the ID attribute from the Hint field if present | string | null | No |

## Validation

All three input fields are required for the overall sort code field to be valid, and all three must be populated with 2 digits only.

The form will return \`requiredField\` when all of the inputs are left empty and \`invalidField\` when any of the inputs are invalid.

For the validation to work properly it's very important to include the \`ngForm\` on the form tag and for the submit button to be within the form.

`;
