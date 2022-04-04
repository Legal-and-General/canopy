export const notes = (name: string) => `
This directive allows for custom ${name.toLowerCase()} to be added without the need to write additional CSS. It's useful for overriding the default ${name.toLowerCase()} on Canopy components, as well as general use within your app. Using this directive ensures that your ${name.toLowerCase()} adheres to the prededfined spacing variables and breakpoints in Canopy. The spacing variables are also available as CSS custom properties (CSS variables) which can be viewed in _**canopy/projects/canopy/src/styles/spacing.scss**_.

## Usage

Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., Lg${name}Module ],
})
~~~

In your HTML apply the directive to the relevant component. If the default \`\`lg${name}\`\` attribute has no value, the default ${name.toLowerCase()} will remain. You can also override individual ${name.toLowerCase()} such as \`\`${name.toLowerCase()}-top\`\` by applying the relevant selector/input (.e.g \`\`Lg${name}Top\`\` - see **Inputs** below).

Pass in either a **Standard Spacing Variant** or a **Responsive Spacing object** (see below).

~~~html
Standard spacing variant
<lg-card lg${name}="sm"></lg-card>

Responsive spacing object
<lg-card [lg${name}]="{ md: 'lg', lg: 'xxxl' }"></lg-card>
~~~

## Standard vs Responsive Spacing

### Standard Spacing Variant

This is set of predefined variants which will apply the same ${name.toLowerCase()} at all breakpoints, as defined by the \`\`SpacingVariant\`\` type. These are:

~~~bash
'none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxxl'
~~~

### Repsonsive Spacing Object

You can apply a responsive spacing object instead, which will apply different ${name.toLowerCase()} at the specified breakpoints, as defined by the \`\`SpacingResponsive\`\` type. Example:

~~~js
{
  md: "lg",
  lg: "xxxl"
}
~~~

Each **key** is a mobile-first breakpoint from the standard list of available breakpoints: \`\`xs\`\`, \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`.

Each **value** is a standard spacing variant.

In the example above, the ${name.toLowerCase()} at the \`\`md\`\` breakpoint will be \`\`lg\`\`, and at the \`\`lg\`\` will be \`\`xxxl\`\`.


### Standard variant examples

Apply \`\`xxl\`\` ${name.toLowerCase()} to the bottom

~~~html
<lg-card lg${name}Bottom="xxl"></lg-card>
~~~

Apply \`\`sm\`\` ${name.toLowerCase()} to the left and right

~~~html
<lg-card lg${name}Horizontal="sm"></lg-card>
~~~

Apply \`\`xl\`\` ${name.toLowerCase()} all round, but \`\`xxxl\`\` ${name.toLowerCase()} to the bottom

~~~html
<lg-card lg${name}="xl" lg${name}Bottom="xxxl"></lg-card>
~~~

Apply \`\`lg\`\` ${name.toLowerCase()} to the top and bottom

~~~html
<lg-card lg${name}Vertical="lg"></lg-card>
~~~

### Responsive examples


At the \`\`sm\`\` breakpoint apply \`\`xl\`\` ${name.toLowerCase()}, then at the \`\`md\`\` breakpoint apply \`\`xxxl\`\` ${name.toLowerCase()}, all around the component.

~~~html
<lg-card [lg${name}]="{ sm: 'lg', md: 'xxxl' }"></lg-card>
~~~

At the \`\`md\`\` breakpoint apply \`\`md\`\` ${name.toLowerCase()}, then at the \`\`lg\`\` breakpoint apply \`\`sm\`\` ${name.toLowerCase()}, at the bottom of the component.

~~~html
<lg-card [lg${name}Bottom]="{ md: 'md', lg: 'sm' }"></lg-card>
~~~

## Inputs

The current available spacing variants are \`\`none\`\`, \`\`xxxs\`\`, \`\`xxs\`\`, \`\`xs\`\`, \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`, \`\`xxxl\`\`, \`\`xxxxxl\`\`.

The current available breakpoints are \`\`xs\`\`, \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lg${name}\`\` | The ${name.toLowerCase()} variant applied to all sides | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lg${name}Top\`\` | The ${name.toLowerCase()} variant applied to the top | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lg${name}Right\`\` | The ${name.toLowerCase()} variant applied to the right | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lg${name}Bottom\`\` | The ${name.toLowerCase()} variant applied to the bottom | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lg${name}Left\`\` | The ${name.toLowerCase()} variant applied to the left | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lg${name}Horizontal\`\` | The ${name.toLowerCase()} variant applied to the left and the right | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lg${name}Vertical\`\` | The ${name.toLowerCase()} variant applied to the top and the bottom | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
`;
