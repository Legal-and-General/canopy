export const notes = `
# Footer Component

## Purpose
Provides a generic footer for display at the bottom of the page.
The component uses an attribute selector which allows you to use the html [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) element as the host.

The logo height is set internally with different heights for different screen sizes, it can not currently be modified to ensure consistency.

## Usage
Import the component in your application:

~~~
@NgModule({
  ...
  imports: [LgFooterModule],
})
~~~

and in your HTML:

~~~
<footer
  lg-footer
  logo="/logo.svg"
  logoAlt="Company Logo"
  copyright="© Some Company plc 2018">
</footer>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`logo\`\` | A url link to the logo | string | null | Yes |
| \`\`logoAlt\`\` | alt text to display alongside the logo | string | '' | Yes |
| \`\`secondaryLogo\`\` | A url link to the secondary logo | string | null | No |
| \`\`secondaryLogoAlt\`\` | alt text to display alongside the secondary logo | string | '' | No |
| \`\`copyright\`\` | Copyright text to display in footer | string | undefined | No |
| \`\`primaryLinks\`\` | The primary footer links | \`[{ text: string, href: string, id?: string, target?: string }]\` | null | No |
| \`\`secondaryLinks\`\` | The secondary footer links | \`[{ text: string, href: string, id?: string, class?: string, target?: string, type?: 'button' }]\` | null | No |

## Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`primaryLinkClicked\`\` | Event emitted when a primary link is clicked | EventEmitter<Event> | n/a | No |
| \`\`secondaryLinkClicked\`\` | Event emitted when a secondary link is clicked | EventEmitter<Event> | n/a | No |

## Changing the width of the logos
The width of the logos can be changed by overriding the values of the below css variables:

~~~css
--footer-logo-width
--footer-logo-width-lg
--footer-second-logo-width
--footer-second-logo-width-lg
~~~
`;
