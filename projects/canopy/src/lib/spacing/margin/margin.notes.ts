export const notes = `
# Margin Directive

## Purpose
This directive allows for custom margin to be added without the need to write additional CSS. It's useful for overriding the default margin on Canopy components, as well as general use within your app. Using this directive ensures that your margin adheres to the prededfined spacing variables and breakpoints in Canopy. The spacing variables are also available as CSS custom properties (CSS variables) which can be viewed in _**canopy/projects/canopy/src/styles/spacing.scss**_.

## Usage

Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [LgMarginModule],
})
~~~

In your HTML apply the directive to the relevant component. If the default \`\`lgMargin\`\` attribute has no value, the default margin will remain. You can also override individual margin such as \`\`margin-top\`\` by applying the relevant selector/input (.e.g \`\`LgMarginTop\`\` - see **Inputs** below).

Pass in either a **Standard Spacing Variant** or a **Responsive Spacing object** (see below).

~~~html
Standard spacing variant
<lg-card lgMargin="sm"></lg-card>

Responsive spacing object
<lg-card [lgMargin]="{ md: 'lg', lg: 'xxxl' }"></lg-card>
~~~

## Standard vs Responsive Spacing

### Standard Spacing Variant

This is set of predfined variants which will apply the same margin at all breakpoints, as defined by the \`\`SpacingVariant\`\` type. These are:

~~~bash
'none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxxl'
~~~

### Repsonsive Spacing Object

You can apply a responsive spacing object instead, which will apply different margin at the specified breakpoints, as defined by the \`\`SpacingResponsive\`\ type. Example:

~~~js
{
  md: "lg",
  lg: "xxxl"
}
~~~

Each **key** is a mobile-first breakpoint from the standard list of available breakpoints: \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`.

Each **value** is a standard spacing variant.

In the example above, the margin at the \`\`md\`\` breakpoint will be \`\`lg\`\`, and at the \`\`lg\`\` will be \`\`xxxl\`\`.


### Standard variant examples

Apply \`\`xxl\`\` margin to the bottom

~~~html
<lg-card lgMarginBottom="xxl"></lg-card>
~~~

Apply \`\`sm\`\` margin to the left and right

~~~html
<lg-card lgMarginHorizontal="sm"></lg-card>
~~~

Apply \`\`xl\`\` margin all round, but \`\`xxxl\`\` margin to the bottom

~~~html
<lg-card lgMargin="xl" lgMarginBottom="xxxl"></lg-card>
~~~

Apply \`\`lg\`\` margin to the top and bottom

~~~html
<lg-card lgMarginVertical="lg"></lg-card>
~~~

### Responsive examples


At the \`\`sm\`\` breakpoint apply \`\`xl\`\` margin, then at the \`\`md breakpoint\`\` apply \`\`xxxl\`\` margin, all around the component.

~~~html
<lg-card [lgMargin]="{ sm: 'lg', md: 'xxxl' }"></lg-card>
~~~

At the \`\`md\`\` breakpoint apply \`\`md\`\` margin, then at the \`\`lg breakpoint\`\` apply \`\`sm\`\` margin, at the bottom of the component.

~~~html
<lg-card [lgMarginBottom]="{ md: 'md', lg: 'sm' }"></lg-card>
~~~

## Inputs

The current available spacing variants are \`\`none\`\`, \`\`xxxs\`\`, \`\`xxs\`\`, \`\`xs\`\`, \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`, \`\`xxxl\`\`, \`\`xxxxxl\`\`.

The current available breakpoints are \`\`sm\`\`, \`\`md\`\`, \`\`lg\`\`, \`\`xl\`\`, \`\`xxl\`\`

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgMargin\`\` | The margin variant applied to all sides | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgMarginTop\`\` | The margin variant applied to the top | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgMarginRight\`\` | The margin variant applied to the right | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgMarginBottom\`\` | The margin variant applied to the bottom | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgMarginLeft\`\` | The margin variant applied to the left | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgMarginHorizontal\`\` | The margin variant applied to the left and the right | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
| \`\`lgMarginVertical\`\` | The margin variant applied to the top and the bottom | \`\`SpacingVariant | SpacingResponsive\`\` | null | No |
`;
