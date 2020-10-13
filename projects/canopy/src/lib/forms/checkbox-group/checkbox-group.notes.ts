export const notes = `
# Checkbox Group Components

## Purpose
Provides a set of components to implement Checkbox groups in a form. The Checkbox Group component is a container which displays the label with an optional hint and should contain two or more Checkbox components. The Checkbox component represents a single checkbox. The Hint component may be used to provide extra context to the user. The Checkbox component is a variant of the Toggle component.

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
<lg-checkbox-group [inline]="true" formControlName="colors">
  Colour
  <lg-hint>Please select all colours that apply</lg-hint>
  <lg-toggle value="red">Red</lg-toggle>
  <lg-toggle value="yellow">Yellow</lg-toggle>
</lg-checkbox-group>
~~~

## Inputs

### LgCheckboxGroupComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-checkbox-group-id-\${this.nextUniqueId}' | No |
| \`\`name\`\` | Set the name value for all inputs in the group, auto-generated if not provided | string | 'lg-checkbox-group-\${this.nextUniqueId}' | No |
| \`\`value\`\` | HTML value attribute. Sets the default checked checkboxes, must match the values of the checkboxs | array of strings | null | No |
| \`\`inline\`\` | If true, displays the chekboxs inline rather than stacked | boolean | false | No |

### LgToggleComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-toggle-\${++nextUniqueId}' | No |
| \`\`name\`\` | HTML Name attribute, auto generated if not provided | string | 'lg-toggle-\${++nextUniqueId}' | No |
| \`\`value\`\` | HTML value attribute. Value that is set when the toggle is checked | string | null | No |
| \`\`checked\`\` | Check status of the toggle | boolean | false | No |
| \`\`variant\`\` | The variant of the toggle | 'checkbox' or 'switch' | 'checkbox' | No |


## Using only the SCSS files

Generate the markup as show in the example below.

### Checkbox group

| Class | Description |
|------|-------------|
| \`\`lg-checkbox-group\`\` | Adds styles to the wrapping element |
| \`\`lg-checkbox-group--inline\`\` | Displays the radio buttons inline, rather than stacked |

### Toggle button
| Class | Description |
|------|-------------|
| \`\`lg-toggle\`\` | Adds styles to the wrapping element of the toggle |
| \`\`lg-toggle__label\`\` | Adds styles to the toggle label |
| \`\`lg-toggle__label--switch\`\` | Adds styles to make the toggle look like a switch |
| \`\`lg-toggle__inout\`\` | Adds styles to the input element |

### Examples:
~~~html
<div class="lg-checkbox-group">
  <label class="lg-input__label" for="color">Color</label>
  <div class="lg-toggle">
    <input class="lg-toggle__input" type="checkbox" id="lg-toggle-0" name="checkbox" value="yes">
    <label class="lg-toggle__label" for="lg-toggle-0">Red</label>
  </div>
  <div class="lg-toggle">
    <input class="lg-toggle__input" type="checkbox" id="lg-toggle-0" name="checkbox" value="yes">
    <label class="lg-toggle__label" for="lg-toggle-0">Yellow</label>
  </div>
</div>
~~~
`;
