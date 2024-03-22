export const notes = (name: string) => `
Provides a ${name} component for boolean form controls. The ${name} component is a variant of the Toggle component.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgToggleComponent ],
})
~~~

and in your HTML for a regular *${name.toLowerCase()}*:

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
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-toggle-\${++nextUniqueId}' | No |
| \`\`name\`\` | HTML name attribute | string | null | Yes |
| \`\`value\`\` | HTML value attribute | string | null | Yes |
| \`\`focus\`\` | Set the focus on the ${name.toLowerCase()} | boolean | null | No |
| \`\`ariaDescribedBy\`\` | HTML ID for the corresponding element that describes the ${name.toLowerCase()}, if not provided it will use the hint field where appropriate | boolean | null | No |
${
  name.toLowerCase() === 'checkbox'
    ? '| ``size`` | The size of the checkbox | `CheckboxSize` | `sm` | No |'
    : ''
}

## Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`blur\`\` | Event emitted on blur of a toggle | EventEmitter<Event> | n/a | No |
`;
