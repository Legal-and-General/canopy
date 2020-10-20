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


## Using only the SCSS files

Generate the markup as show in the example below.

###${name} group

| Class | Description |
|------|-------------|
| \`\`lg-checkbox-group--${name.toLowerCase()}\`\` | Adds styles to the wrapping element |
| \`\`lg-checkbox-group--inline\`\` | Displays the ${name} buttons inline, rather than stacked. Set by default to true for 'lg-filter-multiple-group' |
| \`\`lg-checkbox-group--filter--no-icons\`\` | Displays the toggle buttons without icons|

### Toggle button
| Class | Description |
|------|-------------|
| \`\`lg-toggle\`\` | Adds styles to the wrapping element of the toggle |
| \`\`lg-toggle__label\`\` | Adds styles to the toggle label |
| \`\`lg-toggle__label--filter\`\` | Adds styles to make the toggle look like a filter button |
| \`\`lg-toggle__input\`\` | Adds styles to the input element |

### Examples:
~~~html
<div class="lg-${modifier ? modifier : name.toLowerCase()}-group">
  <label class="lg-input__label" for="color">Color</label>
  <div class="lg-toggle">
    <input class="lg-toggle__input" type="checkbox" id="lg-toggle-0" name="checkbox" value="yes">
    <label class="lg-toggle__label" for="lg-toggle-0">Red</label>
  </div>
  <div class="lg-toggle">
    <input class="lg-toggle__input" type="checkbox" id="lg-toggle-1" name="checkbox" value="yes">
    <label class="lg-toggle__label" for="lg-toggle-1">Yellow</label>
  </div>
</div>
~~~
`;
