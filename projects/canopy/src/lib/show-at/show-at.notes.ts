export const notes = `
# Show At Directive

## Purpose
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

And in your HTML...

~~~html
<lg-card lgShowAt="md">
  <lg-card-content>
    I get dispalayed at the "md" breakpoint
  </lg-card-content>
</lg-card>
~~~

## Inputs

The current available breakpoints are 'sm', md', 'lg', 'xl', and 'xxl'.

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgShowAt\`\` | The name of the breakpoint applied | string | null | No |
`;
