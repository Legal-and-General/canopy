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
~~~

## Branding / Colours
The yellow fill colour of the brand icons can be changed globally  by overriding the \`--brand-icon-fill-primary\` css variable. Note that changing this variable will update the fill colour of all the icons.

To change the colour of a specific icon use the \`colour\` input on the component.
`;
