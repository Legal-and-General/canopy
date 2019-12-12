export const notes = `
# Margin Directive

## Purpose
This directive allows for custom margins to be added without the need to write additional css. It utilises global css utility classes to add the relevant classes.

## Usage

Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [LgMarginModule],
})
~~~

In your HTML apply the directive to the relevant Canopy component. The directive should provide full control of the element it is applied too.
If the default lgMargin attribute has no value the default margin will remain, you can then override individual margins by applying the relevant properties (.e.g LgMarginTop).

e.g. Apply an xxl margin to the bottom

~~~html
<lg-card lgMarginBottom="xxl">
  Your content
</lg-card>
~~~

e.g. Apply an sm margin to the left and right

~~~html
<lg-card lgMarginLeft="sm" lgMarginRight="sm">
  Your content
</lg-card>
~~~

e.g. Apply an xl margin all round, but xxxl margin to the bottom

~~~html
<lg-card lgMargin="xl" lgMarginBottom="xxxl">
  Your content
</lg-card>
~~~

## Inputs

The current available variants are 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxxl'.

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgMargin\`\` | The margin variant applied to all sides | string | null | No |
| \`\`lgMarginTop\`\` | The margin variant applied to the top | string | null | No |
| \`\`lgMarginRight\`\` | The margin variant applied to the right | string | null | No |
| \`\`lgMarginBottom\`\` | The margin variant applied to the bottom | string | null | No |
| \`\`lgMarginLeft\`\` | The margin variant applied to the left | string | null | No |


## Using only the SCSS files

The directive itself cannot be used outside angular however the css utility classes should be useful.

| Class | Description |
|------|-------------|
| \`\`lg-margin--<size>\`\` | Adds the specified size margin to all sides |
| \`\`lg-margin__top--<size>\`\` | Adds the specified size margin to the specified side |

`;
