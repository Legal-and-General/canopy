export const notes = `
# Error Component


## Purpose
The validation component is used to provide contextual information for a form input field. The most common use case is to display validation errors however it can also be used to show additional information.


## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgValidationModule ],
})
~~~

and in your HTML:

~~~html
<lg-validation>Enter a valid postcode</lg-validation>

<lg-validation variant="success">Username is available</lg-validation>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The variant of the validation: \`\`info\`\`, \`\`warning\`\`, \`\`error\`\`, \`\`success\`\` | string | 'error' | No |
| \`\`showIcon\`\` | Whether the icon should display | boolean | true | No |


## Using only the SCSS files

The \`\`lg-validation\`\` class is required to be able to apply the main style to the validation.

In addition to \`\`lg-validation\`\`, one of the following is required to apply the specific style:

| Class | Description |
|------|-------------|
| \`\`lg-validation--success\`\` | Adds the success validation style |
| \`\`lg-validation--warning\`\` | Adds the warning validation style |
| \`\`lg-validation--error\`\` | Adds the error validation style |
| \`\`lg-validation--info\`\` | Adds the info validation style |


### Examples:

~~~html
<div class="lg-validation lg-validation--error">
  <span class="lg-visually-hidden">Error: </span>
  This is a validation error
</div>
~~~
`;
