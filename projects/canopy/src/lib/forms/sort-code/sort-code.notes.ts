export const notes = `
Provides a directive to apply formatting and specific validators to the input component for entering a sort code.

## Usage
Import the Sort Code Module into your application:

~~~js
@NgModule({
  ...
  imports: [..., LgSortCodeModule],
})
~~~

**Note: both the \`lgInput\` and \`lgSortCode\` directives have to be present on the input element.**

## Validators
The sort code directive automatically adds the \`required\` and \`pattern\` validators by default.
The \`pattern\` validator checks that the sort code value has the following patterns: \`000000\`, \`00 00 00\` or \`00-00-00\`.

## Format of the control value
On blur of the input we auto-format the value of the control to \`00-00-00\`.
`;
