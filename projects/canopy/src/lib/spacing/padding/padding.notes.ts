export const notes = `
# Padding Directive

## Purpose
This directive allows for custom padding to be added without the need to write additional CSS. It's useful for overriding the default padding on Canopy components, as well as general use within your app. Using this directive ensures that your padding adheres to the prededfined spacing variables and breakpoints in Canopy. The spacing variables are also available as CSS custom properties (CSS variables) which can be viewed in _**canopy/projects/canopy/src/styles/spacing.scss**_.

## Usage

Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [LgPaddingModule],
})
~~~

In your HTML apply the directive to the relevant component. If the default \`\`lgPadding\`\` attribute has no value, the default padding will remain. You can also override individual padding such as \`\`padding-top\`\` by applying the relevant selector/input (.e.g \`\`LgPaddingTop\`\` - see **Inputs** below).

Pass in either a **Standard Spacing Variant** or a **Responsive Spacing object** (see below).

~~~html
Standard spacing variant
<lg-card lgPadding="sm"></lg-card>

Responsive spacing object
<lg-card [lgPadding]="{ md: 'lg', lg: 'xxxl' }"></lg-card>
~~~

## Standard vs Responsive Spacing

### Standard Spacing Variant

This is set of predfined variants which will apply the same padding at all breakpoints, as defined by the \`\`SpacingVariant\`\` type. These are:

~~~bash
'none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxxl'
~~~

### Repsonsive Spacing Object

You can apply a responsive spacing object instead, which will apply different padding at the specified breakpoints, as defined by the \`\`SpacingResponsive\`\ type. Example:

~~~js
{
  md: "lg",
  lg: "xxxl"
}
~~~

Each **key** is a mobile-first breakpoint from the standard list of available breakpoints: \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`.

Each **value** is a standard spacing variant.

In the example above, the padding at the \`\`md\`\` breakpoint will be \`\`lg\`\`, and at the \`\`lg\`\` will be \`\`xxxl\`\`.


### Standard variant examples

Apply \`\`xxl\`\` padding to the bottom

~~~html
<lg-card lgPaddingBottom="xxl"></lg-card>
~~~

Apply \`\`sm\`\` padding to the left and right

~~~html
<lg-card lgPaddingHorizontal="sm"></lg-card>
~~~

Apply \`\`xl\`\` padding all round, but \`\`xxxl\`\` padding to the bottom

~~~html
<lg-card lgPadding="xl" lgPaddingBottom="xxxl"></lg-card>
~~~

Apply \`\`lg\`\` padding to the top and bottom

~~~html
<lg-card lgPaddingVertical="lg"></lg-card>
~~~

### Responsive examples


At the \`\`sm\`\` breakpoint apply \`\`xl\`\` padding, then at the \`\`md breakpoint\`\` apply \`\`xxxl\`\` padding, all around the component.

~~~html
<lg-card [lgPadding]="{ sm: 'lg', md: 'xxxl' }"></lg-card>
~~~

At the \`\`md\`\` breakpoint apply \`\`md\`\` padding, then at the \`\`lg breakpoint\`\` apply \`\`sm\`\` padding, at the bottom of the component.

~~~html
<lg-card [lgPaddingBottom]="{ md: 'md', lg: 'sm' }"></lg-card>
~~~

## Inputs

The current available spacing variants are \`\`none\`\`, \`\`xxxs\`\`, \`\`xxs\`\`, \`\`xs\`\`, \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`, \`\`xxxl\`\`, \`\`xxxxxl\`\`.

The current available breakpoints are \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgPadding\`\` | The padding variant applied to all sides | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgPaddingTop\`\` | The padding variant applied to the top | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgPaddingRight\`\` | The padding variant applied to the right | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgPaddingBottom\`\` | The padding variant applied to the bottom | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgPaddingLeft\`\` | The padding variant applied to the left | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgPaddingHorizontal\`\` | The padding variant applied to the left and the right | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgPaddingVertical\`\` | The padding variant applied to the top and the bottom | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
`;
