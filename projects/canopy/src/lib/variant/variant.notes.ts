export const notes = `
This directive allows you to add one of the five common colour variants to any Canopy component, such as \`\`info\`\` and \`\`success\`\`.

They are already applied to existing Canopy components which use these variants out of the box, such as <a href="./?path=/story/components-alert--standard">Alert</a>, <a href="./?path=/story/components-details--standard">Detail</a> and <a href="./?path=/story/components-form-form-validation--form-validation">Form Validation</a>, but this directive allows you to use them anywhere where required.

This can be useful where you need the particular colour treatment (like the \`\`success\`\` variant for example), but your use-case does not fit one of the existing components.

~~~js
@NgModule({
  ...
  imports: [ ..., LgVariantModule ],
})
~~~

## Inputs

The current available variants are:
* \`\`generic\`\`
* \`\`info\`\`
* \`\`success\`\`
* \`\`warning\`\`
* \`\`error\`\`

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgVariant\`\` | The name of variant desired | string | null | No |
`;
