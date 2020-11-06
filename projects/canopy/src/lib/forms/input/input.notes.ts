export const notes = `
# Input Component

## Purpose
Provides a common input directive and input field component. The input field component deals with linking the label and field.
The width of the input field is controlled by the HTML size attribute, this allows us to provide the user with an indication of the expected length of the value.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [LgInputModule],
})
~~~

and in your HTML:

~~~html
<lg-input-field>
  Name
  <input lgInput formControlName="name" />
</lg-input-field>
~~~

### Adding input buttons

Buttons can be added within input fields to provide functionality linked to the input.
The \`lgSuffix\` directive needs to be added to the button to place it in the correct place.
Only small size buttons should be placed in the input field. 
There is an additional 'add-on' button variant for adding a button to the input field which inherits the button spacing but no background or border colours.

Button suffix
~~~html
<lg-input-field>
  Name
  <input lgInput formControlName="name" />
  <button lg-button lgSuffix size="sm">
    Search
  </button>
</lg-input-field>
~~~

Icon Button suffix with add-on class
~~~html
<lg-input-field>
  Name
  <input lgInput formControlName="name" />
  <button lg-button lgSuffix size="sm" [iconButton]="true" variant="add-on">
    <lg-icon name="search" />
  </button>
</lg-input-field>
~~~

### Adding prefixes and suffixes

Prefix and suffix text can be added to input fields using the \`lgSuffix\` and \`lgPrefix\` directive.

Text prefix
~~~html
<lg-input-field>
  Name
  <input lgInput formControlName="name" />
  <span lgPrefix>£</span>
</lg-input-field>
~~~

Text suffix
~~~html
<lg-input-field>
  Name
  <input lgInput formControlName="name" />
  <span lgSuffix>%</span>
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
| \`\`block\`\` | Property to make the input full width (for small screens only). | boolean | false | no

## Using only the SCSS files

Generate the markup as show in the example below, no current modifiers.

| Class | Description |
|------|-------------|
| \`\`lg-input\`\` | Adds styles to the wrapping element |
| \`\`lg-input__field\`\` | Adds styles to the input element |
| \`\`lg-input__field--block\`\` | Makes input field full width for mobile |
| \`\`lg-input__label\`\` | Adds styles to the input label |

### Examples:
~~~html
<div class="lg-input">
  <label class="lg-input__label" for="name">Name</label>
  <input class="lg-input__field" name="name" id="name">
</div>
~~~
`;
