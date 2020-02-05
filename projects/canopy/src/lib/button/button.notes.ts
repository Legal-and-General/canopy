export const notes = `
# Button Component

## Purpose
Provides common styles and behaviours for buttons and links.

## Usage
Import the component in your module:

~~~
@NgModule({
  ...
  declarations: [ ..., LgButtonModule ],
})
~~~

and in your HTML:

~~~
<button lg-button type="button" [variant]="primary">Button</button>
~~~

or:

~~~
<a lg-button href="#" [variant]="primary">Link</a>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The variant of button: \`\`solid-primary\`\`, \`\`solid-secondary\`\`, \`\`outline-primary\`\`, \`\`outline-secondary\`\`, \`\`reverse-primary\`\`, \`\`reverse-secondary\`\`; | string | primary | No |
| \`\`fullWidth\`\` | If the button has to span full width or not | boolean | false | No |
| \`\`loading\`\` | If the button shows a loading spinner and is also disabled | boolean | false | No |

## Using only the SCSS files

The \`\`lg-btn\`\` class is required to be able to apply the main style to the button.

In addition to \`\`lg-btn\`\`, one of the following is required to apply the specific style:

| Class | Description |
|------|-------------|
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

### Loading button

Use the \`\`lg-btn--loading\`\` modifier class, include the \`\`disabled\`\` attribute and add the spinner component as a child of the button instead of the usual button text (see example below).

### Examples:
~~~html
<button class="lg-btn lg-btn--primary">Primary button</button>

<button class="lg-btn lg-btn--primary lg-btn--block">Primary button</button>

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
