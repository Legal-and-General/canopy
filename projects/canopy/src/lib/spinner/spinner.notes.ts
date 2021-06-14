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

## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|------|-------------|
| \`\`lg-spinner\`\` | Wraps the spinner and accessible equivalent |
| \`\`lg-spinner__ring\`\` | The spinner |
| \`\`lg-spinner__ring--<variant>\`\` | Modifier class to provide one of the alternative variants |
| \`\`lg-spinner__content\`\` | Wraps the visible content |

### Examples:
~~~html
<div class="lg-spinner">
  <div class="lg-spinner__ring lg-spinner__ring--color"
    role="alert"
    aria-busy="true"></div>
  <p class="lg-hidden">Loading...</p>
</div>
~~~

or with visible content:

~~~html
<div class="lg-spinner">
  <div class="lg-spinner__ring lg-spinner__ring--color"
    role="alert"
    aria-busy="true"></div>
  <p class="lg-spinner__content">We are loading your information</p>
</div>
~~~
`;
