export const notes = `
# Header Component

## Purpose
Provides a generic header for display at the top of the page.
The current implementation is brand agnostic but eventually the branding should be encapsulated into the component.
The component uses an attribute selector which allows you to use the html [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) element as the host.

## Usage
Import the component in your application:

~~~
@NgModule({
  ...
  imports: [LgHeaderModule],
})
~~~

and in your HTML:

~~~
<header
  lg-header
  logo="/logo.svg"
  logoHeight="3rem"
  logoAlt="Company Logo"
  logoHref="http://company.com">
</header>
~~~

## Inputs

### LgHeaderComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`logo\`\` | A url link to the logo | string | null | Yes |
| \`\`logoHeight\`\` | css string to control the height of the logo | string | '2rem' | No |
| \`\`logoAlt\`\` | alt text to display alongside the logo | string | '2rem' | Yes |
| \`\`logoHref\`\` | Url link if the logo is clickable | string | null | No |

## Using only the SCSS files

Generate the markup as show in the example below, no current modifiers.

| Class | Description |
|------|-------------|
| \`\`lg-header\`\` | Adds styles to the wrapping element |
| \`\`lg-header__logo\`\` | Adds styles to the logo |
| \`\`lg-header__link\`\` | Adds styles to the link wrapping the logo |


### Examples:
~~~
<div class="lg-header">
  <a class="lg-header__logo">
    <img class="lg-header__link" src="/logo.svg" alt="Company Logo" />
  </a>
</div>
~~~
`;
