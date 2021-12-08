export const notes = `
Provides styles and behaviours for Canopy buttons. \`lg-button\` is a directive which can be applied to any \`<button>\` or \`<a>\` element.

Import the button module in your module:

~~~js
@NgModule({
  ...
  imports: [ ..., LgButtonModule ],
})
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

### Button group

Buttons can be grouped together by using the \`\`ButtonGroupComponent\`\`:

~~~html
<lg-button-group>
  <button lg-button type="button" variant="solid-primary">Button</button>
  <a lg-button href="#" variant="outline-primary">Link</a>
</lg-button-group>
~~~
`;
