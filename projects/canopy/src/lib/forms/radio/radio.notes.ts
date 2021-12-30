export const notes = (name: string) => `
Provides a set of components to implement ${name} buttons in a form. The ${name} Group component is a container which displays the label with an optional hint and should contain two or more ${name} Button components. The ${name} Button component represents a single ${name} button. The Hint component may be used to provide extra context to the user.

## Usage
Import the Radio Module into your application:

~~~js
@NgModule({
  ...
  imports: [LgRadioModule],
})
~~~

\
${
  name === 'Segment'
    ? `### Displaying the buttons at different breakpoints

Radios are displayed inline, unless given a \`RadioStackBreakpoint\`, which tells them at which breakpoint should they appear stacked on top of each other:

~~~html
<lg-segment-group [stack]="sm" formControlName="color">
  Colour
  <lg-segment-button value="red">Red</lg-segment-button>
  <lg-segment-button value="yellow">Yellow</lg-segment-button>
</lg-segment-group>
~~~
    `
    : ''
}

## Inputs

### LgRadioGroupComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-radio-group-id-\${nextUniqueId++}' | No |
| \`\`name\`\` | Set the name value for all inputs in the group, auto-generated if not provided | string | 'lg-radio-group-\${nextUniqueId++}' | No |
| \`\`value\`\` | Set the default checked radio button, must match the value of the radio button | boolean or string | null | No |
| \`\`focus\`\` | Set the focus on the fieldset | boolean | null | No |
${
  name === 'Radio'
    ? `| \`\`inline\`\` | If true, displays the radio buttons inline rather than stacked | boolean | false | No |`
    : name === 'Segment'
    ? `| \`\`stack\`\` | Stack the radio buttons at a given breakpoint | 'sm', 'md', 'lg' | false | No |`
    : ''
}

### LgRadioButtonComponent

#### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-radio-button-\${++nextUniqueId}' | No |
| \`\`name\`\` | HTML name attribute | string | null | Yes |
| \`\`value\`\` | HTML value attribute | string | null | Yes |

#### Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`blur\`\` | Event emitted on blur of a radio button | EventEmitter<Event> | n/a | No |
`;
