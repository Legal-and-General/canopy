export const notes = `
# Select Component

## Purpose
Provides a common select directive and select field component. The select field component controls custom select box styling and linking the label and field.

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

## Using only the SCSS files

Generate the markup as show in the example below, no current modifiers.

| Class | Description |
|------|-------------|
| \`\`lg-select\`\` | Adds styles to the wrapping element |
| \`\`lg-select__label\`\` | Adds styles to the select label |
| \`\`lg-select__wrapper\`\` | Wraps the select element to provide custom styling |
| \`\`lg-select__field\`\` | Adds styles to the select element |
| \`\`lg-select__icon\`\` | Styles the chevron icon which activates the select |


### Examples:
~~~html
<div class="lg-select">
  <label class="lg-select__label" for="color">Color</label>

  <div class="lg-select__wrapper">
    <select class="lg-select__field" name="color" id="color">
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="yellow">Yellow</option>
    </select>
    <span class="lg-select__icon"></span>
  </div>
</div>
~~~
`;
