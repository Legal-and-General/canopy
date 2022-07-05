export const notes = `
Provides a way of adding common svg icons.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgIconModule ],
})
~~~

Import the \`LgIconRegistry\` service and register your icons inside your module:

~~~js
// import the desired icon
import { lgIconEmail } from '@legal-and-general/canopy';

export class AppModule {
  // register the icon using the \`LgIconRegistry\` service
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([
      lgIconEmail
    ]);
  }
}
~~~

Your HTML:

~~~html
<lg-icon
  name="email">
</lg-icon>
~~~

## Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`name\`\` | the name of the icon | string | undefined | yes |

All icons have height and width equal to 1em. This means the icons will be as big as the font-size specified by the parent.

*By default the icons have the \`\`fill\`\` css property set to \`\`currentColor\`\`.*

> \`\`currentColor\`\` acts like a variable for the current value of the \`\`color\`\` property on the element. And the Cascading part of CSS is still effective, so if there’s no defined \`\`color\`\` property on an element, the cascade will determine the value of \`\`currentColor\`\`.
>
> *Understanding the currentColor Keyword in CSS - https://www.digitalocean.com/community/tutorials/css-currentcolor*

*Please note that the 'need-help' and 'question-mark' icons currently don't have the ability to change colour.*
`;
