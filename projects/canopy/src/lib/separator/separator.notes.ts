export const notes = `
# Separator Component


## Purpose
Separators are used to separate individual component or group of components.


## Usage
~~~js
@NgModule({
    ....
    declarations: [ ..., LgSeparatorModule ],
})
~~~

and in your HTML:

~~~html
<lg-separator></lg-separator>

<lg-separator variant='dotted'></lg-separator>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`variant\`\` | The variant of separator: \`\`solid\`\`, \`\`dotted\`\` | SeparatorVariant | 'solid' | No |
| \`\`hasRole\`\` | If true, adds a role of \`\`separator\`\` to the component | boolean | false | No |
`;
