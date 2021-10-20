export const notes = `
Alerts are used to communicate important information to the user.

The "alert" ARIA role is automatically added to the component if it's one of these variants: \`\`warning\`\`, \`\`error\`\`, \`\`success\`\`. Note that this role will tell the browser to send out an accessible alert event to assistive technology products which can then notify the user about it.

A decorative icon is also added next to the heading if it's one of the these variants: \`\`info\`\`, \`\`warning\`\`, \`\`error\`\`, \`\`success\`\`.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgAlertModule ],
})
~~~

## Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | Applies colour treatment and ARIA role if applicable: \`\`generic\`\`, \`\`info\`\`, \`\`warning\`\`, \`\`error\`\`, \`\`success\`\` | string | \`\`generic\`\` | No |
| \`\`showIcon\`\` | Whether the icon should display on the warning, error or success variants | boolean | true | No |
`;
