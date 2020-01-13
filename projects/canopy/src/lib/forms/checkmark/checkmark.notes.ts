export const notes = `
# Checkbox and Switch - Checkmark Component

## Purpose
Provides a common checkbox (default) or switch form component

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  declarations: [ ..., LgCheckmarkComponent ],
})
~~~

and in your HTML for a regular *checkbox*:

~~~html
<lg-checkmark formControlName="confirm" value="yes">Do you agree?</lg-checkmark>
~~~

or for a *switch* set the \`\`variant\`\` property to "switch":

~~~html
<lg-checkmark formControlName="confirm" value="yes" variant="switch">Do you agree?</lg-checkmark>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`checked\`\` | Check status of the checkbox | boolean | false | No |
| \`\`value\`\` | Value that is set when the checkbox is checked | string | 'on' | No |
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-checkbox-\${nextUniqueId++}' | No |
| \`\`name\`\` | HTML Name attribute, auto generated if not provided | string | 'lg-checkbox-\${nextUniqueId++}' | No |
| \`\`variant\`\` | The variant of the checkmark | 'checkbox' or 'switch' | 'checkbox | No |

## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|------|-------------|
| \`\`lg-checkmark\`\` | Adds styles to the wrapping element |
| \`\`lg-checkmark__label\`\` | Adds styles to the checkmark label |
| \`\`lg-checkmark__label--switch\`\` | Adds styles to make the checkmark look like a switch |
| \`\`lg-checkmark__input\`\` | Adds styles to the input element |

### Examples:
~~~html
<div class="lg-checkmark">
  <input class="lg-checkmark__input" type="checkbox" id="lg-checkmark-0" name="checkbox" value="yes">
  <label class="lg-checkmark__label" for="lg-checkmark-0"> I will bring my Umbrella if it is raining </label>
</div>
~~~
`;
