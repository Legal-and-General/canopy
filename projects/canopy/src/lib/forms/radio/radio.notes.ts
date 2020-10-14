export const notes = (name: string) => `
# ${name} Group and ${name} Button Components

## Purpose
Provides a set of components to implement ${name} buttons in a form. The ${name} Group component is a container which displays the label with an optional hint and should contain two or more ${name} Button components. The ${name} Button component represents a single ${name} button. The Hint component may be used to provide extra context to the user.

## Usage
Import the Radio Module into your application:

~~~js
@NgModule({
  ...
  imports: [LgRadioModule],
})
~~~

and in your HTML:

~~~html
<lg-${name.toLowerCase()}-group [inline]="true" formControlName="color">
  Colour
  <lg-hint>Please select a colour</lg-hint>
  <lg-${name.toLowerCase()}-button value="red">Red</lg-${name.toLowerCase()}-button>
  <lg-${name.toLowerCase()}-button value="yellow">Yellow</lg-${name.toLowerCase()}-button>
</lg-${name.toLowerCase()}-group>
~~~

## Inputs

### LgRadioGroupComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-radio-group-id-\${nextUniqueId++}' | No |
| \`\`name\`\` | Set the name value for all inputs in the group, auto-generated if not provided | string | 'lg-radio-group-\${nextUniqueId++}' | No |
| \`\`value\`\` | Set the default checked radio button, must match the value of the radio button | string | null | No |
| \`\`inline\`\` | If true, displays the radio buttons inline rather than stacked | boolean | false | No |

### LgRadioButtonComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-radio-button-\${++nextUniqueId}' | No |
| \`\`name\`\` | HTML name attribute | string | null | Yes |
| \`\`value\`\` | HTML value attribute | string | null | Yes |


## Using only the SCSS files

Generate the markup as show in the example below.

### ${name} group

| Class | Description |
|------|-------------|
| \`\`lg-radio-group\`\` | Adds styles to the wrapping element |
| \`\`lg-radio-group--inline\`\` | Displays the radio buttons inline, rather than stacked |

### Radio button
| Class | Description |
|------|-------------|
| \`\`lg-radio-button--filter\`\` | Adds filter variant styles to the radio button element |
| \`\`lg-radio-button__input\`\` | Adds styles to the radio button input element |
| \`\`lg-radio-button__label\`\` | Adds styles to the radio label element |

### Examples:
~~~html
<div class="lg-radio-group">
  <label class="lg-input__label" for="color">Color</label>
  <div class="lg-radio-button--filter">
    <input class="lg-radio-button__input" type="radio" name="color" value="red" checked="true">
    <label class="lg-radio-button__label">Red</label>
  </div>
  <div class="lg-radio-button--filter">
    <input class="lg-radio-button__input" type="radio" name="color" value="blue">
    <label class="lg-radio-button__label">Red</label>
  </div>
</div>
~~~
`;
