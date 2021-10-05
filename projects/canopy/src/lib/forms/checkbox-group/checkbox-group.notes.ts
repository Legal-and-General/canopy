export const notes = (name: string, modifier?) => `
# ${name} Group Components

## Purpose
Provides a set of components to implement ${name} groups in a form. The ${name} Group component is a container which displays the label with an optional hint and should contain two or more Toggle components. The Toggle component represents a single ${name.toLowerCase()}. The Hint component may be used to provide extra context to the user.

## Usage
Import the CheckboxGroup Module into your application:

~~~js
@NgModule({
  ...
  imports: [LgCheckboxGroupModule],
})
~~~

and in your HTML:

~~~html
<lg-${
  modifier ? modifier : name.toLowerCase()
}-group [inline]="true" formControlName="colors">
  Colour
  <lg-hint>Please select all colours that apply</lg-hint>
  <lg-toggle value="red">Red</lg-toggle>
  <lg-toggle value="yellow">Yellow</lg-toggle>
</lg-${modifier ? modifier : name.toLowerCase()}-group>
~~~

or

~~~html
<lg-${
  modifier ? modifier : name.toLowerCase()
}-group [inline]="true" formControlName="colors">
  Colour
  <lg-hint>Please select all colours that apply</lg-hint>
  <lg${modifier ? '-filter' : ''}-checkbox value="red">Red</lg${
  modifier ? '-filter' : ''
}-checkbox>
  <lg${modifier ? '-filter' : ''}-checkbox value="yellow">Yellow</lg${
  modifier ? '-filter' : ''
}-checkbox>
</lg-${modifier ? modifier : name.toLowerCase()}-group>
~~~

## Inputs

### LgCheckboxGroupComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-checkbox-group-id-\${this.nextUniqueId}' | No |
| \`\`name\`\` | Set the name value for all inputs in the group, auto-generated if not provided | string | 'lg-checkbox-group-\${this.nextUniqueId}' | No |
| \`\`value\`\` | HTML value attribute. Sets the default checked ${name.toLowerCase()} buttons, must match the values of the ${name.toLowerCase()} buttons | array of strings | null | No |
| \`\`focus\`\` | Set the focus on the fieldset | boolean | null | No |
| \`\`inline\`\` | If true, displays the ${
  name.toLowerCase
}s inline rather than stacked | boolean | false | No |

### LgToggleComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-toggle-\${++nextUniqueId}' | No |
| \`\`name\`\` | HTML Name attribute, auto generated if not provided | string | 'lg-toggle-\${++nextUniqueId}' | No |
| \`\`value\`\` | HTML value attribute. Value that is set when the toggle is checked | string | null | No |
| \`\`checked\`\` | Check status of the toggle | boolean | false | No |
| \`\`focus\`\` | Set the focus on the input | boolean | null | No |
`;
