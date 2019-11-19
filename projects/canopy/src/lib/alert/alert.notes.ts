export const notes = `
# Alert Component


## Purpose
Alerts are used to communicate important information to the user.


## Usage
~~~js
@NgModule({
  ...
  declarations: [ ..., LgAlertModule ],
})
~~~

and in your HTML:

~~~html
<lg-alert [variant]="warning">This is an alert</lg-alert>
~~~


## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The variant of alert: \`\`info\`\`, \`\`warning\`\`, \`\`error\`\`, \`\`success\`\` | string | 'info' | No |


## Using only the SCSS files

The \`\`lg-alert\`\` class is required to be able to apply the main style to the alert.

In addition to \`\`lg-alert\`\`, one of the following is required to apply the specific style:

| Class | Description |
|------|-------------|
| \`\`lg-alert--success\`\` | Adds the success alert style |
| \`\`lg-alert--warning\`\` | Adds the warning alert style |
| \`\`lg-alert--error\`\` | Adds the error alert style |
| \`\`lg-alert--info\`\` | Adds the info alert style |


### Accessibility

Add the correct Aria role attribute depending on the type of alert. \`\`role="alert"\`\` can be quite intrusive, so only use it when required.

See the Mozilla docs on [ARIA alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role).

### Examples:

~~~html
<div class="lg-alert lg-alert--info">This is an info alert</div>

<div class="lg-alert lg-alert--error" role="alert">This is an error alert, with an Aria role</div>
~~~
`;
