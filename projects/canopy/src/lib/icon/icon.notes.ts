export const notes = `
# Icon Component

## Purpose
Provides a way of adding common svg icons.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [LgIconModule],
})
~~~

Import the \`LgIconRegistry\` and register your icons:

~~~js
export class AppModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([
      lgIconEmail
    ]);
  }
}
~~~

and in your HTML:

~~~html
<lg-icon name="email"></lg-icon>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`name\`\` | the name of the icon | string | undefined | yes |

All icons have height and width equal to 1em. This means the icons will be as big as the font-size specified by the parent.

*By default the icons have the \`\`fill\`\` css property set to \`\`currentColor\`\`.*

> \`\`currentColor\`\` acts like a variable for the current value of the \`\`color\`\` property on the element. And the Cascading part of CSS is still effective, so if there’s no defined \`\`color\`\` property on an element, the cascade will determine the value of \`\`currentColor\`\`.
>
> *Understanding the currentColor Keyword in CSS - https://alligator.io/css/currentcolor/*

## Using only the SCSS files

Generate the markup as show in the example below, no current modifiers.

| Class | Description |
|------|-------------|
| \`\`lg-icon\`\` | Adds the default styles to the icon |

Make sure you remove the styles on the svg itself.

### Examples:
~~~html
<div class="lg-icon">
  <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="UI-Icon/Icon/Image/email" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M28,6 L28,26 L4,26 L4,6 L28,6 Z M26,9.142 L16,19.1421356 L6,9.142 L6,24 L26,24 L26,9.142 Z M24.313,8 L7.687,8 L16,16.3137085 L24.313,8 Z" id="Email" fill="#000000"></path>
      </g>
  </svg>
</div>
~~~
`;
