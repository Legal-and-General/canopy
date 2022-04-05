export const notes = `
The validation component is used to provide contextual information for a form input field. The most common use case is to display validation errors however it can also be used to show additional information.


## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgValidationModule ],
})
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The variant of the validation: \`\`info\`\`, \`\`warning\`\`, \`\`error\`\`, \`\`success\`\` | string | 'error' | No |
| \`\`showIcon\`\` | Whether the icon should display | boolean | true | No |
`;
