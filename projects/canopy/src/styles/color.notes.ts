export const notes = `
# Colours

## Purpose
Provides available brand colours and tints via CSS variables

## Usage
Import the css into the angular.json file of your application, the variables should now be available for use.

~~~json
  "styles": [
    "node_modules/@legal-and-general/canopy/canopy.css"
  ],
~~~

If IE11 support is required you will need to polyfill CSS variable functionality.
This can be done via [css-vars-ponyfill](https://www.npmjs.com/package/css-vars-ponyfill) or similar.

`;
