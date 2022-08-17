export const notes = `
Provides responsive grid system.

The grid system is useful for responsive page layouts, we recommend that it is used sparingly, for the majority of cases you may be better off just using using flexbox.

The grid system is based on a subset of the excellent [flexboxgrid](http://flexboxgrid.com/) by [kristoferjoseph](http://github.com/kristoferjoseph).
The code is a direct port with some additional modifications to:

- Add 'lg-' prefixes to reduce risk of clash with existing libraries
- Modify spacing variables to match our own spacing system
- Force all containers to be fluid width
- Remove parts of the grid which we may not need

## Usage
Import the css into the angular.json file of your application, the grid classes should now be available for use.

~~~json
  "styles": [
    "node_modules/@legal-and-general/canopy/canopy.css"
  ],
~~~

If IE11 support is required you will need to polyfill CSS variable functionality.
This can be done via [css-vars-ponyfill](https://www.npmjs.com/package/css-vars-ponyfill) or similar.

A set of [Angular directives](/?path=/story/directives--grid) are also supplied which can be used to add grid classes to native HTML and Canopy elements.

There are also two utility directives available which allow you to show/hide components at different breakpoints:
- <a href="./?path=/docs/directives-show-at--show-at-story">LgShowAt</a>
- <a href="./?path=/docs/directives-hide-at--hide-at-story">LgHideAt</a>
`;
