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

#### Single icon
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

#### Double icon
A button can also have two **Icon Components** in it. In this case the \`iconPosition\` is **not required**. The icons will be positioned automatically on each side of the text.

An important requirement is the need to add \`first\` and \`second\` attributes to the icons as per the example below:

~~~html
<button lg-button type="button">
  <lg-icon name="filter" first />
  Filter
  <lg-icon name="chevron-down" second />
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
| \`\`iconPosition\`\` | The position of a single icon in the button | string | right | No |
| \`\`iconButton\`\` | The button displays an icon only | boolean | false | No |

### Button toggle directive

A button can be used specifically as a toggle. In this case the applied styles are slightly different than a regular button and you **must** use a \`button\` tag.

*This feature should only be used as part of a pattern.*

~~~html

<button lg-button lgButtonToggle type="button" variant="primary-dark">Button</button>

~~~

then in the wrapper component set the \`id\` and \`ariaControls\` of the toggle and use the \`toggleActive\` output of the directive to set the panel state:

~~~javascript
@ContentChild(forwardRef(() => LgButtonToggleDirective)) buttonToggle: LgButtonToggleDirective;

...

  ngAfterContentInit(): void {
    this.buttonToggle.id = '<the-unique-id-of-the-toggle>';

    this.buttonToggle.ariaControls = '<the-unique-id-of-the-panel-to-toggle>';

    this.subscription = this.buttonToggle.toggleActive.subscribe(isActive => {
      // set the active state of the panel e.g.:
      // this.myPanelComponent.isActive = isActive;
    });
  }
~~~

<a href="./?path=/docs/components-filter-container--standard-filter-container">See the Filter Container to view it in action</a>.

### Button group

Buttons can be grouped together by using the \`\`ButtonGroupComponent\`\`:

~~~html
<lg-button-group>
  <button lg-button type="button" variant="primary-dark">Button</button>
  <a lg-button href="#" variant="secondary-dark">Link</a>
</lg-button-group>
~~~
`;
