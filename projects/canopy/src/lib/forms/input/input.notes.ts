export const notes = `
# Input Component

## Purpose
Provides a common input directive and input field component. The input field component deals with linking the label and field.

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
<lg-input-field>
  Name
  <input lgInput formControlName="name" />
</lg-input-field>
~~~

## Inputs

### LgInputDirective
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-input-\${nextUniqueId++}' | No |
| \`\`name\`\` | HTML Name attribute, auto generated if not provided | string | 'lg-input-\${nextUniqueId++}' | No |

### LgInputFieldComponent

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided. This will also propagate to the input 'id' and form 'for' attribute | string | 'lg-input-\${nextUniqueId++}' | No |

## Using only the SCSS files

Generate the markup as show in the example below, no current modifiers.

| Class | Description |
|------|-------------|
| \`\`lg-input\`\` | Adds styles to the wrapping element |
| \`\`lg-input__field\`\` | Adds styles to the input element |
| \`\`lg-input__label\`\` | Adds styles to the input label |

### Examples:
~~~html
<div class="lg-input">
  <label class="lg-input__label" for="name">Name</label>
  <input class="lg-input__field" name="name" id="name">
</div>
~~~
`;
