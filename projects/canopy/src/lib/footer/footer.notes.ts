export const notes = `
Provides a generic footer to display at the bottom of the page.

## Usage
Import the component in your application:

~~~
@NgModule({
  ...
  imports: [ ..., LgFooterModule ],
})
~~~

and for the HTML structure see the code snippets below.

## Components API

### LgFooterComponent
This component uses an attribute selector which allows to use the html <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer" target="_blank">footer</a> element as the host.

### LgFooterNavComponent
This is where the navigation items are put.

When an **anchor** tag is projected the \`\`rel="noopener"\`\` attribute will be automatically added.

When a **button** tag is projected the \`\`type="button"\`\` attribute will be automatically added.

#### Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The navigation variant | \`primary\` or \`secondary\` | null | Yes |

### LgFooterNavItemComponent
This is where a navigation item should be projected.

## Changing the width of the logos
The logo height is set internally with different heights for different screen sizes, it can not currently be modified to ensure consistency.

The width of the logos can be changed by overriding the values of the below css variables:

~~~css
--footer-logo-width
--footer-logo-width-lg
--footer-second-logo-width
--footer-second-logo-width-lg
~~~
`;
