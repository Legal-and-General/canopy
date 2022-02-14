export const notes = `
This utility directive allows for mobile-first media queries to be added to components, so they can be shown at the desired breakpoint, without the need to write additional CSS.

For example, you may need to show a component only when the viewport is wide enough, e.g. desktop.

It uses global CSS responsive utility classes to add the relevant classes.

It has a sibling directive: \`\`LgHideAt\`\`.

## Usage

Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [LgShowAtModule],
})
~~~
`;
