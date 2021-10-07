export const notes = (name: string) => `
# ${name} Component

## Purpose
Provides a ${name} component for boolean form controls. The ${name} component is a variant of the Toggle component.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgToggleModule ],
})
~~~

and in your HTML for a regular *checkbox*:

~~~html
<lg-toggle formControlName="confirm" value="yes" variant="${name.toLowerCase()}">Do you agree?</lg-toggle>
~~~

or

~~~html
<lg-${name.toLowerCase()} formControlName="confirm" value="yes">Do you agree?</lg-${name.toLowerCase()}>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`checked\`\` | Check status of the toggle | boolean | false | No |
| \`\`value\`\` | Value that is set when the toggle is checked | boolean or string | 'on' | No |
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-toggle-\${nextUniqueId++}' | No |
| \`\`name\`\` | HTML Name attribute, auto generated if not provided | string | 'lg-toggle-\${nextUniqueId++}' | No |
| \`\`variant\`\` | The variant of the toggle | 'checkbox', 'switch' or 'filter' | 'checkbox | No |
| \`\`focus\`\` | Set the focus on the input field | boolean | null | No |
`;
