export const notes = `
Loading spinners are used to notify the users that the next action is being loaded.
They are normally used on form submissions or loading cards when the data retrieval is typically slow.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [LgSpinnerModule],
})
~~~

The spinner component should always be used together with the \`\`LgSrAlertMessageDirective\`\` as screen reader users should
be notified when something has finished loading.
`;
