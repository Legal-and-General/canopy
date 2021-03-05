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

## Using only the SCSS files

The \`\`lg-separator\`\` class is required to be able to apply the main style to the separator.

###Example:
~~~html
<div class="lg-separator" role="separator"></div>

<div class="lg-separator lg-separator--dotted" role="separator"></div>
~~~
`;
