export const notes = `
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

## Changing the width of the logos
The width of the logos can be changed by overriding the values of the below css variables:

~~~css
--footer-logo-width
--footer-logo-width-lg
--footer-second-logo-width
--footer-second-logo-width-lg
~~~
`;
