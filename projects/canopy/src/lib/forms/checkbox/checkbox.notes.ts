export const notes = `
# Checkbox Component

## Purpose
Provides a common checkbox form component

## Usage
Import the component in your application:

~~~
@NgModule({
  ...
  declarations: [ ..., LgCheckboxComponent ],
})
~~~

and in your HTML:

~~~
<lg-checkbox formControlName="confirm" value="yes">Do you agree?</lg-checkbox>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`checked\`\` | Check status of the checkbox | boolean | false | No |
| \`\`value\`\` | Value that is set when the checkbox is checked | string | 'on' | No |
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-checkbox-\${nextUniqueId++}' | No |
| \`\`name\`\` | HTML Name attribute, auto generated if not provided | string | 'lg-checkbox-\${nextUniqueId++}' | No |
`;
