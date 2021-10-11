export const notes = `
# Select Component

## Purpose
Provides a common select directive and select field component. The select field component controls custom select box styling and linking the label and field.
The width of the select field is controlled by the size of the options contained with in it.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [LgFormsModule],
})
~~~

and in your HTML:

~~~html
<lg-select-field>
  Color
  <select lgSelect formControlName="color">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
  </select>
</lg-select-field>
~~~

## Inputs

### LgSelectDirective
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-select-\${nextUniqueId++}' | No |
| \`\`name\`\` | HTML Name attribute, auto generated if not provided | string | 'lg-select-\${nextUniqueId++}' | No |

### LgSelectFieldComponent

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided. This will also propagate to the input 'id' and form 'for' attribute | string | 'lg-select-\${nextUniqueId++}' | No |
| \`\`block\`\` | Property to make the select field full width (for small screens only). | boolean | false | no
`;
