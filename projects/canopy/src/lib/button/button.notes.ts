export const notes = `
# Button Component

## Purpose
Provides common styles and behaviours for buttons and links.

## Usage
Import the component in your module:

~~~js
@NgModule({
  ...
  imports: [ ..., LgButtonModule ],
})
~~~

and in your HTML:

~~~html
<button lg-button type="button" variant="solid-primary">Button</button>
~~~

or:

~~~html
<a lg-button href="#" variant="primary">Link</a>
~~~

## Button with icon with text

Icons can be content projected into the button, the button component will then handle the styling of that icon.
The \`ButtonIconPosition\` property can be used to locate the icon on the left hand side of the text, the default is to the right hand side.
Content projection is used as Canopy Icons need loading via the \`iconRegistry\` which enables tree shaking of icons.

~~~html
<button lg-button type="button" iconPosition="left" >
  Add item
  <lg-icon name="add" />
</button>
~~~

## Button with icon only

Buttons can be setup as icon only buttons, this is done in a similar way to a button with icon and text.
You will still need to include text content inside the button as this information is vital to screen readers.
The \`iconButton\` property is used to visually hide that text.

~~~html
<button lg-button type="button" iconButton="true" >
  Add item
  <lg-icon name="add" />
</button>
~~~

## ButtonComponent inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The variant of button: \`\`solid-primary\`\`, \`\`outline-primary\`\`, \`\`outline-secondary\`\`, \`\`reverse-primary\`\`, \`\`reverse-secondary\`\`, \`\`add-on\`\`; | string | solid-primary | No |
| \`\`size\`\` | The size of the button | ButtonSize [\`\`sm\`\`, \`\`md\`\`] | \`\`md\`\` | No |
| \`\`fullWidth\`\` | If the button has to span full width or not. For 'sm' and 'md' sized screens, the button will always be full width and this input has no affect | boolean | false | No |
| \`\`disabled\`\` | Programmatically disable the button via this property | boolean | false | No |
| \`\`loading\`\` | If the button shows a loading spinner and is also disabled | boolean | false | No |
| \`\`iconPosition\`\` | The position of the icon in the button | string | right | No |
| \`\`iconButton\`\` | The button displays an icon only | boolean | false | No |

## Button group

Buttons can be grouped together by using the \`\`ButtonGroupComponent\`\`:

~~~html
<lg-button-group>
  <button lg-button type="button" variant="solid-primary">Button</button>
  <a lg-button href="#" variant="outline-primary">Link</a>
</lg-button-group>
~~~
`;
