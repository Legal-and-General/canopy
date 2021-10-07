export const notes = `
# Spinner Component

## Purpose
Loading spinners are used to notify the users that the next action is being loaded.
They are normally used on form submissions or loading cards when the data retrieval is typically slow.

## Usage
Import the component in your application:

~~~
@NgModule({
  ...
  imports: [LgSpinnerModule],
})
~~~

and in your HTML:

~~~
<lg-spinner></lg-spinner>
~~~

## Inputs

### LgSpinnerComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The spinner variant | SpinnerVariant ['dark', 'light', 'color', 'inherit'] | 'dark' | No |
| \`\`size\`\` | The size of the spinner | SpinnerSize ['sm', 'md'] | 'md' | No |
| \`\`text\`\` | The text to show under the spinner | string | undefined | No |


If the \`\`variant\`\` is set to  \`\`'inherit'\`\`, then it will inherit the font colour of it's parent element. This is used on the loading button, where the spinner inherits the font colour of the button.
`;
