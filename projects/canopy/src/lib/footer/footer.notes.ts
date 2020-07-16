export const notes = `
# Footer Component

## Purpose
Provides a generic footer for display at the bottom of the page.
The current implementation is brand agnostic but eventually the branding should be encapsulated into the component.
Certain links may eventually be hardcoded into the component but the option will be given to add custom links.
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

### LgFooterComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`logo\`\` | A url link to the logo | string | null | Yes |
| \`\`logoAlt\`\` | alt text to display alongside the logo | string | '2rem' | Yes |
| \`\`copyright\`\` | Copyright text to display in footer | string | null | No |

## Using only the SCSS files

The footer component encapsulates quite a lot of markup making it tricky to list individual styles.
The following markup will render the full footer.


### Examples:
~~~
<div class="lg-footer">
  <div class="lg-footer__links">
    <nav class="lg-footer__primary-nav">
      <ul class="lg-footer__primary-nav-list">
        <li class="lg-footer__primary-nav-item">
          <a class="lg-footer__primary-nav-link" href="https://app.somecompany.com">
            My Account
          </a>
        </li>
        <li class="lg-footer__primary-nav-item">
          <a class="lg-footer__primary-nav-link" href="https://somecompany.com/quotes">
            My quotes
          </a>
        </li>
        <li class="lg-footer__primary-nav-item">
          <a class="lg-footer__primary-nav-link" href="https://somecompany.com/support">
            Support Centre
          </a>
        </li>
        <li class="lg-footer__primary-nav-item">
          <a class="lg-footer__primary-nav-link" href="https://somecompany.com/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <nav class="lg-footer__secondary-nav">
      <ul class="lg-footer__secondary-nav-list">
        <li class="lg-footer__secondary-nav-item">
          <a class="lg-footer__secondary-nav-link" href="https://somecompany.com/accessibility">
            Accessibility
          </a>
        </li>
        <li class="lg-footer__secondary-nav-item">
          <a class="lg-footer__secondary-nav-link" href="https://somecompany.com/security">
            Security
          </a>
        </li>
        <li class="lg-footer__secondary-nav-item">
          <a class="lg-footer__secondary-nav-link" href="https://somecompany.com/legal">
            Legal and regulatory
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="lg-footer__org">
    <img class="lg-footer__logo" src="https://somecompany/logo.svg" height="40" alt="Some Company name">
    <span class="lg-footer__copyright legal">
      © Some Company plc 2018
    </span>
  </div>
</div>
~~~
`;
