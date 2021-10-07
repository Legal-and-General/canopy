export const notes = `
# Brand Icon Component

## Purpose
Provides a way of adding common brand icons.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [LgBrandIconModule],
})
~~~

Import the \`LgBrandIconRegistry\` and register your brand icons:

~~~js
export class AppModule {
  constructor(private brandIconRegistry: LgBrandIconRegistry) {
    this.brandIconRegistry.registerBrandIcon([
      lgBrandIconSun
    ]);
  }
}
~~~

and in your HTML:

~~~html
<lg-brand-icon name="sun"></lg-brand-icon>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`name\`\` | the name of the icon | string | undefined | yes |
| \`\`size\`\` | the size of the icon | BrandIconSize | 'sm' | no |
| \`\`colour\`\` | the specific colour of the icon (for global colours see the "Branding" section below) | css variable as a string | undefined | no |

## Branding
The yellow fill colour of the brand icons can be changed by overriding the \`--brand-icon-fill-primary\` css variable.

Note that changing that variable will update the fill colour of all the icons.

To change the colour of a specific icon use the \`colour\` input (see details in the table above).
`;
