export const notes = `
# Screen Reader Alert Message Directive

## Purpose
This directive allows for temporary visually hidden alert messages to be read out by screen readers. For example when something has finished loading.

## Usage

Import the module in your application:

~~~js
@NgModule({
  ...
  imports: [LgSrAlertMessageModule],
})
~~~

In your HTML apply the directive to the relevant element.

Pass in a boolean value to indicate when the message should be read out. When \`\`true\`\` the message will be read by the screen reader and will be removed after a set period (default is 8000ms).

~~~html
<p [lgSrAlertMessage]="true|false">Loading complete</p>
~~~

This directive can be used together with the \`\`LgSpinnerComponent\`\` to show a spinner while something is loading and then send a message to screen readers when it has finished loading.

~~~html
# Display a spinner while loading
<lg-spinner *ngIf="!loaded"></lg-spinner>

# Tell screen reader to read a message when loading is finished
<p [lgSrAlertMessage]="loaded">Loading complete</p>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`lgSrAlertMessage\`\` | Whether the message should be read or not | \`\`boolean\`\` | null | Yes |
| \`\`timer\`\` | The time (in ms) that needs to pass before the message become hidden to screen readers | \`\`number\`\` | 8000 | No |
`;
