export const notes = `
Provides a way of adding common brand icons.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgBrandIconModule ],
})
~~~

Import the \`LgBrandIconRegistry\` service and register your brand icons inside your module:

~~~js
// import the desired icon
import { lgBrandIconSun } from '@legal-and-general/canopy';

export class AppModule {
  constructor(private brandIconRegistry: LgBrandIconRegistry) {
    // register the icon using the \`brandIconRegistry\` service
    this.brandIconRegistry.registerBrandIcon([
      lgBrandIconSun
    ]);
  }
}
~~~

Your HTML:

~~~html
<!-- with default size and colour -->
<lg-brand-icon name="sun"></lg-brand-icon>

<!-- with a size set -->
<lg-brand-icon name="sun" size="sm"></lg-brand-icon>

<!-- with a colour set -->
<lg-brand-icon name="sun" colour="--color-lily-green"></lg-brand-icon>

<!-- with the half tone colour set -->
<lg-brand-icon name="sun" halfToneColour="--color-lily-green"></lg-brand-icon>

<!-- with the outlines colour set -->
<lg-brand-icon name="sun" outlinesColour="--color-lily-green"></lg-brand-icon>
~~~

## Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`name\`\` | the name of the icon | string | undefined | yes |
| \`\`size\`\` | the size of the icon | BrandIconSize | 'sm' | no |
| \`\`colour\`\` | the specific colour of the icon (for global colours see the "Branding" section below) | css variable as a string | undefined | no |
| \`\`halfToneColour\`\` | the specific half tone (dots) colour of the icon | string * | undefined | no |
| \`\`outlinesColour\`\` | the specific outlines colour of the icon | string * | undefined | no |

\\* if using a css variable only specify \`--the-variable\`

## Branding / Colours
The yellow fill colour of the brand icons can be changed globally  by overriding the \`--brand-icon-fill-primary\` css variable. Note that changing this variable will update the fill colour of all the icons.

To change the colour of a specific icon use the \`colour\` input on the component.

The half tone and outlines colours can only be applied to a specific icon using the inputs on the component.
`;
