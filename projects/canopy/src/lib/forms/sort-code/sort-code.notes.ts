export const notes = `
# Sort Code Component

## Purpose
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
<lg-sort-code formControlName="sortCode">
  Sort Code
  <lg-hint id="hintId">Must be 6 digits long</lg-hint>
  <lg-validation id="errorId" *ngIf="isControlInvalid(sortCode, validationForm)">
    Your sort code should be a 6 digit number
  </lg-validation>
</lg-sort-code>
~~~

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

`;
