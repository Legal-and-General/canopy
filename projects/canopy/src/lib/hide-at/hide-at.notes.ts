export const notes = `
# Hide At Directive

## Purpose
This directive allows for media quieries to be added to components, so they can be hidden at the desired breakpoint, without the need to write additional CSS.

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

And in your HTML...

~~~html
<lg-card lgHideAt="sm">
  <lg-card-content>
    I get hidden at "sm" breakpoint
  </lg-card-content>
</lg-card>
~~~

## Inputs

The current available breakpoints are 'sm', md', 'lg', 'xl', and 'xxl'.

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgHideAt\`\` | The name of the breakpoint applied | string | null | No |
`;
