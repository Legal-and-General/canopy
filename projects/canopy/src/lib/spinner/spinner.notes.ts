export const notes = `
Loading spinners are used to notify the users that the next action is being loaded.
They are normally used on form submissions or loading cards when the data retrieval is typically slow.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgSpinnerModule ],
})
~~~

The spinner component should always be used together with the \`\`LgSrAlertMessageDirective\`\` as screen reader users should
be notified when something has finished loading.

## Inputs

### LgSpinnerComponent

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The spinner variant | SpinnerVariant ['dark', 'light', 'color', 'inherit'] | 'dark' | No |
| \`\`size\`\` | The size of the spinner | SpinnerSize ['sm', 'md'] | 'md' | No |
| \`\`text\`\` | The text to show under the spinner | string | undefined | No |

If the \`\`variant\`\` is set to  \`\`'inherit'\`\`, then it will inherit the font colour of it's parent element. This is used on the loading button, where the spinner inherits the font colour of the button.
`;
