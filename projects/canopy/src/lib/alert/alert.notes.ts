export const notes = `
## Purpose
Alerts are used to communicate important information to the user.

The "alert" ARIA role is automatically added to the component if it's one of these variants: \`\`warning\`\`, \`\`error\`\`, \`\`success\`\`. Note that this role will tell the browser to send out an accessible alert event to assistive technology products which can then notify the user about it.

A decorative icon is also added next to the heading if it's one of the these variants: \`\`info\`\`, \`\`warning\`\`, \`\`error\`\`, \`\`success\`\`.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgAlertModule ],
})
~~~

and in your HTML:

~~~html
<lg-alert [variant]="warning">This is an alert</lg-alert>
~~~

### Accessibility

Add the correct ARIA role attribute depending on the type of alert. \`\`role="alert"\`\` can be quite intrusive, so only use it when required.

See the Mozilla docs on [ARIA alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role).

### Examples:

~~~html
<div class="lg-alert lg-variant--info">This is an info alert</div>

<div class="lg-alert lg-variant--error" role="alert">This is an error alert, with an Aria role</div>
~~~
`;
