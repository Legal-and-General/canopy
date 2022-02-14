export const notes = `
This directive allows for media queries to be added to components, so they can be hidden at the desired breakpoint, without the need to write additional CSS.

For example, you may need to hide a component on wider viewports, such as desktop.

It uses global CSS responsive utility classes to add the relevant classes.

It has a sibling directive: \`\`LgShowAt\`\`.

## Usage

Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [LgHideAtModule],
})
~~~
`;
