export const notes = `
The Input Field component (\`\`<lg-input-field>\`\`) provides a flexible way to render a Canopy input. It contains a \`\`<label>\`\` and an \`\`<input>\`\` element. The \`\`lgInput\`\` directive should be added to the input element.

The Input Field component creates the layout, deals with linking the label and input for screen readers, and also renders the border around the actual input element - this is to allow for the addition of buttons/icons to appear inside the field (e.g. "clear" button).

You can add a hint, validation message or prefix/suffix buttons or icons (see examples below).

The width can be controlled by the HTML size attribute which should be added to \`\`<input>\`\` element itself.

## Usage
Import the input module in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgInputModule ],
})
~~~

and in your HTML:

~~~html
<lg-input-field>
  Name
  <lg-hint>Please enter your name</lg-hint>
  <input lgInput size="12" formControlName="name" />
</lg-input-field>
~~~

---


### Adding input buttons

Buttons can be added within input fields to provide functionality linked to the input.
The \`lgSuffix\` directive needs to be added to the button to place it in the correct place.
Only small size buttons should be placed in the input field.
There is an additional 'add-on' button variant for adding a button to the input field which inherits the button spacing but no background or border colours.

#### Button suffix

~~~html
<lg-input-field>
  Name
  <input lgInput formControlName="name" />
  <button lg-button lgSuffix size="sm">
    Search
  </button>
</lg-input-field>
~~~

#### Icon Button suffix with add-on class

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

#### Text prefix

~~~html
<lg-input-field>
  Name
  <input lgInput formControlName="name" />
  <span lgPrefix>£</span>
</lg-input-field>
~~~

#### Text suffix

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
| \`\`showLabel\`\` | Show or visually hide the label | boolean | true | No |
`;
