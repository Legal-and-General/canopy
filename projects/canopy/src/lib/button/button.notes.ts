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
<button lg-button type="button" [variant]="solid-primary">Button</button>
~~~

or:

~~~html
<a lg-button href="#" [variant]="primary">Link</a>
~~~

## Button with icon with text

Icons can be content projected into the button, the button component will then handle the styling of that icon.
The \`ButtonIconPosition\` property can be used to locate the icon on the left hand side of the text, the default is to the right hand side.
Content projection is used as Canopy Icons need loading via the \`iconRegistry\` which enables tree shaking of icons.

~~~html
<button lg-button type="button" [iconPosition]="left" >
  Add item
  <lg-icon name="add" />
</button>
~~~

## Button with icon only

Buttons can be setup as icon only buttons, this is done in a similar way to a button with icon and text.
You will still need to include text content inside the button as this information is vital to screen readers.
The \`iconButton\` property is used to visually hide that text.

~~~html
<button lg-button type="button" [iconButton]="true" >
  Add item
  <lg-icon name="add" />
</button>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The variant of button: \`\`solid-primary\`\`, \`\`solid-secondary\`\`, \`\`outline-primary\`\`, \`\`outline-secondary\`\`, \`\`reverse-primary\`\`, \`\`reverse-secondary\`\`, \`\`add-on\`\`; | string | solid-primary | No |
| \`\`size\`\` | The size of the button | ButtonSize [\`\`sm\`\`, \`\`md\`\`] | \`\`md\`\` | No |
| \`\`fullWidth\`\` | If the button has to span full width or not. For 'sm' and 'md' sized screens, the button will always be full width and this input has no affect | boolean | false | No |
| \`\`disabled\`\` | Programmatically disable the button via this property | boolean | false | No |
| \`\`loading\`\` | If the button shows a loading spinner and is also disabled | boolean | false | No |
| \`\`iconPosition\`\` | The position of the icon in the button | string | right | No |
| \`\`iconButton\`\` | The button displays an icon only | boolean | false | No |

## Using only the SCSS files

The \`\`lg-btn\`\` class is required to be able to apply the main style to the button.

In addition to \`\`lg-btn\`\`, one of the following is required to apply the specific style:

| Class | Description |
|------|-------------|
| \`\`lg-btn--add-on\`\` | Adds the add-on button styles for use inside an input field |
| \`\`lg-btn--solid-primary\`\` | Adds the solid primary button style |
| \`\`lg-btn--solid-secondary\`\` | Adds the solid secondary button style |
| \`\`lg-btn--outline-primary\`\` | Adds the outline primary button style |
| \`\`lg-btn--outline-secondary\`\` | Adds the outline secondary button style |
| \`\`lg-btn--reverse-primary\`\` | Adds the reverse primary button style |
| \`\`lg-btn--reverse-secondary\`\` | Adds the reserve secondary button style |

Optional modifiers:

| Class | Description |
|------|-------------|
| \`\`lg-btn--block\`\` | Makes the button full width |
| \`\`lg-btn--loading\`\` | For use when the button has a loading spinner instead of text |
| \`\`lg-btn--icon-left\`\` | If the button contains an element with class .lg-icon it will align the element to the left  |
| \`\`lg-btn--icon-only\`\` | For use when the button should contain an icon only, the text inside .lg-btn__text is hidden  |

### Loading button

Use the \`\`lg-btn--loading\`\` modifier class, include the \`\`disabled\`\` attribute and add the spinner component as a child of the button instead of the usual button text (see example below).

### Examples:
~~~html
<button class="lg-btn lg-btn--primary">Primary button</button>

<button class="lg-btn lg-btn--primary lg-btn--block">Primary button</button>

<button class="lg-btn lg-btn--primary">
  Button with icon and text
  <div class="lg-icon">
    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="UI-Icon/Icon/Image/email" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M28,6 L28,26 L4,26 L4,6 L28,6 Z M26,9.142 L16,19.1421356 L6,9.142 L6,24 L26,24 L26,9.142 Z M24.313,8 L7.687,8 L16,16.3137085 L24.313,8 Z" id="Email" fill="#000000"></path>
        </g>
    </svg>
  </div>
</button>

<button class="lg-btn lg-btn--primary">
  <span class="lg-btn__text">
    Button with icon only
  </span>
  <div class="lg-icon">
    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="UI-Icon/Icon/Image/email" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M28,6 L28,26 L4,26 L4,6 L28,6 Z M26,9.142 L16,19.1421356 L6,9.142 L6,24 L26,24 L26,9.142 Z M24.313,8 L7.687,8 L16,16.3137085 L24.313,8 Z" id="Email" fill="#000000"></path>
        </g>
    </svg>
  </div>
</button>


<button class="lg-btn lg-btn--primary lg-btn--loading" disabled>
  <span class="lg-btn__hidden-content" aria-hidden="true">
    Primary button
  </span>

  <div class="lg-spinner" aria-busy="true" role="alert">
    <div class="lg-spinner__ring"></div>
    <span class="hidden">Loading</span>
  </div>
</button>
~~~
`;
