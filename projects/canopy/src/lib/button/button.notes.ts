export const notes = `
Provides styles and behaviours for Canopy buttons. \`lg-button\` is a directive which can be applied to any \`<button>\` or \`<a>\` element.

Import the button module in your module:

~~~js
@NgModule({
  ...
  imports: [ ..., LgButtonModule ],
})
~~~

and in your HTML:

~~~html

<button lg-button type="button" variant="primary-dark">Button</button>

~~~

or:

~~~html

<a lg-button href="#" variant="primary-dark">Link</a>

~~~

### Icons in buttons

An **Icon Component** can be projected into the button. Use the \`iconPosition\` input to position the icon on the left or right (default) of the text.

~~~html
<button lg-button type="button" iconPosition="left" >
  Add item
  <lg-icon name="add" />
</button>
~~~

You can create an **icon only** button by setting \`iconButton\` to \`true\`. You must still include text content, which will be visually hidden, but detectable by screen readers.

~~~html
<button lg-button type="button" iconButton="true" >
  Add item
  <lg-icon name="add" />
</button>
~~~

## Button inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The variant of button: \`\`primary-dark\`\`, \`\`primary-light\`\`,\`\`secondary-dark\`\`, \`\`secondary-light\`\`, \`\`add-on\`\`. | string | primary-dark | No |
| \`\`size\`\` | The size of the button | ButtonSize [\`\`sm\`\`, \`\`md\`\`] | \`\`md\`\` | No |
| \`\`fullWidth\`\` | If the button has to span full width or not. For 'sm' and 'md' sized screens, the button will always be full width and this input has no affect | boolean | false | No |
| \`\`disabled\`\` | Programmatically disable the button via this property | boolean | false | No |
| \`\`loading\`\` | If the button shows a loading spinner and is also disabled | boolean | false | No |
| \`\`iconPosition\`\` | The position of the icon in the button | string | right | No |
| \`\`iconButton\`\` | The button displays an icon only | boolean | false | No |

### Button group

Buttons can be grouped together by using the \`\`ButtonGroupComponent\`\`:

~~~html
<lg-button-group>
  <button lg-button type="button" variant="primary-dark">Button</button>
  <a lg-button href="#" variant="secondary-dark">Link</a>
</lg-button-group>
~~~
`;
