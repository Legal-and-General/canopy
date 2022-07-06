export const notes = `
Provides a generic header for display at the top of the page.
The current implementation is brand agnostic but eventually the branding should be encapsulated into the component.
The component uses an attribute selector which allows you to use the html <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header" target="_blank">header</a> element as the host.

The logo height is set internally with different heights for different screen sizes, it can not currently be modified to ensure consistency.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgHeaderModule ],
})
~~~

and for the HTML structure see the code snippets below.

## Inputs
### LgHeaderLogoComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`src\`\` | A url src for the logo | string | undefined | Yes |
| \`\`alt\`\` | alt text to display alongside the logo | string | '' | Yes |
| \`\`href\`\` | Url link if the logo is clickable | string | undefined | No |

## Changing the width of the logos
The width of the logos can be changed by overriding the values of the below css variables:

~~~css
--header-logo-width
--header-logo-width-lg
--header-second-logo-width
--header-second-logo-width-lg
~~~
`;
