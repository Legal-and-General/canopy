export const notes = `
# Padding Directive

## Purpose
This directive allows for custom padding to be added without the need to write additional css. It utilises global css utility classes to add the relevant classes.

## Usage

Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [LgPaddingModule],
})
~~~

In your HTML apply the directive to the relevant Canopy component. The directive should provide full control of the element it is applied too.
If the default lgPadding attribute has no value the default padding will remain, you can then override individual padding by applying the relevant properties (.e.g LgPaddingTop).

e.g. Apply an xxl padding to the bottom

~~~html
<lg-card lgPaddingBottom="xxl">
  Your content
</lg-card>
~~~

e.g. Apply an sm padding to the left and right

~~~html
<lg-card lgPaddingLeft="sm" lgPaddingRight="sm">
  Your content
</lg-card>
~~~

e.g. Apply an xl padding all round, but xxxl padding to the bottom

~~~html
<lg-card lgPadding="xl" lgPaddingBottom="xxxl">
  Your content
</lg-card>
~~~

## Inputs

The current available variants are 'none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxxl'.

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgPadding\`\` | The padding variant applied to all sides | string | null | No |
| \`\`lgPaddingTop\`\` | The padding variant applied to the top | string | null | No |
| \`\`lgPaddingRight\`\` | The padding variant applied to the right | string | null | No |
| \`\`lgPaddingBottom\`\` | The padding variant applied to the bottom | string | null | No |
| \`\`lgPaddingLeft\`\` | The padding variant applied to the left | string | null | No |


## Using only the SCSS files

The directive itself cannot be used outside angular however the css utility classes should be useful.

| Class | Description |
|------|-------------|
| \`\`lg-padding--<size>\`\` | Adds the specified size padding to all sides |
| \`\`lg-padding__top--<size>\`\` | Adds the specified size padding to the specified side |

`;
