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

## Outputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`blur\`\` | Event emitted on blur of a toggle | EventEmitter<Event> | n/a | No |
`;
