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
| \`\`variant\`\` | The spinner variant | SpinnerVariant ['dark', 'light', 'color'] | 'dark' | No |


## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|------|-------------|
| \`\`lg-spinner\`\` | Wraps the spinner and accessible equivalent |
| \`\`lg-spinner__ring\`\` | The spinner |
| \`\`lg-spinner__ring--<variant>\`\` | Modifier class to provide one of the alternative variants |

### Examples:
~~~
<div class="lg-spinner">
  <div class="lg-spinner__ring lg-spinner__ring--color"
    role="alert"
    aria-busy="true"></div>
  <span class="hidden">Loading content</span>
</div>
~~~
`;
