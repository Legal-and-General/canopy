export const notes = `
The Details component reduces page clutter and cognitive load by letting users reveal more information as and when they need it. It can also be used to communicate important imformation in a collapsed layout, similar to an Alert.

The "alert" ARIA role is automatically added to the component if it's one of these variants: \`\`warning\`\`, \`\`error\`\`, \`\`success\`\`. Note that this role will tell the browser to send out an accessible alert event to assistive technology products which can then notify the user about it.

A decorative icon is also added next to the heading if it's one of the these variants: \`\`info\`\`, \`\`warning\`\`, \`\`error\`\`, \`\`success\`\`.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgDetailsModule ],
})
~~~


## Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`isActive\`\` | Expand the details | boolean | false | no |
| \`\`headingLevel\`\` | The level of the details heading: \`\`1\`\`, \`\`2\`\`, \`\`3\`\`, \`\`4\`\`, \`\`5\`\`, \`\`6\`\` | number | n/a | Yes |
|\`\`variant\`\`| Applies colour treatment and ARIA role if applicable: \`\`generic\`\`, \`\`info\`\`, \`\`warning\`\`, \`\`error\`\`, \`\`success\`\` | string | 'generic' | No |
| \`\`showIcon\`\` | Whether the icon should display on the warning, error or success variants | boolean | true | No |
## Outputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`opened\`\` | Event emitted when the details are opened | EventEmitter<void> | n/a | No |
| \`\`closed\`\` | Event emitted when the details are closed | EventEmitter<void> | n/a | No |
`;
