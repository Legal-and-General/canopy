export const notes = `
# Button Component

## Purpose
Provide different styles of button.

## Usage
Import the component in your module:

~~~
@NgModule({
  ...
  declarations: [ ..., LgButtonModule ],
})
~~~

and in your HTML:

~~~
<lg-button [variant]="primary">Button</lg-button>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The variant of button: \`\`cta\`\`, \`\`primary\`\`, \`\`secondary\`\`, \`\`tertiary\`\`, \`\`tertiary-alt-1\`\`, \`\`tertiary-alt-2\`\`; | string | primary | No |
| \`\`behaviour\`\` | The type of button: \`\`button\`\`, \`\`reset\`\`, \`\`submit\`\` | string | button | No |
| \`\`disabled\`\` | If the button is disabled or not | boolean | false | No |
| \`\`fullWidth\`\` | If the button has to span full width or not | boolean | false | No |
| \`\`rounded\`\` | If the button has rounded corners or not | boolean | false | No |

## Outputs

| Name | Description | Required |
|------|-------------|:-----:|
| \`\`action\`\` | To handle the click action from the button | Yes |


## Using only the SCSS files

The \`\`lg-btn\`\` class is required to be able to apply the main style to the button.

In addition to \`\`lg-btn\`\`, one of the following is required to apply the specific style:

| Class | Description |
|------|-------------|
| \`\`lg-btn--cta\`\` | Adds the CTA button style |
| \`\`lg-btn--primary\`\` | Adds the primary button style |
| \`\`lg-btn--secondary\`\` | Adds the secondary button style |
| \`\`lg-btn--tertiary\`\` | Adds the tertiary button style |
| \`\`lg-btn--tertiary-alt-1\`\` | Adds the tertiary alternative 1 button style |
| \`\`lg-btn--tertiary-alt-2\`\` | Adds the tertiary alternative 2 button style |

Optional modifiers:

| Class | Description |
|------|-------------|
| \`\`lg-btn--block\`\` | Makes the button full width |
| \`\`lg-btn--rounded\`\` | Adds rounded corners to the button |

### Examples:
~~~
<button class="lg-btn lg-btn--primary">Primary button</button>

<button class="lg-btn lg-btn--primary lg-btn--rounded">Primary button</button>

<button class="lg-btn lg-btn--primary lg-btn--rounded lg-btn--block">Primary button</button>
~~~
`;
