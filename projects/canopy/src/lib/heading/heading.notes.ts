export const notes = `
# Heading Component

## Purpose
This component allows for headings to be set dynamically.

## Usage

Import the component in your module:

~~~js
@NgModule({
  ...
  imports: [ ..., LgHeadingModule ],
})
~~~

and in your HTML:

~~~html
<lg-heading [level]="1">Heading</lg-heading>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`level\`\` | The heading level | number | undefined | Yes |
`;
